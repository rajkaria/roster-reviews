import { describe, expect, test } from "bun:test";
import { check, github, plan, searchTrailers, SIZE_CAP_KB, upToDate } from "./discover";

type Handler = (url: URL) => Response | undefined;
const ok = (v: unknown) => new Response(JSON.stringify(v), { status: 200 });
const at = (path: string, v: unknown): Handler => (url) => (url.pathname === path ? ok(v) : undefined);

function fake(...handlers: Handler[]) {
  const calls: string[] = [];
  const gh = github("t", async (input) => {
    const url = new URL(input);
    calls.push(url.pathname + url.search);
    for (const h of handlers) {
      const r = h(url);
      if (r) return r;
    }
    return new Response("{}", { status: 404 });
  });
  return { gh, calls };
}

const repo = (name: string, over: object = {}) => at(`/repos/${name.toLowerCase()}`, { full_name: name, private: false, size: 10, default_branch: "main", ...over });
const head = (name: string, branch: string, sha: string) => at(`/repos/${name}/branches/${encodeURIComponent(branch)}`, { commit: { sha } });

describe("searchTrailers", () => {
  test("counts public repos across pages and stops on a short page", async () => {
    const page = (n: number, names: string[]) => (url: URL) =>
      url.pathname === "/search/commits" && url.searchParams.get("page") === String(n)
        ? ok({ items: names.map((full_name) => ({ repository: { full_name, private: false } })) })
        : undefined;
    const f = fake(page(1, [...Array(100)].map((_, i) => (i % 2 ? "a/one" : "b/two"))), page(2, ["c/three", "bad name"]));
    const found = await searchTrailers(f.gh, 5);
    expect([...found]).toEqual([["b/two", 50], ["a/one", 50], ["c/three", 1]]);
    expect(f.calls.filter((c) => c.startsWith("/search")).length).toBe(2);
  });
});

describe("check", () => {
  test("canonical name and both heads", async () => {
    const f = fake(repo("Octo/Cat"), head("Octo/Cat", "main", "h1"), head("Octo/Cat", "entire/checkpoints/v1", "c1"));
    expect(await check(f.gh, "octo/cat")).toEqual({ ok: true, heads: { fullName: "Octo/Cat", target: "h1", checkpoint: "c1" } });
  });
  test("checkpoint refs without the branch count, with a null checkpoint head", async () => {
    const f = fake(repo("Octo/Cat"), head("Octo/Cat", "main", "h1"), at("/repos/Octo/Cat/git/matching-refs/entire/checkpoints/", [{ ref: "x" }]));
    expect(await check(f.gh, "octo/cat")).toMatchObject({ ok: true, heads: { checkpoint: null } });
  });
  test("each reason a repo is skipped", async () => {
    expect(await check(fake().gh, "a/b")).toEqual({ ok: false, reason: "not_found" });
    expect(await check(fake(repo("A/B", { private: true })).gh, "a/b")).toEqual({ ok: false, reason: "private" });
    expect(await check(fake(repo("A/B", { size: SIZE_CAP_KB + 1 })).gh, "a/b")).toEqual({ ok: false, reason: "too_large" });
    expect(await check(fake(repo("A/B")).gh, "a/b")).toEqual({ ok: false, reason: "empty" });
    expect(await check(fake(repo("A/B"), head("A/B", "main", "h")).gh, "a/b")).toEqual({ ok: false, reason: "no_entire_data" });
  });
});

test("upToDate needs a settled outcome and the same heads", () => {
  const heads = { fullName: "A/B", target: "h1", checkpoint: null };
  expect(upToDate({ outcome: "ok", target_head: "h1", checkpoint_head: null }, heads)).toBe(true);
  expect(upToDate({ outcome: "ok", target_head: "h0", checkpoint_head: null }, heads)).toBe(false);
  expect(upToDate({ outcome: "failed", target_head: "h1", checkpoint_head: null }, heads)).toBe(false);
  expect(upToDate(null, heads)).toBe(false);
});

describe("plan", () => {
  const f = () =>
    fake(
      repo("A/One"), head("A/One", "main", "h1"), head("A/One", "entire/checkpoints/v1", "c1"),
      repo("B/Two"), head("B/Two", "main", "h2"), head("B/Two", "entire/checkpoints/v1", "c2"),
      repo("C/Three"), head("C/Three", "main", "h3"), head("C/Three", "entire/checkpoints/v1", "c3"),
    );

  test("dispatches new or changed repos, skips up-to-date and opted-out ones, dedupes, respects the cap", async () => {
    const { plans } = await plan(f().gh, ["a/one", "A/One", "b/two", "x/out", "c/three"], {
      max: 1,
      optOuts: ["X/Out"],
      status: (name) => (name === "A/One" ? { outcome: "ok", target_head: "h1", checkpoint_head: "c1" } : null),
    });
    expect(plans).toEqual([
      { repo: "A/One", action: "skip", why: "up to date" },
      { repo: "B/Two", action: "dispatch", why: "new or changed" },
      { repo: "x/out", action: "skip", why: "opted out" },
      { repo: "c/three", action: "skip", why: "over this run's cap of 1" },
    ]);
  });
});

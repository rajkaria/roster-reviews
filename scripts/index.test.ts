import { afterAll, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildIndex, entryFor } from "./index";

const root = mkdtempSync(join(tmpdir(), "roster-reviews-index-"));
afterAll(() => rmSync(root, { recursive: true, force: true }));

function put(slug: string, files: Record<string, unknown>) {
  mkdirSync(join(root, slug), { recursive: true });
  for (const [name, v] of Object.entries(files)) writeFileSync(join(root, slug, name), typeof v === "string" ? v : JSON.stringify(v));
}

const review = {
  repo: "a/one",
  generated_at: "2026-10-13T10:00:00Z",
  label: "no_suspect",
  setups: [
    { setup_id: "s1", label: "Claude Code · opus", harness: "Claude Code", model: "claude-opus-5-5", sessions: 4, mature_sessions: 3, spend_usd: 2, survival: 0.9, surviving_changes: 4, cost_per_surviving_change: 0.5 },
    { setup_id: "s2", label: null, harness: "Codex", model: "gpt", sessions: 2, mature_sessions: 0, spend_usd: null, survival: null, cost_per_surviving_change: null },
  ],
};

test("a successful review is ok, with totals summed over setups", () => {
  const e = entryFor("a__one", { repo: "a/one", outcome: "ok", finished_at: "2026-10-13T10:01:00Z", run_url: "https://github.com/x/y/actions/runs/1" }, review)!;
  expect(e).toMatchObject({ repo: "a/one", href: "/r/a/one", outcome: "ok", sessions: 6, mature_sessions: 3, label: "no_suspect" });
  expect(e.setups[0]).toMatchObject({ setup_id: "s1", survival: 0.9, surviving_changes: 4, cost_per_surviving_change: 0.5 });
  expect(e.setups[1]!.surviving_changes).toBeNull();
});

test("a run with no review.json keeps its status outcome, and anything unknown is failed", () => {
  expect(entryFor("b__two", { repo: "b/two", outcome: "no_entire_data" }, null)?.outcome).toBe("no_entire_data");
  expect(entryFor("b__two", { repo: "b/two", outcome: "weird" }, null)?.outcome).toBe("failed");
});

test("a directory that names no repo is skipped", () => {
  expect(entryFor("x", null, null)).toBeNull();
  expect(entryFor("x", { repo: "not a repo" }, null)).toBeNull();
});

test("buildIndex reads every directory, skips broken JSON, newest first", () => {
  put("a__one", { "review.json": review, "status.json": { repo: "a/one", outcome: "ok", finished_at: "2026-10-13T10:01:00Z" } });
  put("b__two", { "status.json": { repo: "b/two", outcome: "no_entire_data", finished_at: "2026-10-13T11:00:00Z" } });
  put("c__bad", { "status.json": "{not json" });
  const idx = buildIndex(root, new Date("2026-10-13T12:00:00Z"));
  expect(idx.generated_at).toBe("2026-10-13T12:00:00.000Z");
  expect(idx.reviews.map((r) => r.repo)).toEqual(["b/two", "a/one"]);
});

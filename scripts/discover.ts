// Finds public GitHub repos that record coding-agent sessions with Entire, and dispatches a review (review.yml)
// for each one whose heads moved since its last review. Run daily by discover.yml, or by hand:
//   GH_TOKEN=… bun scripts/discover.ts [--max 25] [--dry-run]
// Candidates: seeds.json, plus GitHub commit search for the `Entire-Checkpoint:` trailer. Opted-out repos, private
// repos, repos over the size cap and repos without checkpoint refs are skipped.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const SIZE_CAP_KB = 300 * 1024;
/**
 * Repos created from this time on are held back until HOLD_UNTIL: they are most likely other neatHack 2026 entries,
 * and Roster (itself an entry) does not publish reviews of competing entries while judging is open.
 */
export const HOLD_CREATED_FROM = "2026-10-08T00:00:00Z";
export const HOLD_UNTIL = "2026-10-17T00:00:00Z";
const API = "https://api.github.com";
const WORKER = "rajkaria/roster-reviews";

export type Fetch = (input: string, init?: RequestInit) => Promise<Response>;

export function github(token: string, fetchImpl: Fetch = fetch) {
  return (path: string, init: RequestInit = {}) =>
    fetchImpl(`${API}${path}`, {
      ...init,
      headers: {
        authorization: `Bearer ${token}`,
        accept: "application/vnd.github+json",
        "x-github-api-version": "2022-11-28",
        "user-agent": "roster-reviews-discover",
        ...(init.headers as Record<string, string>),
      },
    });
}
export type Gh = ReturnType<typeof github>;

const REPO_RE = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/;
const enc = (repo: string) => repo.split("/").map(encodeURIComponent).join("/");

async function json<T>(res: Response): Promise<T | null> {
  if (res.status === 401) throw new Error("GitHub refused the token (401)");
  if (!res.ok) return null;
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Repos whose commits carry an Entire-Checkpoint trailer, with how many such commits the search saw. */
export async function searchTrailers(gh: Gh, pages = 5): Promise<Map<string, number>> {
  const seen = new Map<string, number>();
  for (let page = 1; page <= pages; page++) {
    const r = await json<{ items?: { repository?: { full_name?: string; private?: boolean } }[] }>(
      await gh(`/search/commits?q=${encodeURIComponent('"Entire-Checkpoint:"')}&sort=committer-date&order=desc&per_page=100&page=${page}`),
    );
    const items = r?.items ?? [];
    for (const it of items) {
      const name = it.repository?.full_name;
      if (name && !it.repository?.private && REPO_RE.test(name)) seen.set(name, (seen.get(name) ?? 0) + 1);
    }
    if (items.length < 100) break;
  }
  return seen;
}

export interface Heads {
  fullName: string;
  target: string;
  checkpoint: string | null;
}

export type Check =
  | { ok: true; heads: Heads; createdAt: string | null }
  | { ok: false; reason: "not_found" | "private" | "too_large" | "no_entire_data" | "empty" };

/** The repo's canonical name and heads, or why it can't be reviewed. */
export async function check(gh: Gh, repo: string): Promise<Check> {
  const info = await json<{ full_name: string; private: boolean; size: number; default_branch: string; created_at?: string }>(
    await gh(`/repos/${enc(repo)}`),
  );
  if (!info) return { ok: false, reason: "not_found" };
  if (info.private) return { ok: false, reason: "private" };
  if (info.size > SIZE_CAP_KB) return { ok: false, reason: "too_large" };
  const branch = async (b: string) =>
    (await json<{ commit?: { sha?: string } }>(await gh(`/repos/${enc(info.full_name)}/branches/${encodeURIComponent(b)}`)))?.commit?.sha ?? null;
  const target = await branch(info.default_branch);
  if (!target) return { ok: false, reason: "empty" };
  const checkpoint = await branch("entire/checkpoints/v1");
  if (!checkpoint) {
    const refs = await json<unknown[]>(await gh(`/repos/${enc(info.full_name)}/git/matching-refs/entire/checkpoints/`));
    if (!Array.isArray(refs) || refs.length === 0) return { ok: false, reason: "no_entire_data" };
  }
  return { ok: true, heads: { fullName: info.full_name, target, checkpoint }, createdAt: info.created_at ?? null };
}

/** True when reviews/<slug>/status.json already covers these heads (a good review, or a definite no-data). */
export function upToDate(status: { outcome?: string; target_head?: string; checkpoint_head?: string | null } | null, heads: Heads): boolean {
  if (!status || (status.outcome !== "ok" && status.outcome !== "no_entire_data")) return false;
  return status.target_head === heads.target && (status.checkpoint_head ?? null) === heads.checkpoint;
}

export async function dispatch(gh: Gh, repo: string, job: string): Promise<boolean> {
  const res = await gh(`/repos/${WORKER}/actions/workflows/review.yml/dispatches`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ref: "main", inputs: { repo, job } }),
  });
  return res.status === 204;
}

export interface Plan {
  repo: string;
  action: "dispatch" | "skip";
  why: string;
}

/**
 * Decides, for each candidate in order, whether to dispatch a review: at most `max` dispatches, opted-out repos
 * never, and nothing for a repo whose heads match its last review. Candidates are deduplicated case-insensitively.
 */
export async function plan(
  gh: Gh,
  candidates: string[],
  opts: { max: number; optOuts: string[]; status: (fullName: string) => Parameters<typeof upToDate>[0]; now?: Date },
): Promise<{ plans: Plan[]; heads: Map<string, Heads> }> {
  const optOut = new Set(opts.optOuts.map((r) => r.toLowerCase()));
  const done = new Set<string>();
  const plans: Plan[] = [];
  const heads = new Map<string, Heads>();
  let dispatches = 0;
  for (const repo of candidates) {
    const key = repo.toLowerCase();
    if (done.has(key)) continue;
    done.add(key);
    if (optOut.has(key)) {
      plans.push({ repo, action: "skip", why: "opted out" });
      continue;
    }
    if (dispatches >= opts.max) {
      plans.push({ repo, action: "skip", why: `over this run's cap of ${opts.max}` });
      continue;
    }
    const c = await check(gh, repo);
    if (!c.ok) {
      plans.push({ repo, action: "skip", why: c.reason });
      continue;
    }
    const name = c.heads.fullName;
    const now = (opts.now ?? new Date()).toISOString();
    if (now < HOLD_UNTIL && c.createdAt !== null && c.createdAt >= HOLD_CREATED_FROM) {
      plans.push({ repo: name, action: "skip", why: "created during neatHack 2026: held until results" });
      continue;
    }
    if (optOut.has(name.toLowerCase())) {
      plans.push({ repo: name, action: "skip", why: "opted out" });
      continue;
    }
    if (upToDate(opts.status(name), c.heads)) {
      plans.push({ repo: name, action: "skip", why: "up to date" });
      continue;
    }
    heads.set(name, c.heads);
    plans.push({ repo: name, action: "dispatch", why: "new or changed" });
    dispatches++;
  }
  return { plans, heads };
}

function readJson<T>(file: string, fallback: T): T {
  try {
    return existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as T) : fallback;
  } catch {
    return fallback;
  }
}

if (import.meta.main) {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) throw new Error("set GH_TOKEN");
  const args = process.argv.slice(2);
  const max = Number(args[args.indexOf("--max") + 1]) || 25;
  const dry = args.includes("--dry-run");
  const root = join(import.meta.dir, "..");
  const gh = github(token);

  const seeds = readJson<string[]>(join(root, "seeds.json"), []);
  let found = new Map<string, number>();
  try {
    found = await searchTrailers(gh);
  } catch (e) {
    console.log(`commit search failed, using seeds only: ${(e as Error).message}`);
  }
  // Most trailer commits first, then the seeds.
  const candidates = [...[...found].sort((a, b) => b[1] - a[1]).map(([r]) => r), ...seeds];
  const { plans } = await plan(gh, candidates, {
    max,
    optOuts: readJson<string[]>(join(root, "opt-outs.json"), []),
    status: (name) => readJson(join(root, "reviews", name.replace("/", "__"), "status.json"), null),
  });

  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  let n = 0;
  for (const p of plans) {
    if (p.action === "dispatch" && !dry) {
      const ok = await dispatch(gh, p.repo, `disc-${stamp}-${String(++n).padStart(3, "0")}`);
      console.log(`${ok ? "dispatched" : "DISPATCH FAILED"}  ${p.repo}`);
    } else console.log(`${p.action === "dispatch" ? "would dispatch" : "skip"}  ${p.repo}  (${p.why})`);
  }
  console.log(`${found.size} repos found by search, ${seeds.length} seeds, ${plans.filter((p) => p.action === "dispatch").length} to review`);
}

// Rebuilds index.json from reviews/<owner>__<name>/{review.json,status.json}.
// The review workflow runs it before every commit, so index.json always matches the files beside it.
// tryroster.dev reads index.json for the live-reviews table on /r.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export interface SetupSummary {
  setup_id: string;
  label: string | null;
  harness: string | null;
  model: string | null;
  sessions: number;
  mature_sessions: number;
  spend_usd: number | null;
  survival: number | null;
  surviving_changes: number | null;
  cost_per_surviving_change: number | null;
}

export interface IndexEntry {
  repo: string;
  slug: string;
  href: string;
  outcome: "ok" | "no_entire_data" | "failed";
  generated_at: string | null;
  finished_at: string | null;
  run_url: string | null;
  label: string | null;
  sessions: number;
  mature_sessions: number;
  setups: SetupSummary[];
}

export interface Index {
  generated_at: string;
  reviews: IndexEntry[];
}

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);
const str = (v: unknown): string | null => (typeof v === "string" ? v : null);

function readJson(file: string): Record<string, unknown> | null {
  if (!existsSync(file)) return null;
  try {
    const v = JSON.parse(readFileSync(file, "utf8"));
    return v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** One index row from a review directory's status.json and (when the run succeeded) review.json. Null when neither says which repo it is. */
export function entryFor(slug: string, status: Record<string, unknown> | null, review: Record<string, unknown> | null): IndexEntry | null {
  const repo = str(review?.repo) ?? str(status?.repo);
  if (!repo || !/^[^/\s]+\/[^/\s]+$/.test(repo)) return null;
  const raw = str(status?.outcome);
  const outcome: IndexEntry["outcome"] = review ? "ok" : raw === "no_entire_data" ? "no_entire_data" : "failed";
  const setups: SetupSummary[] = Array.isArray(review?.setups)
    ? (review.setups as Record<string, unknown>[]).map((s) => ({
        setup_id: str(s.setup_id) ?? "unknown",
        label: str(s.label),
        harness: str(s.harness),
        model: str(s.model),
        sessions: num(s.sessions) ?? 0,
        mature_sessions: num(s.mature_sessions) ?? num(s.sessions) ?? 0,
        spend_usd: num(s.spend_usd),
        survival: num(s.survival),
        surviving_changes: num(s.surviving_changes),
        cost_per_surviving_change: num(s.cost_per_surviving_change),
      }))
    : [];
  return {
    repo,
    slug,
    href: `/r/${repo}`,
    outcome,
    generated_at: str(review?.generated_at),
    finished_at: str(status?.finished_at),
    run_url: str(status?.run_url),
    label: str(review?.label),
    sessions: setups.reduce((n, s) => n + s.sessions, 0),
    mature_sessions: setups.reduce((n, s) => n + s.mature_sessions, 0),
    setups,
  };
}

/** Every review under `dir`, newest first (by finish time, then repo name). */
export function buildIndex(dir: string, now: Date = new Date()): Index {
  const reviews: IndexEntry[] = [];
  if (existsSync(dir)) {
    for (const d of readdirSync(dir, { withFileTypes: true })) {
      if (!d.isDirectory()) continue;
      const e = entryFor(d.name, readJson(join(dir, d.name, "status.json")), readJson(join(dir, d.name, "review.json")));
      if (e) reviews.push(e);
    }
  }
  reviews.sort((a, b) => (b.finished_at ?? "").localeCompare(a.finished_at ?? "") || a.repo.localeCompare(b.repo));
  return { generated_at: now.toISOString(), reviews };
}

if (import.meta.main) {
  const root = join(import.meta.dir, "..");
  const index = buildIndex(join(root, "reviews"));
  writeFileSync(join(root, "index.json"), JSON.stringify(index, null, 2) + "\n");
  console.log(`index.json: ${index.reviews.length} reviews`);
}

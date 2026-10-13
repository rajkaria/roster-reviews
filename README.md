# roster-reviews

Every review that [Roster](https://github.com/rajkaria/roster) runs live from [tryroster.dev/try](https://tryroster.dev/try) is committed here, so each one can be checked.

## What's in it

- **`reviews/<owner>__<name>/`:** one public GitHub repo's review.
  - `review.json`, `review.md` and `outcomes.json` are written by `roster review <repo> --observational`, at the Roster commit named in `status.json`.
  - `status.json` holds:
    - the run's outcome (`ok`, `no_entire_data` or `failed`)
    - the Actions run that produced it
    - the target repo's HEAD and its `entire/checkpoints/v1` head at review time
- **`index.json`:** one summary row per review. It is rebuilt by `scripts/index.ts` on every commit, and the live-reviews table on tryroster.dev/r reads it.
- **`.github/workflows/review.yml`:** the worker. tryroster.dev dispatches it with a repo and a job id. It checks out Roster, runs the review on a GitHub-hosted runner and commits the result.

## What a live review is

- **Evidence level A, observational.** Roster reads the sessions the repo's coding agents recorded with [Entire](https://entire.io). It prices each one from its tokens, and checks whether its lines survived at HEAD, were reverted, or were reworked by a person.
- **What it doesn't do:** it makes no model calls. It runs nothing from the target repo; only `git` reads it.
- **What it can't prove:** it can name a suspect setup, but proves nothing on its own. Replays (level B) and forward tests (level C) are not run for live reviews.
- **Prompts stay out:** only aggregate results are published. The per-session file that carries each session's first prompt is not.
- **Not hackathon evidence:** live reviews started after neatHack 2026. They are separate from the frozen evidence in `rajkaria/roster` (`reports/`, `docs/FACTS.md` and the forward run).

## Opting out

To have your repo refused and its review removed, open an issue, or a PR that adds `"owner/name"` to [`opt-outs.json`](opt-outs.json).

## License

MIT

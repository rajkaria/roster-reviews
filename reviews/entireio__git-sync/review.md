# Review: entireio/git-sync

- Review id: `entireio__git-sync-20261021084007`
- Created: 2026-10-21T08:40:07.078Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `3a949e7920ec` | Claude Code · claude-opus-4-8 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 2.2% | 100.0% | — | A |
| `5b2b1e537406` | Codex · gpt-5.5 | 28 | 28 | unknown (0/28 priced) | 90.4% | 0.0% | 9.9% | 85.7% | — | A |
| `6b468a41bf53` | Claude Code · claude-opus-4-8[1m] | 12 | 12 | unknown (0/12 priced) | 75.8% | 0.0% | 0.4% | 8.3% | — | A |
| `8936cf987a58` | Claude Code · claude-opus-4-7 | 4 | 4 | unknown (0/4 priced) | 77.5% | 0.0% | 3.7% | 0.0% | — | A |
| `ab91f254d447` | Claude Code · claude-opus-4-6[1m] | 7 | 7 | unknown (0/7 priced) | 41.1% | 14.3% | 25.1% | 14.3% | — | A |
| `d358ae17c46f` | Claude Code · claude-opus-4-7[1m] | 21 | 21 | unknown (0/21 priced) | 67.9% | 4.8% | 8.4% | 33.3% | — | A |
| `e6b3d51c52e9` | Codex · gpt-5.4 | 23 | 22 | unknown (0/23 priced) | 63.9% | 13.6% | 16.1% | 21.7% | — | A |

## Notes

- 0 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: 019d7e3a-8c28-7662-aaba-a2d9ed140081: not_scored: every changed file was skipped (internal/syncer/integration_test.go: over 5000 lines (5530))
- 96 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

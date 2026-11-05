# Review: maester365/maester

- Review id: `maester365__maester-20261105110208`
- Created: 2026-11-05T11:02:08.259Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `66cc19d2dd36` | Claude Code · claude-opus-5-5 (rules 73b48c) | 1 | 1 | $8.09 | 4.2% | 0.0% | 3.6% | 0.0% | $194.10 | A |
| `8c7bc87fbc76` | Claude Code · claude-opus-5-5 (rules c60b6d) | 8 | 6 | $305.44 | 89.8% | 0.0% | 15.4% | 12.5% | $52.01 | A |
| `8dbfcf4d1298` | Claude Code · claude-opus-5-5 (rules 76b8f3) | 7 | 2 | $22.08 | 79.7% | 0.0% | 19.0% | 14.3% | $1.59 | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: c01385b4-b063-4eac-9479-8c7a224a2960: not_scored: every changed file was skipped (build/orca/orca-test-metadata.json: generated or vendored path)
- could not be scored: 82050900-8fc5-47c7-bc23-376a2aaf0127: not_scored: every changed file was skipped (build/orca/orca-test-metadata.json: generated or vendored path)
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

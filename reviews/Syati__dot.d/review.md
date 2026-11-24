# Review: Syati/dot.d

- Review id: `Syati__dot.d-20261124135133`
- Created: 2026-11-24T13:51:33.357Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `3c648ea82bb7` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $7.31 | too young | too young | too young | 0.0% | — | A |
| `64bbc9f14c5d` | Codex · gpt-6-luna | 6 | 3 | unknown (0/6 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `bd0a35c28458` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `fa59049f1d6f` | Claude Code · claude-sonnet-5 | 7 | 7 | unknown (0/7 priced) | 89.7% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 15 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

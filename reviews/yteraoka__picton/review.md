# Review: yteraoka/picton

- Review id: `yteraoka__picton-20261127123215`
- Created: 2026-11-27T12:32:15.579Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `42fffe5a197d` | Claude Code · claude-sonnet-4-6 | 1 | 1 | unknown (0/1 priced) | 75.0% | 0.0% | 5.7% | 0.0% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 1 | 0 | $8.55 | too young | too young | too young | 0.0% | — | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

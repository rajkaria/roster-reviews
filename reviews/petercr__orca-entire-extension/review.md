# Review: petercr/orca-entire-extension

- Review id: `petercr__orca-entire-extension-20261120114807`
- Created: 2026-11-20T11:48:07.676Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `02e70182e252` | Claude Code · claude-opus-5-5 (rules b3a2a8) | 1 | 1 | $46.29 | 84.5% | 0.0% | 3.5% | 0.0% | $54.78 | A |
| `0d5914e68c52` | Claude Code · claude-sonnet-5-5 | 1 | 1 | $0.13 | 100.0% | 0.0% | 0.0% | 0.0% | $0.13 | A |
| `48b7853d6530` | Claude Code · claude-opus-5-5 (rules 661a06) | 3 | 3 | $3.75 | 52.0% | 66.7% | 50.3% | 0.0% | $2.40 | A |
| `a72ae1587f77` | Claude Code · claude-opus-5-5 (rules 31f808) | 1 | 1 | $7.42 | 86.8% | 0.0% | 18.7% | 0.0% | $8.56 | A |
| `ca890f358be5` | Claude Code · claude-opus-5-5 (rules 6020e3) | 1 | 0 | $3.49 | too young | too young | too young | 0.0% | — | A |
| `ebd7a5636adc` | Claude Code · claude-opus-5-5 (rules a38590) | 1 | 0 | $1.13 | too young | too young | too young | 0.0% | — | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

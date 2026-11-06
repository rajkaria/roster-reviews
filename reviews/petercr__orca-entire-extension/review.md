# Review: petercr/orca-entire-extension

- Review id: `petercr__orca-entire-extension-20261106110030`
- Created: 2026-11-06T11:00:30.031Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `02e70182e252` | Claude Code · claude-opus-5-5 (rules b3a2a8) | 1 | 1 | $46.29 | 86.8% | 0.0% | 0.2% | 0.0% | $53.33 | A |
| `0d5914e68c52` | Claude Code · claude-sonnet-5-5 | 1 | 1 | $0.13 | 100.0% | 0.0% | 0.0% | 0.0% | $0.13 | A |
| `48b7853d6530` | Claude Code · claude-opus-5-5 (rules 661a06) | 3 | 0 | $9.88 | too young | too young | too young | 0.0% | — | A |
| `a72ae1587f77` | Claude Code · claude-opus-5-5 (rules 31f808) | 1 | 1 | $7.42 | 93.6% | 0.0% | 7.5% | 0.0% | $7.93 | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

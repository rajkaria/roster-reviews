# Review: mlaplante/resumesite

- Review id: `mlaplante__resumesite-20261031094447`
- Created: 2026-10-31T09:44:47.559Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `c6b1059925e8` | Claude Code · claude-opus-5-5 (rules b0b804) | 1 | 0 | $0.24 | too young | too young | too young | 0.0% | — | A |
| `d4a1bf690f0b` | Claude Code · claude-opus-5-5 (rules d980a2) | 2 | 0 | $0.54 | too young | too young | too young | 100.0% | — | A |
| `fb2431769e78` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 72.1% | 0.0% | 23.1% | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

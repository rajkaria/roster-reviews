# Review: orin-dx/monokl

- Review id: `orin-dx__monokl-20261031094436`
- Created: 2026-10-31T09:44:36.502Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0c0d6f847398` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 46.2% | 0.0% | 0.0% | 0.0% | — | A |
| `dbae669f990a` | Claude Code · claude-opus-5-5 | 1 | 0 | $116.45 | too young | too young | too young | 0.0% | — | A |

## Notes

- 65 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 65 sessions have no price (unknown model, or a price that depends on prompt size)
- 64 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

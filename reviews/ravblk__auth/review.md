# Review: ravblk/auth

- Review id: `ravblk__auth-20261021084008`
- Created: 2026-10-21T08:40:08.013Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `7d65a9b4d199` | Claude Code · zai-org/GLM-4.7[1m] | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `b55371711874` | Claude Code · MiniMaxAI/MiniMax-M2.5 | 2 | 1 | unknown (0/2 priced) | 66.7% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

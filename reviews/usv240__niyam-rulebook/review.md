# Review: usv240/niyam-rulebook

- Review id: `usv240__niyam-rulebook-20261020083825`
- Created: 2026-10-20T08:38:25.480Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0f32c4660598` | Claude Code · claude-haiku-5-5 (rules 495148) | 6 | 0 | ≥ $0.14 | too young | too young | too young | 66.7% | — | A |
| `460fe51242df` | Claude Code · claude-sonnet-5-5 (rules 495148) | 16 | 0 | $2.70 | too young | too young | too young | 100.0% | — | A |
| `4b2c88eb3c15` | Claude Code · claude-sonnet-5-5 (rules 6fd93f) | 8 | 3 | $1.46 | 66.7% | 0.0% | 0.0% | 87.5% | $0.31 | A |
| `63f3c4c70585` | Claude Code · claude-haiku-5-5 (rules 7a7b9a) | 5 | 0 | ≥ $0.12 | too young | too young | too young | 100.0% | — | A |
| `c092f5388067` | Claude Code · claude-sonnet-5-5 (rules 7a7b9a) | 2 | 0 | $0.53 | too young | too young | too young | 100.0% | — | A |

## Notes

- 34 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

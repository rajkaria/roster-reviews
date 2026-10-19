# Review: sandbox-kit/kit

- Review id: `sandbox-kit__kit-20261019085949`
- Created: 2026-10-19T08:59:49.891Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2a87b8e41377` | Cursor · default (rules unknown) | 2 | 2 | unknown (0/2 priced) | 72.0% | 0.0% | 28.7% | 0.0% | — | A |
| `2d8921051711` | Cursor · composer-2.5 | 2 | 2 | unknown (0/2 priced) | 21.0% | 50.0% | 44.0% | 50.0% | — | A |
| `710fadb52a32` | Cursor · default (rules unknown) | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `724ef08d856d` | Cursor · default (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `7f6e8cb176b2` | Cursor · default (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `a86303d751c2` | Cursor · grok-4.7-medium (rules unknown) | 2 | 2 | unknown (0/2 priced) | 9.0% | 100.0% | 85.3% | 100.0% | — | A |
| `acd0b356d769` | Cursor · grok-4.7-medium (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `b91ca13b8bfd` | Cursor · default (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `e3df46e248b2` | Cursor · default (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 21 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 30 sessions have no price (unknown model, or a price that depends on prompt size)
- 17 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

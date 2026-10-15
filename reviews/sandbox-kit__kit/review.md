# Review: sandbox-kit/kit

- Review id: `sandbox-kit__kit-20261015082349`
- Created: 2026-10-15T08:23:49.430Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2d8921051711` | Cursor · composer-2.5 | 1 | 1 | unknown (0/1 priced) | 16.7% | 0.0% | 9.1% | 0.0% | — | A |
| `a86303d751c2` | Cursor · grok-4.7-medium (rules unknown) | 2 | 1 | unknown (0/2 priced) | 91.8% | 0.0% | 6.8% | 100.0% | — | A |
| `acd0b356d769` | Cursor · grok-4.7-medium (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 18 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 21 sessions have no price (unknown model, or a price that depends on prompt size)
- 17 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

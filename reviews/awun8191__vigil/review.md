# Review: awun8191/vigil

- Review id: `awun8191__vigil-20261112112347`
- Created: 2026-11-12T11:23:47.463Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2bd5468f0da2` | Antigravity · gemini-4-argon-medium | 1 | 1 | unknown (0/1 priced) | 96.4% | 0.0% | 5.7% | 0.0% | — | A |
| `50f535c0aba8` | Antigravity · gemini-3.8-flash-high | 8 | 0 | unknown (0/8 priced) | too young | too young | too young | 25.0% | — | A |
| `619b2a645711` | Antigravity · gemini-3.8-flash-tiered | 57 | 0 | unknown (0/57 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 68 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 69 sessions have no price (unknown model, or a price that depends on prompt size)
- 3 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

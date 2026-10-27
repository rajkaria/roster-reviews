# Review: asermax/nagara

- Review id: `asermax__nagara-20261027090555`
- Created: 2026-10-27T09:05:55.831Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2caa5b37c296` | Pi · glm-5.3 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `57092053b34d` | Claude Code · claude-sonnet-5-5 (rules dcab4e) | 16 | 0 | $4.08 | too young | too young | too young | 75.0% | — | A |
| `935a73483fd5` | Claude Code · claude-sonnet-5-5 (rules aec0d9) | 26 | 0 | $7.73 | too young | too young | too young | 65.4% | — | A |
| `98cf17c19e4c` | Claude Code · claude-opus-5-5 (rules 913fa1) | 1 | 0 | $13.28 | too young | too young | too young | 0.0% | — | A |
| `9e38ab85aa4b` | Claude Code · claude-sonnet-5 | 10 | 0 | unknown (0/10 priced) | too young | too young | too young | 70.0% | — | A |
| `a8528e7c367a` | Claude Code · claude-opus-5-5 (rules aec0d9) | 31 | 0 | $263.43 | too young | too young | too young | 51.6% | — | A |
| `ed9739e717f8` | Claude Code · claude-opus-5-5 (rules dcab4e) | 13 | 0 | $52.95 | too young | too young | too young | 53.8% | — | A |

## Notes

- 98 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 11 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

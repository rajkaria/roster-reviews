# Review: chrisdoc/surveybeat-next

- Review id: `chrisdoc__surveybeat-next-20261118115137`
- Created: 2026-11-18T11:51:37.195Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0ca5d67990e1` | Antigravity · unknown | 2 | 2 | unknown (0/2 priced) | 81.3% | 0.0% | 6.3% | 0.0% | — | A |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 (rules e3b0c4) | 1 | 0 | $11.10 | too young | too young | too young | 0.0% | — | A |
| `3c34122acccf` | Claude Code · claude-opus-5-5 (rules d7722b) | 6 | 0 | $19.67 | too young | too young | too young | 16.7% | — | A |
| `4ef33c65261c` | Claude Code · claude-opus-5-5 (rules 861b7c) | 16 | 1 | $35.80 | 62.5% | 0.0% | 0.0% | 25.0% | $0.00 | A |
| `5f156f841b58` | Claude Code · claude-opus-5-5 (rules 12c80c) | 1 | 1 | $1.56 | 85.4% | 0.0% | 0.0% | 0.0% | $1.83 | A |
| `75f0c856b5d2` | Claude Code · claude-opus-5-5 (rules unknown) | 3 | 1 | $10.83 | 64.6% | 0.0% | 0.2% | 0.0% | $0.00 | A |
| `aea250a8252a` | Claude Code · claude-opus-5-5 (rules de2527) | 1 | 0 | $9.87 | too young | too young | too young | 100.0% | — | A |

## Notes

- 33 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 5 sessions have no price (unknown model, or a price that depends on prompt size)
- 8 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

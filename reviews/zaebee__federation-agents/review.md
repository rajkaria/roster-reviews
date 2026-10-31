# Review: zaebee/federation-agents

- Review id: `zaebee__federation-agents-20261031094424`
- Created: 2026-10-31T09:44:24.120Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `892ecf68a4b5` | OpenCode · deepseek-v4.1-flash (rules unknown) | 1 | 1 | unknown (0/1 priced) | 99.8% | 0.0% | 0.0% | 0.0% | — | A |
| `d9d62bb5ec7b` | OpenCode · beam-free | 1 | 1 | unknown (0/1 priced) | 62.0% | 0.0% | 26.0% | 0.0% | — | A |
| `dc2ba340f4ed` | OpenCode · deepseek-v4.1-flash (rules unknown) | 2 | 1 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 4 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: eamonmason/rss-email

- Review id: `eamonmason__rss-email-20261026090301`
- Created: 2026-10-26T09:03:01.853Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `59b47dbf5d40` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 98.8% | 0.0% | 0.3% | 0.0% | — | A |
| `b4960ff540ba` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 11.5% | 0.0% | — | A |
| `d322d886210d` | Claude Code · claude-opus-5 | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 50.0% | — | A |
| `d5822ebbcee5` | Claude Code · claude-sonnet-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 97.6% | 0.0% | 2.7% | 50.0% | — | A |
| `e929e1aa6283` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $2.10 | too young | too young | too young | 0.0% | — | A |
| `ed8447ea8c25` | Claude Code · claude-opus-5-5 | 1 | 1 | $3.73 | 89.1% | 0.0% | 1.1% | 0.0% | $4.19 | A |

## Notes

- 11 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 16 sessions have no price (unknown model, or a price that depends on prompt size)
- 10 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

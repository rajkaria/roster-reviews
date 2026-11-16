# Review: ehewes/durhack-proj

- Review id: `ehewes__durhack-proj-20261116113145`
- Created: 2026-11-16T11:31:45.503Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 (rules e3b0c4) | 7 | 3 | $123.41 | 33.3% | 0.0% | 0.0% | 0.0% | $27.29 | A |
| `4ffee5a8945d` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $0.56 | 95.7% | 0.0% | 0.8% | 0.0% | $0.59 | A |
| `c66b66662588` | Claude Code · claude-sonnet-5-5 | 2 | 2 | $7.55 | 100.0% | 0.0% | 0.0% | 0.0% | $3.77 | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

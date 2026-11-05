# Review: konstruktoid/agent-instructions-skills

- Review id: `konstruktoid__agent-instructions-skills-20261105110216`
- Created: 2026-11-05T11:02:16.550Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `05963473a336` | Claude Code · claude-opus-5-5 (rules e30d35) | 3 | 3 | $8.86 | 96.8% | 0.0% | 6.6% | 0.0% | $3.05 | A |
| `0cba022d890f` | Claude Code · claude-opus-5-5 (rules 7d23ec) | 5 | 4 | $6.59 | 79.3% | 25.0% | 17.3% | 0.0% | $2.05 | A |
| `1ec1f286e147` | Claude Code · claude-sonnet-5-5 (rules e30d35) | 1 | 1 | $3.78 | 99.5% | 0.0% | 0.6% | 0.0% | $3.81 | A |
| `cb1b9b6d882e` | Claude Code · claude-sonnet-5-5 (rules 7d23ec) | 2 | 0 | $1.42 | too young | too young | too young | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

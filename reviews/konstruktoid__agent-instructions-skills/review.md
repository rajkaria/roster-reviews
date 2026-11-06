# Review: konstruktoid/agent-instructions-skills

- Review id: `konstruktoid__agent-instructions-skills-20261106110023`
- Created: 2026-11-06T11:00:23.757Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `05963473a336` | Claude Code · claude-opus-5-5 (rules e30d35) | 3 | 3 | $8.86 | 96.8% | 0.0% | 6.6% | 0.0% | $3.05 | A |
| `0cba022d890f` | Claude Code · claude-opus-5-5 (rules 7d23ec) | 5 | 5 | $6.59 | 81.0% | 20.0% | 13.9% | 0.0% | $1.63 | A |
| `1ec1f286e147` | Claude Code · claude-sonnet-5-5 (rules e30d35) | 1 | 1 | $3.78 | 99.4% | 0.0% | 0.7% | 0.0% | $3.81 | A |
| `cb1b9b6d882e` | Claude Code · claude-sonnet-5-5 (rules 7d23ec) | 5 | 2 | $5.03 | 89.4% | 0.0% | 2.4% | 0.0% | $0.79 | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

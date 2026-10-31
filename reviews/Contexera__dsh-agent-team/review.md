# Review: Contexera/dsh-agent-team

- Review id: `Contexera__dsh-agent-team-20261031094440`
- Created: 2026-10-31T09:44:40.132Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `03b53cb77dd6` | Claude Code · claude-opus-5-5 | 2 | 0 | $66.41 | too young | too young | too young | 0.0% | — | A |
| `0863a6a4aa58` | Claude Code · glm-5.3 | 3 | 0 | unknown (0/3 priced) | too young | too young | too young | 0.0% | — | A |
| `2a35f3abd758` | Claude Code · step-5-preview (rules 76a019) | 7 | 0 | unknown (0/7 priced) | too young | too young | too young | 0.0% | — | A |
| `2eda125e8841` | Claude Code · mythos-magpie-0048819438[1m] | 1 | 1 | unknown (0/1 priced) | 87.1% | 0.0% | 2.8% | 0.0% | — | A |
| `473c5cc72cd2` | Claude Code · gpt-6-astra | 1 | 1 | $0.00 | 100.0% | 0.0% | 0.0% | 0.0% | $0.00 | A |
| `526eb587ee19` | Claude Code · deepseek-v4.1-flash-1017 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `6cdbdd71b6c9` | Claude Code · deepseek-v4.1-flash | 7 | 0 | unknown (0/7 priced) | too young | too young | too young | 57.1% | — | A |
| `844a6a464cc3` | Claude Code · mythos-magpie-4203157168 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `8fde08251966` | Claude Code · step-5-preview (rules f59cd2) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 2.7% | 0.0% | — | A |

## Notes

- 20 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 21 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

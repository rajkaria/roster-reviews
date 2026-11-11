# Review: synaptiai/agent-capability-standard

- Review id: `synaptiai__agent-capability-standard-20261111110547`
- Created: 2026-11-11T11:05:47.438Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `57d952f91681` | Claude Code · claude-opus-5-5 | 1 | 0 | $13.86 | too young | too young | too young | 0.0% | — | A |
| `93a71e3a6140` | Claude Code · claude-opus-4-6 | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `df3bd17486fc` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

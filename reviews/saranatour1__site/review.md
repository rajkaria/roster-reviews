# Review: saranatour1/site

- Review id: `saranatour1__site-20261128115415`
- Created: 2026-11-28T11:54:15.607Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 3 | 1 | $31.37 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `8718acc46b7d` | Claude Code · claude-fable-5-2 | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `b3cb0a90610a` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $1.87 | too young | too young | too young | 0.0% | — | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 80.0% | 0.0% | 16.7% | 100.0% | — | A |

## Notes

- 7 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 4 sessions have no price (unknown model, or a price that depends on prompt size)
- 4 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

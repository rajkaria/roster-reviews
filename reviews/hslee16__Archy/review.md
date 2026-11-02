# Review: hslee16/Archy

- Review id: `hslee16__Archy-20261102111746`
- Created: 2026-11-02T11:17:46.624Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1956db7cb532` | Claude Code · claude-sonnet-5-5 (rules 2eb597) | 2 | 0 | $4.14 | too young | too young | too young | 50.0% | — | A |
| `2566075cb9c5` | Claude Code · claude-opus-5-5 (rules 9852cd) | 1 | 0 | $12.17 | too young | too young | too young | 0.0% | — | A |
| `521650daa61e` | Claude Code · claude-sonnet-5-5 (rules a3fd13) | 2 | 0 | $2.74 | too young | too young | too young | 50.0% | — | A |
| `86f2b06d300f` | Claude Code · claude-sonnet-5-5 (rules ea6dcf) | 5 | 0 | $23.91 | too young | too young | too young | 0.0% | — | A |
| `89db0177573d` | Claude Code · claude-opus-5-5 (rules ea6dcf) | 1 | 0 | $34.89 | too young | too young | too young | 0.0% | — | A |
| `d95e8cb6fc90` | Claude Code · claude-sonnet-5-5 (rules 698e66) | 1 | 0 | $1.46 | too young | too young | too young | 0.0% | — | A |
| `ed1935e7dfd6` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 88.4% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 33 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 22 sessions have no price (unknown model, or a price that depends on prompt size)
- 21 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

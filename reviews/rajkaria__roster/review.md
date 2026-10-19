# Review: rajkaria/roster

- Review id: `rajkaria__roster-20261019090012`
- Created: 2026-10-19T09:00:12.909Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `6a200cd990a7` | Claude Code · claude-opus-5-5 | 29 | 29 | $19.44 | 97.7% | 0.0% | 2.0% | 100.0% | $0.69 | A |
| `97433f7b4446` | Claude Code · claude-sonnet-5-5 (rules 243fa2) | 15 | 15 | $6.37 | 94.7% | 0.0% | 1.0% | 53.3% | $0.45 | A |
| `a9544a002085` | Claude Code · claude-sonnet-5-5 (rules dabdd0) | 60 | 39 | $10.79 | 98.6% | 0.0% | 0.2% | 58.3% | $0.21 | A |
| `c8d6907735ec` | Claude Code · claude-haiku-5-5 | 19 | 19 | ≥ $0.96 | 97.9% | 0.0% | 0.9% | 57.9% | $0.05 | A |
| `f656e13e2af0` | Claude Code · deepseek-flash | 40 | 23 | $0.86 | 100.0% | 0.0% | 0.0% | 62.5% | $0.02 | A |

## Prompt tags

Tag accuracy: 96.1%

| Tag | Sessions | Inferred setups |
| --- | ---: | --- |
| `A` | 21 | `6a200cd990a7` |
| `B` | 56 | `a9544a002085` |
| `C` | 19 | `c8d6907735ec` |
| `D` | 19 | `97433f7b4446`, `a9544a002085` |
| `E` | 40 | `f656e13e2af0` |

## Notes

- 39 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

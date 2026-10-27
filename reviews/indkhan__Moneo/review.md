# Review: indkhan/Moneo

- Review id: `indkhan__Moneo-20261027090553`
- Created: 2026-10-27T09:05:53.822Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `5499e095c1db` | Claude Code · claude-opus-5-5 (rules b922ab) | 1 | 1 | $21.73 | 100.0% | 0.0% | 0.0% | 0.0% | $21.73 | A |
| `5d9a508f9ad5` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $1.26 | too young | too young | too young | 0.0% | — | A |
| `6149cb621aa3` | Claude Code · claude-opus-5-5 (rules 79a7a5) | 11 | 5 | $40.86 | 91.5% | 0.0% | 0.0% | 9.1% | $3.40 | A |
| `ba9012b2759f` | Claude Code · claude-opus-5-5 (rules 724783) | 1 | 1 | $3.32 | 100.0% | 0.0% | 0.0% | 0.0% | $3.32 | A |
| `c42bac73dd66` | Claude Code · claude-opus-5-5 (rules b6a0c9) | 1 | 1 | $0.28 | 100.0% | 0.0% | 0.0% | 0.0% | $0.28 | A |
| `c8230baaea81` | Claude Code · claude-opus-5-5 (rules 5bcfa2) | 4 | 3 | $51.93 | 62.4% | 33.3% | 24.1% | 25.0% | $19.10 | A |
| `dc23cdefa8b6` | Claude Code · claude-haiku-5-5 | 7 | 0 | ≥ $0.15 | too young | too young | too young | 28.6% | — | A |

## Notes

- 15 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

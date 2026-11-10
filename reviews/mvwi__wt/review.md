# Review: mvwi/wt

- Review id: `mvwi__wt-20261110111910`
- Created: 2026-11-10T11:19:10.295Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `6aae10aff4db` | Claude Code · claude-fable-5-1 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `b68688912c39` | Claude Code · claude-opus-5-5 (rules 5e3647) | 1 | 1 | $0.64 | 100.0% | 0.0% | 0.0% | 0.0% | $0.64 | A |
| `ba43704eea7f` | Claude Code · claude-opus-4-7[1m] | 3 | 3 | unknown (0/3 priced) | 59.8% | 33.3% | 2.8% | 0.0% | — | A |
| `c5ac09abfe58` | Claude Code · claude-opus-5-5[1m] | 1 | 1 | $0.87 | 100.0% | 0.0% | 0.7% | 0.0% | $0.87 | A |
| `d11c53d2c986` | Claude Code · claude-opus-5-5 (rules 2af989) | 3 | 3 | $16.40 | 98.3% | 0.0% | 1.7% | 0.0% | $5.56 | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 4 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

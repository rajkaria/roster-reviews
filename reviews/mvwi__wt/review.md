# Review: mvwi/wt

- Review id: `mvwi__wt-20261029100551`
- Created: 2026-10-29T10:05:51.090Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `ba43704eea7f` | Claude Code · claude-opus-4-7[1m] | 3 | 1 | unknown (0/3 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `c5ac09abfe58` | Claude Code · claude-opus-5-5[1m] | 1 | 0 | $0.87 | too young | too young | too young | 0.0% | — | A |
| `d11c53d2c986` | Claude Code · claude-opus-5-5 | 1 | 0 | $0.96 | too young | too young | too young | 0.0% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: Pine-Island-Food-Pantry-Site/main-website

- Review id: `Pine-Island-Food-Pantry-Site__main-website-20261016081606`
- Created: 2026-10-16T08:16:06.393Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `31d8692c51ce` | Claude Code · claude-opus-4-7 | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 100.0% | 0.0% | — | A |
| `4a2d21b89599` | Claude Code · claude-opus-5-5 | 1 | 0 | $5.52 | too young | too young | too young | 0.0% | — | A |
| `bf3cc74f2e1b` | Claude Code · claude-haiku-5-5 | 1 | 0 | ≥ $0.15 | too young | too young | too young | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

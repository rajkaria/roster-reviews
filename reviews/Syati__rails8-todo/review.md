# Review: Syati/rails8-todo

- Review id: `Syati__rails8-todo-20261015082339`
- Created: 2026-10-15T08:23:39.177Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0d9e4e9204d7` | Claude Code · claude-sonnet-4-6 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `38240b2214bd` | Codex · gpt-5.5 | 2 | 2 | unknown (0/2 priced) | 98.9% | 0.0% | 0.0% | 50.0% | — | A |
| `ac8ee3b80198` | Codex · gpt-5.6-terra | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 0.0% | 0.0% | — | A |
| `e324ddc33a6f` | Claude Code · claude-opus-5-5 | 1 | 0 | $6.46 | too young | too young | too young | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 4 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

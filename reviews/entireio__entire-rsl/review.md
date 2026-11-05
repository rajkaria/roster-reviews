# Review: entireio/entire-rsl

- Review id: `entireio__entire-rsl-20261105110208`
- Created: 2026-11-05T11:02:08.629Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `764f583291a5` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $47.63 | 100.0% | 0.0% | 0.0% | 0.0% | $47.63 | A |
| `ea3267cba759` | Claude Code · claude-opus-5-5 (rules 80d159) | 6 | 0 | $20.42 | too young | too young | too young | 0.0% | — | A |
| `ef0ef4e7f721` | Claude Code · claude-opus-5-5 (rules 1b7221) | 2 | 2 | $1.77 | 97.3% | 0.0% | 3.1% | 0.0% | $0.91 | A |

## Notes

- 6 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

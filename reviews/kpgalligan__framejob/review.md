# Review: kpgalligan/framejob

- Review id: `kpgalligan__framejob-20261101103327`
- Created: 2026-11-01T10:33:27.326Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `70bb22d715d0` | Claude Code · claude-opus-5-5 (rules 62eeb3) | 1 | 0 | $0.72 | too young | too young | too young | 100.0% | — | A |
| `a302941932b2` | Claude Code · claude-opus-5-5 (rules 60535f) | 2 | 0 | $21.46 | too young | too young | too young | 0.0% | — | A |
| `af00e8250e54` | Claude Code · claude-opus-5-5 (rules 2eb8ad) | 1 | 0 | $7.04 | too young | too young | too young | 0.0% | — | A |
| `bda10c167afa` | Claude Code · claude-opus-5-5 (rules d43ce0) | 1 | 1 | $0.48 | 100.0% | 100.0% | 94.7% | 0.0% | $0.48 | A |
| `ceab92e8be0d` | Claude Code · claude-opus-5-5 (rules 48b8e4) | 1 | 1 | $16.16 | 66.7% | 0.0% | 0.0% | 0.0% | $24.23 | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

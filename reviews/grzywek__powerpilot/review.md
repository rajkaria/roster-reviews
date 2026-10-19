# Review: grzywek/powerpilot

- Review id: `grzywek__powerpilot-20261019085944`
- Created: 2026-10-19T08:59:44.803Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `49ac0efaaf22` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 84.2% | 0.0% | 0.0% | 100.0% | — | A |
| `653fdb36d077` | Claude Code · claude-opus-5-5 | 1 | 0 | $111.91 | too young | too young | too young | 0.0% | — | A |
| `7831306588f1` | Claude Code · claude-fable-5 | 4 | 4 | unknown (0/4 priced) | 71.8% | 0.0% | 0.0% | 50.0% | — | A |
| `794fb3d2c15d` | Claude Code · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 87.0% | 0.0% | 9.7% | 0.0% | — | A |
| `88f89decba2d` | Claude Code · claude-opus-5 (rules unknown) | 6 | 6 | unknown (0/6 priced) | 94.6% | 0.0% | 0.1% | 50.0% | — | A |
| `dbd902e84e60` | Claude Code · claude-opus-5 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 77.0% | 0.0% | 3.3% | 33.3% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 15 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

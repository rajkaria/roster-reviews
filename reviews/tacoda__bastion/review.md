# Review: tacoda/bastion

- Review id: `tacoda__bastion-20261107101848`
- Created: 2026-11-07T10:18:48.579Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `6b2ae178f85f` | Claude Code · claude-opus-5-5 (rules 2a2f29) | 2 | 2 | $67.86 | 90.1% | 0.0% | 0.0% | 0.0% | $37.64 | A |
| `cfc486fe85ce` | Claude Code · claude-opus-5-5 (rules 17f201) | 3 | 0 | $3.93 | too young | too young | too young | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

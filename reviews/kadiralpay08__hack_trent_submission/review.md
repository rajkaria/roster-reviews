# Review: kadiralpay08/hack_trent_submission

- Review id: `kadiralpay08__hack_trent_submission-20261108102840`
- Created: 2026-11-08T10:28:40.123Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `95a3f38b5b2a` | Claude Code · claude-opus-5-5 (rules c57470) | 1 | 0 | $8.01 | too young | too young | too young | 0.0% | — | A |
| `d33fb26e3aeb` | Claude Code · claude-opus-5-5 (rules 004a54) | 2 | 1 | $7.82 | 100.0% | 0.0% | 0.0% | 50.0% | $7.60 | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

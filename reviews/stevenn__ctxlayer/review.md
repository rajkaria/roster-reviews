# Review: stevenn/ctxlayer

- Review id: `stevenn__ctxlayer-20261013132430`
- Created: 2026-10-13T13:24:30.568Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `4d2461997a69` | Claude Code · claude-opus-5[1m] | 2 | 2 | unknown (0/2 priced) | 97.9% | 0.0% | 0.0% | 50.0% | — | A |
| `6a3e6254b9c6` | Claude Code · claude-opus-5-5 | 1 | 0 | $6.98 | too young | too young | too young | 0.0% | — | A |
| `95e08621d120` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 97.7% | 0.0% | 0.0% | 0.0% | — | A |
| `fbf87d367b7f` | Claude Code · claude-fable-5-1 | 2 | 1 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 6 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 9 sessions have no price (unknown model, or a price that depends on prompt size)
- 4 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

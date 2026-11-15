# Review: stevenn/ctxlayer

- Review id: `stevenn__ctxlayer-20261115110134`
- Created: 2026-11-15T11:01:34.381Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `4d2461997a69` | Claude Code · claude-opus-5[1m] | 2 | 2 | unknown (0/2 priced) | 97.1% | 0.0% | 0.0% | 50.0% | — | A |
| `6a3e6254b9c6` | Claude Code · claude-opus-5-5 | 3 | 2 | $35.62 | 90.9% | 0.0% | 0.0% | 0.0% | $5.77 | A |
| `95e08621d120` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 97.0% | 0.0% | 0.0% | 0.0% | — | A |
| `c69946f7d358` | Claude Code · claude-fable-5-2 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `fbf87d367b7f` | Claude Code · claude-fable-5-1 | 2 | 1 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 7 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 10 sessions have no price (unknown model, or a price that depends on prompt size)
- 4 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

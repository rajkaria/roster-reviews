# Review: johnchque/dg

- Review id: `johnchque__dg-20261026090305`
- Created: 2026-10-26T09:03:05.225Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `29d32998a1e5` | Claude Code · claude-sonnet-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 53.4% | 50.0% | 36.0% | 0.0% | — | A |
| `2c82353f96ed` | Claude Code · claude-opus-5-5 | 1 | 0 | $19.37 | too young | too young | too young | 0.0% | — | A |
| `53643298ecbe` | Claude Code · claude-sonnet-5 (rules 325cfe) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: jessearmand/subaki-realtime

- Review id: `jessearmand__subaki-realtime-20261115110136`
- Created: 2026-11-15T11:01:36.286Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `219f6cd3e32b` | Claude Code · claude-opus-5-5 (rules 760a8c) | 1 | 0 | $4.23 | too young | too young | too young | 0.0% | — | A |
| `23515646803f` | Claude Code · claude-opus-5-5 (rules 9bc1d8) | 1 | 0 | $0.18 | too young | too young | too young | 0.0% | — | A |
| `66ef0cbd8f01` | Claude Code · claude-fable-5-1 | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |
| `9a8fb6675dc5` | Claude Code · claude-fable-5 | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 18 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 16 sessions have no price (unknown model, or a price that depends on prompt size)
- 12 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

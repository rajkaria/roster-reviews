# Review: femto/mcp-chrome

- Review id: `femto__mcp-chrome-20261127123217`
- Created: 2026-11-27T12:32:17.375Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `37e9586049fd` | Claude Code · claude-opus-4-5-20251101 | 7 | 7 | unknown (0/7 priced) | 65.3% | 57.1% | 18.8% | 0.0% | — | A |
| `acab5b84929f` | Claude Code · claude-opus-5-5 | 3 | 0 | $7.00 | too young | too young | too young | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 7 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

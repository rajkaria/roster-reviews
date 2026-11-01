# Review: femto/minion-code

- Review id: `femto__minion-code-20261101103337`
- Created: 2026-11-01T10:33:37.848Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `5c5a0d28c0ee` | Claude Code · claude-opus-5-5 | 1 | 0 | $0.31 | too young | too young | too young | 0.0% | — | A |
| `5da2b10719e2` | Claude Code · gpt-5.6-sol | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `670fd650ff95` | Claude Code · claude-opus-4-5-20251101 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

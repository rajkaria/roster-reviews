# Review: utkukalkanli/agent-router

- Review id: `utkukalkanli__agent-router-20261101103327`
- Created: 2026-11-01T10:33:27.252Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2044d539a9e1` | Claude Code · claude-opus-5-5 | 2 | 0 | $2.21 | too young | too young | too young | 0.0% | — | A |
| `c29aa86d9d5a` | Codex · gpt-5.6-sol | 1 | 1 | unknown (0/1 priced) | 95.9% | 0.0% | 0.0% | 0.0% | — | A |
| `c8aa3a071105` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 0.0% | 0.0% | — | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

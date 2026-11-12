# Review: orin-dx/michi

- Review id: `orin-dx__michi-20261112112353`
- Created: 2026-11-12T11:23:53.174Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `10be78e9acb8` | Claude Code · claude-opus-5-5 (rules 2fdee5) | 1 | 0 | $0.26 | too young | too young | too young | 100.0% | — | A |
| `6d2385134fca` | Claude Code · claude-sonnet-5 (rules 905cc4) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `93b8d97af411` | Claude Code · claude-opus-5-5 (rules 9b122a) | 1 | 1 | $1.39 | 0.0% | 100.0% | 98.2% | 0.0% | — | A |
| `a978e0bb8a23` | Codex · gpt-6-sol | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 98.2% | 0.0% | — | A |
| `b03b4738587c` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 76 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 78 sessions have no price (unknown model, or a price that depends on prompt size)
- 75 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

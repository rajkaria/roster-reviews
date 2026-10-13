# Review: raman325/lock_code_manager

- Review id: `raman325__lock_code_manager-20261013132409`
- Created: 2026-10-13T13:24:09.099Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `13945428f1fa` | Claude Code · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `181e1cdf4a36` | Claude Code · claude-opus-4-7 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `1b41418f67d5` | Claude Code · claude-opus-4-6[1m] (rules unknown) | 1 | 1 | unknown (0/1 priced) | 65.0% | 0.0% | 0.0% | 0.0% | — | A |
| `38ccce40eb90` | Claude Code · claude-opus-5 (rules 9f2d58) | 2 | 1 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `4f61bf61e9fd` | Claude Code · claude-opus-4-6[1m] (rules 9b4216) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `8883a2e8ed41` | Claude Code · claude-opus-5 (rules 666e6a) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `c6ccae3b0517` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `ca94d6d75c85` | Claude Code · claude-opus-5-5 | 1 | 1 | $130.07 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 51 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 56 sessions have no price (unknown model, or a price that depends on prompt size)
- 48 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

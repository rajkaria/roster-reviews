# Review: SMK1085/paigasus-core

- Review id: `SMK1085__paigasus-core-20261019090000`
- Created: 2026-10-19T09:00:00.107Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `055b4933e2f5` | Claude Code · claude-opus-5[1m] | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `3f2ab1f9bbec` | Claude Code · claude-opus-4-8 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `4e1eb2029fe2` | Claude Code · claude-opus-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `6c64767bc61c` | Claude Code · claude-opus-4-8[1m] | 1 | 1 | unknown (0/1 priced) | 95.1% | 0.0% | 0.0% | 0.0% | — | A |
| `8eaa1a34c7bb` | Claude Code · claude-opus-5 (rules 533770) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `bf4789fabb5e` | Claude Code · claude-opus-5 (rules 38863e) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `c2bb17dd4f0a` | Claude Code · claude-opus-5-5 | 3 | 0 | $4.92 | too young | too young | too young | 0.0% | — | A |
| `d1f1a7550aa2` | Claude Code · claude-opus-5 (rules 45cce8) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `f86cb3c5acd6` | Claude Code · claude-opus-5 (rules 7c2f2f) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |

## Notes

- 56 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 55 sessions have no price (unknown model, or a price that depends on prompt size)
- 47 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

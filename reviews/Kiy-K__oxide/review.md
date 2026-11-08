# Review: Kiy-K/oxide

- Review id: `Kiy-K__oxide-20261108102838`
- Created: 2026-11-08T10:28:38.055Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `18cae6fdbcd7` | Claude Code · claude-opus-5-5 (rules d2d997) | 2 | 2 | $12.94 | 100.0% | 0.0% | 0.0% | 0.0% | $6.47 | A |
| `39d113ba1ed8` | Claude Code · claude-opus-5-5 (rules ba0d6c) | 5 | 5 | $0.00 | 2.8% | 0.0% | 0.0% | 0.0% | $0.00 | A |
| `850d80a451ce` | Oh My Pi · claude-haiku-5-5 | 2 | 0 | $0.00 | too young | too young | too young | 0.0% | — | A |
| `8a0c24437e24` | Claude Code · claude-sonnet-5-5 | 1 | 1 | $2.71 | 100.0% | 0.0% | 9.1% | 0.0% | $2.71 | A |
| `909d866ca1bd` | Pi · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.6% | 0.0% | 0.0% | 0.0% | — | A |
| `a44770001124` | Claude Code · claude-opus-5-5 (rules 1dd3a9) | 3 | 3 | $2.61 | 28.1% | 0.0% | 1.2% | 0.0% | $3.10 | A |
| `b0b41e5b4995` | Claude Code · claude-opus-5-5 (rules 7cef45) | 1 | 1 | $0.42 | 38.2% | 0.0% | 5.6% | 0.0% | $1.10 | A |
| `ccbb7dd7a14a` | Oh My Pi · unknown | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 100.0% | — | A |
| `d44a7bf58d93` | Claude Code · claude-opus-5-5 (rules 054efc) | 4 | 4 | $10.37 | 90.3% | 0.0% | 0.6% | 0.0% | $2.87 | A |
| `d75abbdf88cb` | Claude Code · claude-haiku-5-5 (rules ba0d6c) | 5 | 5 | $0.00 | 2.5% | 0.0% | 0.0% | 100.0% | $0.00 | A |
| `e68b03681579` | Claude Code · claude-opus-5-5 (rules cd23c5) | 1 | 1 | $0.03 | 38.2% | 0.0% | 5.6% | 0.0% | $0.09 | A |
| `e721b311ee66` | Oh My Pi · claude-sonnet-5-5 | 1 | 0 | $0.00 | too young | too young | too young | 0.0% | — | A |
| `eeaf6f4c4f3b` | Pi · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 87.9% | 0.0% | 3.6% | 100.0% | — | A |
| `f8a13f146c07` | Claude Code · claude-haiku-5-5 (rules cd23c5) | 1 | 1 | $0.01 | 88.5% | 0.0% | 0.0% | 100.0% | $0.01 | A |

## Notes

- 6 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 5 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

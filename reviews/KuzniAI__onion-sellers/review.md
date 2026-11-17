# Review: KuzniAI/onion-sellers

- Review id: `KuzniAI__onion-sellers-20261117115829`
- Created: 2026-11-17T11:58:29.589Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 (rules e3b0c4) | 6 | 0 | $5.92 | too young | too young | too young | 16.7% | — | A |
| `4388cdcf3222` | Claude Code · claude-opus-5-5 (rules 2de0df) | 3 | 3 | $1.71 | 30.1% | 0.0% | 0.0% | 33.3% | $1.89 | A |
| `88f9b79fcd40` | Claude Code · claude-opus-5 | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 50.0% | — | A |
| `8eb1b5f294bc` | Claude Code · claude-sonnet-5 (rules unknown) | 4 | 4 | unknown (0/4 priced) | 43.4% | 25.0% | 0.0% | 75.0% | — | A |
| `9c1e2c07abb1` | Claude Code · claude-fable-5-2 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `b734ed3ddd97` | Claude Code · claude-sonnet-5 (rules unknown) | 6 | 6 | unknown (0/6 priced) | 69.2% | 16.7% | 0.0% | 33.3% | — | A |
| `c66b66662588` | Claude Code · claude-sonnet-5-5 | 3 | 0 | $1.18 | too young | too young | too young | 0.0% | — | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 11.4% | 33.3% | 2.6% | 0.0% | — | A |

## Notes

- 12 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 18 sessions have no price (unknown model, or a price that depends on prompt size)
- 2 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

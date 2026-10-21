# Review: djmaam/portfolio-v3

- Review id: `djmaam__portfolio-v3-20261021084003`
- Created: 2026-10-21T08:40:03.952Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0e24e01306bc` | Claude Code · claude-opus-5 (rules unknown) | 5 | 5 | unknown (0/5 priced) | 99.8% | 0.0% | 0.8% | 0.0% | — | A |
| `3ec6c844eb14` | Claude Code · claude-opus-5-5 | 1 | 0 | $1.36 | too young | too young | too young | 0.0% | — | A |
| `aab2ac419927` | Claude Code · claude-opus-5 (rules unknown) | 6 | 3 | unknown (0/6 priced) | 99.9% | 0.0% | 0.7% | 16.7% | — | A |
| `b5b2bb926ed3` | Claude Code · claude-opus-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 1.6% | 0.0% | — | A |

## Notes

- 42 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 50 sessions have no price (unknown model, or a price that depends on prompt size)
- 38 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

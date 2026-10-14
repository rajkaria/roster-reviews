# Review: KuzniAI/onion-sellers

- Review id: `KuzniAI__onion-sellers-20261014084917`
- Created: 2026-10-14T08:49:17.588Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `4388cdcf3222` | Claude Code · claude-opus-5-5 | 3 | 1 | $1.71 | 0.0% | 0.0% | 0.0% | 33.3% | — | A |
| `88f9b79fcd40` | Claude Code · claude-opus-5 | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 50.0% | — | A |
| `8eb1b5f294bc` | Claude Code · claude-sonnet-5 (rules unknown) | 4 | 4 | unknown (0/4 priced) | 71.9% | 25.0% | 0.0% | 75.0% | — | A |
| `b734ed3ddd97` | Claude Code · claude-sonnet-5 (rules unknown) | 6 | 6 | unknown (0/6 priced) | 72.0% | 16.7% | 0.0% | 33.3% | — | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 19.8% | 33.3% | 2.6% | 0.0% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 17 sessions have no price (unknown model, or a price that depends on prompt size)
- 2 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: Nougify/hackcamp27

- Review id: `Nougify__hackcamp27-20261111110540`
- Created: 2026-11-11T11:05:40.621Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `41ac9bb1759e` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 (rules unknown) | 2 | 2 | $0.57 | 55.0% | 50.0% | 42.9% | 50.0% | $0.51 | A |
| `5ceac8d32660` | Claude Code · claude-opus-5-5 (rules 78eeb1) | 7 | 7 | $9.12 | 81.0% | 0.0% | 8.5% | 14.3% | $1.61 | A |
| `73c882d59b51` | Claude Code · claude-opus-5-5 (rules cb6d62) | 3 | 3 | $3.01 | 100.0% | 0.0% | 0.5% | 0.0% | $1.00 | A |
| `83968573c2c8` | Claude Code · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `eb72fdb0b659` | Claude Code · claude-sonnet-5 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 88.5% | 33.3% | 23.5% | 66.7% | — | A |
| `f29e15db4afa` | Claude Code · claude-sonnet-5 (rules unknown) | 4 | 2 | unknown (0/4 priced) | 99.0% | 0.0% | 0.9% | 50.0% | — | A |
| `f85e9d7b6b08` | Claude Code · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 1.6% | 100.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 10 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: Nougify/hackcamp27

- Review id: `Nougify__hackcamp27-20261108102827`
- Created: 2026-11-08T10:28:27.675Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `518d4e106433` | Claude Code · claude-opus-5-5 (rules unknown) | 2 | 2 | $0.57 | 55.0% | 50.0% | 42.9% | 50.0% | $0.51 | A |
| `5ceac8d32660` | Claude Code · claude-opus-5-5 (rules 78eeb1) | 6 | 2 | $8.33 | 79.5% | 0.0% | 9.0% | 0.0% | $1.37 | A |
| `83968573c2c8` | Claude Code · unknown (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `eb72fdb0b659` | Claude Code · claude-sonnet-5 | 2 | 1 | unknown (0/2 priced) | 81.1% | 0.0% | 0.4% | 100.0% | — | A |
| `f85e9d7b6b08` | Claude Code · unknown (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |

## Notes

- 7 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 4 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

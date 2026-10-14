# Review: KevinToodlepoot/vgc-usage-stats

- Review id: `KevinToodlepoot__vgc-usage-stats-20261014084907`
- Created: 2026-10-14T08:49:07.448Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `3c50505db2ea` | Claude Code · claude-fable-5-1 | 3 | 0 | unknown (0/3 priced) | too young | too young | too young | 33.3% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 1 | 1 | $1.65 | 100.0% | 0.0% | 0.0% | 0.0% | $1.65 | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

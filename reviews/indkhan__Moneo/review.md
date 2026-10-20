# Review: indkhan/Moneo

- Review id: `indkhan__Moneo-20261020083812`
- Created: 2026-10-20T08:38:12.350Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `5499e095c1db` | Claude Code · claude-opus-5-5 (rules b922ab) | 1 | 1 | $21.73 | 100.0% | 0.0% | 0.0% | 0.0% | $21.73 | A |
| `ba9012b2759f` | Claude Code · claude-opus-5-5 (rules 724783) | 1 | 0 | $3.32 | too young | too young | too young | 0.0% | — | A |
| `c8230baaea81` | Claude Code · claude-opus-5-5 (rules 5bcfa2) | 4 | 3 | $51.93 | 70.1% | 33.3% | 24.1% | 25.0% | $17.01 | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

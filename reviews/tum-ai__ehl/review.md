# Review: tum-ai/ehl

- Review id: `tum-ai__ehl-20261020083823`
- Created: 2026-10-20T08:38:23.835Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2ba4ae5c8491` | Claude Code · claude-opus-5 (rules db1010) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `3785c2ed3bdb` | Claude Code · claude-opus-5-5 (rules db1010) | 1 | 1 | $117.53 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `3cfe8d33093b` | Claude Code · claude-opus-5 (rules bbdb33) | 3 | 3 | unknown (0/3 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `8762ebc1025f` | Claude Code · claude-sonnet-5 | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `89a85202db64` | Claude Code · claude-opus-5 (rules 59eee4) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `d758b7b1eb58` | Claude Code · claude-opus-5 (rules 6d4585) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `f652fc5707ea` | Claude Code · claude-opus-5-5 (rules c54cf1) | 1 | 0 | $5.96 | too young | too young | too young | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 8 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

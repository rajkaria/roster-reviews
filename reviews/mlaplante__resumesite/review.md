# Review: mlaplante/resumesite

- Review id: `mlaplante__resumesite-20261104110251`
- Created: 2026-11-04T11:02:51.291Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `c6b1059925e8` | Claude Code · claude-opus-5-5 (rules b0b804) | 1 | 1 | $0.24 | 100.0% | 0.0% | 0.0% | 0.0% | $0.24 | A |
| `d4a1bf690f0b` | Claude Code · claude-opus-5-5 (rules d980a2) | 2 | 2 | $0.54 | 100.0% | 0.0% | 0.0% | 100.0% | $0.27 | A |
| `fb2431769e78` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 72.1% | 0.0% | 23.1% | 0.0% | — | A |

## Notes

- 0 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

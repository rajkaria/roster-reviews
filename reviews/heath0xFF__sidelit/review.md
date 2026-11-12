# Review: heath0xFF/sidelit

- Review id: `heath0xFF__sidelit-20261112112345`
- Created: 2026-11-12T11:23:45.506Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1e8d475a1bb7` | Claude Code · claude-opus-5-5 (rules a62138) | 1 | 0 | $2.15 | too young | too young | too young | 0.0% | — | A |
| `376c1d3a7a4d` | Claude Code · claude-opus-5-5 (rules b8e9ef) | 1 | 1 | $24.10 | 92.1% | 0.0% | 1.4% | 0.0% | $26.18 | A |
| `81bdde5bb22f` | Pi · gpt-6-astra (rules unknown) | 1 | 1 | $3.14 | 98.2% | 0.0% | 0.3% | 0.0% | $3.20 | A |
| `f72833c4a72f` | Pi · gpt-6-astra (rules unknown) | 2 | 2 | $11.85 | 96.9% | 0.0% | 1.4% | 0.0% | $6.12 | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

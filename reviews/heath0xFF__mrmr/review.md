# Review: heath0xFF/mrmr

- Review id: `heath0xFF__mrmr-20261101103323`
- Created: 2026-11-01T10:33:23.638Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `818535549ccf` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 84.1% | 0.0% | 9.9% | 100.0% | — | A |
| `87bba3cd7c8a` | Claude Code · claude-opus-5-5 | 1 | 0 | $2.49 | too young | too young | too young | 0.0% | — | A |
| `90ac4c6a1ea1` | Pi · z-ai/glm-5.3 | 1 | 1 | unknown (0/1 priced) | 84.1% | 0.0% | 9.9% | 0.0% | — | A |
| `a75a9513b301` | Pi · gpt-6-astra | 6 | 5 | $172.57 | 91.0% | 0.0% | 0.4% | 16.7% | $26.13 | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 3 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

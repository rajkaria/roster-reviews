# Review: elviskahoro/cmu-database-group-lectures

- Review id: `elviskahoro__cmu-database-group-lectures-20261110111912`
- Created: 2026-11-10T11:19:12.984Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2cfb671b2bfe` | Pi · accounts/fireworks/models/kimi-k3 | 20 | 20 | unknown (0/20 priced) | 81.3% | 10.0% | 20.2% | 100.0% | — | A |
| `4aec3e30c053` | Claude Code · claude-sonnet-5-5 (rules c89947) | 8 | 7 | $4.87 | 78.7% | 57.1% | 35.1% | 12.5% | $0.13 | A |
| `50e810436600` | Claude Code · claude-haiku-4-5-20251001 | 4 | 4 | unknown (0/4 priced) | 77.3% | 25.0% | 25.0% | 100.0% | — | A |
| `d1934960c7a2` | Claude Code · claude-sonnet-5-5 (rules 80a936) | 1 | 0 | $0.58 | too young | too young | too young | 0.0% | — | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 27 sessions have no price (unknown model, or a price that depends on prompt size)
- 3 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

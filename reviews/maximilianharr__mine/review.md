# Review: maximilianharr/mine

- Review id: `maximilianharr__mine-20261126124328`
- Created: 2026-11-26T12:43:28.617Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `057d7b99dfc3` | Claude Code · claude-opus-5 (rules unknown) | 17 | 17 | unknown (0/17 priced) | 52.0% | 58.8% | 0.0% | 11.8% | — | A |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 | 1 | 0 | $6.19 | too young | too young | too young | 0.0% | — | A |
| `3304daa5678d` | Claude Code · claude-opus-5 (rules e3b0c4) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 18 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

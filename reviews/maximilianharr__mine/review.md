# Review: maximilianharr/mine

- Review id: `maximilianharr__mine-20261127123211`
- Created: 2026-11-27T12:32:11.501Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `057d7b99dfc3` | Claude Code · claude-opus-5 (rules unknown) | 17 | 17 | unknown (0/17 priced) | 50.4% | 58.8% | 0.0% | 11.8% | — | A |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 | 5 | 2 | $21.37 | 94.9% | 0.0% | 0.0% | 0.0% | $4.13 | A |
| `3304daa5678d` | Claude Code · claude-opus-5 (rules e3b0c4) | 1 | 1 | unknown (0/1 priced) | 79.3% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 18 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

# Review: cardinalcolby/phish-sense

- Review id: `cardinalcolby__phish-sense-20261115110129`
- Created: 2026-11-15T11:01:29.608Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 20 | 8 | $30.48 | 91.8% | 0.0% | 3.9% | 25.0% | $2.78 | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 100.0% | 100.0% | 100.0% | 0.0% | — | A |

## Notes

- 12 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

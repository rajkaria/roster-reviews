# Review: partio-io/cli

- Review id: `partio-io__cli-20261119114742`
- Created: 2026-11-19T11:47:42.784Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `27ed88905130` | Claude Code · claude-opus-5-5 (rules efea8a) | 17 | 17 | $25.62 | 94.3% | 0.0% | 3.2% | 94.1% | $1.60 | A |
| `8b1f504295dd` | Claude Code · claude-opus-5-5 (rules f7f7ad) | 1 | 0 | $1.28 | too young | too young | too young | 0.0% | — | A |

## Notes

- 2 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

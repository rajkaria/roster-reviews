# Review: buddhamagnet/dotclaude

- Review id: `buddhamagnet__dotclaude-20261112112401`
- Created: 2026-11-12T11:24:01.175Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `53c9bd725cb8` | Claude Code · claude-sonnet-4-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 0.1% | 100.0% | 0.5% | 0.0% | — | A |
| `9b6a22c20348` | Claude Code · claude-sonnet-4-5-20250929 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `c2f38dff9dc3` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $0.52 | too young | too young | too young | 0.0% | — | A |
| `cde52853f692` | Claude Code · claude-sonnet-4-5-20250929 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `f2621d160346` | Claude Code · claude-sonnet-4-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 98.9% | 0.0% | 0.0% | 50.0% | — | A |

## Notes

- 7 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 11 sessions have no price (unknown model, or a price that depends on prompt size)
- 5 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

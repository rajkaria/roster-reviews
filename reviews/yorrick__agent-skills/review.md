# Review: yorrick/agent-skills

- Review id: `yorrick__agent-skills-20261013131342`
- Created: 2026-10-13T13:13:42.394Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `3dfb55bcff59` | Claude Code · claude-opus-4-6 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 100.0% | 0.0% | 0.0% | 33.3% | — | A |
| `3f154fa1a8c8` | Claude Code · claude-opus-5-5[1m] | 1 | 1 | $10.22 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `4499ab2d303e` | Claude Code · claude-sonnet-4-6 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `4ae405f038b5` | Claude Code · claude-opus-5-5 | 1 | 0 | $185.90 | too young | too young | too young | 0.0% | — | A |
| `4bc221feaa44` | Claude Code · claude-opus-4-6[1m] | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `90f002a5c0ba` | Claude Code · claude-sonnet-4-6 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 92.3% | 0.0% | 0.0% | 0.0% | — | A |
| `a98e15acf459` | Claude Code · claude-opus-4-6 (rules unknown) | 10 | 10 | unknown (0/10 priced) | 15.5% | 20.0% | 4.1% | 70.0% | — | A |
| `ca3ef78776b2` | Claude Code · unknown | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `cd61e53cb6a5` | Claude Code · claude-sonnet-5 | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `cf48f3b286af` | Claude Code · claude-opus-5 | 4 | 4 | unknown (0/4 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 17 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 38 sessions have no price (unknown model, or a price that depends on prompt size)
- 16 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

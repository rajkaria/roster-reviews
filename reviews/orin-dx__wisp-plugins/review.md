# Review: orin-dx/wisp-plugins

- Review id: `orin-dx__wisp-plugins-20261111110538`
- Created: 2026-11-11T11:05:38.042Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `57520e250480` | Claude Code · claude-sonnet-4-6 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 8.7% | 50.0% | 25.3% | 0.0% | — | A |
| `5c6df3c642ec` | Claude Code · claude-sonnet-5 (rules 73d1d1) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `8d746edae2f8` | Claude Code · claude-sonnet-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 47.8% | 50.0% | 32.7% | 0.0% | — | A |
| `95491e37f351` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 16.2% | 100.0% | 77.6% | 0.0% | — | A |
| `980799ea6ccc` | Claude Code · claude-sonnet-4-6 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 1.6% | 0.0% | 31.8% | 0.0% | — | A |
| `ab2d8bcddd67` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 76.1% | 0.0% | 16.6% | 0.0% | — | A |
| `c5fef87ed352` | Claude Code · claude-sonnet-5-5 (rules 3611b3) | 1 | 0 | $1.18 | too young | too young | too young | 0.0% | — | A |
| `dd77795221a5` | Codex · gpt-6-sol | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `f0bc63e12c47` | Claude Code · claude-sonnet-5 (rules unknown) | 3 | 3 | unknown (0/3 priced) | 12.1% | 66.7% | 62.2% | 0.0% | — | A |
| `f8a6521f18c1` | Claude Code · claude-sonnet-5-5 (rules 19c636) | 1 | 0 | $7.25 | too young | too young | too young | 0.0% | — | A |

## Notes

- 120 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 129 sessions have no price (unknown model, or a price that depends on prompt size)
- 117 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

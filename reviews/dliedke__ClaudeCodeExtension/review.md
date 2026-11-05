# Review: dliedke/ClaudeCodeExtension

- Review id: `dliedke__ClaudeCodeExtension-20261105110225`
- Created: 2026-11-05T11:02:25.747Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `14190b0359e6` | Claude Code · claude-opus-5-5 (rules 986646) | 2 | 2 | $4.54 | 88.9% | 0.0% | 0.9% | 50.0% | $2.55 | A |
| `1a1d47e1a4b7` | Claude Code · claude-opus-5-5 (rules efbc66) | 1 | 0 | $0.98 | too young | too young | too young | 100.0% | — | A |
| `85dc97fef881` | Claude Code · claude-haiku-5-5 | 1 | 1 | ≥ $0.01 | 93.7% | 0.0% | 0.0% | 100.0% | $0.01 | A |
| `c21942e249ae` | Claude Code · claude-opus-5-5 (rules b8008c) | 11 | 9 | $14.07 | 71.9% | 44.4% | 1.1% | 54.5% | $1.88 | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

# Review: dliedke/ClaudeCodeExtension

- Review id: `dliedke__ClaudeCodeExtension-20261103105836`
- Created: 2026-11-03T10:58:36.980Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `14190b0359e6` | Claude Code · claude-opus-5-5 (rules 986646) | 2 | 2 | $4.54 | 88.9% | 0.0% | 0.9% | 50.0% | $2.55 | A |
| `85dc97fef881` | Claude Code · claude-haiku-5-5 | 1 | 0 | ≥ $0.01 | too young | too young | too young | 100.0% | — | A |
| `c21942e249ae` | Claude Code · claude-opus-5-5 (rules b8008c) | 7 | 3 | $4.11 | 70.9% | 66.7% | 3.3% | 71.4% | $0.77 | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

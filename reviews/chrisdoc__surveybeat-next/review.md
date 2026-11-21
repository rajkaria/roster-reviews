# Review: chrisdoc/surveybeat-next

- Review id: `chrisdoc__surveybeat-next-20261121111318`
- Created: 2026-11-21T11:13:18.522Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0ca5d67990e1` | Antigravity · unknown | 2 | 2 | unknown (0/2 priced) | 75.1% | 0.0% | 6.3% | 0.0% | — | A |
| `11d109288ba9` | Antigravity · gemini-4-hydrogen-high | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 (rules e3b0c4) | 6 | 3 | $20.32 | 29.1% | 0.0% | 0.0% | 16.7% | $1.97 | A |
| `395786372c11` | Antigravity · gemini-4-neon-high | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `3c34122acccf` | Claude Code · claude-opus-5-5 (rules d7722b) | 6 | 0 | $19.67 | too young | too young | too young | 16.7% | — | A |
| `4ef33c65261c` | Claude Code · claude-opus-5-5 (rules 861b7c) | 16 | 1 | $35.80 | 62.5% | 0.0% | 0.0% | 25.0% | $0.00 | A |
| `5f156f841b58` | Claude Code · claude-opus-5-5 (rules 12c80c) | 1 | 1 | $1.56 | 84.4% | 0.0% | 0.0% | 0.0% | $1.85 | A |
| `75f0c856b5d2` | Claude Code · claude-opus-5-5 (rules unknown) | 3 | 1 | $10.83 | 49.4% | 0.0% | 0.2% | 0.0% | $0.00 | A |
| `a5390bf71aa4` | Claude Code · unknown | 2 | 2 | unknown (0/2 priced) | 81.3% | 0.0% | 0.0% | 0.0% | — | A |
| `aea250a8252a` | Claude Code · claude-opus-5-5 (rules de2527) | 1 | 0 | $9.87 | too young | too young | too young | 100.0% | — | A |
| `c66b66662588` | Claude Code · claude-sonnet-5-5 | 7 | 0 | $36.56 | too young | too young | too young | 28.6% | — | A |
| `ebe55ecdb98f` | Antigravity · gemini-4-hydrogen-medium | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 45 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 12 sessions have no price (unknown model, or a price that depends on prompt size)
- 10 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

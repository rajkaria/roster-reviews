# Review: kernelKain/unfinished-business

- Review id: `kernelKain__unfinished-business-20261101103314`
- Created: 2026-11-01T10:33:14.343Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 6 | 6 | unknown (0/6 priced) | 74.1% | 0.0% | 0.4% | 16.7% | — | A |
| `3a8d9820ebf7` | OpenCode · anthropic/claude-haiku-5.5 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `81653cead980` | OpenCode · unknown | 3 | 2 | unknown (0/3 priced) | 83.8% | 0.0% | 1.7% | 100.0% | — | A |
| `892ecf68a4b5` | OpenCode · deepseek-v4.1-flash | 7 | 2 | unknown (0/7 priced) | 38.7% | 0.0% | 1.5% | 42.9% | — | A |
| `9f92ab817ba4` | Cursor · grok-4.7-high-fast | 1 | 1 | unknown (0/1 priced) | 61.8% | 100.0% | 3.6% | 0.0% | — | A |
| `d9d62bb5ec7b` | OpenCode · beam-free | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |

## Notes

- 19 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 30 sessions have no price (unknown model, or a price that depends on prompt size)
- 11 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

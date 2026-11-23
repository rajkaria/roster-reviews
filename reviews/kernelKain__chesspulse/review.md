# Review: kernelKain/chesspulse

- Review id: `kernelKain__chesspulse-20261123125635`
- Created: 2026-11-23T12:56:35.611Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `257d6af296bd` | Cursor · grok-4.7-high-fast | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `6cfac0cfd398` | Cursor · gemini-4-neon-high | 1 | 1 | unknown (0/1 priced) | 89.1% | 0.0% | 23.9% | 0.0% | — | A |
| `70761cd63ca7` | Cursor · unknown | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `be111d57fa83` | Kiro · unknown | 5 | 0 | unknown (0/5 priced) | too young | too young | too young | 20.0% | — | A |
| `de6bad593d19` | OpenCode · beam-free | 1 | 1 | unknown (0/1 priced) | 82.4% | 0.0% | 17.4% | 0.0% | — | A |
| `ebff8c82f7b8` | OpenCode · deepseek-v4.1-flash (rules unknown) | 1 | 1 | unknown (0/1 priced) | 97.9% | 0.0% | 1.2% | 0.0% | — | A |
| `ec560762ae4f` | OpenCode · deepseek-v4.1-flash (rules unknown) | 6 | 6 | unknown (0/6 priced) | 71.4% | 33.3% | 1.9% | 16.7% | — | A |

## Notes

- 9 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 20 sessions have no price (unknown model, or a price that depends on prompt size)
- 4 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

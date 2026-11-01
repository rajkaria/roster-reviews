# Review: BbrSofiane/email-os

- Review id: `BbrSofiane__email-os-20261101103318`
- Created: 2026-11-01T10:33:18.912Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `07bb48443cba` | Pi · openai/gpt-6.1-sol | 4 | 3 | unknown (0/4 priced) | 94.1% | 0.0% | 2.4% | 75.0% | — | A |
| `13c4217bacc0` | Pi · gpt-6-astra | 1 | 1 | $1.48 | 98.3% | 0.0% | 2.9% | 100.0% | $1.51 | A |
| `35330a03cbb9` | Pi · z-ai/glm-5.3-flash | 2 | 2 | unknown (0/2 priced) | 92.3% | 0.0% | 0.2% | 100.0% | — | A |
| `63585ff5bfa6` | Pi · claude-fable-5-1 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `645bdcfd61d8` | Pi · glm-5.3-flash | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 50.0% | — | A |
| `72389f1baa31` | Pi · gpt-6.1-sol | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 10 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: alehar9320/agentic-odi

- Review id: `alehar9320__agentic-odi-20261022084156`
- Created: 2026-10-22T08:41:56.913Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `suspect`
- Suspect: 23c9bebb98c6

Setup 23c9bebb98c6 is flagged. Comparing sessions of the same difficulty tercile, its bad outcomes (reverted, or more than 30% of its lines reworked by a human) have odds 16.47 times the other setups' (95% CI 2.84 to 95.56, p 0.0001). This is observational evidence, not proof.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1337684859d7` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `184968ac3576` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 6 | 6 | unknown (0/6 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `1eeabb1798a6` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `23c9bebb98c6` | OpenCode · big-pickle (rules unknown) | 67 | 67 | unknown (0/67 priced) | 15.1% | 46.3% | 2.8% | 86.6% | — | A |
| `26452610a5f5` | OpenCode · big-pickle (rules unknown) | 13 | 13 | unknown (0/13 priced) | 0.0% | 0.0% | 0.0% | 84.6% | — | A |
| `3f0c9988a23e` | OpenCode · deepseek-ai/deepseek-v4.1-flash | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `66a48f543948` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `81653cead980` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.2% | 100.0% | — | A |
| `8e805ea17fb4` | OpenCode · gemini-2.5-flash | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `9a274dddff62` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 6 | 1 | unknown (0/6 priced) | 0.0% | 0.0% | 0.0% | 83.3% | — | A |
| `ab9f3fbdce0b` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 3 | 3 | unknown (0/3 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `c925330e1055` | OpenCode · minimax-m3.1-flash | 4 | 0 | unknown (0/4 priced) | too young | too young | too young | 100.0% | — | A |
| `cf43ce5d160f` | OpenCode · nvidia/nemotron-3.5-lightning:free | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 50.0% | — | A |
| `efd01d46171b` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `fd344e482868` | OpenCode · poolside/laguna-s-2.1:free | 4 | 2 | unknown (0/4 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 15 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 115 sessions have no price (unknown model, or a price that depends on prompt size)
- 3 sessions have no setup because their rules hash is unknown
- suspect call: difficulty-matched odds ratio 16.47 (p 0.0001) for 23c9bebb98c6 vs the rest

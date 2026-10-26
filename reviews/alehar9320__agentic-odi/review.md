# Review: alehar9320/agentic-odi

- Review id: `alehar9320__agentic-odi-20261026090243`
- Created: 2026-10-26T09:02:43.773Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `suspect`
- Suspect: 23c9bebb98c6

Setup 23c9bebb98c6 is flagged. Comparing sessions of the same difficulty tercile, its bad outcomes (reverted, or more than 30% of its lines reworked by a human) have odds 39.72 times the other setups' (95% CI 6.81 to 231.64, p 0.0000). This is observational evidence, not proof.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1337684859d7` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `184968ac3576` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 6 | 6 | unknown (0/6 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `1eeabb1798a6` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `23c9bebb98c6` | OpenCode · big-pickle (rules unknown) | 67 | 67 | unknown (0/67 priced) | 15.0% | 46.3% | 2.8% | 86.6% | — | A |
| `26452610a5f5` | OpenCode · big-pickle (rules unknown) | 13 | 13 | unknown (0/13 priced) | 0.0% | 0.0% | 0.0% | 84.6% | — | A |
| `32595b67df50` | OpenCode · nvidia/nemotron-3.5-super-vl-120b-a12b | 8 | 5 | unknown (0/8 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `3f0c9988a23e` | OpenCode · deepseek-ai/deepseek-v4.1-flash | 3 | 3 | unknown (0/3 priced) | 33.3% | 0.0% | 0.0% | 33.3% | — | A |
| `564bfa92005a` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `66a48f543948` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `81653cead980` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.2% | 100.0% | — | A |
| `8e805ea17fb4` | OpenCode · gemini-2.5-flash | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `9a274dddff62` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 14 | 14 | unknown (0/14 priced) | 7.1% | 0.0% | 0.0% | 57.1% | — | A |
| `ab9f3fbdce0b` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 3 | 3 | unknown (0/3 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `c925330e1055` | OpenCode · minimax-m3.1-flash | 13 | 13 | unknown (0/13 priced) | 0.0% | 0.0% | 0.0% | 92.3% | — | A |
| `cf43ce5d160f` | OpenCode · nvidia/nemotron-3.5-lightning:free | 4 | 4 | unknown (0/4 priced) | 0.0% | 0.0% | 0.0% | 75.0% | — | A |
| `efd01d46171b` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `fd344e482868` | OpenCode · poolside/laguna-s-2.1:free | 10 | 5 | unknown (0/10 priced) | 20.0% | 0.0% | 0.0% | 50.0% | — | A |

## Notes

- 16 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 156 sessions have no price (unknown model, or a price that depends on prompt size)
- 8 sessions have no setup because their rules hash is unknown
- suspect call: difficulty-matched odds ratio 39.72 (p 0.0000) for 23c9bebb98c6 vs the rest

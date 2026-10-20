# Review: alehar9320/agentic-odi

- Review id: `alehar9320__agentic-odi-20261020083803`
- Created: 2026-10-20T08:38:03.521Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `suspect`
- Suspect: 23c9bebb98c6

Setup 23c9bebb98c6 is flagged. Comparing sessions of the same difficulty tercile, its bad outcomes (reverted, or more than 30% of its lines reworked by a human) have odds 12.72 times the other setups' (95% CI 2.26 to 71.56, p 0.0005). This is observational evidence, not proof.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1337684859d7` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `184968ac3576` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 4 | 0 | unknown (0/4 priced) | too young | too young | too young | 100.0% | — | A |
| `1eeabb1798a6` | OpenCode · deepseek-v4.1-flash-free (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `23c9bebb98c6` | OpenCode · big-pickle (rules unknown) | 65 | 65 | unknown (0/65 priced) | 45.5% | 47.7% | 2.9% | 87.7% | — | A |
| `26452610a5f5` | OpenCode · big-pickle (rules unknown) | 15 | 12 | unknown (0/15 priced) | 0.0% | 0.0% | 0.0% | 80.0% | — | A |
| `408c6ef910f9` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `66a48f543948` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |
| `81653cead980` | OpenCode · unknown (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.2% | 100.0% | — | A |
| `ab9f3fbdce0b` | OpenCode · nemotron-3.5-lightning-free (rules unknown) | 3 | 2 | unknown (0/3 priced) | 0.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 11 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 94 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: difficulty-matched odds ratio 12.72 (p 0.0005) for 23c9bebb98c6 vs the rest

# Review: itsmeyaw/binden

- Review id: `itsmeyaw__binden-20261013132427`
- Created: 2026-10-13T13:24:27.329Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2dd3bfb9140f` | OpenCode · openai.gpt-5.6-terra (rules unknown) | 1 | 1 | unknown (0/1 priced) | 9.6% | 100.0% | 0.0% | 100.0% | — | A |
| `39e8d6de23c8` | OpenCode · unknown | 3 | 3 | unknown (0/3 priced) | 96.7% | 0.0% | 0.0% | 0.0% | — | A |
| `4eccfade9d2f` | OpenCode · anthropic.claude-sonnet-5-5 (rules unknown) | 1 | 1 | $6.97 | 94.6% | 0.0% | 0.0% | 100.0% | $7.37 | A |
| `72e05b2601c3` | OpenCode · anthropic.claude-sonnet-5-5 (rules unknown) | 6 | 1 | $2.99 | 100.0% | 0.0% | 0.0% | 100.0% | $0.00 | A |
| `76b2410a6ec5` | OpenCode · openai.gpt-5.6-terra (rules unknown) | 5 | 5 | unknown (0/5 priced) | 95.8% | 0.0% | 0.1% | 80.0% | — | A |
| `7ad4d7748363` | OpenCode · openai.gpt-6-luna | 12 | 12 | unknown (0/12 priced) | 81.2% | 0.0% | 3.0% | 75.0% | — | A |
| `b9da429088d0` | OpenCode · openai.gpt-6.1-sol | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `d38c60a026b9` | OpenCode · openai.gpt-5.6-luna | 13 | 13 | unknown (0/13 priced) | 73.9% | 7.7% | 7.3% | 38.5% | — | A |

## Notes

- 12 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 42 sessions have no price (unknown model, or a price that depends on prompt size)
- 7 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

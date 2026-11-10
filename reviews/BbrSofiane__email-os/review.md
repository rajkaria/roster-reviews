# Review: BbrSofiane/email-os

- Review id: `BbrSofiane__email-os-20261110111912`
- Created: 2026-11-10T11:19:12.359Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `07bb48443cba` | Pi · openai/gpt-6.1-sol | 4 | 4 | unknown (0/4 priced) | 87.8% | 0.0% | 4.0% | 75.0% | — | A |
| `13c4217bacc0` | Pi · gpt-6-astra | 1 | 1 | $1.48 | 97.4% | 0.0% | 2.9% | 100.0% | $1.52 | A |
| `18f9e6037871` | Pi · mistral-large-4 | 1 | 1 | unknown (0/1 priced) | 92.8% | 0.0% | 0.4% | 0.0% | — | A |
| `35330a03cbb9` | Pi · z-ai/glm-5.3-flash | 2 | 2 | unknown (0/2 priced) | 92.1% | 0.0% | 0.8% | 100.0% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 2 | 2 | $5.90 | 47.7% | 0.0% | 3.5% | 50.0% | $6.19 | A |
| `63585ff5bfa6` | Pi · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `645bdcfd61d8` | Pi · glm-5.3-flash | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 50.0% | — | A |
| `72389f1baa31` | Pi · gpt-6.1-sol | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `94304fba8bc8` | Claude Code · claude-sonnet-5-5 | 15 | 14 | $36.42 | 76.8% | 7.1% | 9.2% | 20.0% | $2.87 | A |
| `f2cf008d960c` | Pi · deepseek-v4.1-flash | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |

## Notes

- 8 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 14 sessions have no price (unknown model, or a price that depends on prompt size)
- 7 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

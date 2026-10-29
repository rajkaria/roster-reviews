# Review: chrisdoc/pi-pii-redact

- Review id: `chrisdoc__pi-pii-redact-20261029100541`
- Created: 2026-10-29T10:05:41.663Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0d78d4393f57` | Claude Code · claude-opus-5-5 (rules 1c31aa) | 2 | 0 | $9.45 | too young | too young | too young | 0.0% | — | A |
| `5111353d9961` | Antigravity · unknown (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 (rules unknown) | 4 | 0 | $5.47 | too young | too young | too young | 0.0% | — | A |
| `5692f6ef27ff` | Antigravity · gemini-3.8-flash-high | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `619b2a645711` | Antigravity · gemini-3.8-flash-tiered | 10 | 10 | unknown (0/10 priced) | 89.8% | 10.0% | 13.5% | 0.0% | — | A |
| `66e99877fde1` | Antigravity · unknown (rules unknown) | 3 | 3 | unknown (0/3 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `aed67baf6fb8` | Antigravity · unknown (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `cff46e5fa9f8` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $0.99 | too young | too young | too young | 0.0% | — | A |
| `dc81c4cd094e` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 0 | $0.10 | too young | too young | too young | 0.0% | — | A |

## Notes

- 11 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 16 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

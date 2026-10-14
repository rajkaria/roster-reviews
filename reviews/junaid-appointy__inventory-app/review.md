# Review: junaid-appointy/inventory-app

- Review id: `junaid-appointy__inventory-app-20261014084917`
- Created: 2026-10-14T08:49:17.483Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2dc0e8268956` | Claude Code · claude-opus-4-8 (rules b7f469) | 2 | 1 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 50.0% | — | A |
| `3cfa8bbf8841` | Claude Code · claude-opus-4-7 (rules 7571fc) | 4 | 4 | unknown (0/4 priced) | 56.2% | 25.0% | 1.1% | 25.0% | — | A |
| `47b46e2b5e10` | Claude Code · claude-opus-4-7 (rules unknown) | 10 | 10 | unknown (0/10 priced) | 76.1% | 10.0% | 0.5% | 30.0% | — | A |
| `4cce03b0b938` | Claude Code · claude-opus-4-7 (rules 27b2d9) | 1 | 1 | unknown (0/1 priced) | 70.5% | 0.0% | 0.4% | 0.0% | — | A |
| `7cded9778588` | Claude Code · claude-opus-4-7 (rules 825c26) | 1 | 1 | unknown (0/1 priced) | 90.1% | 0.0% | 1.5% | 100.0% | — | A |
| `8936cf987a58` | Claude Code · claude-opus-4-7 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 49.3% | 0.0% | 0.4% | 0.0% | — | A |
| `92ffecb814bd` | Claude Code · claude-opus-5-5 | 1 | 0 | $142.17 | too young | too young | too young | 0.0% | — | A |
| `b7c70da23de4` | Claude Code · claude-opus-5 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `de3c755054b9` | Claude Code · claude-opus-4-8 (rules 8c50ed) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `fd7b435da3c4` | Claude Code · claude-haiku-4-5-20251001 | 3 | 3 | unknown (0/3 priced) | 72.6% | 0.0% | 0.3% | 33.3% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 24 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

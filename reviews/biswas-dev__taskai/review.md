# Review: biswas-dev/taskai

- Review id: `biswas-dev__taskai-20261121111334`
- Created: 2026-11-21T11:13:34.829Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `266ee30b79d4` | Claude Code · claude-opus-5-5[1m] | 1 | 1 | $31.58 | 84.8% | 0.0% | 2.3% | 0.0% | $37.24 | A |
| `5d47ed832a5e` | Claude Code · claude-sonnet-4-5-20250929 | 2 | 2 | unknown (0/2 priced) | 97.6% | 0.0% | 0.0% | 0.0% | — | A |
| `77ff76d8ceaa` | Claude Code · claude-opus-5-5 | 1 | 0 | $10.59 | too young | too young | too young | 0.0% | — | A |
| `ab91f254d447` | Claude Code · claude-opus-4-6[1m] | 7 | 7 | unknown (0/7 priced) | 43.0% | 14.3% | 17.7% | 0.0% | — | A |
| `b70d8a8d1b95` | Claude Code · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `d358ae17c46f` | Claude Code · claude-opus-4-7[1m] | 2 | 2 | unknown (0/2 priced) | 79.6% | 0.0% | 0.0% | 0.0% | — | A |
| `e9b48cc262bb` | Claude Code · claude-opus-4-6 | 8 | 8 | unknown (0/8 priced) | 65.3% | 0.0% | 0.0% | 0.0% | — | A |
| `ee19ce7f4185` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 88.3% | 0.0% | 1.7% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 21 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

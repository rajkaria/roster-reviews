# Review: ta93abe/me

- Review id: `ta93abe__me-20261124135135`
- Created: 2026-11-24T13:51:35.295Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `13c50cfb184d` | Claude Code · claude-opus-5-5 | 2 | 0 | $82.69 | too young | too young | too young | 0.0% | — | A |
| `3152ffc21340` | Claude Code · claude-fable-5 | 1 | 1 | unknown (0/1 priced) | 76.9% | 0.0% | 14.8% | 0.0% | — | A |
| `47e49d385727` | Claude Code · unknown | 1 | 1 | unknown (0/1 priced) | 22.5% | 100.0% | 51.7% | 0.0% | — | A |
| `5b2b1e537406` | Codex · gpt-5.5 | 1 | 1 | unknown (0/1 priced) | 50.0% | 100.0% | 75.0% | 0.0% | — | A |
| `69fe34ad9e30` | Claude Code · claude-sonnet-4-6 | 1 | 1 | unknown (0/1 priced) | 95.8% | 0.0% | 1.9% | 0.0% | — | A |
| `6b468a41bf53` | Claude Code · claude-opus-4-8[1m] | 3 | 3 | unknown (0/3 priced) | 28.2% | 33.3% | 21.6% | 0.0% | — | A |
| `803092b29a9d` | Codex · gpt-5.6-sol | 2 | 2 | unknown (0/2 priced) | 59.0% | 0.0% | 3.7% | 0.0% | — | A |
| `e9b48cc262bb` | Claude Code · claude-opus-4-6 | 1 | 1 | unknown (0/1 priced) | 56.3% | 100.0% | 1.1% | 100.0% | — | A |
| `fe91757040ba` | Claude Code · claude-opus-5 | 2 | 2 | unknown (0/2 priced) | 68.3% | 50.0% | 34.5% | 0.0% | — | A |

## Notes

- 9 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 18 sessions have no price (unknown model, or a price that depends on prompt size)
- 7 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

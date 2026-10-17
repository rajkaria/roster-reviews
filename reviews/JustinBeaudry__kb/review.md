# Review: JustinBeaudry/kb

- Review id: `JustinBeaudry__kb-20261017075244`
- Created: 2026-10-17T07:52:44.331Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `229adeb76f33` | Codex · gpt-6-astra | 1 | 0 | $67.13 | too young | too young | too young | 0.0% | — | A |
| `5b2b1e537406` | Codex · gpt-5.5 | 2 | 1 | unknown (0/2 priced) | 67.6% | 0.0% | 35.1% | 100.0% | — | A |
| `8936cf987a58` | Claude Code · claude-opus-4-7 | 2 | 2 | unknown (0/2 priced) | 50.0% | 50.0% | 0.0% | 0.0% | — | A |
| `d358ae17c46f` | Claude Code · claude-opus-4-7[1m] | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 0.0% | 0.0% | — | A |
| `e9b48cc262bb` | Claude Code · claude-opus-4-6 | 2 | 2 | unknown (0/2 priced) | 35.5% | 50.0% | 6.7% | 0.0% | — | A |

## Notes

- 24 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 29 sessions have no price (unknown model, or a price that depends on prompt size)
- 22 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

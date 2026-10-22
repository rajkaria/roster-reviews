# Review: Squidys-Tools/inkling

- Review id: `Squidys-Tools__inkling-20261022084204`
- Created: 2026-10-22T08:42:04.048Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `43cd502b229d` | Claude Code · claude-opus-5-5 | 1 | 0 | $21.51 | too young | too young | too young | 0.0% | — | A |
| `6058e8bc0359` | Codex · gpt-6-luna (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `92d063e6d1fd` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $2.89 | too young | too young | too young | 0.0% | — | A |
| `e875627d1072` | Codex · gpt-6-luna (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: 01a118d6-232d-7300-9988-be06e6399731: not_scored: every changed file was skipped (src/App.css: over 5000 lines (5498))
- 3 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

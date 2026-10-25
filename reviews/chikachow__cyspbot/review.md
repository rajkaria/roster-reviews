# Review: chikachow/cyspbot

- Review id: `chikachow__cyspbot-20261025083049`
- Created: 2026-10-25T08:30:49.826Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `15b695c6240d` | Codex · gpt-6-astra (rules unknown) | 1 | 0 | $8.15 | too young | too young | too young | 0.0% | — | A |
| `229adeb76f33` | Codex · gpt-6-astra (rules unknown) | 4 | 3 | $58.24 | 53.8% | 33.3% | 0.8% | 0.0% | $32.57 | A |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 2 | 2 | unknown (0/2 priced) | 21.2% | 50.0% | 50.0% | 0.0% | — | A |
| `f5e5e5ebaeae` | Codex · gpt-5.6-luna | 1 | 1 | unknown (0/1 priced) | 6.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 84 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 84 sessions have no price (unknown model, or a price that depends on prompt size)
- 82 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

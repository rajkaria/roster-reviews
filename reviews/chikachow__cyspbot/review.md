# Review: chikachow/cyspbot

- Review id: `chikachow__cyspbot-20261026090252`
- Created: 2026-10-26T09:02:52.611Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `15b695c6240d` | Codex · gpt-6-astra (rules unknown) | 1 | 1 | $35.24 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `229adeb76f33` | Codex · gpt-6-astra (rules unknown) | 4 | 4 | $58.24 | 65.4% | 25.0% | 0.6% | 0.0% | $22.27 | A |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 2 | 2 | unknown (0/2 priced) | 21.2% | 50.0% | 50.0% | 0.0% | — | A |
| `f5e5e5ebaeae` | Codex · gpt-5.6-luna | 1 | 1 | unknown (0/1 priced) | 6.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 82 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 84 sessions have no price (unknown model, or a price that depends on prompt size)
- 82 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

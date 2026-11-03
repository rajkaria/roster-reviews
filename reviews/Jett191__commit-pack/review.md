# Review: Jett191/commit-pack

- Review id: `Jett191__commit-pack-20261103105842`
- Created: 2026-11-03T10:58:42.270Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `9a08df7b2628` | Codex · gpt-6-astra (rules unknown) | 1 | 0 | $3.51 | too young | too young | too young | 0.0% | — | A |
| `afe33c8b62da` | Cursor · grok-4.7-high-fast | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `b3c576374a7e` | Codex · gpt-6-astra (rules unknown) | 3 | 2 | $11.71 | 97.4% | 50.0% | 31.3% | 0.0% | $4.64 | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions have no price (unknown model, or a price that depends on prompt size)
- 2 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: petercr/jev-orchestrator

- Review id: `petercr__jev-orchestrator-20261015082335`
- Created: 2026-10-15T08:23:35.342Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0d67e9e9afc4` | Codex · gpt-5.6-terra | 1 | 1 | unknown (0/1 priced) | 98.5% | 0.0% | 10.6% | 0.0% | — | A |
| `15894bbd258d` | Codex · gpt-6-astra | 1 | 0 | $2.70 | too young | too young | too young | 0.0% | — | A |
| `1593e4ec5ef9` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 87.9% | 0.0% | 11.1% | 0.0% | — | A |
| `2d85e4310da1` | Codex · gpt-6.1-sol (rules unknown) | 2 | 2 | unknown (0/2 priced) | 96.2% | 0.0% | 5.3% | 100.0% | — | A |
| `308b61c6d44f` | Codex · gpt-6.1-sol (rules unknown) | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 50.0% | — | A |
| `4e21faaa6348` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 98.4% | 0.0% | 1.4% | 0.0% | — | A |
| `8fccdcfb3fa6` | Codex · gpt-6-luna (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `a39cc49ab51e` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 95.4% | 0.0% | 7.4% | 0.0% | — | A |
| `aa663c1fb61f` | Codex · gpt-6-luna (rules unknown) | 1 | 1 | unknown (0/1 priced) | 96.2% | 0.0% | 5.3% | 100.0% | — | A |
| `deb3d82a719f` | Codex · gpt-5.6-sol | 1 | 1 | unknown (0/1 priced) | 91.7% | 0.0% | 15.0% | 0.0% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 11 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

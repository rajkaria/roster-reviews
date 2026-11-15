# Review: sandbox-kit/kit

- Review id: `sandbox-kit__kit-20261115110128`
- Created: 2026-11-15T11:01:28.991Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0c3e6bcc7717` | Cursor · default (rules unknown) | 25 | 25 | unknown (0/25 priced) | 49.3% | 28.0% | 27.9% | 20.0% | — | A |
| `13edbb0b8613` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 48.7% | 0.0% | 2.4% | 100.0% | — | A |
| `2a87b8e41377` | Cursor · default (rules unknown) | 2 | 2 | unknown (0/2 priced) | 19.8% | 100.0% | 68.0% | 0.0% | — | A |
| `2d8921051711` | Cursor · composer-2.5 | 2 | 2 | unknown (0/2 priced) | 4.9% | 50.0% | 50.6% | 50.0% | — | A |
| `3accc2af4ea7` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 20.4% | 0.0% | 7.6% | 100.0% | — | A |
| `5ab4a0dafefb` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 13.1% | 0.0% | 10.9% | 0.0% | — | A |
| `710fadb52a32` | Cursor · default (rules unknown) | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 12.5% | 100.0% | — | A |
| `724ef08d856d` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 52.2% | 0.0% | 43.0% | 0.0% | — | A |
| `7f6e8cb176b2` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 8.0% | 0.0% | 11.1% | 100.0% | — | A |
| `9a866ed65dc4` | Cursor · default (rules unknown) | 4 | 0 | unknown (0/4 priced) | too young | too young | too young | 25.0% | — | A |
| `a86303d751c2` | Cursor · grok-4.7-medium (rules unknown) | 2 | 2 | unknown (0/2 priced) | 5.2% | 100.0% | 88.9% | 100.0% | — | A |
| `acd0b356d769` | Cursor · grok-4.7-medium (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `b5077ddf6902` | Cursor · default (rules unknown) | 6 | 0 | unknown (0/6 priced) | too young | too young | too young | 16.7% | — | A |
| `b7af8f95676e` | Cursor · default (rules unknown) | 6 | 5 | unknown (0/6 priced) | 66.9% | 20.0% | 8.7% | 66.7% | — | A |
| `b91ca13b8bfd` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 6.5% | 100.0% | 70.6% | 0.0% | — | A |
| `ce69db05e4bc` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 91.9% | 0.0% | 2.0% | 0.0% | — | A |
| `de21d4b2c39b` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 73.2% | 0.0% | 5.4% | 0.0% | — | A |
| `e3df46e248b2` | Cursor · default (rules unknown) | 1 | 1 | unknown (0/1 priced) | 15.6% | 100.0% | 73.7% | 0.0% | — | A |

## Notes

- 28 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 76 sessions have no price (unknown model, or a price that depends on prompt size)
- 17 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

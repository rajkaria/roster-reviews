# Review: gkeyllorg/gkeyll

- Review id: `gkeyllorg__gkeyll-20261021083958`
- Created: 2026-10-21T08:39:58.195Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `suspect`
- Suspect: e0969b715ba1

Setup e0969b715ba1 is flagged. Comparing sessions of the same difficulty tercile, its bad outcomes (reverted, or more than 30% of its lines reworked by a human) have odds 11.87 times the other setups' (95% CI 1.97 to 71.39, p 0.0132). This is observational evidence, not proof.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `229adeb76f33` | Codex · gpt-6-astra (rules unknown) | 2 | 2 | $7.68 | 0.0% | 0.0% | 0.4% | 50.0% | — | A |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |
| `5d58148ee8b1` | Codex · gpt-5.6-terra (rules unknown) | 2 | 2 | unknown (0/2 priced) | 0.4% | 0.0% | 5.5% | 0.0% | — | A |
| `6bdbcf6d6357` | Codex · gpt-6-astra (rules unknown) | 81 | 67 | $329.41 | 15.6% | 3.0% | 2.7% | 14.8% | $15.46 | A |
| `c904f216add7` | Claude Code · claude-sonnet-5 | 13 | 10 | unknown (0/13 priced) | 36.5% | 0.0% | 3.6% | 15.4% | — | A |
| `e0969b715ba1` | Codex · gpt-5.6-terra (rules unknown) | 24 | 21 | unknown (0/24 priced) | 55.4% | 19.0% | 25.0% | 0.0% | — | A |

## Notes

- 22 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 17 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: b0771882-fdfb-4a94-a0ba-90a492c14576: not_scored: time budget
- could not be scored: 6f89bea1-4fdc-4596-95ee-ce8feb67f4ff: not_scored: time budget
- could not be scored: 5abe0a96-4b25-4cdb-8f78-bfd23eaa4e5e: not_scored: time budget
- could not be scored: 01a0a73b-3d8b-72a2-aec3-60752bcb432c: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a0ad1e-11f9-7021-8974-6d89c028f708: not_scored: time budget
- could not be scored: 01a0ad24-832d-7822-84a5-6f3989702300: not_scored: time budget
- could not be scored: 01a0b6cf-7404-7880-8ddd-a359958a6045: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a0bafb-c297-7fc3-8d77-bbe4801212fb: not_scored: time budget
- could not be scored: 01a0d9a1-38c9-7b10-9cac-836e03287f87: git blame moments/unit/ctest_wv_vacuum_einstein_conformal.c timed out
- could not be scored: 01a0e936-dd6c-7ca1-b875-87b1638f052a: git blame moments/unit/ctest_wv_vacuum_einstein_conformal.c timed out
- could not be scored: 01a0e98a-3d71-7af3-b8bd-204e4e738ac8: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a0fbd7-ea20-76b0-bcb7-cf9ff0aa5098: not_scored: time budget
- could not be scored: 01a10d08-a203-7db0-b2c4-21ebf3d81a6f: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a11337-d85d-7ad2-9244-05582decd474: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a13b18-8208-7ec3-8dc3-4dcbe97be5f6: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a13b1f-84d6-7e52-b7b7-0aeb488dd236: git blame gyrokinetic/apps/gyrokinetic.c timed out
- could not be scored: 01a13b44-5887-7a42-80f3-19941beee7fe: git blame gyrokinetic/apps/gyrokinetic.c timed out
- 53 sessions have no price (unknown model, or a price that depends on prompt size)
- 17 sessions have no setup because their rules hash is unknown
- suspect call: difficulty-matched odds ratio 11.87 (p 0.0132) for e0969b715ba1 vs the rest

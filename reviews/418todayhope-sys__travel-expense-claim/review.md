# Review: 418todayhope-sys/travel-expense-claim

- Review id: `418todayhope-sys__travel-expense-claim-20261026090300`
- Created: 2026-10-26T09:03:00.346Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `64bbc9f14c5d` | Codex · gpt-6-luna | 5 | 3 | unknown (0/5 priced) | 37.6% | 33.3% | 0.0% | 60.0% | — | A |
| `7ca3385bdc7b` | Codex · gpt-6.1-sol | 1 | 1 | unknown (0/1 priced) | 96.7% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 0 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 2 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: 01a139c1-35c5-7573-9f1c-3ea441d862e0: git blame src/travel_claim/parsing.py timed out
- could not be scored: 01a139c9-256b-73d2-b559-bdb14329e346: git blame src/travel_claim/parsing.py timed out
- 6 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

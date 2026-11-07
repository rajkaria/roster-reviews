# Review: harrismcc/bookserve

- Review id: `harrismcc__bookserve-20261107101912`
- Created: 2026-11-07T10:19:12.386Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0f2bbd36868b` | Amp · anthropic/claude-opus-5-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 15.4% | 0.0% | 0.0% | 0.0% | — | A |
| `1d4144bb695c` | Amp · unknown (rules unknown) | 4 | 4 | unknown (0/4 priced) | 80.3% | 25.0% | 3.6% | 100.0% | — | A |
| `6f041417ff33` | Amp · unknown (rules unknown) | 2 | 2 | unknown (0/2 priced) | 90.5% | 0.0% | 0.0% | 100.0% | — | A |
| `cd86ee259ee1` | Amp · claude-opus-5-5 | 1 | 0 | $9.35 | too young | too young | too young | 0.0% | — | A |
| `d52e6a5c0c0f` | Amp · anthropic/claude-opus-5-5 (rules unknown) | 5 | 5 | unknown (0/5 priced) | 85.6% | 0.0% | 1.3% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 12 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

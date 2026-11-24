# Review: akm/claude-plugins

- Review id: `akm__claude-plugins-20261124135133`
- Created: 2026-11-24T13:51:33.882Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0003d03a807b` | Claude Code · claude-fable-5-1 (rules 634b87) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `09bfd2c6713d` | Claude Code · claude-opus-5-5 (rules d8550b) | 1 | 0 | $47.22 | too young | too young | too young | 0.0% | — | A |
| `0e22ab9595fa` | Claude Code · claude-opus-5-5 (rules acb34d) | 155 | 3 | $1811.77 | 100.0% | 0.0% | 2.2% | 21.9% | $6.79 | A |
| `24a387eb6d7f` | Claude Code · claude-opus-5-5 (rules 445256) | 1 | 0 | $34.30 | too young | too young | too young | 0.0% | — | A |
| `2af983b4f495` | Claude Code · claude-opus-5-5 (rules ae66cc) | 1 | 0 | $0.68 | too young | too young | too young | 0.0% | — | A |
| `376cd5465eef` | Claude Code · claude-fable-5-1 (rules acb34d) | 17 | 2 | unknown (0/17 priced) | 87.5% | 0.0% | 1.6% | 5.9% | — | A |
| `44d7f8865233` | Claude Code · claude-opus-5-5 (rules c06d15) | 1 | 0 | $300.87 | too young | too young | too young | 0.0% | — | A |
| `53400c7352b2` | Claude Code · claude-opus-5-5 (rules 9e7909) | 1 | 0 | $119.45 | too young | too young | too young | 0.0% | — | A |
| `64866364db60` | Claude Code · claude-opus-5-5 (rules 14cc60) | 1 | 0 | $0.87 | too young | too young | too young | 0.0% | — | A |
| `67990c062ee1` | Claude Code · claude-opus-5-5 (rules 634b87) | 13 | 0 | $401.17 | too young | too young | too young | 0.0% | — | A |
| `6eeb7a246ecc` | Claude Code · claude-sonnet-5-5 (rules acb34d) | 66 | 0 | $37.79 | too young | too young | too young | 42.4% | — | A |
| `730c37939319` | Claude Code · claude-sonnet-5-5 (rules 2065f7) | 3 | 0 | $21.50 | too young | too young | too young | 0.0% | — | A |
| `7e413634de5e` | Claude Code · <synthetic> | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `7edd10cc70e4` | Claude Code · claude-opus-5-5 (rules bd0405) | 1 | 0 | $0.96 | too young | too young | too young | 0.0% | — | A |
| `845ca881a3e0` | Claude Code · claude-opus-5-5 (rules 2065f7) | 31 | 0 | $1891.74 | too young | too young | too young | 0.0% | — | A |
| `85b1df0b60b2` | Claude Code · claude-fable-5-1 (rules 2065f7) | 7 | 0 | unknown (0/7 priced) | too young | too young | too young | 0.0% | — | A |
| `85e551a049f9` | Claude Code · claude-opus-5 (rules 15ebd8) | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 50.0% | — | A |
| `a0289087a1cd` | Claude Code · claude-sonnet-5-5 (rules bd0405) | 1 | 0 | $0.22 | too young | too young | too young | 0.0% | — | A |
| `a05857474c73` | Claude Code · claude-opus-5-5 (rules e5083e) | 2 | 0 | $12.13 | too young | too young | too young | 0.0% | — | A |
| `b7022978681f` | Claude Code · claude-fable-5-1 (rules 15ebd8) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `c556d1485a4f` | Claude Code · claude-sonnet-5-5 (rules 9e7909) | 1 | 0 | $0.26 | too young | too young | too young | 0.0% | — | A |
| `fc0dd64a50e0` | Claude Code · claude-opus-5 (rules 634b87) | 14 | 0 | unknown (0/14 priced) | too young | too young | too young | 57.1% | — | A |

## Notes

- 344 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 70 sessions have no price (unknown model, or a price that depends on prompt size)
- 27 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

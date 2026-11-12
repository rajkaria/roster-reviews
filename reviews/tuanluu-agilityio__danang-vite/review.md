# Review: tuanluu-agilityio/danang-vite

- Review id: `tuanluu-agilityio__danang-vite-20261112112332`
- Created: 2026-11-12T11:23:32.249Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `3686fd3f2040` | Claude Code · claude-opus-5-5 (rules 0e49c1) | 1 | 1 | $0.52 | 89.5% | 0.0% | 1.2% | 0.0% | $0.58 | A |
| `3ee51828e30b` | Claude Code · claude-opus-5-5 (rules e6f6f2) | 1 | 1 | $0.00 | 99.7% | 0.0% | 0.7% | 0.0% | $0.00 | A |
| `4ccb4caad4e2` | Claude Code · claude-opus-5-5 (rules 318a8a) | 1 | 1 | $0.70 | 100.0% | 0.0% | 0.0% | 0.0% | $0.70 | A |
| `53da25cd9f11` | Claude Code · claude-fable-5-2 (rules 1c9836) | 1 | 1 | unknown (0/1 priced) | 16.7% | 100.0% | 83.3% | 0.0% | — | A |
| `67f9096e07ae` | Claude Code · claude-fable-5-2 (rules ed3f4f) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `7111362aa712` | Claude Code · claude-opus-5-5 (rules 59f48c) | 3 | 3 | $7.41 | 98.2% | 0.0% | 1.1% | 0.0% | $2.52 | A |
| `7ab99444f661` | Claude Code · claude-opus-5-5 (rules ccc781) | 3 | 2 | $5.21 | 100.0% | 0.0% | 0.0% | 33.3% | $2.13 | A |
| `81b7d6881978` | Claude Code · claude-opus-5-5 (rules e5754c) | 1 | 1 | $0.75 | 100.0% | 0.0% | 0.0% | 0.0% | $0.75 | A |
| `889b9c591aed` | Claude Code · claude-opus-5-5 (rules 6136fa) | 1 | 1 | $0.00 | 98.9% | 0.0% | 0.0% | 0.0% | $0.00 | A |
| `88c2915b6651` | Claude Code · claude-opus-5-5 (rules 63aacc) | 1 | 1 | $0.00 | 50.0% | 100.0% | 50.0% | 0.0% | $0.00 | A |
| `958746da2519` | Claude Code · claude-fable-5-2 (rules 2868bf) | 1 | 1 | unknown (0/1 priced) | 91.3% | 0.0% | 0.0% | 0.0% | — | A |
| `a63009a13df7` | Claude Code · claude-fable-5-2 (rules 889f4d) | 2 | 2 | unknown (0/2 priced) | 93.9% | 0.0% | 5.7% | 0.0% | — | A |
| `b7115ef94072` | Claude Code · claude-opus-5-5 (rules feea37) | 1 | 0 | $1.22 | too young | too young | too young | 0.0% | — | A |
| `fe63d55f8588` | Claude Code · claude-fable-5-2 (rules c0fe5f) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 6 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

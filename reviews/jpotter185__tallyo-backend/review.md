# Review: jpotter185/tallyo-backend

- Review id: `jpotter185__tallyo-backend-20261014084912`
- Created: 2026-10-14T08:49:12.238Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2e22715283dd` | Claude Code · claude-fable-5 (rules 12add4) | 2 | 2 | unknown (0/2 priced) | 81.1% | 0.0% | 2.1% | 0.0% | — | A |
| `3d35ea4b1e59` | Claude Code · claude-opus-5-5 (rules 805cab) | 1 | 1 | $2.31 | 63.6% | 0.0% | 36.4% | 0.0% | $3.64 | A |
| `4e2b1b355517` | Claude Code · claude-fable-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 95.4% | 0.0% | 0.5% | 0.0% | — | A |
| `656e37f4654d` | Claude Code · claude-fable-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 25.0% | 100.0% | 25.0% | 0.0% | — | A |
| `b4b7e7a5bf04` | Claude Code · claude-opus-5-5 (rules ffa2d5) | 1 | 1 | $3.01 | 85.2% | 0.0% | 0.0% | 0.0% | $3.53 | A |

## Notes

- 0 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 5 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

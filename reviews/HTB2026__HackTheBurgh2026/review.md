# Review: HTB2026/HackTheBurgh2026

- Review id: `HTB2026__HackTheBurgh2026-20261108102827`
- Created: 2026-11-08T10:28:27.585Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `38da687bd61b` | Claude Code · claude-opus-5-5 (rules d6acbb) | 2 | 2 | $0.00 | 71.7% | 0.0% | 28.1% | 0.0% | $0.00 | A |
| `3c50505db2ea` | Claude Code · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `84ceb862f851` | Claude Code · claude-opus-5-5 (rules 78452f) | 1 | 1 | $1.02 | 96.5% | 0.0% | 0.2% | 0.0% | $1.06 | A |
| `9b1845712424` | Claude Code · claude-opus-5-5 (rules 84a473) | 1 | 1 | $3.26 | 78.9% | 0.0% | 0.0% | 0.0% | $4.13 | A |

## Notes

- 0 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

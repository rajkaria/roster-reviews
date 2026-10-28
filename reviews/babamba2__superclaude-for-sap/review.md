# Review: babamba2/superclaude-for-sap

- Review id: `babamba2__superclaude-for-sap-20261028094640`
- Created: 2026-10-28T09:46:40.559Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `04c1c01c12ca` | Claude Code · claude-opus-5-5 (rules b8b629) | 3 | 3 | $128.70 | 96.7% | 0.0% | 0.0% | 100.0% | $44.35 | A |
| `1a3f1e9f9aac` | Claude Code · claude-opus-5-5 (rules 09cf05) | 2 | 2 | $25.38 | 98.9% | 0.0% | 0.0% | 100.0% | $12.83 | A |
| `3a5df6d57f00` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $1.82 | 89.7% | 0.0% | 4.2% | 100.0% | $2.03 | A |
| `4962478318ca` | Claude Code · claude-opus-4-7[1m] | 1 | 1 | unknown (0/1 priced) | 85.0% | 0.0% | 8.9% | 0.0% | — | A |
| `4f20676e66f9` | Claude Code · claude-opus-5-5 (rules c2b135) | 4 | 4 | $56.31 | 94.0% | 0.0% | 1.2% | 100.0% | $14.97 | A |
| `52734aa78c08` | Claude Code · claude-opus-5-5 (rules 89bacb) | 1 | 1 | $8.14 | 98.6% | 0.0% | 0.0% | 100.0% | $8.26 | A |
| `575f72e67eeb` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $0.70 | 100.0% | 0.0% | 0.0% | 100.0% | $0.70 | A |
| `713ed3781fc7` | Claude Code · claude-opus-4-7 (rules unknown) | 6 | 5 | unknown (0/6 priced) | 69.7% | 0.0% | 5.8% | 66.7% | — | A |
| `8495ae0a71ee` | Claude Code · claude-opus-5-5 (rules 6ccb7e) | 1 | 1 | $44.22 | 99.1% | 0.0% | 0.0% | 100.0% | $44.62 | A |
| `8c3e2dca1abe` | Claude Code · claude-opus-5-5 (rules abe441) | 1 | 1 | $83.00 | 37.5% | 0.0% | 45.5% | 100.0% | $221.33 | A |
| `a374448a951f` | Claude Code · claude-opus-5-5 (rules c0935b) | 2 | 2 | $34.30 | 97.6% | 0.0% | 1.2% | 100.0% | $17.57 | A |
| `a381cc570203` | Claude Code · claude-opus-4-7 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 51.0% | 0.0% | 14.3% | 50.0% | — | A |
| `b84cde69171a` | Claude Code · claude-opus-4-8[1m] | 1 | 1 | unknown (0/1 priced) | 94.1% | 0.0% | 3.1% | 0.0% | — | A |
| `c4595f0cb476` | Claude Code · claude-fable-5 | 1 | 1 | unknown (0/1 priced) | 95.7% | 0.0% | 2.4% | 0.0% | — | A |
| `dc969432d1ac` | Claude Code · claude-sonnet-4-6 | 1 | 1 | unknown (0/1 priced) | 94.7% | 0.0% | 3.9% | 0.0% | — | A |
| `dd8dca5d364d` | Claude Code · claude-opus-5-5 (rules 416805) | 4 | 4 | $43.25 | 91.3% | 0.0% | 0.1% | 100.0% | $11.85 | A |
| `e5535dfeb239` | Claude Code · claude-opus-5-5 (rules a95455) | 1 | 0 | $5.16 | too young | too young | too young | 100.0% | — | A |
| `ee0d50be9e48` | Claude Code · claude-opus-5-5 (rules e8e94e) | 1 | 1 | $36.21 | 98.7% | 0.0% | 0.1% | 100.0% | $36.67 | A |

## Notes

- 6 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 16 sessions have no price (unknown model, or a price that depends on prompt size)
- 4 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

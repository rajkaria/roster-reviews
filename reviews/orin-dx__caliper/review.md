# Review: orin-dx/caliper

- Review id: `orin-dx__caliper-20261024081303`
- Created: 2026-10-24T08:13:03.224Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1dd8bd1ac246` | Claude Code · claude-opus-5[1m] | 1 | 1 | unknown (0/1 priced) | 6.6% | 0.0% | 0.0% | 0.0% | — | A |
| `35aa2c871858` | Claude Code · claude-sonnet-5 (rules 9bffeb) | 1 | 1 | unknown (0/1 priced) | 21.7% | 0.0% | 0.0% | 0.0% | — | A |
| `3a03e2f931d9` | Claude Code · claude-sonnet-5-5 | 1 | 1 | $281.96 | 95.3% | 0.0% | 2.2% | 0.0% | $295.91 | A |
| `c3b4d0cf13d2` | Claude Code · claude-sonnet-5 (rules ca5bbf) | 2 | 1 | unknown (0/2 priced) | 4.1% | 0.0% | 0.6% | 50.0% | — | A |
| `c70cc9e34e1f` | Claude Code · claude-sonnet-5 (rules 978aa0) | 1 | 1 | unknown (0/1 priced) | 6.6% | 0.0% | 0.0% | 0.0% | — | A |
| `cb8e85ad0a05` | Claude Code · claude-sonnet-4-6 | 1 | 1 | unknown (0/1 priced) | 47.8% | 0.0% | 3.4% | 0.0% | — | A |

## Notes

- 71 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 76 sessions have no price (unknown model, or a price that depends on prompt size)
- 70 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

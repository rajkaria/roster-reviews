# Review: basher83/tailnet-microservices

- Review id: `basher83__tailnet-microservices-20261107101904`
- Created: 2026-11-07T10:19:04.146Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `1911f8b66fdf` | Pi · gpt-5.6-terra | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `2be35fd8b796` | Pi · claude-sonnet-5 | 4 | 4 | unknown (0/4 priced) | 75.0% | 0.0% | 0.0% | 100.0% | — | A |
| `2d970e980093` | Claude Code · claude-opus-4-8[1m] | 2 | 2 | unknown (0/2 priced) | 91.7% | 0.0% | 7.7% | 0.0% | — | A |
| `4c2041aa2c7e` | Claude Code · claude-opus-4-6 | 5 | 5 | unknown (0/5 priced) | 73.5% | 0.0% | 0.0% | 60.0% | — | A |
| `600bf6c9fb71` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $0.14 | too young | too young | too young | 100.0% | — | A |
| `68a0ae4a1e1b` | Claude Code · claude-fable-5-1 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `70aa0ba5d329` | Claude Code · claude-opus-5-5 (rules 7c7b56) | 2 | 1 | $3.62 | 100.0% | 0.0% | 0.0% | 50.0% | $3.17 | A |
| `869fd8495cd7` | Pi · claude-fable-5-1 | 3 | 3 | unknown (0/3 priced) | 75.0% | 0.0% | 0.0% | 100.0% | — | A |
| `a000fcb58224` | Claude Code · claude-opus-5-5 (rules 0c0da1) | 1 | 0 | $3.19 | too young | too young | too young | 0.0% | — | A |
| `a46f6e49a98b` | Claude Code · claude-fable-5 | 1 | 1 | unknown (0/1 priced) | 95.4% | 0.0% | 0.0% | 0.0% | — | A |
| `a55a65542284` | Pi · claude-haiku-4-5 | 3 | 3 | unknown (0/3 priced) | 75.0% | 0.0% | 0.0% | 100.0% | — | A |
| `c7aee3d404c3` | Pi · gpt-5.6-sol | 1 | 1 | unknown (0/1 priced) | 84.2% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 21 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

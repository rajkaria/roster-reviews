# Review: Cj-bc/webxr-fable-demo

- Review id: `Cj-bc__webxr-fable-demo-20261124135135`
- Created: 2026-11-24T13:51:35.351Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `518d4e106433` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $9.45 | 99.5% | 0.0% | 0.0% | 0.0% | $9.49 | A |
| `8718acc46b7d` | Claude Code · claude-fable-5-2 | 1 | 1 | unknown (0/1 priced) | 91.2% | 0.0% | 0.0% | 0.0% | — | A |
| `ca930686345d` | Claude Code · claude-opus-5-5 (rules b6d67c) | 6 | 3 | $7.66 | 99.8% | 0.0% | 0.0% | 16.7% | $1.85 | A |
| `f93769548e98` | Codex · gpt-6.2-astra | 6 | 0 | unknown (0/6 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 9 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 7 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

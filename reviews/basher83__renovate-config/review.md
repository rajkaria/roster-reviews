# Review: basher83/renovate-config

- Review id: `basher83__renovate-config-20261108102848`
- Created: 2026-11-08T10:28:48.791Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `399d7f534755` | Claude Code · claude-opus-5-5 (rules f0d7cf) | 1 | 1 | $4.60 | 100.0% | 0.0% | 0.0% | 0.0% | $4.60 | A |
| `60de56454d53` | Codex · gpt-6.1-sol (rules unknown) | 2 | 2 | unknown (0/2 priced) | 87.3% | 0.0% | 0.0% | 50.0% | — | A |
| `6ece6f3ebf69` | Claude Code · claude-opus-5-5 (rules dc32df) | 1 | 1 | $15.90 | 100.0% | 0.0% | 0.0% | 0.0% | $15.90 | A |
| `77646df4d05f` | Claude Code · claude-opus-5-5 (rules f22218) | 1 | 1 | $0.00 | 97.8% | 0.0% | 0.0% | 100.0% | $0.00 | A |
| `9dc75953b4da` | Pi · gpt-5.5 | 1 | 1 | unknown (0/1 priced) | 3.9% | 0.0% | 0.3% | 100.0% | — | A |
| `9e1bb29601e7` | Pi · claude-opus-5-5 | 1 | 0 | $0.93 | too young | too young | too young | 0.0% | — | A |
| `bbff9121d414` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 97.8% | 0.0% | 0.0% | 0.0% | — | A |
| `ea88452d0ab6` | Codex · gpt-6.1-sol (rules unknown) | 3 | 3 | unknown (0/3 priced) | 84.4% | 0.0% | 0.0% | 33.3% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 7 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

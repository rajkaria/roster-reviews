# Review: Cj-bc/webxr-fable-demo

- Review id: `Cj-bc__webxr-fable-demo-20261128115423`
- Created: 2026-11-28T11:54:23.741Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `518d4e106433` | Claude Code · claude-opus-5-5 (rules unknown) | 1 | 1 | $9.45 | 99.5% | 0.0% | 0.0% | 0.0% | $9.49 | A |
| `8718acc46b7d` | Claude Code · claude-fable-5-2 | 1 | 1 | unknown (0/1 priced) | 90.2% | 0.0% | 0.0% | 0.0% | — | A |
| `ca930686345d` | Claude Code · claude-opus-5-5 (rules b6d67c) | 10 | 9 | $16.02 | 95.3% | 0.0% | 0.0% | 20.0% | $1.82 | A |
| `f93769548e98` | Codex · gpt-6.2-astra | 6 | 6 | unknown (0/6 priced) | 93.3% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 7 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

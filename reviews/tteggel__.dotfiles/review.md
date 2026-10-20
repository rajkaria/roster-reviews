# Review: tteggel/.dotfiles

- Review id: `tteggel__.dotfiles-20261020083818`
- Created: 2026-10-20T08:38:18.390Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0d7ec272af78` | Codex · gpt-6-astra (rules unknown) | 3 | 1 | $5.45 | 100.0% | 0.0% | 0.0% | 0.0% | $0.48 | A |
| `1ecad62215a6` | Claude Code · claude-opus-5[1m] | 2 | 2 | unknown (0/2 priced) | 79.8% | 0.0% | 0.0% | 50.0% | — | A |
| `2f7870061958` | Codex · gpt-6-astra (rules unknown) | 1 | 1 | $2.38 | 91.9% | 0.0% | 2.3% | 100.0% | $2.59 | A |
| `6034c6d82854` | Claude Code · claude-opus-5-5[1m] | 2 | 2 | $10.74 | 91.9% | 0.0% | 2.3% | 0.0% | $5.84 | A |
| `70bca88058c8` | Claude Code · claude-opus-5-5 | 2 | 0 | $7.69 | too young | too young | too young | 0.0% | — | A |
| `875250c8de06` | Codex · gpt-5.6-sol | 2 | 2 | unknown (0/2 priced) | 100.0% | 0.0% | 0.0% | 100.0% | — | A |
| `8cbaab99db41` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `fde1a09a9f84` | Codex · gpt-6-astra (rules unknown) | 1 | 1 | $8.51 | 100.0% | 0.0% | 0.0% | 0.0% | $8.51 | A |

## Notes

- 4 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: fdfa7d33-c9ec-4222-bc81-51ed8f4cd5ff: not_scored: every changed file was skipped (bespoke/zellij/dim-unfocused/flake.lock: lockfile; flake.lock: lockfile)
- 6 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

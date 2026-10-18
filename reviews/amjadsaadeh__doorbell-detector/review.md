# Review: amjadsaadeh/doorbell-detector

- Review id: `amjadsaadeh__doorbell-detector-20261018080719`
- Created: 2026-10-18T08:07:19.134Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0a94f5d39e79` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 66.7% | 0.0% | 26.7% | 100.0% | — | A |
| `10632be0aded` | Claude Code · claude-fable-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `19c226a2c258` | Claude Code · claude-fable-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `1f93c98c1ce5` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `41ff0af85046` | Claude Code · claude-opus-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `7aa62d49da08` | Claude Code · claude-opus-5-5[1m] | 2 | 0 | $4.84 | too young | too young | too young | 0.0% | — | A |
| `7c19005e12c0` | Claude Code · claude-opus-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `80354e2b478d` | Claude Code · claude-opus-5-5 | 1 | 0 | $3.64 | too young | too young | too young | 0.0% | — | A |
| `848dfc92ec30` | Claude Code · claude-opus-5 (rules 8322f8) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `8554ea49bd31` | Claude Code · claude-opus-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `96f18d55ce02` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 59.7% | 100.0% | 51.0% | 0.0% | — | A |
| `9d865a645c94` | Claude Code · claude-fable-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `b614cb157195` | Claude Code · claude-fable-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `bb5600b608e7` | Claude Code · claude-sonnet-5 (rules unknown) | 2 | 2 | unknown (0/2 priced) | 13.2% | 100.0% | 5.7% | 0.0% | — | A |
| `c18baa0b8673` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $0.57 | too young | too young | too young | 0.0% | — | A |
| `c93bb4cc58ac` | Claude Code · claude-fable-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 5.6% | 0.0% | — | A |
| `d4f1088012b9` | Claude Code · claude-sonnet-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 66.7% | 0.0% | 4.1% | 0.0% | — | A |
| `e249be7dc756` | Claude Code · claude-opus-5 (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `f2facb9ad2be` | Claude Code · claude-fable-5 (rules unknown) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |

## Notes

- 19 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: b340abf8-81be-44f2-85b0-58412a0adca2: not_scored: every changed file was skipped (dvc.lock: lockfile)
- 27 sessions have no price (unknown model, or a price that depends on prompt size)
- 9 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

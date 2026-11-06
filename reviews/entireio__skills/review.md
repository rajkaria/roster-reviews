# Review: entireio/skills

- Review id: `entireio__skills-20261106110025`
- Created: 2026-11-06T11:00:25.796Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `3c50505db2ea` | Claude Code · claude-fable-5-1 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `5b2b1e537406` | Codex · gpt-5.5 | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `ab91f254d447` | Claude Code · claude-opus-4-6[1m] | 4 | 4 | unknown (0/4 priced) | 43.6% | 75.0% | 27.7% | 25.0% | — | A |
| `d358ae17c46f` | Claude Code · claude-opus-4-7[1m] | 3 | 3 | unknown (0/3 priced) | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `e6b3d51c52e9` | Codex · gpt-5.4 | 2 | 2 | unknown (0/2 priced) | 75.0% | 50.0% | 53.7% | 50.0% | — | A |

## Notes

- 7 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 17 sessions have no price (unknown model, or a price that depends on prompt size)
- 5 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

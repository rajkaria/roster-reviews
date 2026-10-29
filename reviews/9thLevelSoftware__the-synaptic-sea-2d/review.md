# Review: 9thLevelSoftware/the-synaptic-sea-2d

- Review id: `9thLevelSoftware__the-synaptic-sea-2d-20261029100529`
- Created: 2026-10-29T10:05:29.557Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `399635c00424` | Claude Code · claude-opus-5-5 (rules b43dcc) | 3 | 0 | $12.56 | too young | too young | too young | 0.0% | — | A |
| `91cd089aef09` | Claude Code · claude-sonnet-5-5 | 1 | 0 | $13.29 | too young | too young | too young | 0.0% | — | A |
| `b4e6a0030575` | Claude Code · claude-opus-5-5 (rules 19f946) | 2 | 0 | $8.28 | too young | too young | too young | 0.0% | — | A |

## Notes

- 5 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: e887ccb9-1186-40d9-9566-5eacccbd9b44: git blame design/gdd/adaptive-audio-and-tells.md timed out
- 0 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

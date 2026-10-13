# Review: basher83/Zammad-MCP

- Review id: `basher83__Zammad-MCP-20261013132416`
- Created: 2026-10-13T13:24:16.627Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `6e5338beb68a` | Codex · gpt-6.1-sol | 1 | 1 | unknown (0/1 priced) | 83.3% | 0.0% | 15.4% | 100.0% | — | A |
| `8e7f3b7d42ad` | Claude Code · claude-opus-5-5 | 1 | 1 | $2.62 | 100.0% | 0.0% | 0.0% | 0.0% | $2.62 | A |
| `95b988777634` | Codex · gpt-6-astra | 2 | 1 | $7.41 | 89.4% | 0.0% | 0.5% | 50.0% | $6.16 | A |

## Notes

- 1 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 1 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: 01a0d656-3569-7ab1-a556-3bef142a2ed4: not_scored: every changed file was skipped (uv.lock: lockfile)
- 1 sessions have no price (unknown model, or a price that depends on prompt size)
- 1 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

# Review: crcorbett/taxkit

- Review id: `crcorbett__taxkit-20261023083753`
- Created: 2026-10-23T08:37:53.255Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `2900641a46e4` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.0% | 0.0% | 1.2% | 0.0% | — | A |
| `4656e773d771` | Codex · gpt-5.5 | 1 | 1 | unknown (0/1 priced) | 50.4% | 0.0% | 2.1% | 100.0% | — | A |
| `5a7bfeeaed3d` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 0.2% | 100.0% | 90.1% | 0.0% | — | A |
| `63e124e6f8f7` | Claude Code · claude-opus-5-5 (rules 504e1e) | 1 | 1 | $114.65 | 10.1% | 100.0% | 89.6% | 0.0% | $1139.53 | A |
| `6a4ae19f41fd` | Codex · gpt-6-astra (rules unknown) | 1 | 1 | $54.00 | 0.0% | 0.0% | 0.0% | 0.0% | — | A |
| `77c9cb3ebba0` | Claude Code · claude-opus-5-5 (rules 96451a) | 1 | 1 | $54.76 | 100.0% | 0.0% | 10.7% | 0.0% | $54.76 | A |
| `8e6235252b30` | Claude Code · claude-opus-5 | 1 | 1 | unknown (0/1 priced) | 50.4% | 0.0% | 2.1% | 100.0% | — | A |
| `9aa7dbf346b4` | Codex · gpt-6-astra (rules unknown) | 1 | 1 | $145.66 | 1.2% | 0.0% | 2.0% | 0.0% | $12454.31 | A |
| `ecdff216b516` | Codex · gpt-6.1-sol (rules unknown) | 1 | 1 | unknown (0/1 priced) | 85.9% | 0.0% | 8.9% | 0.0% | — | A |

## Notes

- 44 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 49 sessions have no price (unknown model, or a price that depends on prompt size)
- 44 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

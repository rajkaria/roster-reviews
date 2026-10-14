# Review: k-kinzal/php-ai-toolkit

- Review id: `k-kinzal__php-ai-toolkit-20261014084914`
- Created: 2026-10-14T08:49:14.041Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `suspect`
- Suspect: 0f6c2c59eb07

Setup 0f6c2c59eb07 is flagged. Comparing sessions of the same difficulty tercile, its bad outcomes (reverted, or more than 30% of its lines reworked by a human) have odds 7.34 times the other setups' (95% CI 1.45 to 37.07, p 0.0226). This is observational evidence, not proof.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `0f6c2c59eb07` | Codex · gpt-6-astra (rules unknown) | 9 | 9 | $31.60 | 17.8% | 77.8% | 0.0% | 77.8% | $19.73 | A |
| `2081c38379b2` | Claude Code · claude-opus-5-5[1m] | 1 | 1 | $1.00 | 0.0% | 100.0% | 0.0% | 0.0% | — | A |
| `229adeb76f33` | Codex · gpt-6-astra (rules unknown) | 18 | 18 | $218.13 | 44.5% | 50.0% | 0.0% | 61.1% | $27.26 | A |
| `5fc0651f60b1` | Codex · gpt-5.6-sol | 13 | 13 | unknown (0/13 priced) | 0.5% | 7.7% | 0.0% | 53.8% | — | A |
| `61c0d6d4698a` | Claude Code · claude-fable-5 | 1 | 1 | unknown (0/1 priced) | 0.0% | 100.0% | 0.0% | 0.0% | — | A |
| `841a05aa8e82` | Claude Code · claude-fable-5-1 (rules ada8e9) | 7 | 7 | unknown (0/7 priced) | 17.2% | 42.9% | 0.0% | 28.6% | — | A |
| `a1e60f2852ed` | Claude Code · claude-fable-5-1 (rules 56c762) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 100.0% | — | A |
| `aa283bdaa3e2` | Cursor · grok-4.7-high | 2 | 2 | unknown (0/2 priced) | 97.4% | 0.0% | 0.0% | 0.0% | — | A |
| `acae6be63ebe` | Codex · gpt-6-astra (rules unknown) | 3 | 1 | $19.29 | 100.0% | 0.0% | 0.0% | 66.7% | $6.39 | A |
| `db795108a87f` | Claude Code · claude-opus-5-5 | 6 | 6 | $58.38 | 38.8% | 33.3% | 0.0% | 16.7% | $25.10 | A |
| `fe91757040ba` | Claude Code · claude-opus-5 | 9 | 9 | unknown (0/9 priced) | 0.0% | 0.0% | 0.0% | 33.3% | — | A |

## Notes

- 28 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 54 sessions have no price (unknown model, or a price that depends on prompt size)
- 25 sessions have no setup because their rules hash is unknown
- suspect call: difficulty-matched odds ratio 7.34 (p 0.0226) for 0f6c2c59eb07 vs the rest

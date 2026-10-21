# Review: entireio/forgemark

- Review id: `entireio__forgemark-20261021083956`
- Created: 2026-10-21T08:39:56.721Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `247cc446a8a5` | Codex · gpt-5.6-sol | 11 | 11 | unknown (0/11 priced) | 91.8% | 0.0% | 1.2% | 90.9% | — | A |
| `3152ffc21340` | Claude Code · claude-fable-5 | 3 | 3 | unknown (0/3 priced) | 67.6% | 0.0% | 4.0% | 0.0% | — | A |
| `3a949e7920ec` | Claude Code · claude-opus-4-8 | 1 | 1 | unknown (0/1 priced) | 94.6% | 0.0% | 0.0% | 0.0% | — | A |
| `3c50505db2ea` | Claude Code · claude-fable-5-1 (rules unknown) | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |
| `518d4e106433` | Claude Code · claude-opus-5-5 | 1 | 1 | $4.64 | 100.0% | 0.0% | 0.0% | 0.0% | $4.64 | A |
| `6b468a41bf53` | Claude Code · claude-opus-4-8[1m] | 1 | 1 | unknown (0/1 priced) | 4.0% | 100.0% | 100.0% | 0.0% | — | A |
| `ded4c012b894` | Claude Code · claude-fable-5-1 (rules 2352f3) | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |

## Notes

- 6 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 22 sessions have no price (unknown model, or a price that depends on prompt size)
- 2 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

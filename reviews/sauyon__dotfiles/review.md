# Review: sauyon/dotfiles

- Review id: `sauyon__dotfiles-20261014084904`
- Created: 2026-10-14T08:49:04.726Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `no_suspect`
- Suspect: none

No setup is flagged: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05. The highest matched odds ratio is shown for context only.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `07438248e5d8` | Claude Code · claude-opus-5 (rules unknown) | 29 | 17 | unknown (0/29 priced) | 73.4% | 11.8% | 7.3% | 17.2% | — | A |
| `40a454766b71` | Claude Code · claude-opus-5 (rules c1825c) | 1 | 1 | unknown (0/1 priced) | 100.0% | 0.0% | 0.0% | 0.0% | — | A |
| `49764722ed0e` | Claude Code · claude-opus-5 (rules 9f0348) | 3 | 3 | unknown (0/3 priced) | 31.5% | 0.0% | 0.0% | 0.0% | — | A |
| `5e0a352c0ead` | Claude Code · claude-opus-5 (rules unknown) | 4 | 4 | unknown (0/4 priced) | 84.6% | 0.0% | 0.0% | 25.0% | — | A |
| `6c535c0db920` | Claude Code · claude-opus-5-5 (rules 5ecd29) | 1 | 1 | $1.21 | 100.0% | 0.0% | 0.0% | 0.0% | $1.21 | A |
| `868c96e7862c` | Claude Code · claude-opus-5 (rules 5ecd29) | 1 | 1 | unknown (0/1 priced) | 94.4% | 0.0% | 0.0% | 0.0% | — | A |
| `8d87b4393fc7` | Claude Code · claude-sonnet-5 | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `a27bfd13618d` | Claude Code · glm-5.2 | 1 | 1 | unknown (0/1 priced) | 70.4% | 0.0% | 11.1% | 100.0% | — | A |
| `b354f56354fd` | Claude Code · claude-opus-5 (rules 90f929) | 1 | 1 | unknown (0/1 priced) | 19.3% | 0.0% | 0.0% | 0.0% | — | A |
| `c1b9ee9cca70` | Claude Code · claude-opus-5-5 (rules 9f0348) | 3 | 2 | $3.74 | 99.1% | 0.0% | 0.0% | 66.7% | $1.47 | A |
| `e4f4c8b87126` | Claude Code · claude-opus-5 (rules 3c9356) | 2 | 0 | unknown (0/2 priced) | too young | too young | too young | 0.0% | — | A |
| `ebb836df9269` | Claude Code · claude-opus-5-5 (rules b0512a) | 3 | 2 | $7.39 | 89.3% | 0.0% | 0.0% | 0.0% | $3.18 | A |
| `ecac97667b19` | Claude Code · claude-opus-5 (rules unknown) | 54 | 39 | unknown (0/54 priced) | 79.7% | 2.6% | 5.1% | 13.0% | — | A |
| `f51430ac53a7` | Claude Code · claude-opus-5-5[1m] | 2 | 2 | $2.76 | 0.0% | 100.0% | 77.0% | 50.0% | — | A |

## Notes

- 3 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 29 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: cc0d8d43-a8ed-413f-9363-fa207b2bb75f: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 6f3dd186-f040-425d-b691-eb244ab5ef49: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: a83ab205-0519-4e71-b248-b7286af18803: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: ed5db540-bd53-4dd3-912b-740cda1a5b45: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 30798df4-ab4a-462e-b87d-366e7b3f6009: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: e57f9acd-a3c4-49f1-9d31-d8548be2f7d7: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: a7386391-8746-4e42-83a7-40a1fddb3b5a: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: f6427e53-c7de-42e9-b083-96135170124f: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: d34ab9c7-f416-4d8f-a157-636a001794b7: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 64a56662-afc4-45e9-a183-34886b47f1d8: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: 02c881a3-1c98-49c8-8dad-cb4c1a299c16: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: dcd57957-00a8-4140-b032-7fe883c9b86f: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 1d9c7650-4667-4588-8f99-296a23a4b7c3: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: d241c2f5-1b63-4ca2-8e90-d4571455d865: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: f33f6454-4c30-443c-baa1-584cae8de57a: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: e28babd6-5ef9-4fad-84c3-bd4994fbf969: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: e255309e-abc2-4db3-81f2-7e13f5d942f7: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 3d3a2f1b-9897-4590-a44f-cfd2139a65bc: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 2f2ec7d9-ff52-42c3-b835-6384a699a103: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: d0315dc0-20ea-4a63-8e49-d080d059319c: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: 69b8c513-84e5-4735-ba7c-dccccfba4cba: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 0e631102-f85e-4fe4-84f6-0e8ccea45aa8: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 987a1f2d-70a8-407a-a2c8-0a3d1295fe50: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 61154736-ffcc-4d9a-82f5-c792a0d75b11: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: 4a438fba-db8e-4874-abd1-3a7b24f6888b: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: b1b12c2f-59b3-43b0-bfb2-6c82cfde0e82: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 5147cccc-cca8-4aec-b80c-f4d1168a5ce6: not_scored: every changed file was skipped (flake.lock: lockfile)
- could not be scored: 4290081d-5d0a-4df8-bf06-0a7ac129cbfc: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- could not be scored: 02759f89-69b4-4f27-8edd-e7869ca102eb: not_scored: every changed file was skipped (home.nix: over 5000 lines (5117))
- 97 sessions have no price (unknown model, or a price that depends on prompt size)
- 0 sessions have no setup because their rules hash is unknown
- suspect call: no setup with ≥ 8 mature sessions has a difficulty-matched odds ratio above 1 at p < 0.05

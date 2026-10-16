# Review: thedannywahl/pantoken

- Review id: `thedannywahl__pantoken-20261016081602`
- Created: 2026-10-16T08:16:02.133Z
- Entire data: yes
- Evidence level: A (observational)
- Label: `insufficient_data`
- Suspect: none

No suspect call: no setup has ≥ 8 mature sessions.

## Setups

| Setup | Harness · model | Sessions | Mature | Spend | Survival | Reverted | Rework (human) | Unattended | $/surviving change | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | :---: |
| `177f24172156` | Copilot CLI · unknown (rules unknown) | 1 | 0 | unknown (0/1 priced) | too young | too young | too young | 0.0% | — | A |
| `47fac911859e` | Copilot CLI · unknown (rules unknown) | 6 | 0 | unknown (0/6 priced) | too young | too young | too young | 50.0% | — | A |
| `abe3b65964ca` | Copilot CLI · unknown (rules unknown) | 7 | 0 | unknown (0/7 priced) | too young | too young | too young | 14.3% | — | A |
| `f199b89c9c99` | Copilot CLI · unknown (rules unknown) | 34 | 0 | unknown (0/34 priced) | too young | too young | too young | 17.6% | — | A |

## Notes

- 429 sessions are too young or have no commit: a session is mature at ≥ 5 first-parent commits and ≥ 6 h before HEAD
- 43 sessions could not be scored (git failed or timed out), so they count as neither mature nor too young
- could not be scored: f226ac34-f0ee-4383-89b7-797d2b11e90e: not_scored: time budget
- could not be scored: 23ccb751-6357-458b-b363-8f85d489fd72: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 565bcf9b-ba61-423d-be2f-599eb26a95b1: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 3839db2d-7f2c-4036-8cd4-da57a492fb3c: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 13266371-26dc-421c-841d-226526cc6f0b: not_scored: time budget
- could not be scored: 7784ceea-c142-43a0-aac0-00ccff1ddd54: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: f7e8f45c-59c6-442b-bd5e-5ecaf5fa717a: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: e01400ee-3cdd-4453-bd15-93b6efedadc7: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: e3ec9944-8f28-4e71-9743-6e0ea5287930: git blame l10n/ar/docs.demos.po timed out
- could not be scored: b264251c-4675-47a7-98ea-1c0324260a2d: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: c2f76d33-8686-4c5d-a1b1-0c77e870885d: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: c89c8d27-83f0-4435-9a34-7b77df4b0e5e: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: c1da01cd-07b4-4130-b19a-b591a5d40317: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 075aee66-5ed5-4c69-9360-baf24677584b: not_scored: time budget
- could not be scored: 48266755-8d0b-4887-8600-1db73f1f452f: not_scored: time budget
- could not be scored: 86746128-4ecf-4f4d-9c7b-90b6cc39e32d: not_scored: time budget
- could not be scored: 858eb8a2-f388-439c-b5e4-4bdc1550af8b: not_scored: time budget
- could not be scored: 43c6abbe-0294-47f7-abb1-2f320ec9a294: not_scored: time budget
- could not be scored: 732f5c23-5fc4-4cd5-ae51-56567e9b50e1: not_scored: time budget
- could not be scored: 78db3705-e97f-47bc-8e5a-5d8048cb59c9: not_scored: time budget
- could not be scored: b8dbbdfd-ee6c-43ce-933e-1fe07501e8b6: not_scored: time budget
- could not be scored: fa0d4b00-2212-49af-b6fe-42be03f06539: not_scored: time budget
- could not be scored: a7835d6e-1033-4c53-b471-324b9803f028: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 279956cb-be29-4ac0-97bc-ba8d2d8a4247: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: c131adf9-321f-4115-8e45-61ef0f6b62c9: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 80bd71f2-90fe-4e8f-92ea-d3fefcaf500f: not_scored: time budget
- could not be scored: 45583bb0-f0fc-4d4a-bf06-79cf569138d1: not_scored: time budget
- could not be scored: 2b013f75-85f8-4404-b630-e914895c0612: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: c144cd39-0281-41d0-bb33-c2f1a08b7670: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 6078e597-eff2-48db-b262-76094b6ade07: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 6e6fa463-4da5-44e9-93da-ac175498b991: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 850c5460-902c-4682-b0d5-4227387d5dd0: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: fe92f058-45e1-4830-8854-71a268dfb381: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 603a35ea-3977-42bb-9198-045aa94ccf51: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: ba47da3e-8456-4cf4-a412-daa8e67158e0: not_scored: time budget
- could not be scored: 93f601f5-57fb-45f2-b007-332fca6910d3: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: f0915802-0228-4f5e-9da3-39134fbf64c2: not_scored: time budget
- could not be scored: 8d3cb066-d889-4125-a420-b1f8d85c23a2: not_scored: time budget
- could not be scored: ca27a1b7-bb1e-49cf-ac9f-0f3c0ee35474: not_scored: time budget
- could not be scored: 3ccac868-4d84-4690-9d1d-7e7b38515d34: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- could not be scored: 99dc03f3-838a-4873-96ec-67e0e1a8e8f1: not_scored: time budget
- could not be scored: b06ada0e-f74c-4fe7-8ab5-bf8ffcb568ca: not_scored: time budget
- could not be scored: e3870ca5-d4c3-4353-b4f0-b25f0db627e3: git log --no-walk=unsorted --stdin --root --diff-merges=first-parent -p -U0 --no-color --no-ext-diff --no-renames --no-prefix --format=%x1e%H timed out
- 472 sessions have no price (unknown model, or a price that depends on prompt size)
- 424 sessions have no setup because their rules hash is unknown
- suspect call: no setup has ≥ 8 mature sessions

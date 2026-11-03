# Project case studies implementation plan

> Execute inline using superpowers:executing-plans. User approved the design on 2026-11-03.

**Goal:** Enrich Automotive and SciVisE with actual interface captures and bilingual case studies.
**Architecture:** Keep existing React routes; add typed bilingual case content and static screenshots. Capture unmodified source frontends against local illustrative API responses.
**Tech Stack:** Existing React, TypeScript, Vite, CSS; Playwright for capture and visual verification.
**Spec:** ../specs/2026-11-03-project-case-studies-design.md

## Global constraints

Keep BGS and Orbital untouched. No claims of implemented PDF or production ML quality. Label illustrative screenshots. No external scraping. Preserve personal role and MVP/academic status. RU/EN parity.

## Review focus

Missing images, narrow screens (320/390), long English headings, direct case links, language switching and full-size image links.

## Task 1: Capture products

- [x] Run source frontends, use local API fixtures, capture feed and detail for each product.
- [x] Inspect screenshots visually; store optimized images in public/projects/.
- [x] Document capture provenance and data substitutions.

## Task 2: Present cases

- [x] Add src/data/caseStudies.ts with bilingual narrative, screenshots, stack layers and workflow.
- [x] Update src/data/projects.ts summaries, tags and preview paths.
- [x] Update Home.tsx and ProjectDetail.tsx to render previews and expanded case sections.
- [x] Add responsive styles to index.css, using native links for full-size viewing.

## Task 3: Verify

- [x] Run npm test and npm run build.
- [x] Inspect home and each case in RU/EN at 1440, 390 and 320px; assert no overflow, broken images or JS errors; inspect image links and screenshots.
- [x] Review diff and document results. Leave local changes ready for user review; do not publish.

## Execution ledger

Baseline: branch codex/portfolio-audit-fixes; only approved design untracked. Existing 6 tests pass.
Ruling: work in the existing portfolio checkout and feature branch for this small content/layout change; no new worktree needed. Use browser assertions for layout, no implementation-mirroring unit tests for copy or CSS (developer instruction).

Completed: four source-interface captures; bilingual cases and preview cards; successful build, 6 tests and 18 browser combinations. Fresh reviewer reported no actionable material issues. Changes remain local for user review.

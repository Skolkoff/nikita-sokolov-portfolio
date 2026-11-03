# BGS Personal Proposal Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans for inline implementation. Design and implementation are approved by the user.

**Goal:** Separate the universal portfolio from a bilingual personal BGS proposal and honest interactive Outreach Assistant example.
**Architecture:** Independent BGS route layout and scoped styling; typed bilingual copy; a pure draft/review state model drives the local demonstration. Existing home layout and real project text stay intact.
**Tech Stack:** React, TypeScript, Vite, React Router, i18next, Tailwind, lucide-react; Node built-in tests.
**Spec:** ../specs/2026-11-03-bgs-personal-proposal-design.md

## Global Constraints

- No real AI calls, backend, mailing or claimed integrations; clearly label scripted demonstration.
- RU/EN complete; retain active language between routes.
- Preserve Automotive and SciVisE copy and main visual design.
- No BGS links in home, primary navigation or sitemap.
- Direct routes use the existing Apache SPA fallback.

## Review Focus

- Changing recipient/tone/language must not silently overwrite manual edits; explicit update clears review confirmations.
- Editing a reviewed draft invalidates approval; copy requires current checks and non-empty text.
- Clipboard failure must expose usable feedback and editable text.
- Narrow Russian layouts must not overflow at 320px.
- Navigating from noindex proposal to portfolio restores metadata and scrolling.

### Task 1: Demo behaviour

Files: `src/bgs/outreachModel.ts`, `tests/outreach.test.mjs`, `package.json`.
Interface: `createOutreachState(locale)`, `outreachReducer(state, action)`, `canCopy(state)`, `buildDraft(locale, recipient, tone)`.
- [x] Write built-in Node assertions for recipient/tone outputs, preserving edits, explicit regeneration, invalidating checks and reset.
- [x] Run tests before implementation and observe missing behaviour.
- [x] Implement pure typed state model; run tests to green.

### Task 2: Pages and content

Files: `src/bgs/content.ts`, `BgsLayout.tsx`, `BgsLanding.tsx`, `BgsProposal.tsx`, `OutreachDemo.tsx`, `bgs.css`.
Interface: layout owns local metadata; pages consume `getCopy(locale)` and demo model.
- [x] Build bilingual presentation and real links to the verified source material.
- [x] Implement seven walkthrough steps, editable draft, controls, checklist and copy fallback.
- [x] Run production build and browser checks of all interactive actions.

### Task 3: Portfolio separation and routing

Files: `src/App.tsx`, `src/data/projects.ts`, `src/pages/ProjectDetail.tsx`, `public/sitemap.xml`, `README.md`.
- [x] Add explicit BGS routes and legacy redirect; remove BGS from shared projects/details/sitemap.
- [x] Check home and other case routes with both languages and refresh.
- [x] Confirm metadata restoration and noindex only on BGS routes.

### Task 4: Validate, review and deliver

- [x] Run Node tests and build; inspect RU/EN at 1440/390/320 and check overflow/console.
- [x] Fresh code review against spec; address material findings and rerun affected checks.
- [x] Preserve user checkout changes; integrate verified work into existing feature checkout and prepare production build.
- [x] Use existing deployment path if available; otherwise provide verified build and clearly state publication status.

## Progress

Design approved. Baseline build passed in original checkout. Dependencies reused unchanged from that checkout. Native managed worktree created for isolated implementation.


## Execution record

Implemented inline in managed worktree. The user approved both the presentation approach and the written design before implementation.

- Six behaviour tests pass, including a review finding reproduced first and then fixed: managers can preserve and copy a custom draft after changing settings without regeneration.
- Production build and static personal-entry metadata checks pass.
- Browser matrix: six routes × two languages × widths 1440/390/320 = 36 checks; no horizontal overflow, missing headings, BGS home links or incorrect robots metadata.
- All seven walkthrough steps render; recipient and tone controls, editing, explicit update, keep-draft, review gating, copy success and approval reset were exercised.
- Review by a fresh agent found one material issue (retained draft blocked from copying), fixed with a RED→GREEN regression test. Also moved scroll handling to the shared route boundary and focused the textarea after its shortcut opens it. No outstanding review findings.
- Direct entry HTML was added for personal link previews; Apache rules preserve the requested clean URLs. Metadata cleanup explicitly restores portfolio values after leaving a direct BGS entry.
- Ruling: use a scripted browser-only walkthrough rather than real AI/backend, as approved in the design. The presentation labels this explicitly.
- Ruling: preserve existing REG.RU hosting rather than create a new Sites deployment; the existing domain and SPA configuration are part of this portfolio.

Publication and final deployed checks are recorded in docs/BGS-DELIVERY.md.

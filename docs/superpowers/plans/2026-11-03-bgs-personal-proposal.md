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
- [ ] Write built-in Node assertions for recipient/tone outputs, preserving edits, explicit regeneration, invalidating checks and reset.
- [ ] Run tests before implementation and observe missing behaviour.
- [ ] Implement pure typed state model; run tests to green.

### Task 2: Pages and content

Files: `src/bgs/content.ts`, `BgsLayout.tsx`, `BgsLanding.tsx`, `BgsProposal.tsx`, `OutreachDemo.tsx`, `bgs.css`.
Interface: layout owns local metadata; pages consume `getCopy(locale)` and demo model.
- [ ] Build bilingual presentation and real links to the verified source material.
- [ ] Implement seven walkthrough steps, editable draft, controls, checklist and copy fallback.
- [ ] Run production build and browser checks of all interactive actions.

### Task 3: Portfolio separation and routing

Files: `src/App.tsx`, `src/data/projects.ts`, `src/pages/ProjectDetail.tsx`, `public/sitemap.xml`, `README.md`.
- [ ] Add explicit BGS routes and legacy redirect; remove BGS from shared projects/details/sitemap.
- [ ] Check home and other case routes with both languages and refresh.
- [ ] Confirm metadata restoration and noindex only on BGS routes.

### Task 4: Validate, review and deliver

- [ ] Run Node tests and build; inspect RU/EN at 1440/390/320 and check overflow/console.
- [ ] Fresh code review against spec; address material findings and rerun affected checks.
- [ ] Preserve user checkout changes; integrate verified work into existing feature checkout and prepare production build.
- [ ] Use existing deployment path if available; otherwise provide verified build and clearly state publication status.

## Progress

Design approved. Baseline build passed in original checkout. Dependencies reused unchanged from that checkout. Native managed worktree created for isolated implementation.

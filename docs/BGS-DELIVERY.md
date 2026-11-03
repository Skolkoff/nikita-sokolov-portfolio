# BGS proposal — delivery, 3 November 2026

## Published routes

- https://portfolioskolkoff.ru/bgs — personal independent proposal.
- https://portfolioskolkoff.ru/bgs/proposal — ten-part product presentation and scripted Outreach Assistant example.
- `/projects/bgs-intelligence` redirects in React Router to `/bgs`.

The main portfolio retains Automotive and SciVisE, with their project copy unchanged. BGS is absent from its project list, primary navigation and sitemap. The personal pages have dedicated static Open Graph/canonical/noindex metadata, with runtime RU/EN copy. Noindex does not make the pages private.

## Scope and boundaries

The example is browser-only and uses fictional Northline Process Systems data and prepared templates. Recipient and tone changes, editable drafts, explicit regeneration, keeping a custom draft, review confirmations, copy and reset are functional. There is no live research, AI call, backend, CRM connection or message sending. The event's real official page is linked separately from fictional company facts.

## Verification

- `npm test`: 6/6 behaviour tests pass. The retained-draft copying regression was reproduced before its fix.
- `npm run build`: TypeScript/Vite and generation of the personal entry documents pass.
- 36 browser route checks on the published domain: six routes × RU/EN × 1440/390/320. No horizontal overflow or missing h1; no BGS links on home; correct noindex presence.
- 42 walkthrough-state checks on the published domain: seven steps × RU/EN × 1440/390/320. No horizontal overflow.
- All steps, recipient/tone controls, draft editing, preserving text across settings/language changes, regeneration, manager checks, successful copying and invalidation after edits were exercised. Keyboard End switches to the review tab. The invitation shortcut focuses the revealed textarea.
- After a direct BGS entry, navigating through NS to home restores the portfolio title/canonical, removes noindex and resets scroll.
- Browser error log empty during deployed checks. Clipboard rejection fallback was inspected in code review; rejection was not forced in the deployed browser.
- Direct HTTP requests to home, both BGS routes, both real cases, legacy BGS route, sitemap and Yandex confirmation return 200. Personal entry HTML includes its own title/canonical/noindex without requiring JavaScript execution.
- A fresh reviewer found one material retained-draft issue, fixed with a regression test, plus navigation/focus suggestions that were also addressed.

## Hosting and rollback

Published on the existing REG.RU account using the existing SSH key and Apache configuration; no new hosting service or audience was created. The staged release retained previous asset files to avoid breaking clients holding the prior HTML. Yandex verification was compared before switching and remains available at `/yandex_65e17415466fb21e.html`.

Previous public directory is preserved outside the web root at:

`~/backups/bgs-proposal-20261103-173043/public-before`

To roll back, preserve the current public directory separately and restore that directory to `~/www/portfolioskolkoff.ru/public`. Do not restore or enable the former Laravel application or its old automated deployment as part of this rollback.

The first publication was built from managed-worktree source `b6a065a`; those changes are integrated in the original checkout in `8961621` and `b5588af`. The final publication includes the shorter Russian step label “Оценка” so the mobile tab does not split a word. GitHub CI now runs the six tests in addition to its existing audit/build checks; no remote CI result is claimed here.

## Decisions

- The approved deliverable is an honest scripted presentation, not an AI-backed product implementation.
- The existing REG.RU domain is preserved, rather than provisioning a new Sites deployment.
- No separate graph database, additional frontend dependency or API credential was introduced.

Screenshots are saved alongside the research under `/Users/sam/Documents/testProject/research/bgs-group/`.

# Project previews — 2026-11-03

## Sources

- Automotive: `/Users/sam/Documents/portfolio/AvtoHousApp/frontend/src/App.tsx`, backend requirements and architecture documentation. Main API is Django/DRF; FastAPI in the separate integration component does not replace the main backend.
- SciVisE: `/Users/sam/Documents/portfolio/Thinklist/frontend`, `backend-api`, `ml-service/app/services/recommender.py` and `neural_artifacts.py`. Baseline ranking uses scikit-learn; PyTorch artifact loading is conditional.

## Capture provenance

Four JPEG captures at 1440 × 1040, taken using Playwright from the unmodified project frontends running locally. Only API responses were substituted in the browser. No production backend, collection job or external model inference was run.

- `automotive-feed.jpg`: scrolled vehicle feed, admin view; static sample vehicle IDs, prices and attributes. Photo assets came from the source repository's `backend/runtime/parsers/mashinakg/images`. Vehicle attributes and prices are illustrative and are not evidence about the pictured vehicle.
- `automotive-detail.jpg`: scrolled detail screen, showing specifications, pricing and the text proposal control on the same illustrative record.
- `scivise-feed.jpg`: guest feed with eight invented paper records, sample topics and abstracts; existing ArticleCover rendering. No real papers or scientific results are represented.
- `scivise-article.jpg`: existing article modal for the first illustrative paper. No user account was created.

All captures are captioned as illustrative on the portfolio, in RU and EN. Full-size images open through native links. No product source changes were required.

## Content corrections

Automotive exports a `.txt` commercial-offer draft in the current clone; PDF remains planned. SciVisE presents baseline TF-IDF/SVD/MLP separately from optional PyTorch artifact loading. Existing personal roles and internal MVP / academic statuses are preserved. No production quality or comparable productivity metric is asserted.

## Verification

- Existing 6 tests pass; TypeScript/Vite build passes.
- Browser checks: home and both direct case URLs × EN/RU × 1440/390/320 px = 18 combinations. No horizontal overflow, missing images or page JavaScript errors. Each case has four capabilities, four stack layers, three full-size-image links and an expandable version note.
- Visually inspected project captures and portfolio desktop/mobile screenshots.
- No publication performed. Source clones remain unchanged.

## User refinement: compact homepage

Removed image previews from the homepage at the user's request to reduce visual noise. Restored the compact numbered project list; both case pages retain their screenshots and expanded descriptions. Removed unused preview fields/styles. Build passed; RU/EN homepage checked at 1440/390/320 px with no overflow, and both case galleries remain present.

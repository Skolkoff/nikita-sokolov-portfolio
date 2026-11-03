# SEO and loading performance — 3 November 2026

Published to https://portfolioskolkoff.ru/ using release `portfolio-seo-20261103-181304` on the existing REG.RU account.

## Delivered

- Static HTML with visible home/case content, hydrated by React. Each public page has its own title, description, canonical, Open Graph, Twitter summary image and JSON-LD. Runtime metadata follows route and language changes.
- Generated share images; local variable WOFF2 fonts with swap and heading-font preload. No Google Fonts request is needed at runtime. Font licenses included.
- BGS code and stylesheet load separately. Initial JavaScript: 413.73 → 355.91 kB (about 14% less); initial CSS: 47.56 → 18.16 kB (about 62% less), comparing the immediately preceding local case-study build.
- Four case captures encoded as WebP: total 671,132 → 304,916 bytes (about 55% less). Original JPEGs retained for provenance/backward compatibility; pages request WebP.
- Apache clean-route mappings, canonical redirects for generated HTML aliases and trailing-slash case URLs, real missing-asset 404 responses, compression/cache configuration. Sitemap updated. Personal BGS pages remain noindex.

## Hosting evidence

Home and both clean case URLs return 200 with distinct metadata and visible h1 in the response. HTML returns `Cache-Control: no-cache`. WebP and WOFF2 responses return `public, max-age=604800`. The host's nginx serves JavaScript with gzip and a 45-day max-age; this is the effective hosting policy, overriding the longer immutable policy requested in .htaccess for hashed files.

Existing hashed assets were carried forward to support clients holding the previous HTML. Yandex verification was copied and compared before switching. The previous public directory is preserved at `~/backups/portfolio-seo-20261103-181304/public-before`. No database or old application deployment was changed.

## Validation

Build, 4 generated-HTML checks and 6 original behavior tests pass. Local production build: 30 route/language/viewport checks (five routes, EN/RU, 1440/390/320), plus hydration, client metadata transitions, BGS-to-home indexing restoration and no-JavaScript content checks, with no browser errors. The same 30 checks and navigation/no-JavaScript checks also passed on the published domain.

A single controlled Chromium observation on the published host, with 150 ms simulated network latency, 200 kB/s download and 4× CPU slowdown, measured homepage LCP at 1532 ms before and 960 ms after. This is a synthetic observation, not a field Core Web Vitals guarantee or a Lighthouse score. The old live case had no project images, so its timings do not represent a like-for-like case-image comparison.

## Rollback

Preserve the new public directory, then move `~/backups/portfolio-seo-20261103-181304/public-before` back to `~/www/portfolioskolkoff.ru/public`. Do not re-enable the former application's automated deployment. The backup remains outside the web root.

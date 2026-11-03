# SEO, loading performance and publication

Authorized by user: optimize metadata and page opening speed, then deploy to existing host.

- Generate static visible HTML for home and the two cases, with per-route title, description, canonical, OG/Twitter and structured data. Update metadata on client navigation and language switch. Preserve BGS noindex.
- Separate BGS from initial code, host fonts locally with swap, encode case images as WebP, add HTTP compression and caching. Avoid caching HTML long-term and preserve old hashed assets at deployment.
- Verify generated HTML without JavaScript, hydration, both languages, image loading, mobile widths, navigation and BGS controls. Compare asset sizes and run build/tests.
- Stage on existing REG.RU account, preserve Yandex verification and previous assets, back up current public directory outside web root, then switch. Verify live headers, routes and assets; roll back on failure.

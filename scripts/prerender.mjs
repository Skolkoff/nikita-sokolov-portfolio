import { readFile, writeFile } from 'node:fs/promises'
import { render, getSeo } from '../.ssr/entry-server.js'
const base = await readFile('dist/index.html', 'utf8')
const esc = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
for (const [path, file] of [['/', 'index.html'], ['/projects/automotive', 'automotive.html'], ['/projects/scivise', 'scivise.html']]) {
  const seo = getSeo(path)
  const head = `<title>${esc(seo.title)}</title>
    <meta name="description" content="${esc(seo.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${seo.url}" />
    <meta property="og:title" content="${esc(seo.title)}" />
    <meta property="og:description" content="${esc(seo.description)}" />
    <meta property="og:url" content="${seo.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Nikita Sokolov — Portfolio" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="${seo.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(seo.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(seo.title)}" />
    <meta name="twitter:description" content="${esc(seo.description)}" />
    <meta name="twitter:image" content="${seo.image}" />
    <script type="application/ld+json" id="structured-data">${JSON.stringify(seo.schema).replace(/</g,'\\u003c')}</script>`
  let html = base.replace(/\s*<title>.*?<\/title>/s, '').replace(/\s*<meta (?:name="description"|property="og:[^"]+")[^>]*\/>/g, '').replace(/\s*<link rel="canonical"[^>]*\/>/g, '')
  html = html.replace('</head>', `${head}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
  await writeFile(`dist/${file}`, html)
}
console.log('Prerendered home and both case studies with route-specific metadata.')

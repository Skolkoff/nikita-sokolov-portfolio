import { readFile, writeFile } from 'node:fs/promises'

// Apache serves these entry documents for direct links, including link-preview crawlers.
const base = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const pages = [
  { file: 'bgs.html', path: '/bgs', title: 'A personal proposal for BGS Group — Nikita Sokolov', description: 'An independent product initiative: BGS Audience Intelligence and an Outreach Assistant concept, prepared by Nikita Sokolov.' },
  { file: 'bgs-proposal.html', path: '/bgs/proposal', title: 'BGS Audience Intelligence — Product proposal by Nikita Sokolov', description: 'Explore a proposed audience research and outreach workflow, a clearly labelled interactive example, and a practical MVP approach.' },
]
for (const page of pages) {
  const url = `https://portfolioskolkoff.ru${page.path}`
  const html = base
    .replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${page.title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace('</head>', '  <meta name="robots" content="noindex, nofollow" />\n  </head>')
  await writeFile(new URL(`../dist/${page.file}`, import.meta.url), html)
}
console.log('Personal BGS entry documents generated (metadata + noindex).')

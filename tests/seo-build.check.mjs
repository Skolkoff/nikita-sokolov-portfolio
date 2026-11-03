import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
const site = 'https://portfolioskolkoff.ru'
for (const [file, path, heading] of [['index.html', '/', 'I build products'], ['automotive.html', '/projects/automotive', 'Automotive Import Platform'], ['scivise.html', '/projects/scivise', 'SciVisE']]) {
  test(`${path} has crawlable content, canonical and valid structured data`, async () => {
    const html = await readFile(`dist/${file}`, 'utf8')
    assert.match(html, new RegExp(`<h1[^>]*>[^<]*${heading}`))
    assert.ok(html.includes(`rel="canonical" href="${site}${path}"`))
    assert.equal((html.match(/<title>/g)||[]).length, 1)
    assert.equal((html.match(/name="description"/g)||[]).length, 1)
    assert.match(html, /name="twitter:card" content="summary_large_image"/)
    assert.doesNotMatch(html, /noindex/)
    const json = html.match(/id="structured-data">(.*?)<\/script>/s)[1]
    assert.equal(JSON.parse(json)['@context'], 'https://schema.org')
    const image = html.match(/property="og:image" content="https:\/\/portfolioskolkoff.ru(.*?)"/)[1]
    assert.ok((await readFile(`dist${image}`)).length > 0)
    assert.doesNotMatch(html, /fonts\.googleapis/)
  })
}
test('personal pages retain noindex and their own canonical', async () => {
  for(const [file,path] of [['bgs.html','/bgs'],['bgs-proposal.html','/bgs/proposal']]) {
    const html=await readFile(`dist/${file}`,'utf8')
    assert.match(html,/content="noindex, nofollow"/)
    assert.ok(html.includes(`rel="canonical" href="${site}${path}"`))
  }
})

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getSeo } from '../data/seo'
export default function Seo() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  useEffect(() => {
    const seo = getSeo(pathname, i18n.resolvedLanguage)
    document.title = seo.title
    const meta = (key: string, value: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
      el.setAttribute('content', value)
    }
    meta('description', seo.description); meta('robots', 'index, follow')
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.url, image: seo.image, type: 'website', locale: seo.locale, 'image:alt': seo.title, 'image:width': '1200', 'image:height': '630' })) meta(`og:${key}`, value, true)
    meta('twitter:card', 'summary_large_image'); meta('twitter:title', seo.title); meta('twitter:description', seo.description); meta('twitter:image', seo.image)
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.url)
    let schema = document.getElementById('structured-data')
    if (!schema) { schema = document.createElement('script'); schema.id = 'structured-data'; schema.setAttribute('type', 'application/ld+json'); document.head.appendChild(schema) }
    schema.textContent = JSON.stringify(seo.schema)
  }, [pathname, i18n.resolvedLanguage])
  return null
}

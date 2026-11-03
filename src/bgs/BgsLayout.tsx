import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getCopy } from './content'
import './bgs.css'

export default function BgsLayout() {
  const { i18n } = useTranslation()
  const { pathname, hash } = useLocation()
  const copy = getCopy(i18n.resolvedLanguage)
  const ru = i18n.resolvedLanguage === 'ru'
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  useEffect(() => {
    const portfolioTitle = 'Nikita Sokolov — AI Product Engineer'
    const previousLang = document.documentElement.lang
    document.documentElement.lang = ru ? 'ru' : 'en'
    document.title = `${pathname.replace(/\/$/, '').endsWith('/proposal') ? 'BGS Audience Intelligence' : 'For BGS Group'} — Nikita Sokolov`
    const changes: (() => void)[] = []
    const set = (selector: string, attributes: Record<string, string>, field: string, value: string, portfolioValue?: string) => {
      let el = document.head.querySelector(selector)
      const existed = !!el
      if (!el) {
        el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
        for (const [key, val] of Object.entries(attributes)) el.setAttribute(key, val)
        document.head.appendChild(el)
      }
      el.setAttribute(field, value)
      const node = el
      // Direct BGS entry HTML also has personal metadata. Returning to the portfolio
      // must restore portfolio values, not that entry document's initial values.
      changes.push(() => { if (!existed || portfolioValue === undefined) node.remove(); else node.setAttribute(field, portfolioValue) })
    }
    set('meta[name="robots"]', { name: 'robots' }, 'content', 'noindex, nofollow')
    set('meta[name="description"]', { name: 'description' }, 'content', copy.proposal.intro, 'Nikita Sokolov — AI Product Engineer. I build software products that solve real business problems.')
    set('meta[property="og:title"]', { property: 'og:title' }, 'content', document.title, portfolioTitle)
    set('meta[property="og:description"]', { property: 'og:description' }, 'content', copy.proposal.intro, 'From idea to architecture, development and deployment.')
    set('link[rel="canonical"]', { rel: 'canonical' }, 'href', `https://portfolioskolkoff.ru${pathname}`, 'https://portfolioskolkoff.ru/')
    set('meta[property="og:url"]', { property: 'og:url' }, 'content', `https://portfolioskolkoff.ru${pathname}`, 'https://portfolioskolkoff.ru/')
    return () => { document.title = portfolioTitle; document.documentElement.lang = previousLang; changes.forEach(restore => restore()) }
  }, [pathname, ru, copy.proposal.intro])
  return <div className="bgs-site">
    <a href="#bgs-main" className="bgs-skip">{ru ? 'К содержанию' : 'Skip to content'}</a>
    <header className="bgs-header bgs-wrap">
      <Link to="/" className="wordmark" aria-label={ru ? 'Портфолио Никиты Соколова' : 'Nikita Sokolov portfolio'}>NS<span>.</span></Link>
      <Link to="/bgs" className="bgs-header-label">{copy.forBgs}</Link>
      <div className="bgs-header-actions">
        <a href="https://t.me/nikskof" target="_blank" rel="noreferrer" className="bgs-contact-link">{copy.contact}<ArrowUpRight size={15}/></a>
        <button className="bgs-language" onClick={() => void i18n.changeLanguage(ru ? 'en' : 'ru')} aria-label={ru ? 'Switch to English' : 'Переключить на русский'}>{ru ? 'RU' : 'EN'}<span aria-hidden="true"> / {ru ? 'EN' : 'RU'}</span></button>
      </div>
    </header>
    <main id="bgs-main"><Outlet /></main>
    <footer className="bgs-footer bgs-wrap">
      <div><strong>{copy.by}</strong><p>{copy.disclaimer}</p></div>
      <a href="/#about">{copy.portfolio}<ArrowUpRight size={15}/></a>
    </footer>
  </div>
}

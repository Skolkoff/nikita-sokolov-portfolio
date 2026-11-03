import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

export default function Layout() {
  const { t } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'en'
  }, [t])
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="wordmark" aria-label="Nikita Sokolov home">NS<span>.</span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#work">{t('nav.work')}</a>
          <a href="/#about">{t('nav.about')}</a>
          <a href="/#contact">{t('nav.contact')}</a>
        </nav>
        <div className="topbar-right">
          <span className="availability"><i />{t('nav.availability')}</span>
          <button className="language-button" onClick={toggleLanguage} aria-label="Change language">{i18n.language.toUpperCase()}</button>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Nikita Sokolov</span>
        <span>{t('footer')}</span>
        <a href="https://github.com/Skolkoff" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}
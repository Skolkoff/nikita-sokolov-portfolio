import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

const stack = ['Python', 'TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'AI APIs', 'Docker', 'GitHub Actions']

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{t('hero.cta')} <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#contact">{t('hero.contact')} <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-index">01 / 03</div>
          <div className="hero-note">
            <span className="note-label">FOCUS</span>
            <strong>Product thinking<br />+ Applied engineering</strong>
            <span className="note-location">{t('hero.location')}</span>
          </div>
          <div className="hero-orbit" aria-hidden="true"><div className="orbit-core">NS</div><span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" /></div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" />{t('work.eyebrow')}</p><h2>{t('work.title')}</h2></div>
          <p className="section-intro">{t('work.intro')}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link to={project.href} className="project-row" key={project.id}>
              <span className="project-number">{project.number}</span>
              <div className="project-main"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-meta"><span>{project.status}</span><MoveUpRight size={21} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-label"><p className="eyebrow"><span className="eyebrow-line" />{t('about.eyebrow')}</p><span className="about-mark">NS<span>.</span></span></div>
        <div className="about-content"><h2>{t('about.title')}</h2><p>{t('about.body')}</p><div className="stack-block"><span className="project-category">{t('stack')}</span><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div></div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="eyebrow"><span className="eyebrow-line" />{t('contact.eyebrow')}</p>
        <div className="contact-row"><h2>{t('contact.title')}</h2><a className="contact-circle" href="mailto:hello@portfolioskolkoff.ru" aria-label="Send email"><ArrowUpRight size={30} /></a></div>
        <div className="contact-bottom"><p>{t('contact.body')}</p><a className="text-link" href="mailto:hello@portfolioskolkoff.ru">{t('contact.email')} <ArrowUpRight size={16} /></a></div>
      </section>
    </>
  )
}
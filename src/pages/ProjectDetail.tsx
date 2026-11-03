import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'

export default function ProjectDetail() {
  const { id } = useParams()
  const { i18n } = useTranslation()
  const isRu = i18n.resolvedLanguage === 'ru'
  const project = id ? caseStudies[isRu ? 'ru' : 'en'][id] : undefined
  if (!project) return <section className="detail-page section-wrap"><h1>{isRu ? 'Проект не найден' : 'Project not found'}</h1><Link className="text-link" to="/">{isRu ? 'На главную' : 'Back home'} <ArrowUpRight size={16} /></Link></section>
  const lead = project.screens[0]
  return (
    <section className={`detail-page case-page case-${id} section-wrap`}>
      <Link className="back-link" to="/#work"><ArrowLeft size={16} /> {isRu ? 'К проектам' : 'Back to projects'}</Link>
      <p className="eyebrow"><span className="eyebrow-line" />{project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-intro">{project.intro}</p>
      <div className="case-facts"><span className="case-status">{project.status}</span><span>{isRu ? 'Снимки интерфейса · демонстрационные данные' : 'Interface captures · illustrative data'}</span></div>
      <figure className="case-lead">
        <a href={lead.src} target="_blank" rel="noreferrer" aria-label={`${isRu ? 'Открыть изображение' : 'Open image'}: ${lead.title}`}>
          <div className="screen-bar" aria-hidden="true"><span /><span /><span /><b>{project.title}</b><ArrowUpRight size={14} /></div>
          <img src={lead.src} alt={lead.title} width="1440" height="1040" fetchPriority="high" />
        </a>
        <figcaption>{lead.caption}</figcaption>
      </figure>
      <div className="detail-grid case-story">
        <aside className="detail-sidebar"><span className="project-category">{isRu ? 'МОЯ РОЛЬ' : 'MY ROLE'}</span><p>{project.role}</p><a className="text-link" href="#architecture">{isRu ? 'Посмотреть стек' : 'Explore the stack'} <ArrowUpRight size={14} /></a></aside>
        <div className="detail-content"><article><span className="project-category">{isRu ? '01 / ЗАДАЧА' : '01 / THE CHALLENGE'}</span><h2>{isRu ? 'Какую проблему решал продукт' : 'The problem behind the product'}</h2><p>{project.challenge}</p></article><article><span className="project-category">{isRu ? '02 / РЕШЕНИЕ' : '02 / THE APPROACH'}</span><h2>{isRu ? 'От процесса к системе' : 'From workflow to system'}</h2><p>{project.approach}</p></article></div>
      </div>
      <section className="case-section" aria-labelledby="features-title"><p className="eyebrow"><span className="eyebrow-line" />{isRu ? '03 / ВОЗМОЖНОСТИ' : '03 / CAPABILITIES'}</p><h2 id="features-title">{isRu ? 'Что можно делать в продукте' : 'What the product makes possible'}</h2><div className="case-features">{project.features.map((feature, index) => <article key={feature.title}><span className="feature-index">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
      {project.screens.slice(1).map(screen => <figure className="case-secondary" key={screen.src}><div className="case-screen-copy"><span className="project-category">{isRu ? 'ИНТЕРФЕЙС В ДЕТАЛЯХ' : 'INTERFACE IN DETAIL'}</span><h2>{screen.title}</h2><figcaption>{screen.caption}</figcaption><a className="text-link" href={screen.src} target="_blank" rel="noreferrer">{isRu ? 'Открыть в полном размере' : 'View full size'} <ArrowUpRight size={15} /></a></div><a className="case-secondary-image" href={screen.src} target="_blank" rel="noreferrer" aria-label={`${isRu ? 'Открыть изображение' : 'Open image'}: ${screen.title}`}><img src={screen.src} alt={screen.title} width="1440" height="1040" loading="lazy" /></a></figure>)}
      <section className="case-section" id="architecture" aria-labelledby="architecture-title"><p className="eyebrow"><span className="eyebrow-line" />{isRu ? '04 / АРХИТЕКТУРА И СТЕК' : '04 / ARCHITECTURE & STACK'}</p><h2 id="architecture-title">{isRu ? 'Как это устроено' : 'How it fits together'}</h2><ol className="case-flow">{project.flow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol><div className="case-layers">{project.layers.map(layer => <article key={layer.name}><h3>{layer.name}</h3><div><strong>{layer.tools}</strong><p>{layer.purpose}</p></div></article>)}</div></section>
      <section className="case-section case-result"><p className="eyebrow"><span className="eyebrow-line" />{isRu ? '05 / РЕЗУЛЬТАТ И СТАТУС' : '05 / OUTCOME & STATUS'}</p><h2>{isRu ? 'Что получилось' : 'The outcome'}</h2><p className="case-result-text">{project.result}</p><details className="case-limitations"><summary>{isRu ? 'Границы текущей версии' : 'Current version boundaries'}</summary><p>{project.note}</p></details></section>
      <Link className="text-link detail-back" to="/#work">{isRu ? 'Все проекты' : 'All projects'} <ArrowUpRight size={16} /></Link>
    </section>
  )
}

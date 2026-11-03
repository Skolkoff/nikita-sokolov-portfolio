import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Database, Layers3, ScanSearch, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import { getCopy, sources } from './content'
import OutreachDemo from './OutreachDemo'

function Chapter({ number, label, children, id, className = '' }: { number: number; label: string; children: ReactNode; id?: string; className?: string }) {
  return <section id={id ?? `chapter-${number}`} className={`bgs-chapter ${className}`}><div className="bgs-chapter-rail"><span>{String(number).padStart(2, '0')}</span><p>{label}</p></div><div className="bgs-chapter-body">{children}</div></section>
}

export default function BgsProposal() {
  const { i18n } = useTranslation()
  const c = getCopy(i18n.resolvedLanguage)
  const p = c.proposal
  const demoRef = useRef<{ openDraft: () => void }>(null)
  const ru = i18n.resolvedLanguage === 'ru'
  return <>
    <section className="bgs-proposal-hero bgs-wrap">
      <Link className="bgs-back" to="/bgs"><ArrowLeft size={14}/>{c.back}</Link>
      <div className="bgs-hero-top"><span className="bgs-eyebrow">{p.eyebrow}</span><span className="bgs-status"><i/>{c.independent}</span></div>
      <h1>{p.titleA}<br/><em>{p.titleB}</em></h1><div className="bgs-proposal-deck"><p>{p.intro}</p><a href="#outreach" className="bgs-button bgs-button-dark">{p.read}<ArrowDownRight size={18}/></a></div>
      <div className="bgs-document-meta"><span>{p.scope}</span><span>{p.date}</span><span>NIKITA SOKOLOV → BGS GROUP</span></div>
    </section>
    <div className="bgs-wrap bgs-presentation">
      <Chapter number={1} label={p.chapters[0]}><h2>{p.taskTitle}</h2><p className="bgs-chapter-lead">{p.taskBody}</p><div className="bgs-evidence-pair"><article><span className="bgs-label"><Check size={14}/>{ru ? 'ПОДТВЕРЖДЕНО В ИСТОЧНИКАХ' : 'PUBLICLY DESCRIBED'}</span><h3>{p.taskKnown}</h3><p>{p.taskKnownText}</p><a href={sources[1].url} target="_blank" rel="noreferrer" className="bgs-source">LNGCON · Audience<ArrowUpRight size={13}/></a></article><article><span className="bgs-label bgs-label-hypothesis">{ru ? 'ГИПОТЕЗА ДЛЯ ПРОВЕРКИ' : 'HYPOTHESIS TO VALIDATE'}</span><h3>{p.taskHypothesis}</h3><p>{p.taskHypothesisText}</p></article></div></Chapter>
      <Chapter number={2} label={p.chapters[1]}><h2>{p.aiTitle}</h2><div className="bgs-ai-rows">{p.aiItems.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Chapter>
      <Chapter number={3} label={p.chapters[2]}><h2>{p.conceptTitle}</h2><p className="bgs-chapter-lead">{p.conceptText}</p><div className="bgs-context-equation">{[p.conceptLeft, p.conceptMiddle, p.conceptRight].map((title, i) => <div key={title}><span className={i === 2 ? 'bgs-equation-symbol bgs-equation-result' : 'bgs-equation-symbol'}>{i === 0 ? <ScanSearch size={25}/> : i === 1 ? <Layers3 size={25}/> : <UserCheck size={25}/>}</span><h3>{title}</h3><p>{p.conceptLabels[i]}</p>{i < 2 && <ArrowRight className="bgs-equation-arrow" size={19}/>}</div>)}</div></Chapter>
      <Chapter number={4} label={p.chapters[3]}><h2>{p.architectureTitle}</h2><p className="bgs-subtle">{p.architectureIntro}</p><ol className="bgs-module-list">{p.modules.map((item, i) => <li key={item.title} className={i === 3 ? 'is-highlight' : ''}><span className="bgs-module-index">M0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div>{i === 3 ? <UserCheck size={22}/> : <ArrowDownRight size={19}/>}</li>)}</ol></Chapter>
      <Chapter number={5} label={p.chapters[4]} id="outreach" className="bgs-demo-chapter"><h2>{p.demoTitle}</h2><p className="bgs-chapter-lead">{p.demoIntro}</p><OutreachDemo ref={demoRef}/></Chapter>
      <Chapter number={6} label={p.chapters[5]}><div className="bgs-example-head"><span className="bgs-label">{ru ? 'ВЫМЫШЛЕННЫЕ ДАННЫЕ' : 'FICTIONAL DATA'}</span><span>EXAMPLE / 01</span></div><h2>{p.companyTitle}</h2><div className="bgs-company-dossier"><div className="bgs-company-identity"><span className="bgs-company-logo" aria-hidden="true">N<span>↗</span></span><div><h3>{p.companyName}</h3><p>{p.companyDescription}</p></div></div><dl>{p.companyFields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>)}</dl></div><p className="bgs-boundary">{p.companyRule}</p></Chapter>
      <Chapter number={7} label={p.chapters[6]}><h2>{p.invitationTitle}</h2><p className="bgs-chapter-lead">{p.invitationText}</p><ul className="bgs-invitation-principles">{p.invitationPrinciples.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ul><button className="bgs-button bgs-button-dark" onClick={() => { demoRef.current?.openDraft(); document.getElementById('outreach')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }}>{p.jumpDraft}<ArrowUpRight size={17}/></button></Chapter>
      <Chapter number={8} label={p.chapters[7]}><h2>{p.techTitle}</h2><p className="bgs-chapter-lead">{p.techIntro}</p><div className="bgs-tech-list">{p.tech.map((item, i) => <article key={item.title}><span className="bgs-tech-icon">{i === 0 ? <Layers3 size={21}/> : i === 1 ? <Database size={21}/> : <ScanSearch size={21}/>}</span><div><h3>{item.title}</h3><span>{item.stack}</span><p>{item.text}</p></div></article>)}</div><aside className="bgs-boundary">{p.techBoundary}</aside></Chapter>
      <Chapter number={9} label={p.chapters[8]}><h2>{p.mvpTitle}</h2><ol className="bgs-mvp-timeline">{p.stages.map((item, i) => <li key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol><div className="bgs-later"><span className="bgs-label">{p.later}</span><p>{p.laterText}</p></div></Chapter>
      <Chapter number={10} label={p.chapters[9]}><h2>{p.valueTitle}</h2><p className="bgs-chapter-lead">{p.valueIntro}</p><div className="bgs-value-grid">{p.metrics.map(item => <article key={item.title}><span className="bgs-metric-mark" aria-hidden="true">↗</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Chapter>
    </div>
    <section className="bgs-proposal-close"><div className="bgs-wrap"><span className="bgs-eyebrow">{c.by}</span><h2>{p.endTitle}</h2><p>{p.endText}</p><a className="bgs-button bgs-button-light" href="https://t.me/nikskof" target="_blank" rel="noreferrer">{c.contact}<ArrowUpRight size={18}/></a></div></section>
    <section className="bgs-sources bgs-wrap"><div><h2>{p.sourcesTitle}</h2><p>{p.sourcesText}</p></div><ul>{sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={13}/></a></li>)}</ul></section>
  </>
}

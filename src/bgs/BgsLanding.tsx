import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, FileText, Search, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCopy, sources } from './content'

export default function BgsLanding() {
  const { i18n } = useTranslation()
  const c = getCopy(i18n.resolvedLanguage)
  const l = c.landing
  return <>
    <section className="bgs-landing-hero bgs-wrap">
      <div className="bgs-hero-top"><span className="bgs-eyebrow">{l.eyebrow}</span><span className="bgs-status"><i/>{c.independent}</span></div>
      <div className="bgs-landing-grid">
        <div className="bgs-hero-copy"><h1>{l.titleA}<br/><em>{l.titleB}</em></h1><p className="bgs-lead">{l.intro}</p><p className="bgs-bridge">{l.bridge}</p>
          <Link className="bgs-button bgs-button-dark" to="/bgs/proposal">{c.explore}<ArrowUpRight size={18}/></Link><span className="bgs-cta-note">{l.note}</span>
        </div>
        <div className="bgs-workflow-preview">
          <div className="bgs-preview-head"><span className="bgs-window-dots"><i/><i/><i/></span><span>Audience Intelligence</span><span>01—05</span></div>
          <div className="bgs-preview-body"><p className="bgs-eyebrow">{l.diagramSub}</p><h2>{l.diagramTitle}</h2>
            <ol className="bgs-preview-flow">{l.diagramSteps.map((step, index) => <li key={step} className={index === 4 ? 'is-final' : ''}><span className="bgs-flow-number">0{index + 1}</span><span>{step}</span>{index === 4 ? <UserCheck size={17}/> : <ArrowDownRight size={15}/>}</li>)}</ol>
            <p className="bgs-preview-note"><UserCheck size={17}/>{l.focus}</p>
          </div>
        </div>
      </div>
      <div className="bgs-product-strip"><span className="bgs-strip-mark"><Search size={21}/></span><strong>{l.product}</strong><p>{l.summary}</p><ArrowDownRight size={23}/></div>
    </section>
    <section className="bgs-context bgs-wrap">
      <span className="bgs-eyebrow">{l.contextEyebrow}</span><div className="bgs-section-intro"><h2>{l.contextTitle}</h2><p>{l.contextIntro}</p></div>
      <div className="bgs-context-columns">{l.context.map((item, i) => <article key={item.title}><span className="bgs-item-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a className="bgs-source" href={sources[item.source].url} target="_blank" rel="noreferrer">{sources[item.source].label}<ArrowUpRight size={13}/></a></article>)}</div>
    </section>
    <section className="bgs-assistant-band"><div className="bgs-wrap bgs-assistant-grid"><div><span className="bgs-eyebrow">{l.assistantEyebrow}</span><h2>{l.assistantTitle}</h2><p>{l.assistantIntro}</p><Link className="bgs-button bgs-button-light" to="/bgs/proposal#outreach">{c.explore}<ArrowRight size={17}/></Link></div><ul>{l.capabilities.map(item => <li key={item}><Check size={17}/><span>{item}</span></li>)}</ul></div></section>
    <section className="bgs-author bgs-wrap"><div className="bgs-author-monogram">NS<span>.</span></div><div><span className="bgs-eyebrow">{c.by}</span><h2>{l.authorTitle}</h2><p>{l.authorText}</p><div className="bgs-inline-actions"><a className="bgs-text-link" href="https://t.me/nikskof" target="_blank" rel="noreferrer">{c.contact}<ArrowUpRight size={16}/></a><a className="bgs-text-link bgs-muted" href="/#work">{c.portfolio}<FileText size={15}/></a></div></div></section>
  </>
}

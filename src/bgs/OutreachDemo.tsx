import { forwardRef, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CheckCheck, Copy, FileText, RotateCcw, Search, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { canCopy, createOutreachState, outreachReducer } from './outreachModel'
import type { Locale, Recipient, Tone } from './outreachModel'

const OutreachDemo = forwardRef<{ openDraft: () => void }>(function OutreachDemo(_, ref) {
  const { i18n } = useTranslation()
  const locale: Locale = i18n.resolvedLanguage === 'ru' ? 'ru' : 'en'
  const ru = locale === 'ru'
  const [state, dispatch] = useReducer(outreachReducer, locale, createOutreachState)
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const textRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { dispatch({ type: 'locale', value: locale }) }, [locale])
  useEffect(() => { setCopyStatus('idle') }, [state.draft, state.checks, state.stale])
  useImperativeHandle(ref, () => ({ openDraft: () => dispatch({ type: 'step', value: 5 }) }), [])
  const t = ru ? {
    label: 'ИНТЕРАКТИВНЫЙ ПРИМЕР', title: 'Outreach Assistant', notice: 'Сценарная демонстрация: вымышленная компания, заранее подготовленные тексты. Живой поиск, AI и отправка сообщений не подключены.',
    steps: ['Мероприятие', 'Поиск компании', 'Анализ бизнеса', 'Релевантность', 'Интерес', 'Предложение', 'Проверка'],
    stepTitles: ['Задать контекст события', 'Найти компанию для исследования', 'Понять, чем она занимается', 'Объяснить соответствие', 'Выбрать возможный интерес', 'Подготовить персональный текст', 'Проверить перед использованием'],
    next: 'Следующий шаг', prev: 'Назад', reset: 'Сбросить пример',
    eventDescription: 'Реальная серия BGS по автоматизации и цифровизации нефтегаза. В примере используем её тематику, а не список участников.', eventLink: 'Официальный сайт события', selected: 'ВЫБРАНО ДЛЯ ПРИМЕРА',
    searchLabel: 'Компания в подготовленном сценарии', searchResult: 'Один демонстрационный результат', fictional: 'ВЫМЫШЛЕННАЯ КОМПАНИЯ',
    profileIntro: 'Следующие сведения заданы для примера. У компании нет вымышленных ссылок на источники.',
    facts: ['Поставляет решения промышленной автоматизации', 'Специализируется на мониторинге оборудования', 'Работает с промышленными и инженерными командами'],
    unknownTitle: 'Нужно уточнить', unknown: 'Текущие проекты, ответственный специалист, интерес к событию и бюджет неизвестны.',
    fitLabel: 'ПРЕДВАРИТЕЛЬНЫЙ ВЫВОД ПРИМЕРА', fitTitle: 'Есть тематическая связь.', fitBody: 'Промышленная автоматизация связана с цифровой повесткой AUTOMA. Но отраслевой фокус компании и задача конкретного специалиста ещё требуют проверки.',
    fitChecks: ['Совпадение тематики: автоматизация', 'Аудитория: потенциальное пересечение', 'Готовность к участию: неизвестна'], fitNote: 'Это качественное рассуждение по условным данным. Не вероятность участия и не результат настоящего исследования.',
    recipient: 'Тип адресата', recipients: ['Делегат', 'Спонсор', 'Партнёр'], tone: 'Тон предложения', tones: ['Деловой', 'Краткий'],
    interests: ['Обсудить практические подходы и познакомиться с отраслевыми специалистами.', 'Представить решение релевантной аудитории при подходящих целях и доступной категории.', 'Обменяться отраслевой экспертизой и контентом вокруг общих тем.'],
    hypothesis: 'ГИПОТЕЗА ИНТЕРЕСА', validate: 'Подтвердить в разговоре. Тематическая связь не означает намерение участвовать.',
    editor: 'Редактируемый черновик', template: 'ПОДГОТОВЛЕННЫЙ ШАБЛОН ПРИМЕРА', update: 'Обновить черновик — заменить правки', stale: 'Настройки или язык изменены. Текущий текст сохранён. Обновление заменит его и сбросит проверку.',
    checklist: ['Проверить факты и основания обращения', 'Подтвердить формат и коммерческие условия', 'Уточнить интерес и допустимость контакта'],
    reviewTitle: 'Решение остаётся за менеджером.', reviewText: 'Редактирование или обновление текста сбрасывает проверку. Копирование доступно после всех трёх отметок.', copy: 'Скопировать проверенный черновик', copied: 'Черновик скопирован. Сообщение не отправлено.', failed: 'Копирование недоступно. Текст выделен: скопируйте его вручную.', notSent: 'Ничего не отправляется. Черновик остаётся в вашем браузере.',
  } : {
    label: 'INTERACTIVE EXAMPLE', title: 'Outreach Assistant', notice: 'Scripted demonstration: a fictional company and prewritten templates. Live search, AI and message sending are not connected.',
    steps: ['Event', 'Company search', 'Business analysis', 'Relevance', 'Interest', 'Proposal', 'Review'],
    stepTitles: ['Set the event context', 'Find a company to research', 'Understand its business', 'Explain the fit', 'Choose a possible interest', 'Prepare a personal invitation', 'Review before using'],
    next: 'Next step', prev: 'Back', reset: 'Reset example',
    eventDescription: 'A real BGS series on oil and gas automation and digitalisation. This example uses its topic, not a list of attendees.', eventLink: 'Official event website', selected: 'SELECTED FOR THIS EXAMPLE',
    searchLabel: 'Company in the prepared scenario', searchResult: 'One illustrative result', fictional: 'FICTIONAL COMPANY',
    profileIntro: 'The following information is invented for this example. No fabricated source links are attached to the company.',
    facts: ['Supplies industrial automation solutions', 'Specialises in equipment monitoring', 'Works with industrial and engineering teams'],
    unknownTitle: 'Still to clarify', unknown: 'Current projects, the right contact, event interest and budget are unknown.',
    fitLabel: 'ILLUSTRATIVE INITIAL ASSESSMENT', fitTitle: 'There is a thematic connection.', fitBody: 'Industrial automation relates to AUTOMA’s digitalisation focus. The company’s industry coverage and the individual’s priorities still need verification.',
    fitChecks: ['Topic fit: automation', 'Audience: possible overlap', 'Readiness to attend: unknown'], fitNote: 'A qualitative explanation based on fictional data. Not a probability of attendance or a real research result.',
    recipient: 'Recipient type', recipients: ['Delegate', 'Sponsor', 'Partner'], tone: 'Invitation tone', tones: ['Business', 'Concise'],
    interests: ['Discuss practical approaches and connect with industry specialists.', 'Introduce a solution to a relevant audience, subject to objectives and category availability.', 'Exchange expertise and content around shared industry topics.'],
    hypothesis: 'POSSIBLE INTEREST', validate: 'Validate in a conversation. Topic fit does not imply an intention to attend.',
    editor: 'Editable draft', template: 'PREWRITTEN EXAMPLE TEMPLATE', update: 'Update draft — replace edits', stale: 'Settings or language changed. Your current text is preserved. Updating replaces it and clears review checks.',
    checklist: ['Verify facts and the reason for contacting', 'Confirm the format and commercial terms', 'Clarify interest and permission to contact'],
    reviewTitle: 'The manager makes the decision.', reviewText: 'Editing or updating the draft clears the review. Copy is available after all three checks.', copy: 'Copy reviewed draft', copied: 'Draft copied. No message was sent.', failed: 'Clipboard unavailable. The text is selected; please copy it manually.', notSent: 'Nothing is sent. The draft stays in your browser.',
  }
  const recipients: Recipient[] = ['delegate', 'sponsor', 'partner']
  const tones: Tone[] = ['business', 'concise']
  const settings = <div className="bgs-demo-settings"><label>{t.recipient}<select value={state.recipient} onChange={e => dispatch({ type: 'recipient', value: e.target.value as Recipient })}>{recipients.map((r, i) => <option value={r} key={r}>{t.recipients[i]}</option>)}</select></label><label>{t.tone}<select value={state.tone} onChange={e => dispatch({ type: 'tone', value: e.target.value as Tone })}>{tones.map((tone, i) => <option value={tone} key={tone}>{t.tones[i]}</option>)}</select></label></div>
  async function copyDraft() {
    if (!canCopy(state)) return
    try { await navigator.clipboard.writeText(state.draft); setCopyStatus('copied') }
    catch { textRef.current?.focus(); textRef.current?.select(); setCopyStatus('failed') }
  }
  return <div className="bgs-demo" aria-label={t.title}>
    <header className="bgs-demo-header"><div><span>{t.label}</span><h3>{t.title}</h3></div><button onClick={() => dispatch({ type: 'reset' })} className="bgs-demo-reset"><RotateCcw size={14}/>{t.reset}</button></header>
    <p className="bgs-demo-disclaimer"><ShieldCheck size={17}/><span>{t.notice}</span></p>
    <div className="bgs-demo-tabs" role="tablist" aria-label={ru ? 'Шаги демонстрации' : 'Example steps'}>{t.steps.map((step, i) => <button key={i} id={`demo-tab-${i}`} role="tab" tabIndex={state.step === i ? 0 : -1} aria-selected={state.step === i} aria-controls={`demo-panel-${i}`} onClick={() => dispatch({ type: 'step', value: i })} onKeyDown={event => {
      const next = event.key === 'ArrowRight' ? (i + 1) % 7 : event.key === 'ArrowLeft' ? (i + 6) % 7 : event.key === 'Home' ? 0 : event.key === 'End' ? 6 : null
      if (next !== null) { event.preventDefault(); dispatch({ type: 'step', value: next }); document.getElementById(`demo-tab-${next}`)?.focus() }
    }} className={state.step === i ? 'is-active' : ''}><span>{String(i + 1).padStart(2, '0')}</span>{step}</button>)}</div>
    <div className="bgs-demo-panel" id={`demo-panel-${state.step}`} role="tabpanel" aria-labelledby={`demo-tab-${state.step}`}>
      <div className="bgs-demo-stage-heading"><span className="bgs-demo-stage-number">0{state.step + 1}</span><h4>{t.stepTitles[state.step]}</h4></div>
      {state.step === 0 && <div className="bgs-demo-event"><span className="bgs-label"><Check size={14}/>{t.selected}</span><strong>AUTOMA</strong><p>Oil & Gas Automation and Digitalisation Congress</p><p>{t.eventDescription}</p><a className="bgs-source" href="https://automacongress.com/" target="_blank" rel="noreferrer">{t.eventLink}<ArrowRight size={13}/></a></div>}
      {state.step === 1 && <><label className="bgs-demo-search">{t.searchLabel}<span><Search size={18}/><input value="Northline Process Systems" readOnly/></span></label><p className="bgs-subtle">{t.searchResult}</p><div className="bgs-demo-result"><span className="bgs-company-logo" aria-hidden="true">N↗</span><div><span className="bgs-label">{t.fictional}</span><h5>Northline Process Systems</h5><p>{ru ? 'Автоматизация · Мониторинг оборудования' : 'Automation · Equipment monitoring'}</p></div><ArrowRight size={18}/></div></>}
      {state.step === 2 && <><p className="bgs-subtle">{t.profileIntro}</p><ul className="bgs-demo-facts">{t.facts.map(fact => <li key={fact}><Check size={15}/>{fact}</li>)}</ul><aside className="bgs-demo-unknown"><strong>{t.unknownTitle}</strong><p>{t.unknown}</p></aside></>}
      {state.step === 3 && <><span className="bgs-label">{t.fitLabel}</span><h5 className="bgs-fit-title">{t.fitTitle}</h5><p className="bgs-demo-fit-body">{t.fitBody}</p><ul className="bgs-fit-checks">{t.fitChecks.map(check => <li key={check}><span/>{check}</li>)}</ul><p className="bgs-boundary">{t.fitNote}</p></>}
      {state.step === 4 && <>{settings}<div className="bgs-interest"><span className="bgs-label">{t.hypothesis}</span><h5>{t.interests[recipients.indexOf(state.recipient)]}</h5><p>{t.validate}</p></div></>}
      {state.step >= 5 && <>{settings}<div className="bgs-draft-actions"><span className="bgs-label"><FileText size={14}/>{t.template}</span><button onClick={() => dispatch({ type: 'regenerate' })}>{t.update}<RotateCcw size={13}/></button></div>{state.stale && <p className="bgs-stale" role="status">{t.stale}</p>}<label className="bgs-editor-label" htmlFor="outreach-draft">{t.editor}</label><textarea id="outreach-draft" ref={textRef} value={state.draft} onChange={e => dispatch({ type: 'edit', text: e.target.value })} spellCheck={false}/>
        {state.step === 6 && <div className="bgs-review"><div className="bgs-review-heading"><ShieldCheck size={23}/><div><h5>{t.reviewTitle}</h5><p>{t.reviewText}</p></div></div><div className="bgs-review-checks">{t.checklist.map((check, i) => <label key={i}><input type="checkbox" checked={state.checks[i]} onChange={e => dispatch({ type: 'check', index: i, value: e.target.checked })}/><span>{check}</span></label>)}</div><button className="bgs-button bgs-button-dark bgs-copy-button" disabled={!canCopy(state)} onClick={() => void copyDraft()}>{copyStatus === 'copied' ? <CheckCheck size={17}/> : <Copy size={17}/>} {t.copy}</button><p className="bgs-copy-status" role="status">{copyStatus === 'copied' ? t.copied : copyStatus === 'failed' ? t.failed : t.notSent}</p></div>}
      </>}
    </div>
    <footer className="bgs-demo-footer"><button disabled={state.step === 0} onClick={() => dispatch({ type: 'step', value: state.step - 1 })}><ArrowLeft size={15}/>{t.prev}</button><span>0{state.step + 1} / 07</span><button disabled={state.step === 6} onClick={() => dispatch({ type: 'step', value: state.step + 1 })}>{t.next}<ArrowRight size={15}/></button></footer>
  </div>
})

export default OutreachDemo

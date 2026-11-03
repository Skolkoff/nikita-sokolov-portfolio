export type Locale = 'ru' | 'en'
export type Recipient = 'delegate' | 'sponsor' | 'partner'
export type Tone = 'business' | 'concise'

export function buildDraft(locale: Locale, recipient: Recipient, tone: Tone): string {
  const ru = locale === 'ru'
  const subject = ru
    ? { delegate: 'AUTOMA: обсудить участие вашей команды', sponsor: 'AUTOMA: обсудить спонсорский формат', partner: 'AUTOMA: возможное отраслевое партнёрство' }[recipient]
    : { delegate: 'AUTOMA: explore participation for your team', sponsor: 'AUTOMA: explore a sponsorship format', partner: 'AUTOMA: a possible industry partnership' }[recipient]
  const context = ru
    ? 'Специализация Northline Process Systems — промышленная автоматизация и мониторинг оборудования — тематически связана с AUTOMA, конгрессом по автоматизации и цифровизации нефтегаза.'
    : 'Northline Process Systems’ focus on industrial automation and equipment monitoring relates to AUTOMA, a congress on oil and gas automation and digitalisation.'
  const angle = ru
    ? { delegate: 'Участие в качестве делегата могло бы помочь вашей команде обсудить практические подходы и познакомиться с отраслевыми специалистами. Пока это гипотеза: важно уточнить ваши текущие задачи и подходящий формат.', sponsor: 'Возможно, вашей команде будет интересно рассмотреть спонсорский формат для представления решения отраслевой аудитории. Прежде чем готовить пакет, предлагаем уточнить целевые компании, задачи и доступность вашей категории.', partner: 'Предлагаем обсудить партнёрский формат: обмен предметной экспертизой и контентом по промышленной автоматизации. Сначала важно понять, какие темы и аудитория актуальны для обеих сторон.' }[recipient]
    : { delegate: 'Joining as a delegate could help your team discuss practical approaches and connect with industry specialists. This is a hypothesis to explore: we would first need to understand your current priorities and a suitable format.', sponsor: 'A sponsorship format may be relevant if your team wants to introduce its solution to an industry audience. Before preparing a package, we would clarify your target companies, objectives and category availability.', partner: 'We would welcome a conversation about a partnership around expertise and content in industrial automation. The first step is to identify topics and audiences that matter to both sides.' }[recipient]
  const shortAngle = ru
    ? { delegate: 'Интересно ли вашей команде участие в AUTOMA в качестве делегатов? Тематика промышленной автоматизации может соответствовать вашим задачам; предлагаем сначала уточнить приоритеты.', sponsor: 'Рассматриваете ли вы спонсорский формат AUTOMA? Предлагаем уточнить целевую аудиторию, задачи и доступность категории, затем обсудить подходящий пакет.', partner: 'Интересно ли обсудить партнёрство вокруг промышленной автоматизации на AUTOMA? Предлагаем начать с общих тем, аудитории и возможного формата.' }[recipient]
    : { delegate: 'Would your team consider joining AUTOMA as delegates? Industrial automation may align with your priorities; we suggest first clarifying your objectives.', sponsor: 'Would you consider a sponsorship format at AUTOMA? We suggest clarifying your target audience, objectives and category availability before discussing a package.', partner: 'Would you be interested in an AUTOMA partnership around industrial automation? We suggest starting with shared topics, audiences and a possible format.' }[recipient]
  return `${ru ? 'Тема' : 'Subject'}: ${subject}\n\n${ru ? 'Здравствуйте, команда' : 'Hello,'} Northline Process Systems!\n\n${tone === 'concise' ? shortAngle : context + '\n\n' + angle}\n\n${ru ? 'Будет ли удобно коротко обсудить это? Условия участия и любые встречи требуют отдельного согласования.\n\n[Имя менеджера BGS — заполнить после проверки]' : 'Would a brief conversation be useful? Participation terms and any meetings would require separate confirmation.\n\n[BGS manager name — complete after review]'}`
}

export type OutreachState = {
  locale: Locale; recipient: Recipient; tone: Tone; step: number
  draft: string; stale: boolean; checks: boolean[]
}
export type OutreachAction =
  | { type: 'recipient'; value: Recipient }
  | { type: 'tone'; value: Tone }
  | { type: 'locale'; value: Locale }
  | { type: 'step'; value: number }
  | { type: 'edit'; text: string }
  | { type: 'check'; index: number; value: boolean }
  | { type: 'regenerate' } | { type: 'keepDraft' } | { type: 'reset' }

export function createOutreachState(locale: Locale): OutreachState {
  return { locale, recipient: 'delegate', tone: 'business', step: 0, draft: buildDraft(locale, 'delegate', 'business'), stale: false, checks: [false, false, false] }
}

export function outreachReducer(state: OutreachState, action: OutreachAction): OutreachState {
  switch (action.type) {
    case 'recipient':
    case 'tone':
    case 'locale':
      if (state[action.type] === action.value) return state
      return { ...state, [action.type]: action.value, stale: true, checks: [false, false, false] }
    case 'step': return { ...state, step: Math.max(0, Math.min(6, action.value)) }
    case 'edit': return { ...state, draft: action.text, checks: [false, false, false] }
    case 'check': return { ...state, checks: state.checks.map((v, i) => i === action.index ? action.value : v) }
    case 'regenerate': return { ...state, draft: buildDraft(state.locale, state.recipient, state.tone), stale: false, checks: [false, false, false] }
    case 'keepDraft': return { ...state, stale: false, checks: [false, false, false] }
    case 'reset': return createOutreachState(state.locale)
  }
}

export function canCopy(state: OutreachState): boolean {
  return !state.stale && state.checks.every(Boolean) && state.draft.trim().length > 0
}

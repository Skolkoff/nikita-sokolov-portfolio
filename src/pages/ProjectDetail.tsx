import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

type Detail = { category: string; title: string; intro: string; role: string; challenge: string; solution: string; stack: string[]; note: string }

const details: Record<string, Detail> = {
  automotive: {
    category: 'BUSINESS AUTOMATION · FULL-STACK',
    title: 'Automotive Import Platform',
    intro: 'An internal MVP built for AvtoHous, designed to make vehicle sourcing and commercial offer preparation faster and more consistent.',
    role: 'Product idea, solution architecture and full-stack implementation.',
    challenge: 'Managers searched across external listings, recalculated vehicle costs manually and prepared client-facing offers through separate tools. This made comparisons and approvals slower than they needed to be.',
    solution: 'I proposed and built an internal MVP that collected vehicle listings, calculated an estimated landed cost, organized vehicle data into structured cards and generated PDF proposals. The workflow also included role-based access, saved vehicles and exports for messaging and social channels.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    note: 'This was an internal MVP, not a high-load production system. The project was stopped before long-term production validation due to a lack of funding. Before the tool, managers found approximately 3–6 suitable unique vehicles per day. After the workflow was introduced, output reached up to 12 Avito listings per day. These are different workflow measures, not a controlled productivity comparison. Preliminary margin estimates reduced the need for additional approvals.'
  },
  scivise: {
    category: 'DATA · RECOMMENDATION SYSTEMS',
    title: 'SciVisE',
    intro: 'A scientific discovery platform concept that helps users explore research beyond their immediate topic through personalized recommendations.',
    role: 'Backend and recommendation pipeline development.',
    challenge: 'A large collection of scientific papers can be difficult to navigate when a researcher wants to discover relevant work outside familiar keywords or follow adjacent research directions.',
    solution: 'I worked on a recommendation pipeline combining TF-IDF features, dimensionality reduction with SVD and an MLP reranking stage in PyTorch, with DOI, content_hash and URL deduplication. Models included discovery_reranker_project_finetuned.pt and cross_domain_boosted_reranker.pt. The platform concept also included collections, profiles, events and recommendations across adjacent subject areas.',
    stack: ['Python', 'PyTorch', 'PostgreSQL', 'Docker', 'Alembic', 'TF-IDF', 'SVD'],
    note: 'Academic project. The value NDCG 0.99998 appeared in prepared defense notes; without the experimental methodology, it should not be interpreted as a production performance guarantee. The project did not implement a RAG pipeline.'
  }
}


const russianDetails: Record<string, Detail> = {
  automotive: {
    category: 'БИЗНЕС-АВТОМАТИЗАЦИЯ · FULL-STACK',
    title: 'Automotive Import Platform',
    intro: 'Реальный внутренний MVP для AvtoHous: поиск автомобилей для импорта из Кыргызстана, расчёт стоимости и подготовка коммерческих предложений.',
    role: 'Самостоятельно предложил архитектуру и разработал MVP: от структуры данных до backend и интерфейса.',
    challenge: 'Менеджерам приходилось вручную искать объявления, рассчитывать доставку, таможню, дополнительные расходы и маржу, затем готовить предложения клиентам в отдельных инструментах.',
    solution: 'Парсинг mashina.kg, обработка объявлений и фотографий, карточки автомобилей, расчёт итоговой стоимости, PDF-предложения с фото и экспорт материалов в Telegram, Instagram и WhatsApp. Роли admin / lead / manager / guest, избранное, проверка стоимости, audit log и фоновые задачи Celery.',
    stack: details.automotive.stack,
    note: 'До инструмента менеджеры находили примерно 3–6 подходящих уникальных автомобилей в день. После внедрения рабочего процесса — до 12 объявлений Avito в день. Это разные показатели процесса, а не контролируемое сравнение производительности. Предварительный расчёт маржи сокращал необходимость дополнительных согласований. Это внутренний MVP: долгосрочная эксплуатация и масштабирование не проверены. Проект закрыли из-за отсутствия финансирования.'
  },
  scivise: {
    category: 'ДАННЫЕ · РЕКОМЕНДАТЕЛЬНЫЕ СИСТЕМЫ',
    title: 'SciVisE',
    intro: 'Академический проект научной платформы на основе arXiv: статьи, коллекции, профили, мероприятия и рекомендации смежных исследований.',
    role: 'Разработка backend и рекомендательного pipeline.',
    challenge: 'Помочь исследователю находить релевантные статьи за пределами привычных ключевых слов и изучать смежные научные области.',
    solution: 'TF-IDF, снижение размерности с SVD и MLP reranker на PyTorch. PostgreSQL, Docker, миграции Alembic и дедупликация по DOI, content_hash и URL. Использовались модели discovery_reranker_project_finetuned.pt и cross_domain_boosted_reranker.pt.',
    stack: details.scivise.stack,
    note: 'Академический проект. Значение NDCG 0.99998 фигурировало в подготовленном ответе для защиты; без описания экспериментальной методики оно не подтверждает качество в production. RAG в проекте не реализован.'
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const { i18n } = useTranslation()
  const isRu = i18n.resolvedLanguage === 'ru'
  const project = id ? (isRu ? russianDetails : details)[id] : undefined
  if (!project) return <section className="detail-page section-wrap"><h1>{isRu ? 'Проект не найден' : 'Project not found'}</h1><Link className="text-link" to="/">{isRu ? 'На главную' : 'Back home'} <ArrowUpRight size={16} /></Link></section>
  return (
    <section className="detail-page section-wrap">
      <Link className="back-link" to="/"><ArrowLeft size={16} /> {isRu ? 'К проектам' : 'Back to projects'}</Link>
      <p className="eyebrow"><span className="eyebrow-line" />{project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-intro">{project.intro}</p>
      <div className="detail-grid">
        <div className="detail-sidebar"><span className="project-category">{isRu ? 'МОЯ РОЛЬ' : 'MY ROLE'}</span><p>{project.role}</p><span className="project-category">{isRu ? 'ТЕХНОЛОГИИ' : 'TECHNOLOGY'}</span><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <div className="detail-content"><article><span className="project-category">{isRu ? 'ЗАДАЧА' : 'THE CHALLENGE'}</span><p>{project.challenge}</p></article><article><span className="project-category">{isRu ? 'РЕШЕНИЕ' : 'THE APPROACH'}</span><p>{project.solution}</p></article><aside className="project-note">{project.note}</aside></div>
      </div>
      <Link className="text-link detail-back" to="/">{isRu ? 'Все проекты' : 'All projects'} <ArrowUpRight size={16} /></Link>
    </section>
  )
}
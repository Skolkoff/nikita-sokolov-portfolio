import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

type Detail = { category: string; title: string; intro: string; role: string; challenge: string; solution: string; stack: string[]; note: string }

const details: Record<string, Detail> = {
  automotive: {
    category: 'BUSINESS AUTOMATION · FULL-STACK',
    title: 'Automotive Import Platform',
    intro: 'A tool concept designed to make vehicle sourcing and commercial offer preparation faster and more consistent.',
    role: 'Product idea, solution architecture and full-stack implementation.',
    challenge: 'Managers searched across external listings, recalculated vehicle costs manually and prepared client-facing offers through separate tools. This made comparisons and approvals slower than they needed to be.',
    solution: 'I proposed and built an internal MVP that collected vehicle listings, calculated an estimated landed cost, organized vehicle data into structured cards and generated PDF proposals. The workflow also included role-based access, saved vehicles and exports for messaging and social channels.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    note: 'This was an internal MVP, not a high-load production system. The project was stopped before long-term production validation due to a lack of funding. The workflow showed a practical path from several hours of scattered work to a process measured in minutes; the reported listing throughput reached up to 12 suitable Avito listings per day.'
  },
  'bgs-intelligence': {
    category: 'AI · LEAD INTELLIGENCE · PRODUCT CONCEPT',
    title: 'BGS Intelligence',
    intro: 'An independent product concept exploring how AI-assisted research could help B2B event sales teams identify and qualify relevant companies.',
    role: 'Product discovery, workflow design and demo implementation.',
    challenge: 'Commercial teams working with industry events need to identify companies that fit an event’s audience, understand their business context and prioritize outreach. Research can be fragmented across public websites, directories and spreadsheets.',
    solution: 'The proposed workflow starts with a company list, enriches records from public sources, generates an explainable fit assessment and creates a review queue for sales specialists. Each recommendation is designed to retain source references and distinguish verified facts from AI-generated interpretation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'LLM APIs', 'Data enrichment', 'React'],
    note: 'This is an independent demonstration concept created for a portfolio. It is not an existing BGS Group product, was not commissioned by BGS Group and does not use private company data. Any sample records and scores in the demo are illustrative.'
  },
  scivise: {
    category: 'DATA · RECOMMENDATION SYSTEMS',
    title: 'SciVisE',
    intro: 'A scientific discovery platform concept that helps users explore research beyond their immediate topic through personalized recommendations.',
    role: 'Backend and recommendation pipeline development.',
    challenge: 'A large collection of scientific papers can be difficult to navigate when a researcher wants to discover relevant work outside familiar keywords or follow adjacent research directions.',
    solution: 'I worked on a recommendation pipeline combining TF-IDF features, dimensionality reduction with SVD and a neural reranking stage. The platform concept also included collections, profiles, events and recommendations across adjacent subject areas.',
    stack: ['Python', 'PyTorch', 'PostgreSQL', 'Docker', 'Alembic', 'TF-IDF', 'SVD'],
    note: 'Academic project. The reported ranking metric was measured on the project dataset and evaluation setup; it should not be interpreted as a production performance guarantee. The project did not implement a RAG pipeline.'
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = id ? details[id] : undefined
  if (!project) return <section className="detail-page section-wrap"><h1>Project not found</h1><Link className="text-link" to="/">Back home <ArrowUpRight size={16} /></Link></section>
  return (
    <section className="detail-page section-wrap">
      <Link className="back-link" to="/"><ArrowLeft size={16} /> Back to projects</Link>
      <p className="eyebrow"><span className="eyebrow-line" />{project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-intro">{project.intro}</p>
      <div className="detail-grid">
        <div className="detail-sidebar"><span className="project-category">MY ROLE</span><p>{project.role}</p><span className="project-category">TECHNOLOGY</span><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <div className="detail-content"><article><span className="project-category">THE CHALLENGE</span><p>{project.challenge}</p></article><article><span className="project-category">THE APPROACH</span><p>{project.solution}</p></article><aside className="project-note">{project.note}</aside></div>
      </div>
      <Link className="text-link detail-back" to="/">All projects <ArrowUpRight size={16} /></Link>
    </section>
  )
}
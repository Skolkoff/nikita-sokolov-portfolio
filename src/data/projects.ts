export type Project = {
  id: string
  number: string
  title: string
  category: string
  summary: string
  tags: string[]
  status: string
  href: string
}

export const projects: Project[] = [
  {
    id: 'automotive',
    number: '01',
    title: 'Automotive Import Platform',
    category: 'BUSINESS AUTOMATION · FULL-STACK',
    summary: 'An internal platform concept for sourcing vehicles, calculating landed cost and preparing client proposals.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
    status: 'Internal project · MVP',
    href: '/projects/automotive',
  },
  {
    id: 'bgs-intelligence',
    number: '02',
    title: 'BGS Intelligence',
    category: 'AI · LEAD INTELLIGENCE',
    summary: 'An independent product concept for researching, enriching and qualifying B2B companies for event sales teams.',
    tags: ['AI workflows', 'Python', 'Data enrichment', 'Product design'],
    status: 'Independent demo concept',
    href: '/projects/bgs-intelligence',
  },
  {
    id: 'scivise',
    number: '03',
    title: 'SciVisE',
    category: 'DATA · RECOMMENDATION SYSTEMS',
    summary: 'A scientific discovery platform with personalized recommendations and cross-topic content discovery.',
    tags: ['Python', 'PyTorch', 'PostgreSQL', 'Docker'],
    status: 'Academic project',
    href: '/projects/scivise',
  },
]
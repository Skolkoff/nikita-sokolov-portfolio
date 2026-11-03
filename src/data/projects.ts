export type Project = {
  id: string
  number: string
  title: string
  category: string
  summary: string
  tags: string[]
  status: string
  ru: { category: string; summary: string; status: string }
  href: string
}

export const projects: Project[] = [
  {
    id: 'automotive',
    number: '01',
    title: 'Automotive Import Platform',
    category: 'BUSINESS AUTOMATION · FULL-STACK',
    summary: 'An internal MVP for AvtoHous for sourcing vehicles, calculating landed cost and preparing client proposals.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
    status: 'Internal project · MVP',
    ru: { category: 'БИЗНЕС-АВТОМАТИЗАЦИЯ · FULL-STACK', summary: 'Внутренний MVP для AvtoHous: поиск автомобилей, расчёт итоговой стоимости и подготовка коммерческих предложений.', status: 'Внутренний проект · MVP' },
    href: '/projects/automotive',
  },
  {
    id: 'scivise',
    number: '03',
    title: 'SciVisE',
    category: 'DATA · RECOMMENDATION SYSTEMS',
    summary: 'A scientific discovery platform with personalized recommendations and cross-topic content discovery.',
    tags: ['Python', 'PyTorch', 'PostgreSQL', 'Docker'],
    status: 'Academic project',
    ru: { category: 'ДАННЫЕ · РЕКОМЕНДАТЕЛЬНЫЕ СИСТЕМЫ', summary: 'Академическая платформа на основе arXiv для поиска статей и рекомендаций исследований из смежных областей.', status: 'Академический проект' },
    href: '/projects/scivise',
  },
]
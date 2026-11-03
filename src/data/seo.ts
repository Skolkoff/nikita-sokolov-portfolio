const origin = 'https://portfolioskolkoff.ru'
export function getSeo(path: string, language = 'en') {
  path = path.replace(/\/+$/, '') || '/'
  const ru = language === 'ru'
  const isAuto = path === '/projects/automotive'
  const isSci = path === '/projects/scivise'
  const title = isAuto ? 'Automotive Import Platform — Nikita Sokolov' : isSci ? 'SciVisE — Nikita Sokolov' : ru ? 'Никита Соколов — AI Product Engineer и Full-Stack разработчик' : 'Nikita Sokolov — AI Product Engineer & Full-Stack Developer'
  const description = isAuto ? (ru ? 'Кейс AvtoHous: подбор автомобилей, расчёт стоимости импорта и автоматизация предложений. React, Django, PostgreSQL и Celery.' : 'AvtoHous case study: vehicle sourcing, import cost estimates and offer preparation. Built with React, Django, PostgreSQL and Celery.') : isSci ? (ru ? 'SciVisE: поиск научных статей arXiv, коллекции и рекомендации смежных исследований. Полный цикл разработки: React, FastAPI и ML.' : 'SciVisE: arXiv paper discovery, collections and cross-domain recommendations. Full-cycle research and development with React, FastAPI and ML.') : (ru ? 'Портфолио Никиты Соколова: разработка продуктов, бизнес-автоматизация и рекомендательные системы. Кейсы AvtoHous и SciVisE.' : 'Nikita Sokolov builds practical software products, business automation and recommendation systems. Explore the AvtoHous and SciVisE case studies.')
  const url = origin + path
  const image = `${origin}/social/${isAuto ? 'automotive' : isSci ? 'scivise' : 'portfolio'}.png`
  const person = { '@type': 'Person', '@id': `${origin}/#person`, name: 'Nikita Sokolov', url: origin, jobTitle: 'AI Product Engineer / Full-Stack Developer', sameAs: ['https://github.com/Skolkoff', 'https://t.me/nikskof'] }
  const schema = { '@context': 'https://schema.org', '@graph': [person, isAuto || isSci ? { '@type': 'CreativeWork', name: isAuto ? 'Automotive Import Platform' : 'SciVisE', description, url, image, author: { '@id': `${origin}/#person` } } : { '@type': 'WebSite', name: 'Nikita Sokolov — Portfolio', url: origin, author: { '@id': `${origin}/#person` } }] }
  return { title, description, url, image, schema, locale: ru ? 'ru_RU' : 'en_US' }
}

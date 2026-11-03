export type CaseStudy = {
  category: string; title: string; intro: string; role: string; status: string
  challenge: string; approach: string; result: string; note: string
  features: { title: string; text: string }[]
  layers: { name: string; tools: string; purpose: string }[]
  flow: string[]
  screens: { src: string; title: string; caption: string }[]
}

export const caseStudies: Record<'ru' | 'en', Record<string, CaseStudy>> = {
  ru: {
    automotive: {
      category: 'БИЗНЕС-АВТОМАТИЗАЦИЯ · FULL-STACK', title: 'Automotive Import Platform',
      intro: 'От объявления до предложения клиенту. Внутренняя платформа AvtoHous объединяет подбор автомобилей, расчёт стоимости импорта и подготовку материалов для продажи.',
      role: 'Самостоятельно предложил архитектуру и разработал MVP: от структуры данных и backend до интерфейса менеджера.',
      status: 'Внутренний MVP · AvtoHous',
      challenge: 'Чтобы подготовить предложение клиенту, менеджер обращался в отдел закупок. Закупки искали подходящие автомобили и передавали варианты менеджеру, а тот отправлял их клиенту. По моим наблюдениям, один такой цикл мог занимать до 30 минут. При изменении запроса поиск и согласования приходилось повторять — это замедляло ответ клиенту и создавало лишние передачи информации между отделами.',
      approach: 'Собрал рабочий процесс вокруг единой карточки автомобиля. Парсер получает объявления mashina.kg, backend хранит характеристики и фотографии, а интерфейс помогает отобрать варианты и проверить коммерческую цену. Длительный сбор вынесен в фоновые задачи: пользователь видит состояние очереди и прогресс.',
      features: [
        { title: 'Подбор в одном окне', text: 'Лента с фильтрами по марке, году, цене, городу и мощности. Избранное сохраняет интересные варианты, а карточка собирает характеристики, описание и галерею.' },
        { title: 'Прозрачный расчёт', text: 'Стоимость источника, курс USD/RUB, доставка, дополнительные расходы, утильсбор и маржа складываются в понятный расчёт. Проверенную цену можно зафиксировать для предложения.' },
        { title: 'Управляемый сбор', text: 'Запуск и остановка парсера, очередь, статусы и счётчики обработки помогают следить за задачами без блокировки интерфейса. Сбор и синхронизация выполняются через Celery.' },
        { title: 'Подготовка к продаже', text: 'Режимы admin, lead, manager и guest разделяют сценарии работы. Есть галерея и инструменты обработки фото, текстовый черновик КП и подготовка материалов для каналов продаж.' },
      ],
      layers: [
        { name: 'Интерфейс', tools: 'React · TypeScript · Vite', purpose: 'Лента, фильтры, карточка, расчёт цены и прогресс фоновых операций.' },
        { name: 'Backend', tools: 'Python · Django · Django REST Framework', purpose: 'API, модели автомобилей, правила расчёта и управление заданиями.' },
        { name: 'Данные и задачи', tools: 'PostgreSQL · Redis · Celery', purpose: 'Хранение карточек и фотографий; очередь и выполнение фоновых задач.' },
        { name: 'Сбор и запуск', tools: 'BeautifulSoup · lxml · Docker Compose', purpose: 'Обработка объявлений mashina.kg и совместный запуск сервисов.' },
      ],
      flow: ['Объявления mashina.kg', 'Парсер / Celery', 'Django API + PostgreSQL', 'React: подбор и расчёт', 'Проверенная цена и черновик КП'],
      result: 'Получился внутренний MVP, который связывает поиск автомобиля и подготовку предложения в один процесс. Предварительный расчёт маржи помогал сократить дополнительные согласования. Проект остановлен из-за отсутствия финансирования; долгосрочная эксплуатация и масштабирование не проверены.',
      note: 'В текущей версии КП скачивается как текстовый черновик; PDF обозначен следующим этапом. Исторические показатели «3–6 найденных автомобилей» и «до 12 объявлений Avito в день» относятся к разным операциям и не используются как доказательство роста производительности.',
      screens: [
        { src: '/projects/automotive-feed.webp', title: 'Рабочее место менеджера', caption: 'Сохранённые объявления, признаки проверки и расчёт стоимости в ленте. Снимок существующего интерфейса; автомобили и суммы — демонстрационные.' },
        { src: '/projects/automotive-detail.webp', title: 'От карточки к коммерческой цене', caption: 'Характеристики, состав цены и фиксация проверенного предложения. Снимок существующего интерфейса на демонстрационных данных.' },
      ],
    },
    scivise: {
      category: 'ДАННЫЕ · РЕКОМЕНДАТЕЛЬНЫЕ СИСТЕМЫ', title: 'SciVisE',
      intro: 'Научная литература как пространство для открытий. Академическая платформа для поиска статей arXiv, организации коллекций и рекомендаций исследований из смежных областей.',
      role: 'Полный цикл исследования и разработки: от постановки задачи и архитектуры до интерфейса, backend и рекомендательной системы. Разработал проект самостоятельно с использованием ИИ-инструментов, отвечая за технические решения, проверку и итоговый результат.',
      status: 'Академический проект · репозиторий Thinklist',
      challenge: 'Поиск по знакомым словам помогает найти конкретную статью, но часто оставляет исследователя внутри привычной темы. Задача — объединить работу с литературой и открытие полезных связей между научными областями.',
      approach: 'Разделил платформу на интерфейс, основной API и ML-сервис. Публикации поступают из arXiv, проходят дедупликацию и становятся доступны для поиска и коллекций. Рекомендательный pipeline сочетает текстовую близость, историю действий и отдельный подбор смежных направлений.',
      features: [
        { title: 'Исследование без порога входа', text: 'Гостевой доступ к научной ленте, поиск по тексту и фильтры по темам. Карточка открывает аннотацию, авторов, теги и переход к источнику.' },
        { title: 'Личная библиотека', text: 'После регистрации доступны сохранения, коллекции и профиль с интересами. События open, like, save и hide дают сигнал для персонализации.' },
        { title: 'От текста к рекомендациям', text: 'TF-IDF представляет тексты числовыми признаками, SVD снижает размерность, а MLP участвует в переранжировании. Основной путь реализован на scikit-learn.' },
        { title: 'Выход за рамки темы', text: 'Подбор учитывает смежные дисциплины. В коде предусмотрена загрузка отдельных моделей PyTorch для основного и междисциплинарного ранжирования, с резервным алгоритмом при их недоступности.' },
      ],
      layers: [
        { name: 'Интерфейс', tools: 'React · TypeScript · Vite · Tailwind CSS', purpose: 'Научная лента, карточка статьи, коллекции и профиль.' },
        { name: 'API и данные', tools: 'Python · FastAPI · SQLAlchemy · Alembic · PostgreSQL', purpose: 'Публикации, пользователи, события, коллекции и миграции. Дедупликация по DOI, URL и content_hash.' },
        { name: 'Рекомендации', tools: 'scikit-learn · TF-IDF · SVD · MLP', purpose: 'Признаки текста, семантическая близость и переранжирование. Отдельная поддержка загрузки моделей PyTorch.' },
        { name: 'Сервисы', tools: 'Docker Compose · отдельный ML API', purpose: 'Раздельный запуск frontend, backend, ML-сервиса и PostgreSQL.' },
      ],
      flow: ['Публикации arXiv', 'Загрузка и дедупликация', 'PostgreSQL + FastAPI', 'ML: признаки и ранжирование', 'Лента и смежные исследования'],
      result: 'Академический проект объединяет поиск, организацию литературы и рекомендательный pipeline в одном продукте. Архитектура позволяет развивать ранжирование отдельно от пользовательского API и интерфейса.',
      note: 'Thinklist — имя репозитория проекта SciVisE. Поддержка PyTorch в коде не означает, что модели всегда загружены: используется резервный путь. Качество рекомендаций в production не подтверждено; значение NDCG из материалов защиты здесь не используется. RAG не заявляется.',
      screens: [
        { src: '/projects/scivise-feed.webp', title: 'Лента научных публикаций', caption: 'Темы, поиск и визуальные карточки исследований. Снимок существующего интерфейса; названия и аннотации — демонстрационные, не реальные публикации.' },
        { src: '/projects/scivise-article.webp', title: 'Исследование в деталях', caption: 'Аннотация, авторы, темы и действия со статьёй. Снимок существующего интерфейса на демонстрационных данных.' },
      ],
    },
  },
  en: {
    automotive: {
      category: 'BUSINESS AUTOMATION · FULL-STACK', title: 'Automotive Import Platform',
      intro: 'From a listing to a client offer. An internal AvtoHous platform connecting vehicle sourcing, import cost estimates and preparation of sales materials.',
      role: 'Proposed the architecture and built the MVP independently, from data modelling and backend to the manager interface.',
      status: 'Internal MVP · AvtoHous',
      challenge: 'To prepare a client offer, a sales manager contacted the purchasing department. Purchasing searched for suitable vehicles and passed the options back to the manager, who then sent them to the client. In my observation, one cycle could take up to 30 minutes. When requirements changed, the search and approvals had to be repeated, delaying the response and adding handoffs between departments.',
      approach: 'Organized the workflow around a shared vehicle card. A parser collects mashina.kg listings, the backend stores specifications and photos, and the interface helps managers shortlist vehicles and check commercial prices. Long-running collection tasks execute in the background with queue status and progress visible in the UI.',
      features: [
        { title: 'One sourcing workspace', text: 'A feed with make, year, price, city and power filters. Favorites keep promising options, while each vehicle card brings specifications, description and photos together.' },
        { title: 'Transparent pricing', text: 'Source price, USD/RUB rate, delivery, additional expenses, recycling fee and margin form an itemized estimate. A reviewed price can be fixed for an offer.' },
        { title: 'Visible background work', text: 'Parser start/stop controls, a queue, statuses and processing counters make collection jobs observable. Celery handles collection and synchronization without blocking the interface.' },
        { title: 'Sales preparation', text: 'Admin, lead, manager and guest modes support different workflows. A gallery, photo processing tools, a text offer draft and sales-channel materials support the next step.' },
      ],
      layers: [
        { name: 'Interface', tools: 'React · TypeScript · Vite', purpose: 'Feed, filters, vehicle details, pricing and background operation progress.' },
        { name: 'Backend', tools: 'Python · Django · Django REST Framework', purpose: 'API, vehicle models, pricing rules and job management.' },
        { name: 'Data and jobs', tools: 'PostgreSQL · Redis · Celery', purpose: 'Vehicle and photo records, task queue and background execution.' },
        { name: 'Collection and runtime', tools: 'BeautifulSoup · lxml · Docker Compose', purpose: 'Processing mashina.kg listings and running services together.' },
      ],
      flow: ['mashina.kg listings', 'Parser / Celery', 'Django API + PostgreSQL', 'React: sourcing and pricing', 'Reviewed price and offer draft'],
      result: 'An internal MVP connected vehicle discovery and offer preparation in a single workflow. Preliminary margin estimates helped reduce additional approvals. Funding ended before long-term production operation and scaling could be validated.',
      note: 'The current version downloads a text offer draft; PDF generation is a planned next step. Historical figures of 3–6 vehicles found and up to 12 Avito listings per day measure different activities and are not used as evidence of a productivity gain.',
      screens: [
        { src: '/projects/automotive-feed.webp', title: 'The manager workspace', caption: 'Saved listings, review indicators and cost estimates in the feed. Captured from the existing interface; vehicles and amounts are illustrative.' },
        { src: '/projects/automotive-detail.webp', title: 'From vehicle details to an offer price', caption: 'Specifications, cost breakdown and a reviewed offer price. Existing interface captured with illustrative data.' },
      ],
    },
    scivise: {
      category: 'DATA · RECOMMENDATION SYSTEMS', title: 'SciVisE',
      intro: 'Scientific literature as a space for discovery. An academic platform for exploring arXiv papers, organizing collections and finding related research across disciplines.',
      role: 'Owned the full research and development lifecycle: problem definition, architecture, frontend, backend and recommendation system. Built the project independently with AI-assisted tools, taking responsibility for technical decisions, validation and the final result.',
      status: 'Academic project · Thinklist repository',
      challenge: 'Familiar keywords help researchers locate specific papers but can keep them within the same topic. The goal was to combine a literature workspace with discovery of useful connections between research fields.',
      approach: 'Separated the interface, application API and ML service. Publications arrive from arXiv, pass through deduplication and become searchable and collectable. The recommendation pipeline combines text similarity, user activity and discovery of adjacent disciplines.',
      features: [
        { title: 'Explore before signing up', text: 'Guest access to the research feed, text search and topic filters. Paper details bring together the abstract, authors, tags and a link to the source.' },
        { title: 'A personal library', text: 'Registered users can save papers, organize collections and set profile interests. Open, like, save and hide events provide signals for personalization.' },
        { title: 'From text to recommendations', text: 'TF-IDF turns text into features, SVD reduces dimensionality and an MLP participates in reranking. The baseline pipeline runs on scikit-learn.' },
        { title: 'Discover adjacent fields', text: 'Ranking considers neighboring disciplines. The code supports separate PyTorch artifacts for core and cross-domain ranking, with a fallback when the models are unavailable.' },
      ],
      layers: [
        { name: 'Interface', tools: 'React · TypeScript · Vite · Tailwind CSS', purpose: 'Research feed, paper details, collections and profiles.' },
        { name: 'API and data', tools: 'Python · FastAPI · SQLAlchemy · Alembic · PostgreSQL', purpose: 'Publications, users, events, collections and migrations. Deduplication by DOI, URL and content_hash.' },
        { name: 'Recommendations', tools: 'scikit-learn · TF-IDF · SVD · MLP', purpose: 'Text features, semantic similarity and reranking, with separate support for loading PyTorch models.' },
        { name: 'Services', tools: 'Docker Compose · separate ML API', purpose: 'Independent frontend, application API, ML service and PostgreSQL processes.' },
      ],
      flow: ['arXiv publications', 'Ingestion and deduplication', 'PostgreSQL + FastAPI', 'ML: features and ranking', 'Feed and adjacent research'],
      result: 'An academic project bringing literature search, organization and a recommendation pipeline into one product. The architecture lets ranking evolve separately from the application API and interface.',
      note: 'Thinklist is the repository name for SciVisE. PyTorch support does not mean that model artifacts are always loaded: a fallback is provided. Production recommendation quality has not been validated; the NDCG figure from defense notes is not used here. No RAG implementation is claimed.',
      screens: [
        { src: '/projects/scivise-feed.webp', title: 'The research feed', caption: 'Topics, search and visual paper cards. Captured from the existing interface; titles and abstracts are illustrative, not real publications.' },
        { src: '/projects/scivise-article.webp', title: 'A closer look at a paper', caption: 'Abstract, authors, topics and paper actions. Existing interface captured with illustrative data.' },
      ],
    },
  },
}

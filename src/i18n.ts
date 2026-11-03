import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: { work: 'Work', about: 'About', contact: 'Contact', availability: 'Available for opportunities' },
      hero: { eyebrow: 'AI PRODUCT ENGINEER · FULL-STACK DEVELOPER', title: 'I build products that solve real business problems.', description: 'From the first idea to architecture, development and deployment. I combine full-stack engineering, data processing, automation and applied AI.', cta: 'Explore selected work', contact: 'Get in touch', location: 'Remote · Worldwide' },
      work: { eyebrow: 'SELECTED WORK', title: 'Projects', intro: 'A selection of products and experiments across business automation, AI and data.' },
      about: { eyebrow: 'A BIT ABOUT ME', title: 'Engineering with a product mindset.', body: 'I enjoy taking ownership of the full product lifecycle: understanding a business process, finding the right problem to solve, designing a practical solution and building it. I use AI-assisted development tools as part of my workflow, while reviewing, testing and taking responsibility for the result.' },
      stack: 'CORE TOOLKIT',
      contact: { eyebrow: 'HAVE A PROBLEM TO SOLVE?', title: 'Let’s build something useful.', body: 'Open to remote roles and product-focused engineering opportunities.', email: 'Message on Telegram' },
      footer: 'Designed and built by Nikita Sokolov.'
    }
  },
  ru: {
    translation: {
      nav: { work: 'Проекты', about: 'Обо мне', contact: 'Контакты', availability: 'Открыт к предложениям' },
      hero: { eyebrow: 'AI PRODUCT ENGINEER · FULL-STACK DEVELOPER', title: 'Создаю продукты, которые решают реальные бизнес-задачи.', description: 'От идеи и архитектуры до разработки и запуска. Объединяю full-stack разработку, обработку данных, автоматизацию и прикладной ИИ.', cta: 'Смотреть проекты', contact: 'Связаться', location: 'Удалённо · По всему миру' },
      work: { eyebrow: 'ИЗБРАННЫЕ РАБОТЫ', title: 'Проекты', intro: 'Продукты и эксперименты на стыке бизнес-автоматизации, ИИ и работы с данными.' },
      about: { eyebrow: 'НЕМНОГО ОБО МНЕ', title: 'Разработка с продуктовым подходом.', body: 'Мне интересно отвечать за весь цикл создания продукта: разобраться в бизнес-процессе, найти задачу, спроектировать практичное решение и реализовать его. Использую AI-инструменты в разработке, но самостоятельно проверяю код, тестирую результат и отвечаю за него.' },
      stack: 'ОСНОВНОЙ СТЕК',
      contact: { eyebrow: 'ЕСТЬ ЗАДАЧА, КОТОРУЮ НУЖНО РЕШИТЬ?', title: 'Давайте создадим полезный продукт.', body: 'Рассматриваю удалённые роли и задачи на стыке продукта и разработки.', email: 'Написать в Telegram' },
      footer: 'Дизайн и разработка — Никита Соколов.'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
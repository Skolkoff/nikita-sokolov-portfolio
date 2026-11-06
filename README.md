# Nikita Sokolov — Portfolio

Personal portfolio website for AI Product Engineer / Full-Stack Developer.

## Stack
- React + TypeScript + Vite
- React Router
- i18next / react-i18next (English and Russian)
- Tailwind CSS v4
- Lucide icons

## Development
```bash
npm ci
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The static production files are generated in `dist/`. Upload the contents of this directory to the document root of the hosting account.

## Content integrity
Project pages distinguish between an internal MVP, an independent demo concept and an academic project. No BGS Group affiliation or commissioned work is claimed. Demonstration data must be labeled as illustrative.

## Personal BGS proposal

- `/bgs` — independent personal introduction for BGS Group.
- `/bgs/proposal` — bilingual product presentation with a scripted Outreach Assistant example.
- `/projects/bgs-intelligence` redirects to `/bgs` for old shared links.
- These pages are excluded from the main portfolio and sitemap. Dedicated entry documents provide personal link-preview metadata and `noindex, nofollow`; Apache maps the clean URLs to them. This is discoverability guidance, not access control.
- The example uses a fictional company and prepared templates. It has no live AI, research, CRM integration, backend persistence or sending capability. Editable drafts stay in browser memory and reset on refresh.
- Both pages use the existing RU/EN language switch. On changing language, existing draft text is retained until explicit regeneration.
- `npm test` covers draft changes, review invalidation and copy gating. `npm run build` produces the Apache-compatible bundle, including the existing `public/.htaccess` fallback needed for direct links.

## Проверенная публикация на REG.RU

Используется обычный хостинг со статической сборкой в `dist/`; Python и Node.js на сервере для портфолио не нужны. Node 22 требуется только для сборки. GitHub Actions проверяет сборку и сохраняет артефакт `portfolio-static-site`, включая `.htaccess`.

На текущем аккаунте домен обслуживается каталогом `~/www/portfolioskolkoff.ru/public`. Перед заменой:

1. Отключить `DEPLOY_ENABLED` в `Skolkoff/orbital-dispatcher`, проверить отсутствие уже запущенного деплоя.
2. Сохранить закрытую резервную копию сайта и Laravel-приложения вне публичной папки.
3. Загрузить содержимое `dist/`, включая `.htaccess`, в новый каталог; сохранить файл подтверждения Яндекса.
4. Заменить публичный каталог подготовленным и проверить главную, прямые URL трёх кейсов, ресурсы и HTTP → HTTPS.
5. При ошибке вернуть прежний каталог из резервной копии. Старую БД не удалять.

Автопубликация нового репозитория пока не включена. SSH-ключи и серверные `.env` в Git не добавляются.
См. [результаты аудита и оставшиеся задачи](docs/AUDIT.md).

## Отдельная демонстрация CRM

`/crm-2b/` — самостоятельное приложение из репозитория `Skolkoff/2b-crm-test-assignment`. Его файлы расположены в отдельном подкаталоге `public/crm-2b`, а данные — в Supabase. Правило в `.htaccess` передаёт этому каталогу обработку вложенных маршрутов; содержимое портфолио не заменяется. При будущей публикации портфолио сохраняйте подкаталог CRM и это правило.

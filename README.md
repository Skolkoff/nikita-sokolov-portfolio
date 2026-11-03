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

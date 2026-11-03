import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import './i18n'
import App from './App'
export { getSeo } from './data/seo'
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><App /></StaticRouter>)
}

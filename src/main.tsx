import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'uno.css'
import '@/assets/scss/theme.scss'
import '@/assets/scss/reset.scss'
import '@/components/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

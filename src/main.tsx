import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'uno.css'
import '@/assets/scss/theme.scss'
import '@/assets/scss/reset.scss'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

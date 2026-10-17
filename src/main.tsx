import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './analytics'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// After the first render, so the sections exist for scroll tracking.
requestAnimationFrame(initAnalytics)

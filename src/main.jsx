import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import Page from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Page />
    </HashRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routering from './Router/Routering'
import LocalStorageProvider from './Providers/LocalStorage/LocalStorageProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routering />
    </BrowserRouter>
  </StrictMode>,
)

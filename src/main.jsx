import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss' // ✅ Подключение глобальных стилей
import './components/header/header.jsx'
import App from './App.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

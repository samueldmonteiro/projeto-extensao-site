import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { SubjectProvider } from './context/SubjectContext.jsx'

createRoot(document.getElementById('root')).render(
    <SubjectProvider>
      <App />
    </SubjectProvider>
)

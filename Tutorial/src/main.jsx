import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MainSect() {
  return <h1>Rendering a function</h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h2>So App is being render from main.jsx</h2>
    <MainSect />
  </StrictMode>,
)

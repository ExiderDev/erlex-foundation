import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLenis } from 'lenis/dist/lenis-react'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.08 }}>
      <App />
    </ReactLenis>
  </React.StrictMode>,
)
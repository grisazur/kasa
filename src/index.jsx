import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{/* on utilise StrictMode sur App pour détecter les problèmes potentiels, notamment des composants à cycles de vie dépréciés */}

import React from 'react'
import ReactDOM from 'react-dom'

import '@ricardoaruiz/design-tokens/dist/css/globals.css'

import { ThemeProvider } from './context/ThemeContext'
import App from './pages/App'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider 
      brand='marca-a' 
      themeName='tema-1' 
      mode='light'
    >
      <App />      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
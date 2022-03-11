import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from './context/ThemeContext'
import App from './pages/App'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider brand='marca-a' themeName='tema-2' mode='dark'>
      <App />      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'

import '@ricardoaruiz/design-tokens/dist/css/globals.css'
import '@ricardoaruiz/design-tokens/dist/css/marca-a/tema-1/light.css'

import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
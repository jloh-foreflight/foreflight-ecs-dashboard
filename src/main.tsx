import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


// @ts-ignore
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Security>
  </React.StrictMode>,
  document.getElementById('root')
)

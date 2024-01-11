import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardContext from './utils/CardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <CardContext>
    <App />
    </CardContext>

  </React.StrictMode>,
)

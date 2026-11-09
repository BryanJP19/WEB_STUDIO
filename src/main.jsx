import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'
import './styles/variables.css'
import './styles/global.css'
createRoot(document.getElementById('root')).render(<CurrencyProvider><App /></CurrencyProvider>)

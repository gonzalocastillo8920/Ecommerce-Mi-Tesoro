
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { initMercadoPago } from '@mercadopago/sdk-react'

import "./styles/main.scss"


initMercadoPago(import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

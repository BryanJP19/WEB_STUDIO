import { createContext, useContext, useEffect, useState, useCallback } from 'react'

// Tasas de respaldo (1 DOP = X). Aproximadas: se usan solo si falla la consulta en vivo.
// Actualízalas de vez en cuando.
const FALLBACK_RATES = { DOP: 1, USD: 0.0165, EUR: 0.0142, CAD: 0.0228, GBP: 0.0123, MXN: 0.30, COP: 68 }
const RATES_URL = 'https://open.er-api.com/v6/latest/DOP' // gratis, sin API key
const CACHE_KEY = 'ws-rates'
const CACHE_MS = 12 * 60 * 60 * 1000 // 12 horas

const CurrencyContext = createContext(null)
export const useCurrency = () => useContext(CurrencyContext)

const safeGet = (k) => { try { return localStorage.getItem(k) } catch { return null } }
const safeSet = (k, v) => { try { localStorage.setItem(k, v) } catch { /* modo privado */ } }

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => safeGet('ws-currency') || 'DOP')
  const [rates, setRates] = useState(FALLBACK_RATES)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const cached = JSON.parse(safeGet(CACHE_KEY) || 'null')
    if (cached && Date.now() - cached.time < CACHE_MS) { setRates(cached.rates); setLive(true); return }
    fetch(RATES_URL).then((r) => r.json()).then((d) => {
      if (d.result === 'success') {
        setRates(d.rates); setLive(true)
        safeSet(CACHE_KEY, JSON.stringify({ time: Date.now(), rates: d.rates }))
      }
    }).catch(() => { /* se queda con las tasas de respaldo */ })
  }, [])

  const setCurrency = (c) => { setCurrencyState(c); safeSet('ws-currency', c) }

  // Convierte un monto en DOP a la moneda elegida y lo formatea
  const format = useCallback((dop) => {
    const rate = rates[currency] ?? FALLBACK_RATES[currency] ?? 1
    const value = currency === 'DOP' ? dop : Math.round(dop * rate)
    try {
      return new Intl.NumberFormat('es-DO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)
    } catch { return `${value} ${currency}` }
  }, [currency, rates])

  return <CurrencyContext.Provider value={{ currency, setCurrency, rates, live, format }}>{children}</CurrencyContext.Provider>
}

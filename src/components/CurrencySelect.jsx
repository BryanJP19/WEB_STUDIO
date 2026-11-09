import { useCurrency } from '../context/CurrencyContext.jsx'

const MAIN = ['DOP', 'USD', 'EUR', 'CAD', 'GBP', 'MXN', 'COP']
let names
try { names = new Intl.DisplayNames(['es'], { type: 'currency' }) } catch { names = null }
const label = (c) => `${c}${names ? ` - ${names.of(c)}` : ''}`

// Selector de moneda: principales primero y, con tasas en vivo, todas las demás
export default function CurrencySelect() {
  const { currency, setCurrency, rates, live } = useCurrency()
  const others = live ? Object.keys(rates).filter((c) => !MAIN.includes(c)).sort() : []
  return (
    <select className="currency-select" aria-label="Moneda" value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <optgroup label="Principales">{MAIN.map((c) => <option key={c} value={c}>{label(c)}</option>)}</optgroup>
      {others.length > 0 && <optgroup label="Otras monedas">{others.map((c) => <option key={c} value={c}>{label(c)}</option>)}</optgroup>}
    </select>
  )
}

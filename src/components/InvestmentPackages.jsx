import { useState } from 'react'
import { packages, maintenance, waLink } from '../data/content.js'
import { useCurrency } from '../context/CurrencyContext.jsx'
import '../styles/InvestmentPackages.css'

export default function InvestmentPackages({ onQuote }) {
  const [monthly, setMonthly] = useState(false) // false = paquetes, true = mantenimiento mensual
  const { currency, format } = useCurrency()
  const list = monthly ? maintenance : packages
  return (
    <section id="paquetes" className="section">
      <span id="servicios" />
      <span id="mantenimiento" />
      <div className="container">
        <h2>{monthly ? 'Planes de mantenimiento' : 'Paquetes de inversión'}</h2>
        <p className="section__lead">Precios claros, sin sorpresas. Elige el que encaja con tu negocio.</p>
        <div className="toggle" role="group" aria-label="Tipo de plan">
          <button className={!monthly ? 'is-active' : ''} onClick={() => setMonthly(false)}>Paquetes</button>
          <button className={monthly ? 'is-active' : ''} onClick={() => setMonthly(true)}>Mantenimiento mensual</button>
        </div>
        {currency !== 'DOP' && <p className="pkg__note">Montos aproximados en {currency}. El precio final se acuerda en pesos dominicanos (DOP).</p>}
        <div className="grid grid--3">
          {list.map((p) => (
            <article key={p.id} className={`pkg ${p.popular && !monthly ? 'pkg--popular' : ''}`}>
              {p.popular && !monthly && <span className="pkg__tag">Más popular</span>}
              <h3>{p.name}</h3>
              <p className="pkg__price">{format(p.price)}{p.priceMax && ` - ${format(p.priceMax)}`}{monthly && '/mes'}</p>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn btn--primary btn--block" target="_blank" rel="noreferrer"
                 href={waLink(`Hola Bryan, me interesa ${monthly ? 'el plan de mantenimiento' : 'el Paquete'} ${p.name} para mi negocio.`)}>
                Pedir por WhatsApp
              </a>
              {!monthly && <button className="link" onClick={() => onQuote(p.name)}>Prefiero llenar un formulario</button>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

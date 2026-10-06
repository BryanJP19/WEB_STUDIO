import { useState } from 'react'
import { sectors } from '../data/content.js'
import '../styles/Sections.css'

export default function Sectors() {
  const [active, setActive] = useState(null)
  return (
    <section id="sectores" className="section section--alt">
      <div className="container">
        <h2>Sectores que atendemos</h2>
        <p className="section__lead">Toca un sector para ver cómo lo resolvemos.</p>
        <div className="grid grid--3">
          {sectors.map((s) => (
            <button key={s.id} className={`sector ${active === s.id ? 'is-open' : ''}`}
              aria-expanded={active === s.id} onClick={() => setActive(active === s.id ? null : s.id)}>
              <span className="sector__icon" aria-hidden="true">{s.icon}</span>
              <strong>{s.name}</strong>
              <span className="sector__text">{s.text}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

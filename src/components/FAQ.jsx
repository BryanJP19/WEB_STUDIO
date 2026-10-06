import { useState } from 'react'
import { faqs } from '../data/content.js'
import '../styles/Sections.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section section--alt">
      <div className="container container--narrow">
        <h2>Preguntas frecuentes</h2>
        {faqs.map((f, i) => (
          <div key={f.q} className="faq">
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}<span aria-hidden="true">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p>{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

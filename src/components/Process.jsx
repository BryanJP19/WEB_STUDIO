import { steps } from '../data/content.js'
import '../styles/Sections.css'

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2>Cómo trabajamos</h2>
        <ol className="steps">
          {steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ol>
      </div>
    </section>
  )
}

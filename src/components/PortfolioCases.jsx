import { projects, waLink } from '../data/content.js'
import '../styles/PortfolioCases.css'

// Casos de éxito: proyectos reales en producción
export default function PortfolioCases() {
  return (
    <section id="portafolio" className="section section--alt">
      <div className="container">
        <h2>Casos de éxito</h2>
        <p className="section__lead">Proyectos reales, ya publicados y funcionando. Míralos en vivo.</p>
        <div className="cases">
          {projects.map((p) => (
            <article key={p.id} className="case">
              <a className="case__preview" href={p.url} target="_blank" rel="noreferrer" aria-label={`Ver ${p.name} en vivo`}
                 style={{ '--c1': p.colors[0], '--c2': p.colors[1] }}>
                <span className="case__bar"><i /><i /><i /><em>{new URL(p.url).host}</em></span>
                {p.image
                  ? <img src={p.image} alt={`Captura de ${p.name}`} loading="lazy" />
                  : <strong className="case__logo">{p.name}</strong>}
              </a>
              <div className="case__body">
                <span className="case__type">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="case__stack">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="case__actions">
                  <a className="btn btn--primary" href={p.url} target="_blank" rel="noreferrer">Ver sitio en vivo</a>
                  <a className="btn btn--ghost" href={p.repo} target="_blank" rel="noreferrer">Código en GitHub</a>
                </div>
                <a className="link case__cta" target="_blank" rel="noreferrer"
                   href={waLink(`Hola Bryan, vi el proyecto ${p.name} y quiero una página web similar para mi negocio.`)}>
                  Quiero una web como esta
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

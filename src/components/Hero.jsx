import { waLink } from '../data/content.js'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <h1>Presencia digital profesional que convierte visitantes en clientes por WhatsApp.</h1>
        <p className="hero__sub">Diseñamos y desarrollamos sitios web modernos para negocios en República Dominicana. Desde páginas informativas hasta sistemas digitales completos.</p>
        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="#paquetes">Ver paquetes de inversión</a>
          <a className="btn btn--ghost btn--lg" target="_blank" rel="noreferrer"
             href={waLink('Hola Bryan, quiero información para tener una página web para mi negocio.')}>Chatear por WhatsApp</a>
        </div>
        <p className="hero__badge">Sitios web optimizados, rápidos y con presencia en Google Maps.</p>
      </div>
    </section>
  )
}

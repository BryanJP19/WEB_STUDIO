import { useState } from 'react'
import { navLinks } from '../data/content.js'
import CurrencySelect from './CurrencySelect.jsx'
import '../styles/Navbar.css'

export default function Navbar({ onContact }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">Bryan Jiménez <span>| Web Studio</span></a>
        <button className="navbar__burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <CurrencySelect />
          <button className="btn btn--primary" onClick={() => { setOpen(false); onContact() }}>Solicitar demo</button>
        </nav>
      </div>
    </header>
  )
}

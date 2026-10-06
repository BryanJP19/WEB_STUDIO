import { useState, useEffect } from 'react'
import { packages, sectors, waLink } from '../data/content.js'
import '../styles/Modal.css'

export default function ContactModal({ onClose, initialPackage = '' }) {
  const [f, setF] = useState({ nombre: '', negocio: '', sector: '', paquete: initialPackage, telefono: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Al enviar: abre WhatsApp con los datos formateados (sin base de datos)
  const submit = (e) => {
    e.preventDefault()
    const msg = `Hola Bryan, quiero una demo.\n*Nombre:* ${f.nombre}\n*Negocio:* ${f.negocio}\n*Sector:* ${f.sector}\n*Paquete:* ${f.paquete}\n*WhatsApp:* ${f.telefono}`
    window.open(waLink(msg), '_blank', 'noopener')
    onClose()
  }

  return (
    <div className="modal" onClick={onClose}>
      <form className="modal__box" onClick={(e) => e.stopPropagation()} onSubmit={submit} role="dialog" aria-modal="true" aria-label="Solicitar demo">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">×</button>
        <h3>Solicita tu demo</h3>
        <label>Nombre<input required value={f.nombre} onChange={set('nombre')} autoComplete="name" /></label>
        <label>Nombre de tu negocio<input required value={f.negocio} onChange={set('negocio')} /></label>
        <label>Sector
          <select required value={f.sector} onChange={set('sector')}>
            <option value="">Selecciona…</option>
            {sectors.map((s) => <option key={s.id}>{s.name}</option>)}
          </select>
        </label>
        <label>Paquete de interés
          <select required value={f.paquete} onChange={set('paquete')}>
            <option value="">Selecciona…</option>
            {packages.map((p) => <option key={p.id}>{p.name}</option>)}
            <option>No estoy seguro</option>
          </select>
        </label>
        <label>Teléfono / WhatsApp<input required type="tel" value={f.telefono} onChange={set('telefono')} autoComplete="tel" /></label>
        <button className="btn btn--primary btn--block btn--lg" type="submit">Enviar por WhatsApp</button>
      </form>
    </div>
  )
}

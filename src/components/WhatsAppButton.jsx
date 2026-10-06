import { waLink } from '../data/content.js'
import '../styles/Modal.css'

// Botón flotante grande y táctil para móvil
export default function WhatsAppButton() {
  return (
    <a className="wa-float" target="_blank" rel="noreferrer" aria-label="Chatear por WhatsApp"
       href={waLink('Hola Bryan, quiero información sobre una página web.')}>
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.500A10 10 0 1 0 12 2zm5.200 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .200-3.200-.7a11 11 0 0 1-4.600-4c-.4-.5-1.200-1.600-1.200-3s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600-.3.300c-.1.200-.3.300-.1.600a6 6 0 0 0 2.800 2.400c.300.200.500.100.700-.1l.9-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.200z"/></svg>
    </a>
  )
}

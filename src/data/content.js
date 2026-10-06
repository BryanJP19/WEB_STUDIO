// Datos editables del sitio. Cambia WHATSAPP por tu número (código de país + número, sin símbolos).
export const WHATSAPP = '18090000000'
export const waLink = (text) => `https://wa.me/${18094050662}?text=${encodeURIComponent(text)}`

export const packages = [
  { id: 'basico', name: 'Básico', price: 'RD$4,500', features: ['Página de una sección', 'Botón directo a WhatsApp', 'Diseño adaptado a móvil', 'Ubicación en Google Maps'] },
  { id: 'profesional', name: 'Profesional', price: 'RD$8,500', popular: true, features: ['Hasta 5 secciones', 'Galería de fotos y servicios', 'Formulario que envía a WhatsApp', 'Optimización para Google'] },
  { id: 'premium', name: 'Premium', price: 'RD$15,000 - RD$25,000', features: ['Sitio multipágina a medida', 'Sistema de reservas o catálogo', 'Panel para editar contenido', 'Soporte prioritario'] },
]
export const maintenance = [
  { id: 'm1', name: 'Esencial', price: 'RD$500/mes', features: ['Respaldo mensual', 'Revisión de seguridad', 'Cambios menores de texto'] },
  { id: 'm2', name: 'Plus', price: 'RD$1,000/mes', popular: true, features: ['Todo lo esencial', 'Actualización de fotos y precios', 'Reporte de visitas'] },
  { id: 'm3', name: 'Total', price: 'RD$2,000/mes', features: ['Todo lo Plus', 'Cambios frecuentes de contenido', 'Soporte prioritario por WhatsApp'] },
]
export const sectors = [
  { id: 's1', icon: '✂️', name: 'Barberías y Salones', text: 'Muestra tus cortes, precios y horarios. Tus clientes reservan por WhatsApp en un toque.' },
  { id: 's2', icon: '🍽️', name: 'Restaurantes y Cafeterías', text: 'Menú digital, ubicación y pedidos directos por WhatsApp sin pagar comisiones.' },
  { id: 's3', icon: '🦷', name: 'Dentistas y Consultorios Médicos', text: 'Servicios, equipo y citas por WhatsApp. Transmite confianza desde el primer vistazo.' },
  { id: 's4', icon: '⚖️', name: 'Abogados, Contadores y Servicios Profesionales', text: 'Una carta de presentación seria con áreas de práctica y contacto directo.' },
  { id: 's5', icon: '🔧', name: 'Talleres Automotrices y Construcción', text: 'Portafolio de trabajos realizados y solicitud de cotización por WhatsApp.' },
  { id: 's6', icon: '🏝️', name: 'Inmobiliarias y Excursiones/Turismo', text: 'Propiedades y excursiones con fotos, precios y reservas directas.' },
]
export const steps = [
  { title: 'Contacto y Diagnóstico', text: 'Entendemos lo que necesita tu negocio.' },
  { title: 'Estructura y Demo', text: 'Preparamos una plantilla adaptada a tu marca.' },
  { title: 'Contenido e Integración', text: 'Añadimos tus fotos, servicios y botón directo a WhatsApp.' },
  { title: 'Lanzamiento', text: 'Tu sitio activo y visible en Internet y Google Maps.' },
]
export const faqs = [
  { q: '¿Cuánto tiempo tarda la entrega de la página?', a: 'El Básico suele estar listo en 3 a 5 días y el Profesional en 1 a 2 semanas. El Premium se acuerda según el alcance.' },
  { q: '¿Tengo que pagar alojamiento (hosting) o dominio de inmediato?', a: 'Te asesoro para elegir el hosting y el dominio adecuados. Ambos quedan a tu nombre y se pagan al proveedor.' },
  { q: '¿Cómo funciona el servicio de mantenimiento mensual?', a: 'Pagas una cuota fija y me encargo de respaldos, seguridad y cambios de contenido. Puedes cancelarlo cuando quieras.' },
  { q: '¿Puedo actualizar la información de mi página en el futuro?', a: 'Sí. Puedes pedirme los cambios por WhatsApp o contratar un plan de mantenimiento. El Premium incluye un panel para editar tú mismo.' },
]
export const navLinks = [['inicio', 'Inicio'], ['servicios', 'Servicios'], ['mantenimiento', 'Mantenimiento'], ['sectores', 'Sectores'], ['faq', 'Preguntas Frecuentes']]

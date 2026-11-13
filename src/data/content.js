// Datos editables del sitio. Cambia WHATSAPP por tu número (código de país + número, sin símbolos).
export const WHATSAPP = '18094050662'
export const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

// Precios base en pesos dominicanos (DOP). El selector de moneda los convierte.
export const packages = [
  { id: 'basico', name: 'Básico', price: 4500, features: ['Página de una sección', 'Botón directo a WhatsApp', 'Diseño adaptado a móvil', 'Ubicación en Google Maps'] },
  { id: 'profesional', name: 'Profesional', price: 8500, popular: true, features: ['Hasta 5 secciones', 'Galería de fotos y servicios', 'Formulario que envía a WhatsApp', 'Optimización para Google'] },
  { id: 'premium', name: 'Premium', price: 15000, priceMax: 25000, features: ['Sitio multipágina a medida', 'Sistema de reservas o catálogo', 'Panel para editar contenido', 'Soporte prioritario'] },
]
export const maintenance = [
  { id: 'm1', name: 'Esencial', price: 500, features: ['Respaldo mensual', 'Revisión de seguridad', 'Cambios menores de texto'] },
  { id: 'm2', name: 'Plus', price: 1000, popular: true, features: ['Todo lo esencial', 'Actualización de fotos y precios', 'Reporte de visitas'] },
  { id: 'm3', name: 'Total', price: 2000, features: ['Todo lo Plus', 'Cambios frecuentes de contenido', 'Soporte prioritario por WhatsApp'] },
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
export const navLinks = [['inicio', 'Inicio'], ['servicios', 'Servicios'], ['portafolio', 'Portafolio'], ['paquetes', 'Paquetes'], ['mantenimiento', 'Mantenimiento'], ['sectores', 'Sectores'], ['faq', 'Preguntas Frecuentes']]

// Casos de éxito. Para mostrar una captura real, pon la imagen en /public y agrega image: '/mi-captura.webp'
export const projects = [
  { image: '/JP ART.png', id: 'jp-art', name: 'JP Art Desing', type: 'Sitio web para estudio de arte y diseño',
    text: 'Diseño responsivo con estética cyberpunk / neón creado para transformar la presencia digital de una agencia creativa, ofreciendo una navegación fluida para la contratación de servicios de diseño.', // TODO: ajustar
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'], // TODO: agrega tu stack real
    url: 'https://jp-art-desing.vercel.app/', repo: 'https://github.com/BryanJP19/JP_ART_DESING',
    colors: ['#0f172a', '#7c3aed'] },
  { image: '/DJ Casper.png', id: 'djcasper', name: 'DJ Casper', type: 'Web para DJ de bodas, fiestas y eventos',
    text: 'Presentación profesional para eventos en Estados Unidos y República Dominicana, con solicitud de cotización directa por WhatsApp y enlaces a sus redes.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    url: 'https://djcasper.vercel.app/', repo: 'https://github.com/BryanJP19/DJ_Casper',
    colors: ['#07090D', '#0ea5e9'] },
  { image: '/Clinica Mely.png', id: 'clinica-mely', name: 'Dra. Mely Santos', type: 'Sitio web para clínica Odontológica en Santo Domingo',
    text: 'Diseño moderno y profesional para clínica odontológica, con información de servicios, equipo y contacto directo por WhatsApp. Optimizado para SEO y presencia en Google Maps.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    url: 'https://clinicadentalmelysantos.vercel.app/', repo: 'https://github.com/BryanJP19/Clinica_Dental_Mely_Santos',
    colors: ['#07090D', '#0ea5e9'] },
]

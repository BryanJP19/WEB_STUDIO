import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Packages from './components/Packages.jsx'
import Sectors from './components/Sectors.jsx'
import Process from './components/Process.jsx'
import FAQ from './components/FAQ.jsx'
import ContactModal from './components/ContactModal.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [preselect, setPreselect] = useState('')
  const openModal = (pkg = '') => { setPreselect(pkg); setModalOpen(true) }
  return (
    <>
      <Navbar onContact={() => openModal()} />
      <main>
        <Hero />
        <Packages onQuote={openModal} />
        <Sectors />
        <Process />
        <FAQ />
      </main>
      <Footer onContact={() => openModal()} />
      <WhatsAppButton />
      {modalOpen && <ContactModal initialPackage={preselect} onClose={() => setModalOpen(false)} />}
    </>
  )
}

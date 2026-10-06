import '../styles/Modal.css'

export default function Footer({ onContact }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>Bryan Jiménez | Web Studio</strong>
          <p>Páginas web para negocios en República Dominicana.</p>
        </div>
        <button className="btn btn--primary" onClick={onContact}>Solicitar demo</button>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Bryan Jiménez | Web Studio</p>
    </footer>
  )
}

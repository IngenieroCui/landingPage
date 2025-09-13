import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="brand-logo-container">
              <img src="/lambari-logo.svg" alt="Lambari Logo" className="brand-logo-img" />
              <span className="brand-name">Lambari</span>
            </div>
            <p>Descubre el Tolima auténtico</p>
          </div>
          
          <div className="footer__contact">
            <p>Contáctanos</p>
            <p>Desarrollado en Ibagué, Tolima</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>© 2025 Lambari. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
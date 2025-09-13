import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import './Footer.css';

const footerLinks = {
  app: [
    { name: 'Ver MVP Demo', href: 'http://localhost:8081', icon: <ExternalLink size={16} /> },
    { name: 'Próximamente iOS', href: '#', icon: <ExternalLink size={16} /> },
    { name: 'Próximamente Android', href: '#', icon: <ExternalLink size={16} /> }
  ],
  business: [
    { name: 'Registrar Negocio', href: '#' },
    { name: 'Planes y Precios', href: '#' },
    { name: 'Centro de Ayuda', href: '#' },
    { name: 'Términos para Negocios', href: '#' }
  ],
  investors: [
    { name: 'Presentación Lambari', href: '#presentacion' },
    { name: 'MVP Demo Disponible', href: '#demo' },
    { name: 'Contactar Equipo', href: 'mailto:demo@lambari.co' },
    { name: 'Próximos Pasos', href: '#inversion' }
  ],
  developers: [
    { name: 'Stack React Native', href: '#' },
    { name: 'Backend Supabase', href: '#' },
    { name: 'Código en GitHub', href: '#' },
    { name: 'Equipo de Desarrollo', href: '#' }
  ],
  legal: [
    { name: 'Términos de Uso', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Cookies', href: '#' },
    { name: 'Aviso Legal', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: <Facebook />, href: '#', color: '#1877F2' },
  { name: 'Instagram', icon: <Instagram />, href: '#', color: '#E4405F' },
  { name: 'Twitter', icon: <Twitter />, href: '#', color: '#1DA1F2' },
  { name: 'YouTube', icon: <Youtube />, href: '#', color: '#FF0000' }
];

const contactInfo = [
  { icon: <Mail />, text: 'equipo@lambari.co', href: 'mailto:equipo@lambari.co' },
  { icon: <Mail />, text: 'demo@lambari.co', href: 'mailto:demo@lambari.co' },
  { icon: <Phone />, text: 'Disponible en Festech 2025', href: '#' },
  { icon: <MapPin />, text: 'Desarrollado en Ibagué, Tolima', href: '#' }
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-text">
              <h2>
                ¿Listo para Descubrir el 
                <span className="gradient-text"> Tolima?</span>
              </h2>
              <p>
                Únete a miles de usuarios que ya están explorando los mejores negocios locales. 
                Descarga Lambari y comienza tu aventura hoy mismo.
              </p>
            </div>
            
            <div className="cta-actions">
              <Button 
                size="lg" 
                icon={<Download size={20} />}
                href="#download"
              >
                Descargar Gratis
              </Button>
              <div className="app-badges">
                <a href="#" className="app-badge app-badge--ios">
                  <div className="app-badge__icon">📱</div>
                  <div className="app-badge__text">
                    <span>Descargar en</span>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="app-badge app-badge--android">
                  <div className="app-badge__icon">🤖</div>
                  <div className="app-badge__text">
                    <span>Disponible en</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            <motion.div
              className="footer__brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-logo">
                <span className="brand-icon">🌿</span>
                <span className="brand-name">Lambari</span>
              </div>
              
              <p className="brand-description">
                La plataforma que conecta usuarios con los mejores negocios del Tolima. 
                Descubre, conecta y vive experiencias auténticas en el corazón de Colombia.
              </p>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="social-link"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div className="footer__links">
              <motion.div
                className="footer__column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4>Aplicación</h4>
                <ul>
                  {footerLinks.app.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="footer__column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>Para Negocios</h4>
                <ul>
                  {footerLinks.business.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="footer__column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4>Inversionistas</h4>
                <ul>
                  {footerLinks.investors.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="footer__column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4>Desarrolladores</h4>
                <ul>
                  {footerLinks.developers.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="footer__contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>Contacto</h4>
              <div className="contact-info">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      {contact.icon}
                    </div>
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
              
              <div className="location-badge">
                <span className="location-icon">🏔️</span>
                <div>
                  <strong>Hecho con ❤️ en el Tolima</strong>
                  <p>Apoyando el emprendimiento local</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p>
              © 2025 Lambari. Todos los derechos reservados. 
              <span className="highlight">Conectando el Tolima con el mundo.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
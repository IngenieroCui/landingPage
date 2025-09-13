import { motion } from 'framer-motion';
import { Video, Coins, MessageCircle, MapPin, Star, Users } from 'lucide-react';
import { Card } from '../components/Card';
import './Features.css';

const features = [
  {
    icon: <Video />,
    title: 'Feed Estilo TikTok',
    description: 'Descubre negocios locales a través de videos verticales auténticos y entretenidos, con scroll infinito.',
    highlight: 'Videos Verticales'
  },
  {
    icon: <Coins />,
    title: 'Sistema de Coins',
    description: 'Gana coins por interacciones y canjéalos por cupones y descuentos reales en tus negocios favoritos.',
    highlight: 'Gamificación'
  },
  {
    icon: <MessageCircle />,
    title: 'Chat en Tiempo Real',
    description: 'Comunícate directamente con los negocios, haz reservas y obtén información instantánea.',
    highlight: 'Comunicación Directa'
  },
  {
    icon: <MapPin />,
    title: 'Geolocalización',
    description: 'Encuentra negocios cercanos a tu ubicación con mapas interactivos y navegación integrada.',
    highlight: 'Ubicación Inteligente'
  },
  {
    icon: <Star />,
    title: 'Sistema de Reseñas',
    description: 'Califica y comenta sobre tus experiencias para ayudar a otros usuarios a descubrir lo mejor.',
    highlight: 'Reseñas Verificadas'
  },
  {
    icon: <Users />,
    title: 'Comunidad Local',
    description: 'Conecta con otros usuarios, sigue negocios y construye tu propia red de experiencias locales.',
    highlight: 'Red Social'
  }
];

export const Features = () => {
  return (
    <section className="features section">
      <div className="features__background">
        <div className="bg-decoration bg-decoration--1">📱</div>
        <div className="bg-decoration bg-decoration--2">⭐</div>
        <div className="bg-decoration bg-decoration--3">🎯</div>
        <div className="bg-decoration bg-decoration--4">💬</div>
        <div className="bg-pattern"></div>
      </div>
      <div className="container">
        <motion.div
          className="features__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            Una Experiencia Única Para 
            <span className="gradient-text"> Descubrir el Tolima</span>
          </h2>
          <p className="features__subtitle">
            Conectamos usuarios con emprendedores locales a través de tecnología innovadora 
            y experiencias auténticas que transforman la forma de descubrir negocios.
          </p>
        </motion.div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="feature-card">
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <div className="feature-card__content">
                  <div className="feature-card__highlight">
                    {feature.highlight}
                  </div>
                  <h3 className="feature-card__title">
                    {feature.title}
                  </h3>
                  <p className="feature-card__description">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="features__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="features__cta-content">
            <h3>¿Listo para descubrir el Tolima como nunca antes?</h3>
            <p>Únete a miles de usuarios que ya están explorando los mejores negocios locales.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Video, Coins, MapPin } from 'lucide-react';
import { Card } from '../components/Card';
import './Features.css';

const features = [
  {
    icon: <Video />,
    title: 'Explora más.',
    description: 'Descubre negocios locales del Tolima a través de videos auténticos y experiencias reales.',
    highlight: 'Exploración'
  },
  {
    icon: <Coins />,
    title: 'Conecta mejor.',
    description: 'Interactúa con negocios locales y gana recompensas por tus descubrimientos.',
    highlight: 'Conexión'
  },
  {
    icon: <MapPin />,
    title: 'Vive auténtico.',
    description: 'Encuentra experiencias genuinas cerca de ti y crea recuerdos inolvidables.',
    highlight: 'Autenticidad'
  }
];

export const Features = () => {
  return (
    <section className="features section">

      <div className="container">
        <motion.div
          className="features__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            Estamos aquí para ayudarte a descubrir.
          </h2>
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
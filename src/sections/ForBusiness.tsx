import { motion } from 'framer-motion';
import { Store, TrendingUp, Users, Star, Camera, MessageCircle, BarChart3, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import './ForBusiness.css';

const businessFeatures = [
  {
    icon: <Camera />,
    title: 'Crea Contenido Viral',
    description: 'Comparte videos de tus productos y servicios que lleguen a miles de usuarios locales.',
    stats: '+300% visibilidad'
  },
  {
    icon: <Users />,
    title: 'Conecta con Clientes',
    description: 'Chat directo con usuarios interesados, genera confianza y aumenta tus ventas.',
    stats: '24/7 comunicación'
  },
  {
    icon: <TrendingUp />,
    title: 'Aumenta tus Ventas',
    description: 'Ofrece cupones exclusivos y promociones que incentiven las visitas a tu negocio.',
    stats: '+150% conversión'
  },
  {
    icon: <BarChart3 />,
    title: 'Analíticas en Tiempo Real',
    description: 'Monitorea el rendimiento de tus videos, interacciones y crecimiento de seguidores.',
    stats: 'Métricas detalladas'
  }
];

const businessCategories = [
  { icon: '🍽️', name: 'Gastronomía', count: '150+ negocios' },
  { icon: '🏨', name: 'Hospedaje', count: '80+ hoteles' },
  { icon: '🏃', name: 'Aventura', count: '120+ experiencias' },
  { icon: '🎭', name: 'Cultura', count: '60+ eventos' },
  { icon: '🛍️', name: 'Compras', count: '200+ tiendas' },
  { icon: '🌙', name: 'Vida Nocturna', count: '90+ lugares' }
];

export const ForBusiness = () => {
  return (
    <section className="for-business section">
      <div className="container">
        <motion.div
          className="for-business__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Tienes un Negocio en el 
            <span className="gradient-text"> Tolima?</span>
          </h2>
          <p className="for-business__subtitle">
            Únete a la plataforma que está transformando la forma en que los tolimenses 
            descubren y conectan con negocios locales. Haz crecer tu emprendimiento con Lambari.
          </p>
        </motion.div>

        <div className="for-business__content">
          <div className="for-business__hero">
            <motion.div
              className="for-business__hero-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="hero-badge">
                <Store size={20} />
                <span>Para Empresarios</span>
              </div>
              
              <h3>Transforma tu Negocio en el Próximo Viral del Tolima</h3>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <strong>Alcance Masivo:</strong> Llega a más de 10,000 usuarios activos en el Tolima
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Star size={20} />
                  </div>
                  <div>
                    <strong>Reputación Digital:</strong> Construye una imagen sólida con reseñas verificadas
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong>Visibilidad Local:</strong> Aparece en búsquedas por ubicación y categoría
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <Button size="lg" icon={<Store size={20} />}>
                  Registrar mi Negocio
                </Button>
                <Button variant="outline" size="lg">
                  Ver Planes
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="for-business__hero-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="success-card">
                <div className="success-header">
                  <div className="business-avatar-success"></div>
                  <div>
                    <h4>Restaurante El Tolimense</h4>
                    <p>Comida Típica • Ibagué</p>
                  </div>
                </div>
                
                <div className="success-metrics">
                  <div className="metric">
                    <span className="metric-number">+250%</span>
                    <span className="metric-label">Ventas</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">1.2K</span>
                    <span className="metric-label">Seguidores</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">4.9</span>
                    <span className="metric-label">Rating</span>
                  </div>
                </div>

                <div className="success-quote">
                  "Desde que estamos en Lambari, triplicamos nuestros clientes diarios"
                </div>
              </div>
            </motion.div>
          </div>

          <div className="for-business__features">
            <h3 className="text-center">Todo lo que Necesitas para Hacer Crecer tu Negocio</h3>
            
            <div className="features-grid">
              {businessFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="business-feature-card">
                    <div className="business-feature-icon">
                      {feature.icon}
                    </div>
                    <div className="business-feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                      <div className="feature-stats">
                        {feature.stats}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="for-business__categories">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-center">Categorías Populares en Lambari</h3>
              <p className="categories-subtitle text-center">
                Sea cual sea tu tipo de negocio, hay un lugar para ti en nuestra plataforma
              </p>
              
              <div className="categories-grid">
                {businessCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="category-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="category-icon">{category.icon}</div>
                    <h4>{category.name}</h4>
                    <p>{category.count}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="for-business__cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h3>¿Listo para Hacer Crecer tu Negocio?</h3>
              <p>
                Únete a cientos de empresarios tolimenses que ya están creciendo con Lambari. 
                Registra tu negocio gratis y comienza a atraer más clientes hoy mismo.
              </p>
              <div className="cta-actions">
                <Button size="lg" icon={<Store size={20} />}>
                  Empezar Gratis
                </Button>
                <Button variant="ghost" size="lg" icon={<MessageCircle size={20} />}>
                  Hablar con Asesor
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
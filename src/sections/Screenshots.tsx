import { motion } from 'framer-motion';
import { Play, Heart, MessageCircle, Share, MapPin } from 'lucide-react';
import './Screenshots.css';

const screenshots = [
  {
    id: 1,
    title: 'Feed Principal',
    description: 'Descubre negocios a través de videos verticales',
    image: '/api/placeholder/300/600',
    highlight: 'Videos TikTok Style'
  },
  {
    id: 2,
    title: 'Explorar Negocios',
    description: 'Busca por categorías y ubicación',
    image: '/api/placeholder/300/600',
    highlight: 'Búsqueda Inteligente'
  },
  {
    id: 3,
    title: 'Chat en Tiempo Real',
    description: 'Comunícate directamente con negocios',
    image: '/api/placeholder/300/600',
    highlight: 'Mensajería Instantánea'
  },
  {
    id: 4,
    title: 'Sistema de Coins',
    description: 'Gana y canjea coins por interacciones',
    image: '/api/placeholder/300/600',
    highlight: 'Gamificación'
  }
];

export const Screenshots = () => {
  return (
    <section className="screenshots section">
      <div className="container">
        <motion.div
          className="screenshots__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            La App Que Está 
            <span className="gradient-text"> Revolucionando el Tolima</span>
          </h2>
          <p className="screenshots__subtitle">
            Una interfaz intuitiva diseñada para conectar usuarios con los mejores negocios locales 
            de manera fácil, rápida y divertida.
          </p>
        </motion.div>

        <div className="screenshots__showcase">
          <div className="screenshots__main">
            <motion.div
              className="screenshots__phone screenshots__phone--main"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-mockup">
                    {/* Header de la app */}
                    <div className="app-header">
                      <div className="app-logo">
                        <span className="logo-icon">🌿</span>
                        <span className="logo-text">Lambari</span>
                      </div>
                      <div className="app-location">
                        <MapPin size={16} />
                        <span>Ibagué, Tolima</span>
                      </div>
                    </div>

                    {/* Video principal */}
                    <div className="video-container">
                      <div className="video-background">
                        {/* Elementos del video de fondo */}
                        <div className="video-scene">
                          <div className="scene-element coffee">☕</div>
                          <div className="scene-element mountain">🏔️</div>
                          <div className="scene-element palm">🌴</div>
                          <div className="scene-element building">🏘️</div>
                        </div>
                      </div>
                      <div className="video-overlay">
                        <div className="play-button">
                          <Play size={30} />
                        </div>
                        <div className="video-duration">2:34</div>
                      </div>
                      
                      {/* Acciones del video */}
                      <div className="video-actions">
                        <div className="action-button liked">
                          <Heart size={20} />
                          <span>156</span>
                        </div>
                        <div className="action-button">
                          <MessageCircle size={20} />
                          <span>23</span>
                        </div>
                        <div className="action-button">
                          <Share size={20} />
                          <span>12</span>
                        </div>
                        <div className="action-button">
                          <MapPin size={20} />
                        </div>
                      </div>
                      
                      {/* Info del negocio */}
                      <div className="business-info">
                        <div className="business-avatar">🍽️</div>
                        <div className="business-details">
                          <h4>Café del Tolima</h4>
                          <p>Café premium • Ibagué • 4.8 ⭐</p>
                          <div className="business-badges">
                            <span className="badge">Artesanal</span>
                            <span className="badge">Origen local</span>
                          </div>
                        </div>
                        <div className="follow-btn">Seguir</div>
                      </div>
                    </div>

                    {/* Tabs de navegación */}
                    <div className="app-tabs">
                      <div className="tab active">
                        🏠
                        <div className="tab-indicator"></div>
                      </div>
                      <div className="tab">
                        🔍
                        <div className="notification-dot">3</div>
                      </div>
                      <div className="tab special">
                        ➕
                        <div className="plus-glow"></div>
                      </div>
                      <div className="tab">
                        💬
                        <div className="notification-dot new">!</div>
                      </div>
                      <div className="tab">
                        👤
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="screenshots__grid">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                className="screenshot-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="screenshot-card">
                  <div className="screenshot-highlight">
                    {screenshot.highlight}
                  </div>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="screenshots__features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="feature-highlight">
            <div className="feature-highlight__icon">
              📱
            </div>
            <div className="feature-highlight__content">
              <h4>Disponible para iOS y Android</h4>
              <p>Descarga la app desde tu tienda favorita y comienza a descubrir lo mejor del Tolima.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
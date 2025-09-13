import { motion } from 'framer-motion';
import { Play, Star, Users, MapPin, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mvp-badge">
                🚀 MVP DEMO - Festech 2025
              </div>
              
              <h1 className="hero__title">
                Descubre el Tolima. Conecta con lo auténtico.
              </h1>
              
              <p className="hero__subtitle">
                La plataforma que conecta turistas con experiencias auténticas del Tolima a través de videos cortos y experiencias reales.
              </p>
              
              <div className="hero__stats">
                <div className="hero__stat">
                  <Users className="hero__stat-icon" />
                  <span className="hero__stat-number">MVP</span>
                  <span className="hero__stat-label">Funcional</span>
                </div>
                <div className="hero__stat">
                  <MapPin className="hero__stat-icon" />
                  <span className="hero__stat-number">5+</span>
                  <span className="hero__stat-label">Negocios Demo</span>
                </div>
                <div className="hero__stat">
                  <Star className="hero__stat-icon" />
                  <span className="hero__stat-number">15+</span>
                  <span className="hero__stat-label">Videos Demo</span>
                </div>
              </div>
              
              <div className="hero__actions">
                <Button 
                  size="lg" 
                  icon={<Play size={20} />}
                  href="#presentacion"
                >
                  Ver Presentación
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  icon={<FileText size={20} />}
                  href="#wireframes"
                >
                  Ver Wireframes
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="hero__visual">
            <motion.div
              className="hero__phone"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero__phone-frame">
                <div className="hero__phone-screen">
                  <div className="hero__video-mockup">
                    {/* Status bar del teléfono */}
                    <div className="phone-status-bar">
                      <div className="status-left">
                        <span className="time">9:39</span>
                        <div className="whatsapp-icon">💬</div>
                        <span className="dots">•••</span>
                      </div>
                      <div className="status-right">
                        <span className="signal-icons">📶</span>
                        <span className="wifi">WiFi</span>
                        <span className="battery">🔋 76%</span>
                      </div>
                    </div>

                    {/* Contenido principal del video */}
                    <div className="hero__video-content">
                      <div className="hero__video-bg">
                        {/* Fondo con textura de montaña/aventura */}
                        <div className="adventure-background">
                          <div className="mountain-texture"></div>
                          <div className="adventure-overlay"></div>
                        </div>
                      </div>
                      
                      {/* Botones de acción lateral */}
                      <div className="side-actions">
                        <div className="action-btn search-btn">
                          <div className="btn-icon">🔍</div>
                        </div>
                        <div className="action-btn profile-btn">
                          <div className="profile-pic"></div>
                          <div className="add-icon">+</div>
                        </div>
                        <div className="action-btn like-btn">
                          <div className="btn-icon">❤️</div>
                          <span className="count">156</span>
                        </div>
                        <div className="action-btn comment-btn">
                          <div className="btn-icon">💬</div>
                          <span className="count">0</span>
                        </div>
                        <div className="action-btn share-btn">
                          <div className="btn-icon">↗️</div>
                          <span className="label">Compartir</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Información del usuario y descripción */}
                    <div className="video-bottom-info">
                      <div className="user-info">
                        <span className="username">@Aventuras Extremas Tolima</span>
                        <span className="category-tag">aventura</span>
                      </div>
                    </div>

                    {/* Barra de navegación inferior */}
                    <div className="bottom-nav">
                      <div className="nav-item active">
                        <div className="nav-icon">🏠</div>
                        <span>Inicio</span>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon">🔍</div>
                        <span>Explorar</span>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon add-video">➕</div>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon">💻</div>
                        <span>Mensajes</span>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon">👤</div>
                        <span>Perfil</span>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon">💼</div>
                        <span>business...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos flotantes decorativos */}
              <motion.div
                className="hero__floating-element hero__floating-element--1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img src="/lambari-logo.svg" alt="Lambari" className="floating-logo" />
              </motion.div>
              <motion.div
                className="hero__floating-element hero__floating-element--2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ☕
              </motion.div>
              <motion.div
                className="hero__floating-element hero__floating-element--3"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                🏔️
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

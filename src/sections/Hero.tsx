import { motion } from 'framer-motion';
import { Play, Download, MapPin, Star, Users, Video } from 'lucide-react';
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
                <span className="gradient-text">Lambari</span> - Descubre el 
                <span className="gradient-text"> Tolima</span>
              </h1>
              
              <p className="hero__subtitle">
                MVP desarrollado para Festech 2025. Conecta turistas con la auténtica experiencia tolimense 
                a través de videos cortos. Presentando mañana en la feria de tecnología más importante de la región.
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
                  <Video className="hero__stat-icon" />
                  <span className="hero__stat-number">15+</span>
                  <span className="hero__stat-label">Videos Demo</span>
                </div>
              </div>
              
              <div className="hero__actions">
                <Button 
                  size="lg" 
                  icon={<Play size={20} />}
                  onClick={() => {
                    window.open('http://localhost:8081', '_blank');
                  }}
                >
                  Ver MVP Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  icon={<Download size={20} />}
                  href="#investment"
                >
                  Ver Presentación
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
                    <div className="hero__video-header">
                      <div className="hero__video-user">
                        <div className="hero__avatar"></div>
                        <div className="hero__user-info">
                          <h4>Café del Tolima</h4>
                          <p>@cafetolima • Ibagué</p>
                        </div>
                      </div>
                      <button className="hero__follow-btn">Seguir</button>
                    </div>
                    
                    <div className="hero__video-content">
                      <div className="hero__video-bg">
                        <div className="hero__video-preview">
                          <div className="video-scene">
                            <div className="cafe-counter">
                              <div className="coffee-cup">☕</div>
                              <div className="barista">👨‍🍳</div>
                            </div>
                            <div className="tolima-mountains">🏔️</div>
                            <div className="coffee-beans">
                              <span>🫘</span>
                              <span>🫘</span>
                              <span>🫘</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hero__play-overlay">
                        <div className="play-button">
                          <Play size={32} />
                          <div className="play-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hero__video-actions">
                      <div className="hero__action">
                        <div className="hero__action-btn hero__action-btn--liked">
                          <Star size={24} />
                        </div>
                        <span>156</span>
                      </div>
                      <div className="hero__action">
                        <div className="hero__action-btn">
                          <Users size={24} />
                        </div>
                        <span>89</span>
                      </div>
                      <div className="hero__action">
                        <div className="hero__action-btn">
                          <MapPin size={24} />
                        </div>
                        <span>Ver</span>
                      </div>
                    </div>
                    
                    <div className="hero__video-description">
                      <p>☕ El mejor café de especialidad en Ibagué! Ven y prueba nuestras mezclas artesanales...</p>
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
                🌿
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
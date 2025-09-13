import { motion } from 'framer-motion';
import { TrendingUp, Zap, Rocket } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import './Investment.css';

const marketData = [
  {
    title: 'Potencial de Mercado',
    value: '500+',
    description: 'Negocios turísticos identificados en el Tolima',
    growth: 'Mercado objetivo inicial'
  },
  {
    title: 'Oportunidad Real',
    value: '85%',
    description: 'De negocios locales carecen de presencia digital moderna',
    growth: 'Problema validado'
  },
  {
    title: 'Proyección 12 meses',
    value: '50-100',
    description: 'Negocios que podrían adoptar la plataforma',
    growth: 'Meta realista post-MVP'
  }
];

const techStack = [
  { name: 'React Native', icon: '⚛️', description: 'Cross-platform nativo' },
  { name: 'Expo SDK 54', icon: '📱', description: 'Desarrollo rápido' },
  { name: 'Supabase', icon: '🔥', description: 'Backend escalable' },
  { name: 'PostgreSQL', icon: '🐘', description: 'Base de datos robusta' },
  { name: 'TypeScript', icon: '🔷', description: 'Código seguro' },
  { name: 'Expo Video', icon: '🎥', description: 'Video optimizado' }
];

const roadmap = [
  {
    phase: 'MVP Demo',
    timeline: 'Sep 2025',
    status: 'completed',
    features: ['Feed de videos', 'Sistema básico de coins', 'Chat funcional', 'Demo con datos reales']
  },
  {
    phase: 'Post-Festech',
    timeline: 'Oct 2025',
    status: 'next',
    features: ['Validación con usuarios reales', 'Refinamiento UX', 'Integración con más negocios', 'Métricas de uso']
  },
  {
    phase: 'Lanzamiento',
    timeline: 'Q2 2025',
    status: 'planned',
    features: ['Expansión regional', 'Monetización completa', 'Dashboard empresarial', 'Programa de afiliados']
  }
];

export const Investment = () => {
  return (
    <section className="investment section" id="investment">
      <div className="investment__decorations">
        <div className="decoration decoration--1">💡</div>
        <div className="decoration decoration--2">🚀</div>
        <div className="decoration decoration--3">💰</div>
        <div className="decoration decoration--4">📈</div>
        <div className="decoration decoration--5">🏔️</div>
      </div>
      <div className="container">
        <motion.div
          className="investment__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="investor-badge">
            🏆 Presentando en Festech 2025
          </div>
          <h2>
            <span className="gradient-text">Lambari</span> - MVP 
            <span className="gradient-text"> Funcional</span>
          </h2>
          <p className="investment__subtitle">
            Desarrollado para la hackathon de Festech 2025. Un MVP que demuestra el potencial 
            de conectar turistas con la experiencia auténtica del Tolima.
          </p>
        </motion.div>

        <div className="investment__metrics">
          <div className="metrics-grid">
            {marketData.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="metric-card">
                  <div className="metric-icon">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="metric-title">{metric.title}</h3>
                  <div className="metric-value">{metric.value}</div>
                  <p className="metric-description">{metric.description}</p>
                  <div className="metric-growth">
                    <Zap size={16} />
                    <span>{metric.growth}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="investment__value-prop">
          <div className="value-prop-content">
            <motion.div
              className="value-prop-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>¿Por Qué Invertir en Lambari?</h3>
              <div className="value-points">
                <div className="value-point">
                  <div className="point-icon">🎯</div>
                  <div>
                    <h4>Mercado Desatendido</h4>
                    <p>El 85% de negocios turísticos locales no tienen presencia digital efectiva</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="point-icon">📈</div>
                  <div>
                    <h4>Modelo Escalable</h4>
                    <p>Freemium con múltiples fuentes de monetización: comisiones, publicidad, premium</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="point-icon">🔥</div>
                  <div>
                    <h4>Tracción Temprana</h4>
                    <p>MVP funcional con usuarios reales y feedback positivo de emprendedores</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="point-icon">🌟</div>
                  <div>
                    <h4>Equipo Ejecutor</h4>
                    <p>Desarrolladores con experiencia en productos exitosos y conocimiento local</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="value-prop-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="revenue-model">
                <h4>Modelo de Ingresos</h4>
                <div className="revenue-streams">
                  <div className="revenue-stream">
                    <div className="stream-percentage">40%</div>
                    <div className="stream-info">
                      <h5>Comisiones</h5>
                      <p>Por transacciones y reservas</p>
                    </div>
                  </div>
                  <div className="revenue-stream">
                    <div className="stream-percentage">35%</div>
                    <div className="stream-info">
                      <h5>Publicidad</h5>
                      <p>Promoción de negocios locales</p>
                    </div>
                  </div>
                  <div className="revenue-stream">
                    <div className="stream-percentage">25%</div>
                    <div className="stream-info">
                      <h5>Premium</h5>
                      <p>Funciones avanzadas para empresas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="investment__tech">
          <motion.div
            className="tech-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Stack Tecnológico Moderno</h3>
            <p>Construido con las mejores tecnologías para escalabilidad y performance</p>
          </motion.div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <h5>{tech.name}</h5>
                <p>{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="investment__roadmap">
          <motion.div
            className="roadmap-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Roadmap de Desarrollo</h3>
            <p>Plan estratégico para los próximos 12 meses</p>
          </motion.div>

          <div className="roadmap-timeline">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                className={`roadmap-phase roadmap-phase--${phase.status}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="phase-timeline">{phase.timeline}</div>
                <div className="phase-content">
                  <h4>{phase.phase}</h4>
                  <ul className="phase-features">
                    {phase.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="phase-status">
                  {phase.status === 'completed' && '✅'}
                  {phase.status === 'next' && '🚀'}
                  {phase.status === 'planned' && '📋'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="investment__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <div className="cta-text">
              <h3>¿Listo para Ser Parte del Futuro?</h3>
              <p>
                Únete a la revolución del turismo digital en Colombia. 
                Una oportunidad única de inversión en el sector más prometedor.
              </p>
            </div>
            <div className="cta-actions">
              <Button 
                size="lg" 
                icon={<Rocket size={20} />}
                onClick={() => {
                  window.open('http://localhost:8081', '_blank');
                }}
              >
                Ver Demo en Vivo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Users, MapPin, Star, TrendingUp } from 'lucide-react';
import './QuickStats.css';

const stats = [
  {
    icon: <Users size={32} />,
    value: 'MVP',
    label: 'Completamente Funcional',
    description: 'Demo en tiempo real'
  },
  {
    icon: <MapPin size={32} />,
    value: '5',
    label: 'Negocios Demo',
    description: 'Casos de uso reales'
  },
  {
    icon: <Star size={32} />,
    value: '48h',
    label: 'Tiempo de Desarrollo',
    description: 'Hackathon intensiva'
  },
  {
    icon: <TrendingUp size={32} />,
    value: '100%',
    label: 'Funcionalidad Core',
    description: 'Videos, chat, coins'
  }
];

export const QuickStats = () => {
  return (
    <section className="quick-stats">
      <div className="container">
        <motion.div
          className="quick-stats__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Lambari MVP - Desarrollo en Tiempo Real</h3>
          <p>Lo que hemos logrado en Festech 2025</p>
        </motion.div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-value">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
              <div className="stat-description">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="quick-stats__note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            📊 Desarrollado íntegramente durante Festech 2025 • 
            🚀 Stack moderno con React Native y Supabase • 
            💡 Demostrando el potencial del turismo digital en el Tolima
          </p>
        </motion.div>
      </div>
    </section>
  );
};
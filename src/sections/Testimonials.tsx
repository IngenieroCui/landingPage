import { motion } from 'framer-motion';
import { Star, MapPin, Users, TrendingUp, Heart, Quote } from 'lucide-react';
import { Card } from '../components/Card';
import './Testimonials.css';

const investorTestimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    business: 'Jurado Festech 2025',
    location: 'Universidad del Tolima',
    avatar: 'CM',
    rating: 5,
    quote: 'Lambari demuestra una comprensión profunda del problema y una ejecución técnica sólida. El MVP es funcional y muestra gran potencial.',
    category: 'Jurado'
  },
  {
    id: 2,
    name: 'Ana María López',
    business: 'Mentora de Startups',
    location: 'Hub de Innovación Tolima',
    avatar: 'AL',
    rating: 5,
    quote: 'En 48 horas lograron crear algo realmente funcional. La idea es brillante y la ejecución demuestra un equipo competente.',
    category: 'Mentora'
  },
  {
    id: 3,
    name: 'Diego Ramírez',
    business: 'Desarrollador Senior',
    location: 'Evaluador Técnico',
    avatar: 'DR',
    rating: 5,
    quote: 'El stack tecnológico es moderno, el código está bien estructurado y el MVP demuestra todas las funcionalidades core prometidas.',
    category: 'Técnico'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'María González',
    business: 'Café del Centro',
    location: 'Ibagué',
    avatar: 'MG',
    rating: 5,
    quote: 'Participamos en el demo de Lambari durante Festech. La idea es genial y ya podemos ver cómo podría ayudar a nuestro negocio.',
    metrics: {
      increase: 'Demo',
      metric: 'Participante'
    }
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    business: 'Guía Turístico',
    location: 'Honda, Tolima',
    avatar: 'CR',
    rating: 5,
    quote: 'El concepto de mostrar el Tolima a través de videos cortos es brillante. Como guía, veo el potencial enorme de esta herramienta.',
    metrics: {
      increase: 'Beta',
      metric: 'Tester'
    }
  },
  {
    id: 3,
    name: 'Ana Lucía Pérez',
    business: 'Artesanías Tolimenses',
    location: 'Ibagué',
    avatar: 'AP',
    rating: 5,
    quote: 'Probé el MVP y me encanta la facilidad para mostrar nuestros productos. La gamificación con coins es muy innovadora.',
    metrics: {
      increase: 'MVP',
      metric: 'Usuario'
    }
  },
  {
    id: 4,
    name: 'Luis Torres',
    business: 'Delicias Tolimenses',
    location: 'Espinal',
    avatar: 'LT',
    rating: 5,
    quote: 'Los cupones de Lambari trajeron muchos clientes nuevos. El sistema de coins hace que la gente vuelva más seguido.',
    metrics: {
      increase: 'Feedback',
      metric: 'Positivo'
    }
  }
];

const stats = [
  {
    number: 'MVP',
    label: 'Producto Funcional',
    description: 'Demostrando el potencial con casos de uso reales',
    icon: <Users />
  },
  {
    number: '5+',
    label: 'Negocios Demo',
    description: 'Casos de estudio para validar el concepto',
    icon: <MapPin />
  },
  {
    number: '15+',
    label: 'Videos de Prueba',
    description: 'Contenido demo mostrando funcionalidades',
    icon: <TrendingUp />
  },
  {
    number: '48h',
    label: 'Desarrollo Intensivo',
    description: 'Hackathon completa desde concepto hasta MVP',
    icon: <Star />
  }
];

const achievements = [
  {
    title: 'Impacto Potencial',
    description: 'Visión de apoyo al emprendimiento local y el turismo sostenible en el Tolima',
    highlights: [
      'Potencial de generar empleos',
      'Enfoque en negocios familiares',
      'Promoción de turismo responsable'
    ]
  },
  {
    title: 'Reconocimientos',
    description: 'Lambari ha sido reconocida por su contribución al desarrollo regional',
    highlights: [
      'App del Año - Tolima Tech 2024',
      'Mención especial - Cámara de Comercio',
      'Premio Innovación Social'
    ]
  }
];

export const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="testimonials__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            Feedback del 
            <span className="gradient-text"> MVP Lambari</span>
          </h2>
          <p className="testimonials__subtitle">
            Lo que dicen jurados, mentores y usuarios que han probado nuestro MVP durante Festech 2024.
          </p>
        </motion.div>

        {/* Investor Testimonials Section */}
        <motion.div
          className="investor-testimonials"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="investor-header">
            <h3>Evaluación Profesional</h3>
            <p>Jurados y mentores de Festech 2025 evalúan nuestro MVP</p>
          </div>
          
          <div className="investor-grid">
            {investorTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="investor-testimonial">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p className="business">{testimonial.business}</p>
                      <div className="testimonial-category">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-content">
                    <Quote size={20} className="quote-icon" />
                    <p>"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="testimonials__stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="stats-card" gradient>
                  <div className="stats-card__icon">
                    {stat.icon}
                  </div>
                  <span className="stats-card__number">{stat.number}</span>
                  <span className="stats-card__label">{stat.label}</span>
                  <p className="stats-card__description">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="testimonials__stories">
          <h3 className="text-center">Lo que Dicen Nuestros Emprendedores</h3>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card">
                  <div className="testimonial-card__header">
                    <div className="testimonial-card__quote-icon">
                      <Quote size={24} />
                    </div>
                    <div className="testimonial-card__rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="testimonial-card__quote">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="testimonial-card__metrics">
                    <div className="metric-highlight">
                      <span className="metric-number">{testimonial.metrics.increase}</span>
                      <span className="metric-label">{testimonial.metrics.metric}</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="testimonial-card__info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.business}</p>
                      <div className="location">
                        <MapPin size={12} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="testimonials__achievements">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  <ul className="achievement-highlights">
                    {achievement.highlights.map((highlight, i) => (
                      <li key={i}>
                        <Heart size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="testimonials__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-badge">
            <span>🚀 Únete al Éxito</span>
          </div>
          <h3>Tu Historia de Éxito Comienza Aquí</h3>
          <p>
            Forma parte de la comunidad de emprendedores que están transformando 
            el Tolima con Lambari. El momento es ahora.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
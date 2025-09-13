import React from 'react';
import { motion } from 'framer-motion';
import { LambariLogo } from './LambariLogo';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  return (
    <motion.div 
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="splash-content">
        {/* Logo Principal con animación */}
        <motion.div
          className="splash-logo-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3 
          }}
        >
          <LambariLogo size={450} className="splash-logo" />
        </motion.div>

        {/* Indicador de carga */}
        <motion.div
          className="splash-loader"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2.5, 
            delay: 2,
            ease: "easeInOut" 
          }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 500);
          }}
        />

        {/* Partículas de fondo */}
        <div className="splash-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: Math.random() * window.innerHeight - 100
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Badge Festech */}
        <motion.div
          className="splash-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 2.2 
          }}
        >
          🚀 FESTECH 2025 - MVP DEMO
        </motion.div>
      </div>
    </motion.div>
  );
};
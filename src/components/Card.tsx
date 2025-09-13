import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  gradient = false,
  padding = 'md',
}) => {
  const classes = clsx(
    'card',
    `card--padding-${padding}`,
    {
      'card--hover': hover,
      'card--gradient': gradient,
    },
    className
  );

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
};
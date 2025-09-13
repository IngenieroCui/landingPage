import React from 'react';

interface LambariLogoProps {
  size?: number;
  className?: string;
}

export const LambariLogo: React.FC<LambariLogoProps> = ({ 
  size = 120, 
  className = '' 
}) => {
  return (
    <div className={`lambari-logo ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mountain with snow cap - Clean geometric design */}
        <path 
          d="M20 55 L60 15 L100 55 L92 55 L60 23 L28 55 Z" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinejoin="round"
        />
        <path 
          d="M60 15 L75 30 L67.5 30 L60 22.5 L52.5 30 L45 30 Z" 
          fill="white"
        />
        
        {/* Eye outer shape */}
        <ellipse 
          cx="60" 
          cy="75" 
          rx="40" 
          ry="25" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
        />
        
        {/* Eye white */}
        <ellipse 
          cx="60" 
          cy="75" 
          rx="32" 
          ry="20" 
          fill="white" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        
        {/* Iris circle */}
        <circle 
          cx="60" 
          cy="75" 
          r="13" 
          fill="white" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        
        {/* Pupil */}
        <circle 
          cx="60" 
          cy="75" 
          r="6" 
          fill="currentColor"
        />
        
        {/* Eye shine */}
        <circle 
          cx="57" 
          cy="72" 
          r="2" 
          fill="white"
        />
        
        {/* LAMBARI text - Bold and clean */}
        <text 
          x="60" 
          y="125" 
          textAnchor="middle" 
          fontSize="14" 
          fontWeight="bold" 
          fill="currentColor"
          fontFamily="Arial, sans-serif"
          letterSpacing="1px"
        >
          LAMBARI
        </text>
      </svg>
    </div>
  );
};
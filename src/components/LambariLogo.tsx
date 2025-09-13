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
      <img 
        src="/lambari-logo.svg"
        alt="Lambari Logo"
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};
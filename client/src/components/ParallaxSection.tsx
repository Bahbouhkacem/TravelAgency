import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, title, subtitle }) => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="relative overflow-hidden h-[400px] flex items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offsetY * 0.5}px)`,
          opacity: 0.8
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold playfair mb-4">{title}</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default ParallaxSection;
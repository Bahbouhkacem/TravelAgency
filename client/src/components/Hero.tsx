import React from 'react';
import { Link } from 'wouter';

interface ButtonProps {
  text: string;
  href: string;
  primary: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttons?: ButtonProps[];
  height?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, buttons, height = '80vh' }) => {
  return (
    <section className={`relative bg-[#1A1A1A] overflow-hidden`} style={{ height }}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white playfair mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light">{subtitle}</p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <Link key={index} href={button.href} className={`inline-flex justify-center items-center ${
                  button.primary 
                    ? 'bg-white text-black hover:bg-opacity-90' 
                    : 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10'
                } px-8 py-3 font-medium transition`}>
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

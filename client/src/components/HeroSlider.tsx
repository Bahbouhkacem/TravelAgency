import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

interface SlideProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface HeroSliderProps {
  slides: SlideProps[];
  height?: string;
  buttons?: {
    text: string;
    href: string;
    primary: boolean;
  }[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, height = '80vh', buttons }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden" style={{ height }}>
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.imageUrl} 
            alt={slide.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white playfair mb-4 animate-fadeSlideUp">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light animate-fadeSlideUp animation-delay-300">
            {slides[currentSlide].subtitle}
          </p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeSlideUp animation-delay-500">
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

export default HeroSlider;
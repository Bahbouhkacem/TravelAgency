import React from 'react';
import { Calendar, Check } from 'lucide-react';

interface TourPackageProps {
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const TourPackage: React.FC<TourPackageProps> = ({ 
  title, 
  price, 
  duration, 
  description, 
  features, 
  imageUrl 
}) => {
  return (
    <div className="bg-white border border-[#E5E5E5] shadow-sm">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold playfair">{title}</h3>
          <div className="text-right">
            <p className="text-xl font-bold">{price}€</p>
            <p className="text-sm text-[#737373]">par personne</p>
          </div>
        </div>
        <div className="mb-4 flex items-center text-sm text-[#4B4B4B]">
          <Calendar className="h-5 w-5 mr-1" />
          <span>{duration}</span>
        </div>
        <p className="mb-6">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-black" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <a href="#" className="inline-block w-full text-center bg-black text-white py-3 font-medium hover:bg-[#1A1A1A] transition">
          Réserver maintenant
        </a>
      </div>
    </div>
  );
};

export default TourPackage;

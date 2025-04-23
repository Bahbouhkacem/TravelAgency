import React from 'react';
import { Calendar, Building2, MapPin, Check } from 'lucide-react';

interface UmrahPackageProps {
  title: string;
  price: number;
  duration: string;
  hotelInfo: string;
  kaabaDistance: string;
  features: string[];
  isPopular?: boolean;
}

const UmrahPackage: React.FC<UmrahPackageProps> = ({
  title,
  price,
  duration,
  hotelInfo,
  kaabaDistance,
  features,
  isPopular = false
}) => {
  return (
    <div className={`bg-white border border-[#E5E5E5] ${isPopular ? 'shadow-lg transform scale-105 relative z-10' : 'shadow-sm'}`}>
      {isPopular && (
        <div className="bg-black text-white py-2 px-4 absolute top-0 right-0">
          <p className="text-sm font-medium">Populaire</p>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold playfair mb-2">{title}</h3>
        <div className="w-16 h-1 bg-black mb-4"></div>
        <div className="mb-6">
          <p className="text-3xl font-bold">{price}€</p>
          <p className="text-sm text-[#737373]">par personne</p>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 mr-2 text-black" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center mb-2">
            <Building2 className="h-5 w-5 mr-2 text-black" />
            <span>{hotelInfo}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-black" />
            <span>{kaabaDistance}</span>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-2 text-black mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <a href="#" className="inline-block w-full text-center bg-black text-white py-3 font-medium hover:bg-[#1A1A1A] transition">
          Réserver
        </a>
      </div>
    </div>
  );
};

export default UmrahPackage;

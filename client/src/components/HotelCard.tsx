import React from 'react';
import { MapPin } from 'lucide-react';

interface HotelCardProps {
  name: string;
  location: string;
  description: string;
  price: number;
  stars: number;
  address: string;
  amenities: string[];
  imageUrl: string;
  viewMode: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  location,
  description,
  price,
  stars,
  address,
  amenities,
  imageUrl,
  viewMode
}) => {
  return (
    <div className={`border border-[#E5E5E5] overflow-hidden group ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>
      <div className={`relative ${viewMode === 'list' ? 'h-60 md:w-1/3' : 'h-60'} overflow-hidden`}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-sm font-medium">
          {location}
        </div>
      </div>
      <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex">
            {[...Array(stars)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center text-sm text-[#4B4B4B] mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address}</span>
        </div>
        <p className="mb-4 text-[#4B4B4B]">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.map((amenity, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-[#F5F5F5]">{amenity}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">{price}€</p>
            <p className="text-sm text-[#737373]">par nuit</p>
          </div>
          <a href="#" className="inline-block bg-black text-white px-4 py-2 font-medium hover:bg-[#1A1A1A] transition">
            Détails
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

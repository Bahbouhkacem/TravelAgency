import React from 'react';
import { Link } from 'wouter';

interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl
}) => {
  return (
    <Link href={linkUrl} className="group">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white playfair mb-2">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;

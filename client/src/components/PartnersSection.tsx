import React from 'react';
import { partners } from '../data';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-3">Nos Partenaires</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">Nous collaborons avec les meilleures entreprises du secteur pour vous garantir un service d'excellence.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 w-auto mb-4 object-contain"
              />
              <h3 className="text-sm font-medium text-center">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            Nos partenariats stratégiques nous permettent de vous offrir les meilleures conditions pour vos voyages, 
            avec des tarifs préférentiels et un service personnalisé de qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
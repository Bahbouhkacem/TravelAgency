import React from 'react';
import Hero from '../components/Hero';
import UmrahPackage from '../components/UmrahPackage';
import Calendar from '../components/Calendar';
import { umrahPackages } from '../data';

const Umrah: React.FC = () => {
  return (
    <>
      {/* Hero Image */}
      <Hero 
        title="Forfaits Umrah"
        subtitle="Des voyages spirituels organisés avec soin pour une expérience sereine et mémorable."
        imageUrl="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="60vh"
      />

      {/* Umrah Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Nos Forfaits Umrah</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">Nous proposons différentes formules pour répondre à tous les besoins. Tous nos forfaits incluent les vols, l'hébergement, les transferts et l'accompagnement spirituel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {umrahPackages.map((pkg, index) => (
              <UmrahPackage 
                key={index}
                title={pkg.title}
                price={pkg.price}
                duration={pkg.duration}
                hotelInfo={pkg.hotelInfo}
                kaabaDistance={pkg.kaabaDistance}
                features={pkg.features}
                isPopular={pkg.isPopular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Availability Calendar */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Calendrier de Disponibilité</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">Consultez les dates disponibles pour nos forfaits Umrah. Les départs sont assurés avec un minimum de 10 participants.</p>
          </div>

          {/* Calendar Widget */}
          <div className="bg-white p-6 shadow-sm max-w-4xl mx-auto">
            <Calendar availableDates={[8, 16, 21, 30]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Umrah;

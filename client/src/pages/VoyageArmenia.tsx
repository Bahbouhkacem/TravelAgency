import React from 'react';
import Hero from '../components/Hero';
import TourPackage from '../components/TourPackage';
import { armeniaPackages } from '../data';

const VoyageArmenia: React.FC = () => {
  return (
    <>
      {/* Hero Image */}
      <Hero 
        title="Voyage en Arménie"
        subtitle="Explorez l'une des plus anciennes civilisations du monde avec nos circuits sur mesure."
        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="60vh"
      />

      {/* Armenia Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Nos Circuits en Arménie</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">Découvrez l'Arménie, sa riche histoire, ses monastères spectaculaires et ses paysages montagneux à couper le souffle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {armeniaPackages.map((pkg, index) => (
              <TourPackage 
                key={index}
                title={pkg.title}
                price={pkg.price}
                duration={pkg.duration}
                description={pkg.description}
                features={pkg.features}
                imageUrl={pkg.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VoyageArmenia;

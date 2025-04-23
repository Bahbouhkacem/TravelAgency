import React from 'react';
import Hero from '../components/Hero';
import TourPackage from '../components/TourPackage';
import { turkyaPackages } from '../data';

const VoyageTurkya: React.FC = () => {
  return (
    <>
      {/* Hero Image */}
      <Hero 
        title="Voyage en Turquie"
        subtitle="Découvrez la richesse culturelle et historique de la Turquie avec nos circuits exclusifs."
        imageUrl="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="60vh"
      />

      {/* Turkya Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Nos Circuits en Turquie</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">Choisissez parmi nos circuits soigneusement conçus pour vous offrir une expérience inoubliable en Turquie.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {turkyaPackages.map((pkg, index) => (
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

export default VoyageTurkya;

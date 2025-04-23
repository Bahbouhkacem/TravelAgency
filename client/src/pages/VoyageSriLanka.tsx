import React from 'react';
import Hero from '../components/Hero';
import TourPackage from '../components/TourPackage';
import ParallaxSection from '../components/ParallaxSection';
import { sriLankaPackages } from '../data';

const VoyageSriLanka: React.FC = () => {
  return (
    <>
      <Hero 
        title="Sri Lanka: L'Île aux Mille Merveilles"
        subtitle="Des plages idylliques aux plantations de thé, en passant par les sites historiques"
        imageUrl="https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="60vh"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Découvrez le Sri Lanka</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">
              Le Sri Lanka, surnommé la "perle de l'océan Indien", offre une diversité étonnante dans un espace compact. 
              De ses plages dorées aux montagnes brumeuses, des sites culturels aux réserves naturelles, découvrez une destination
              aux mille facettes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sriLankaPackages.map((pkg, index) => (
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

          <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold playfair mb-4">Informations Pratiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Documents de Voyage</h4>
                <p>Passeport valide 6 mois après la date de retour. Visa ETA obligatoire, à obtenir avant le départ.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Meilleure Période</h4>
                <p>De décembre à mars pour la côte ouest et sud. De mai à septembre pour la côte est.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Devise</h4>
                <p>Roupie sri-lankaise (LKR). Prévoyez des espèces car les cartes de crédit ne sont pas acceptées partout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1563461661024-ce984ab547fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        title="Un Patrimoine Naturel et Culturel Exceptionnel"
        subtitle="8 sites classés au patrimoine mondial de l'UNESCO"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Incontournables au Sri Lanka</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-[#E5E5E5] p-6 rounded-lg hover:shadow-lg transition">
              <img 
                src="https://images.unsplash.com/photo-1578128178799-ffac2a1d3f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Sigiriya Rock" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sigiriya</h3>
              <p>Le "Rocher du Lion", avec son palais fortifié et ses fresques millénaires. Un site UNESCO incontournable.</p>
            </div>
            <div className="border border-[#E5E5E5] p-6 rounded-lg hover:shadow-lg transition">
              <img 
                src="https://images.unsplash.com/photo-1571393600832-6d42cb6bcd4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Plantation de thé" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Plantations de Thé</h3>
              <p>Les collines verdoyantes de Nuwara Eliya, "petite Angleterre" du Sri Lanka, où sont produites certaines des meilleures variétés de thé noir.</p>
            </div>
            <div className="border border-[#E5E5E5] p-6 rounded-lg hover:shadow-lg transition">
              <img 
                src="https://images.unsplash.com/photo-1548532928-dd5ec006e361?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Plage" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Plages Paradisiaques</h3>
              <p>Des plages dorées comme Mirissa et Unawatuna, idéales pour la détente, le surf ou l'observation des baleines en saison.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoyageSriLanka;
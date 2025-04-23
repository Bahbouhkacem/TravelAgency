import React from 'react';
import DestinationCard from '../components/DestinationCard';
import SocialMediaLinks from '../components/SocialMediaLinks';
import PartnersSection from '../components/PartnersSection';
import ParallaxSection from '../components/ParallaxSection';
import HeroSlider from '../components/HeroSlider';
import { destinations, heroSlides } from '../data';
import { Link } from 'wouter';
import { Check } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Slider Section */}
     <HeroSlider 
  slides={heroSlides}
  buttons={[
    {
      text: "Découvrir Umrah",
      href: "/umrah",
      primary: true
    },
    {
      text: "Nos Voyages",
      href: "/voyage-turkya",
      primary: false
    }
  ]}
/>
      
      {/* Featured Destinations Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold playfair mb-3">Destinations Populaires</h2>
      <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
      <p className="text-lg max-w-2xl mx-auto">Explorez nos destinations soigneusement sélectionnées pour vous offrir des expériences de voyage inoubliables.</p>
    </div>
    
    {/* Mobile: Horizontal sliding */}
    <div className="md:hidden overflow-x-auto pb-6 -mx-4">
      <div className="flex px-4 space-x-4" style={{ minWidth: "min-content" }}>
        {destinations.map((destination, index) => (
          <div key={index} className="w-80 flex-shrink-0">
            <DestinationCard 
              title={destination.title}
              description={destination.description}
              imageUrl={destination.imageUrl}
              linkUrl={destination.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Desktop: Grid layout */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination, index) => (
        <DestinationCard 
          key={index}
          title={destination.title}
          description={destination.description}
          imageUrl={destination.imageUrl}
          linkUrl={destination.linkUrl}
        />
      ))}
    </div>
  </div>
</section>

      
    

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold playfair mb-6">travel Agency: Votre Agence de Confiance</h2>
              <div className="w-24 h-1 bg-black mb-6"></div>
              <p className="text-lg mb-4">Depuis notre création, travel Agency s'est engagé à offrir des expériences de voyage exceptionnelles, associant confort, découverte et authenticité.</p>
              <p className="text-lg mb-6">Notre équipe d'experts voyage conçoit minutieusement chaque itinéraire pour vous garantir des souvenirs inoubliables et un service personnalisé de premier ordre.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-black" />
                  <span>Voyages organisés sur mesure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-black" />
                  <span>Accompagnement professionnel</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-black" />
                  <span>Sélection rigoureuse des hôtels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-black" />
                  <span>Service client disponible 24/7</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-block mt-6 bg-black text-white px-6 py-3 font-medium hover:bg-[#1A1A1A] transition">
                Nous contacter
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="L'équipe travel Agency" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-lg hidden md:block">
                <p className="text-xl font-medium playfair">Plus de 1000 voyageurs satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Social Media Integration */}
      <SocialMediaLinks />
    </>
  );
};

export default Home;

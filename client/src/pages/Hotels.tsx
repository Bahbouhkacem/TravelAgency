import React, { useState } from 'react';
import Hero from '../components/Hero';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data';
import { ListFilter, List } from 'lucide-react';

const Hotels: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  
  const tunisianHotels = hotels.filter(hotel => hotel.location === 'Tunisie');
  const filteredHotels = filter === 'all' 
    ? tunisianHotels 
    : tunisianHotels.filter(hotel => hotel.address.includes(filter));

  return (
    <>
      {/* Hero Image */}
      <Hero 
        title="Nos Hôtels Partenaires"
        subtitle="Une sélection d'établissements de qualité pour un séjour confortable et mémorable."
        imageUrl="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        height="60vh"
      />

      {/* Hotel Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold playfair mb-4">Hôtels Sélectionnés</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg">Nos partenaires hôteliers sont choisis avec soin pour garantir confort, service et emplacement idéal.</p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0 flex-wrap">
              <span className="font-medium">Filtrer par:</span>
              <button 
                className={`px-4 py-2 border ${filter === 'all' ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'} transition mb-2 md:mb-0`}
                onClick={() => setFilter('all')}
              >
                Tous
              </button>
              <button 
                className={`px-4 py-2 border ${filter === 'Hammamet' ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'} transition mb-2 md:mb-0`}
                onClick={() => setFilter('Hammamet')}
              >
                Hammamet
              </button>
              <button 
                className={`px-4 py-2 border ${filter === 'Sousse' ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'} transition mb-2 md:mb-0`}
                onClick={() => setFilter('Sousse')}
              >
                Sousse
              </button>
              <button 
                className={`px-4 py-2 border ${filter === 'Monastir' ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'} transition mb-2 md:mb-0`}
                onClick={() => setFilter('Monastir')}
              >
                Monastir
              </button>
              <button 
                className={`px-4 py-2 border ${filter === 'Djerba' ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'} transition mb-2 md:mb-0`}
                onClick={() => setFilter('Djerba')}
              >
                Djerba
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Affichage:</span>
              <button 
                className={`p-2 ${viewMode === 'list' ? 'bg-[#F5F5F5]' : ''} hover:bg-[#F5F5F5] transition`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-5 w-5" />
              </button>
              <button 
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#F5F5F5]' : ''} hover:bg-[#F5F5F5] transition`}
                onClick={() => setViewMode('grid')}
              >
                <ListFilter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Hotel Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {filteredHotels.map((hotel, index) => (
              <HotelCard 
                key={index}
                name={hotel.name}
                location={hotel.location}
                description={hotel.description}
                price={hotel.price}
                stars={hotel.stars}
                address={hotel.address}
                amenities={hotel.amenities}
                imageUrl={hotel.imageUrl}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Load More Button */}
          {filteredHotels.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-black font-medium hover:bg-black hover:text-white transition">
                Voir plus d'hôtels
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hotels;

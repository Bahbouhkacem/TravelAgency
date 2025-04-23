import React from 'react';

const SocialMediaLinks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-3">Suivez Nos Aventures</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">Rejoignez notre communauté de voyageurs et restez informés de nos dernières offres et destinations.</p>
        </div>
        
        {/* Mobile: Horizontal sliding */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4">
          <div className="flex px-4 space-x-6" style={{ minWidth: "min-content" }}>
            {/* Facebook */}
            <div className="border border-[#E5E5E5] p-4 w-80 h-96 flex-shrink-0 overflow-hidden">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <h3 className="text-lg font-semibold">Facebook</h3>
              </div>
              <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
                <p className="text-[#737373] text-center px-4">
                  Intégration Facebook
                  <br />
                  <a href="https://www.facebook.com/TechventureTn" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                    Visitez notre page
                  </a>
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="border border-[#E5E5E5] p-4 w-80 h-96 flex-shrink-0 overflow-hidden">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <h3 className="text-lg font-semibold">Instagram</h3>
              </div>
              <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
                <p className="text-[#737373] text-center px-4">
                  Intégration Instagram
                  <br />
                  <a href="https://www.instagram.com/techventure_tunisia/" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                    Suivez-nous
                  </a>
                </p>
              </div>
            </div>

            {/* TikTok */}
            <div className="border border-[#E5E5E5] p-4 w-80 h-96 flex-shrink-0 overflow-hidden">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
                <h3 className="text-lg font-semibold">TikTok</h3>
              </div>
              <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
                <p className="text-[#737373] text-center px-4">
                  Intégration TikTok
                  <br />
                  <a href="https://www.tiktok.com/@elite.masar" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                    Découvrez nos vidéos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Facebook */}
          <div className="border border-[#E5E5E5] p-4 h-96 overflow-hidden">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <h3 className="text-lg font-semibold">Facebook</h3>
            </div>
            <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
              <p className="text-[#737373] text-center px-4">
                Intégration Facebook
                <br />
                <a href="https://www.facebook.com/TechventureTn" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                  Visitez notre page
                </a>
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="border border-[#E5E5E5] p-4 h-96 overflow-hidden">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <h3 className="text-lg font-semibold">Instagram</h3>
            </div>
            <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
              <p className="text-[#737373] text-center px-4">
                Intégration Instagram
                <br />
                <a href="https://www.instagram.com/techventure_tunisia/" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                  Suivez-nous
                </a>
              </p>
            </div>
          </div>

          {/* TikTok */}
          <div className="border border-[#E5E5E5] p-4 h-96 overflow-hidden">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
              </svg>
              <h3 className="text-lg font-semibold">TikTok</h3>
            </div>
            <div className="bg-[#F5F5F5] w-full h-full flex items-center justify-center">
              <p className="text-[#737373] text-center px-4">
                Intégration TikTok
                <br />
                <a href="https://www.tiktok.com/@elite.masar" target="_blank" rel="noopener noreferrer" className="text-black underline mt-2 inline-block">
                  Découvrez nos vidéos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
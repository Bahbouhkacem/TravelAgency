import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 playfair">agencey</h3>
            <p className="mb-4">Votre partenaire de confiance pour des voyages exceptionnels, alliant confort, découverte et authenticité.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4D4D4]" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#D4D4D4]" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#D4D4D4]" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 playfair">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link href="/voyage-turkya" className="hover:text-[#D4D4D4] transition">Voyages en Turquie</Link></li>
              <li><Link href="/voyage-armenia" className="hover:text-[#D4D4D4] transition">Voyages en Arménie</Link></li>
              <li><Link href="/umrah" className="hover:text-[#D4D4D4] transition">Forfaits Umrah</Link></li>
              <li><Link href="/hotels" className="hover:text-[#D4D4D4] transition">Réservation d'hôtels</Link></li>
              <li><a href="#" className="hover:text-[#D4D4D4] transition">Service sur mesure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 playfair">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4D4D4] transition">À propos de nous</a></li>
              <li><a href="#" className="hover:text-[#D4D4D4] transition">FAQ</a></li>
              <li><a href="#" className="hover:text-[#D4D4D4] transition">Conditions générales</a></li>
              <li><a href="#" className="hover:text-[#D4D4D4] transition">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-[#D4D4D4] transition">Nous contacter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 playfair">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>Tunisia</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5" />
                <span>+216 3100000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5" />
                <span>contact@agencey.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#4B4B4B] pt-6 mt-6">
          <p className="text-sm text-center text-[#9D9D9D]">© {new Date().getFullYear()} agencey. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

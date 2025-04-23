import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold playfair mb-3">Contactez-Nous</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">Nous sommes à votre écoute pour toute question concernant nos services ou pour vous aider à planifier votre prochain voyage.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#F5F5F5] p-8 rounded-lg">
            <h3 className="text-2xl font-bold playfair mb-6">Nos Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>
                  <p>123 Avenue des Voyages, 75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Téléphone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>contact@x.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-2">Horaires d'ouverture</h4>
              <p>Lundi - Vendredi: 9h00 - 18h00</p>
              <p>Samedi: 10h00 - 16h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="border border-[#E5E5E5] p-8 rounded-lg">
            <h3 className="text-2xl font-bold playfair mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-black text-white py-3 px-6 rounded hover:bg-[#1A1A1A] transition"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
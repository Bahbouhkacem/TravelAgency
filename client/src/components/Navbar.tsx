import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [voyageDropdownOpen, setVoyageDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleVoyageDropdown = () => {
    setVoyageDropdownOpen(!voyageDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold playfair tracking-tight">Agency</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="flex items-center font-medium hover:text-[#9D9D9D] transition">
                Voyage Organisé
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E5E5] shadow-lg rounded-md py-2 hidden group-hover:block transition-all duration-300">
                <Link href="/voyage-turkya" className="block px-4 py-2 hover:bg-[#F5F5F5]">Turkya</Link>
                <Link href="/voyage-armenia" className="block px-4 py-2 hover:bg-[#F5F5F5]">Armenia</Link>
                <Link href="/voyage-srilanka" className="block px-4 py-2 hover:bg-[#F5F5F5]">Sri Lanka</Link>
              </div>
            </div>
            
            <Link href="/umrah" className={`font-medium hover:text-[#9D9D9D] transition ${location === '/umrah' ? 'font-bold' : ''}`}>
              Umrah
            </Link>
            <Link href="/hotels" className={`font-medium hover:text-[#9D9D9D] transition ${location === '/hotels' ? 'font-bold' : ''}`}>
              Hotels
            </Link>
            <Link href="/contact" className={`font-medium hover:text-[#9D9D9D] transition ${location === '/contact' ? 'font-bold' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 border-t border-[#E5E5E5] mt-3">
              <button 
                className="w-full text-left px-4 py-2 font-medium hover:bg-[#F5F5F5] flex justify-between items-center"
                onClick={toggleVoyageDropdown}
              >
                Voyage Organisé
                <ChevronDown className="h-4 w-4" />
              </button>
              {voyageDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/voyage-turkya" className="block px-4 py-2 hover:bg-[#F5F5F5]">Turkya</Link>
                  <Link href="/voyage-armenia" className="block px-4 py-2 hover:bg-[#F5F5F5]">Armenia</Link>
                  <Link href="/voyage-srilanka" className="block px-4 py-2 hover:bg-[#F5F5F5]">Sri Lanka</Link>
                </div>
              )}
              <Link href="/umrah" className="block px-4 py-2 font-medium hover:bg-[#F5F5F5]">
                Umrah
              </Link>
              <Link href="/hotels" className="block px-4 py-2 font-medium hover:bg-[#F5F5F5]">
                Hotels
              </Link>
              <Link href="/contact" className="block px-4 py-2 font-medium hover:bg-[#F5F5F5]">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

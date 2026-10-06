import React, { useState, useEffect } from 'react';
import { Phone, Navigation, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2A211C]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#B58A52]/20'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F6F1E8] hover:text-[#B58A52] transition-colors whitespace-nowrap"
          >
            COFFEE CASTLE
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#F6F1E8]/90">
            <a href="#about" className="hover:text-[#B58A52] transition-colors">
              About
            </a>
            <a href="#signature" className="hover:text-[#B58A52] transition-colors">
              Food
            </a>
            <a href="#menu" className="hover:text-[#B58A52] transition-colors">
              Menu
            </a>
            <a href="#coffee" className="hover:text-[#B58A52] transition-colors">
              Coffee
            </a>
            <a href="#gallery" className="hover:text-[#B58A52] transition-colors">
              Gallery
            </a>
            <a href="#experience" className="hover:text-[#B58A52] transition-colors">
              Atmosphere
            </a>
            <a href="#location" className="hover:text-[#B58A52] transition-colors">
              Location
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#F6F1E8] hover:text-[#B58A52] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white transition-all rounded shadow-sm whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="p-2 text-[#F6F1E8] hover:text-[#B58A52] transition-colors"
              aria-label="Call restaurant"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#F6F1E8] hover:text-[#B58A52] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#2A211C] border-b border-[#B58A52]/20 px-6 py-6 transition-all shadow-xl">
          <nav className="flex flex-col space-y-4 text-base font-medium text-[#F6F1E8]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              About Coffee Castle
            </a>
            <a
              href="#signature"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Signature Food
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Full Menu & Pricing
            </a>
            <a
              href="#coffee"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Specialty Coffee
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Photo Gallery
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Atmosphere & Hours
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Location & Map
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B58A52] transition-colors py-1"
            >
              Reserve a Table
            </a>
          </nav>
          <div className="mt-6 pt-5 border-t border-[#F6F1E8]/10 flex flex-col gap-3">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-[#B58A52] text-[#171716] font-semibold text-xs uppercase tracking-wider rounded"
            >
              Get Directions
            </a>
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="w-full text-center py-2.5 border border-[#F6F1E8]/20 text-[#F6F1E8] font-semibold text-xs uppercase tracking-wider rounded"
            >
              Call 051-4908443
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowRight, Navigation, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#171716]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_coffee_castle_exterior_1791279480313.jpg"
          alt="Coffee Castle Taxila exterior facade with glowing neon sign at dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark cinematic scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171716] via-[#171716]/60 to-black/40" />
        <div className="absolute inset-0 bg-[#2A211C]/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Location kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#B58A52] mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{RESTAURANT_INFO.locationBrief}</span>
        </div>

        {/* Subheading brand lockup */}
        <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-[#F6F1E8]/80 mb-3">
          {RESTAURANT_INFO.name}
        </p>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F6F1E8] leading-[1.08] tracking-tight max-w-4xl mb-6 text-balance">
          Coffee, Food & Moments Worth Sharing.
        </h1>

        {/* Concise Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#F6F1E8]/85 font-normal max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          An architectural dining retreat on Allama Iqbal Avenue. Specialty coffee, artisan pizzas, gourmet burgers, and relaxed evenings.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase rounded shadow-lg group"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#F6F1E8] border border-white/20 transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase rounded backdrop-blur-sm shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#B58A52]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Bottom subtle scroll anchor */}
        <div className="mt-14 sm:mt-18 text-xs tracking-widest text-[#F6F1E8]/60 uppercase">
          Scroll to discover
        </div>
      </div>
    </section>
  );
};

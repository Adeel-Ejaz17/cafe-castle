import React from 'react';
import { Coffee, Users, Utensils, Moon } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { IMAGES } from '../assets/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F1E8] text-[#24211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with subtle frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#2A211C]/10 aspect-[4/3] group">
              <img
                src={IMAGES.patio}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = IMAGES.publicPatio;
                }}
                alt="Coffee Castle Taxila daytime outdoor patio and lawn seating"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#2A211C]/85 backdrop-blur-md rounded text-[#F6F1E8] text-xs flex items-center justify-between">
                <span>Outdoor Garden & Pavilion</span>
                <span className="text-[#B58A52]">Allama Iqbal Avenue</span>
              </div>
            </div>
            {/* Architectural accent border offset */}
            <div
              className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-[#B58A52]/30 rounded-lg -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Sub-label */}
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] mb-3">
              The Experience
            </span>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2A211C] tracking-tight leading-tight mb-6">
              More Than Coffee.
            </h2>

            {/* Core Brand Paragraph from Brief */}
            <p className="text-base sm:text-lg text-[#24211E]/85 font-normal leading-relaxed mb-6">
              {RESTAURANT_INFO.aboutCopy}
            </p>

            {/* Subtle Divider */}
            <div className="w-16 h-[2px] bg-[#B58A52] my-4" />

            {/* Editorial Feature Highlights */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 pt-2 text-sm text-[#24211E]/90">
              <div className="flex items-center gap-2.5">
                <Coffee className="w-4 h-4 text-[#B58A52] shrink-0" />
                <span>Specialty Coffee & Shakes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-[#B58A52] shrink-0" />
                <span>Pizzas, Burgers & Steaks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#B58A52] shrink-0" />
                <span>Family & Friends Gatherings</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Moon className="w-4 h-4 text-[#B58A52] shrink-0" />
                <span>Relaxed Late Evening Dining</span>
              </div>
            </div>

            {/* Small Decorative Typography Element */}
            <div className="mt-8 pt-6 border-t border-[#2A211C]/10 flex items-center justify-between text-xs text-[#716A61]">
              <span className="font-serif italic text-sm text-[#2A211C]">
                “Good coffee. Great food. Better moments.”
              </span>
              <span>Taxila, Punjab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

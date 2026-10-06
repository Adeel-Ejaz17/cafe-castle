import React from 'react';
import { Coffee, Flame, Droplets, Clock } from 'lucide-react';

export const CoffeeSection: React.FC = () => {
  return (
    <section id="coffee" className="py-24 sm:py-32 bg-[#2A211C] text-[#F6F1E8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#B58A52]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
              Specialty Barista Counter
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F6F1E8] tracking-tight leading-none mb-6">
              Slow Down. Stay Awhile.
            </h2>

            <p className="text-base sm:text-lg text-[#F6F1E8]/85 font-normal leading-relaxed mb-8">
              At Coffee Castle Taxila, coffee is more than caffeine. From velvety textured flat whites and intricate latte art to bold espresso shots and rich chilled shakes, each cup is crafted to complement conversation.
            </p>

            {/* Coffee Craft Grid */}
            <div className="grid grid-cols-2 gap-6 pt-2 border-t border-[#B58A52]/20">
              <div>
                <div className="flex items-center gap-2 text-[#B58A52] mb-1.5">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    Fresh Extraction
                  </span>
                </div>
                <p className="text-xs text-[#F6F1E8]/70 leading-relaxed">
                  Precision espresso grounds brewed at balanced temperature for optimal crema.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#B58A52] mb-1.5">
                  <Droplets className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    Silky Microfoam
                  </span>
                </div>
                <p className="text-xs text-[#F6F1E8]/70 leading-relaxed">
                  Hand-steamed milk poured into custom rosette, tulip, and heart leaf patterns.
                </p>
              </div>
            </div>

            {/* Coffee Menu Highlights */}
            <div className="mt-8 pt-6 border-t border-[#B58A52]/20 flex flex-wrap gap-4 text-xs tracking-wider text-[#F6F1E8]/80 uppercase">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#B58A52]" />
                Cappuccino
              </span>
              <span>•</span>
              <span>Caffe Latte</span>
              <span>•</span>
              <span>Mocha</span>
              <span>•</span>
              <span>Shakes & Smoothies</span>
            </div>
          </div>

          {/* Right Column: High-End Coffee Photography */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-[#B58A52]/20 aspect-[4/3] bg-[#171716]">
              <img
                src="/src/assets/images/latte_art_coffee_1791279507843.jpg"
                alt="Coffee Castle Taxila artisan cappuccino cup with intricate latte art on cafe table"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171716]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#F6F1E8] block">
                    Freshly Poured Artistry
                  </span>
                  <span className="text-[#F6F1E8]/70 text-xs">
                    Served hot throughout the day until midnight
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B58A52] text-[#171716] font-semibold tracking-wider uppercase rounded text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>Always Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

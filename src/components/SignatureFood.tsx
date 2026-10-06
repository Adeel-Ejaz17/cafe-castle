import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const SignatureFood: React.FC = () => {
  return (
    <section id="signature" className="py-24 sm:py-32 bg-[#E9E0D3] text-[#24211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
              Crafted Fresh Daily
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2A211C] tracking-tight leading-none">
              Made for the table.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#716A61] max-w-md font-normal leading-relaxed">
            From handcrafted stone-baked pizzas to sizzling chicken steaks and gourmet burgers, every dish is prepared to order.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Dish: Artisan Pizza Board */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-[#2A211C]">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={IMAGES.pizza}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.publicPizza;
                  }}
                  alt="Freshly baked Castle Pizza with chicken, olives, bell peppers, and melted mozzarella on wooden paddle board"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-[#F6F1E8]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#B58A52] font-semibold">
                    Signature Pizza
                  </span>
                  <span className="text-sm font-semibold tracking-wide tabular-nums text-[#F6F1E8]">
                    From Rs. 550
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2 text-[#F6F1E8]">
                  Castle Artisan Pizza
                </h3>
                <p className="text-xs sm:text-sm text-[#F6F1E8]/80 max-w-lg leading-relaxed font-normal">
                  Loaded with chicken tikka & fajita cuts, rich tomato reduction, black olives, sliced mushrooms, and golden bubbly mozzarella.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Secondary Dishes */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Dish 2: Crispy Chicken Steak with Mushroom Sauce */}
            <div className="relative group rounded-xl overflow-hidden shadow-xl bg-[#2A211C]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.steak}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.publicSteak;
                  }}
                  alt="Crispy grilled chicken steak in rich mushroom cream sauce with fries and sautéed vegetables"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-[#F6F1E8]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-widest text-[#B58A52] font-semibold">
                    Continental Special
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-[#F6F1E8]">
                    Rs. 690
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F6F1E8]">
                  Grilled Chicken in Mushroom Sauce
                </h3>
                <p className="text-xs text-[#F6F1E8]/80 mt-1 line-clamp-2">
                  Golden chicken fillet smothered in creamy mushroom sauce with olives, fries, and seasonal sautéed vegetables.
                </p>
              </div>
            </div>

            {/* Editorial Quick Teaser Box */}
            <div className="p-6 sm:p-8 bg-[#F6F1E8] rounded-xl border border-[#2A211C]/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#B58A52] block mb-2">
                  Full Kitchen Lineup
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#2A211C] font-normal mb-3">
                  Burgers, Chinese Entrées & Pastas
                </h4>
                <p className="text-xs sm:text-sm text-[#716A61] leading-relaxed">
                  Enjoy our Zinger burgers from Rs. 500, Chicken Chili Dry with garlic rice at Rs. 540, and Creamy Alfredo pasta.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211C]/10">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#2A211C] hover:text-[#B58A52] transition-colors"
                >
                  <span>Browse complete menu & sizes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

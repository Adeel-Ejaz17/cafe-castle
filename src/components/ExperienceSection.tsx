import React, { useState } from 'react';
import { Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const ExperienceSection: React.FC = () => {
  const [activeMood, setActiveMood] = useState<'day' | 'night'>('day');

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F6F1E8] text-[#24211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
              Atmosphere & Setting
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2A211C] tracking-tight leading-none">
              Daytime Calm. Evening Energy.
            </h2>
          </div>

          {/* Interactive Day/Night Mode Switcher */}
          <div className="mt-6 md:mt-0 flex items-center p-1.5 bg-[#E9E0D3] rounded-lg border border-[#2A211C]/10 self-start md:self-auto">
            <button
              onClick={() => setActiveMood('day')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                activeMood === 'day'
                  ? 'bg-white text-[#2A211C] shadow-sm'
                  : 'text-[#716A61] hover:text-[#2A211C]'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Daytime Patio</span>
            </button>

            <button
              onClick={() => setActiveMood('night')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                activeMood === 'night'
                  ? 'bg-[#2A211C] text-[#F6F1E8] shadow-sm'
                  : 'text-[#716A61] hover:text-[#2A211C]'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#B58A52]" />
              <span>Evening Glow</span>
            </button>
          </div>
        </div>

        {/* Dynamic Visual Composition based on mood */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#171716] border border-[#2A211C]/15 transition-all duration-500">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative overflow-hidden">
            <img
              src={activeMood === 'day' ? IMAGES.patio : IMAGES.hero}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  activeMood === 'day' ? IMAGES.publicPatio : IMAGES.publicHero;
              }}
              alt={
                activeMood === 'day'
                  ? 'Coffee Castle Taxila daytime outdoor lawn and architectural pavilion'
                  : 'Coffee Castle Taxila nighttime lit facade and warm amber evening ambience'
              }
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 hover:scale-105"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>

          {/* Bottom Descriptive Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-[#F6F1E8] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B58A52] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {activeMood === 'day'
                    ? 'Daytime Experience • Sunlight & Outdoor Lawn'
                    : 'Evening Experience • Warm Lights & Late Hours'}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight mb-2">
                {activeMood === 'day'
                  ? 'Natural Daylight, Green Lawns & Breezy Patio'
                  : 'Warm Architectural Glow Under the Taxila Night Sky'}
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F1E8]/80 leading-relaxed font-normal">
                {activeMood === 'day'
                  ? 'Bright and open seating surrounded by manicured shrubs, striped awnings, and gentle breezes on Allama Iqbal Avenue. Ideal for business coffee, casual meetings, and relaxed afternoons.'
                  : 'As twilight settles, Coffee Castle illuminates with warm glowing neon signs, ambient pillar uplighting, and cozy indoor seating. Open until approximately 12:00 AM for evening gatherings and post-dinner coffee.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#reservation"
                className="px-6 py-3 bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase rounded text-center whitespace-nowrap shadow-md"
              >
                Plan a Visit
              </a>
              <a
                href="https://maps.google.com/?q=PRMC%2BMX5,+Allama+Iqbal+Ave,+Taxila"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-[#F6F1E8] transition-all text-xs font-semibold tracking-wider uppercase rounded text-center whitespace-nowrap backdrop-blur-sm"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

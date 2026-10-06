import React from 'react';
import { Phone, Navigation, MapPin, Clock, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171716] text-[#F6F1E8] border-t border-[#B58A52]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand & Identity */}
          <div className="space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F6F1E8] block">
              COFFEE CASTLE
            </span>
            <p className="text-xs sm:text-sm text-[#F6F1E8]/70 leading-relaxed max-w-sm">
              A contemporary café and dining retreat situated on Allama Iqbal Avenue in Taxila. Handcrafted coffee, artisanal pizzas, gourmet burgers, and memorable moments.
            </p>
            <div className="pt-2 text-xs text-[#B58A52] font-mono">
              Taxila, Rawalpindi, Punjab, Pakistan
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A52] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6F1E8]/80">
              <li>
                <a href="#about" className="hover:text-[#B58A52] transition-colors">
                  About Coffee Castle
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#B58A52] transition-colors">
                  Signature Food
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B58A52] transition-colors">
                  Menu & Prices
                </a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-[#B58A52] transition-colors">
                  Specialty Coffee
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B58A52] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#B58A52] transition-colors">
                  Day & Night Atmosphere
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A52] mb-4">
              Hours & Access
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F6F1E8]/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B58A52] shrink-0 mt-0.5" />
                <span>Open daily until approx. 12:00 AM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B58A52] shrink-0 mt-0.5" />
                <span>Allama Iqbal Avenue, Taxila</span>
              </div>
              <div className="pt-2 text-xs text-[#F6F1E8]/60">
                Outdoor lawn seating & indoor air-conditioned lounge available.
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A52] mb-4">
              Contact & Direct Line
            </h4>
            <div className="space-y-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="flex items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-xs sm:text-sm text-[#F6F1E8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B58A52]" />
                <span className="font-mono">051-4908443</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={scrollToTop}
                type="button"
                className="flex items-center gap-1.5 text-xs text-[#F6F1E8]/60 hover:text-[#B58A52] transition-colors pt-2"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F1E8]/60 gap-4">
          <p>© 2026 Coffee Castle Taxila. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Allama Iqbal Avenue, Taxila</span>
            <span>·</span>
            <span>4.2 ★ (534 Reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

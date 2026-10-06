import React from 'react';
import { MapPin, Phone, Star, Navigation, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F6F1E8] text-[#24211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Location Details & Conversion Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
              Visit Us in Taxila
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2A211C] tracking-tight leading-tight mb-6">
              Finding Coffee Castle.
            </h2>

            <div className="space-y-6 text-sm text-[#24211E]">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#2A211C]/10 shadow-sm">
                <MapPin className="w-5 h-5 text-[#B58A52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#2A211C] text-base mb-1">
                    {RESTAURANT_INFO.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#716A61] leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs font-mono text-[#B58A52] mt-1.5">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#2A211C]/10 shadow-sm">
                <Phone className="w-5 h-5 text-[#B58A52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#2A211C] text-base mb-1">
                    Direct Phone Line
                  </h4>
                  <p className="text-xs sm:text-sm text-[#716A61]">
                    Call for reservations, inquiries, and takeaway orders.
                  </p>
                  <a
                    href={RESTAURANT_INFO.phoneTel}
                    className="inline-block text-base font-semibold text-[#2A211C] hover:text-[#B58A52] transition-colors mt-1 font-mono"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Ratings & Operating Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#2A211C]/10 shadow-sm">
                <Clock className="w-5 h-5 text-[#B58A52] shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-[#2A211C] text-base">
                      Hours & Rating
                    </h4>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#B58A52]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{RESTAURANT_INFO.googleRating}</span>
                      <span className="text-[#716A61]">({RESTAURANT_INFO.googleReviewsCount})</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#716A61]">
                    Open daily for lunch, coffee, dinner, and late dining until approx. 12:00 AM.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B58A52] text-[#171716] hover:bg-[#9E733D] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase rounded shadow-md whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Maps</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2A211C]/30 text-[#2A211C] hover:bg-[#2A211C] hover:text-[#F6F1E8] transition-all text-xs font-semibold tracking-wider uppercase rounded whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#2A211C]/15 bg-[#2A211C] relative">
              {/* Map Iframe without private API key */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full">
                <iframe
                  title="Coffee Castle Taxila Location Map"
                  src="https://maps.google.com/maps?q=PRMC%2BMX5,+Allama+Iqbal+Ave,+Taxila&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Map Overlay Card */}
              <div className="p-4 sm:p-5 bg-[#2A211C] text-[#F6F1E8] flex items-center justify-between border-t border-[#B58A52]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B58A52] font-semibold block">
                      Live Destination
                    </span>
                    <span className="text-xs sm:text-sm text-[#F6F1E8]">
                      Allama Iqbal Ave, Taxila (Near HIT Officers Mess & HITEC)
                    </span>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B58A52] hover:text-white transition-colors"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

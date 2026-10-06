import React from 'react';
import { Star, Clock, Trees, DollarSign, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const InfoBar: React.FC = () => {
  return (
    <section className="bg-[#2A211C] border-y border-[#B58A52]/25 text-[#F6F1E8] py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#B58A52]/20">
          {/* Rating */}
          <div className="flex flex-col items-center justify-center text-center px-3 pt-3 md:pt-0">
            <div className="flex items-center gap-1.5 text-[#B58A52] mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-lg text-[#F6F1E8] tabular-nums">
                {RESTAURANT_INFO.googleRating}
              </span>
              <span className="text-xs text-[#F6F1E8]/60">/ 5.0</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#F6F1E8]/70">
              Google Rating
            </span>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center justify-center text-center px-3 pt-3 md:pt-0">
            <div className="flex items-center gap-1.5 text-[#F6F1E8] mb-1">
              <MessageSquare className="w-4 h-4 text-[#B58A52]" />
              <span className="font-semibold text-lg tabular-nums">
                {RESTAURANT_INFO.googleReviewsCount}
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#F6F1E8]/70">
              Verified Reviews
            </span>
          </div>

          {/* Seating */}
          <div className="flex flex-col items-center justify-center text-center px-3 pt-3 md:pt-0">
            <div className="flex items-center gap-1.5 text-[#F6F1E8] mb-1">
              <Trees className="w-4 h-4 text-[#B58A52]" />
              <span className="font-semibold text-base sm:text-lg">
                Outdoor Lawn
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#F6F1E8]/70">
              Seating Available
            </span>
          </div>

          {/* Price Range */}
          <div className="flex flex-col items-center justify-center text-center px-3 pt-3 md:pt-0">
            <div className="flex items-center gap-1.5 text-[#F6F1E8] mb-1">
              <DollarSign className="w-4 h-4 text-[#B58A52]" />
              <span className="font-semibold text-sm sm:text-base tabular-nums">
                PKR 1,000–2,000
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#F6F1E8]/70">
              Approx. Per Person
            </span>
          </div>

          {/* Closing Info */}
          <div className="flex flex-col items-center justify-center text-center px-3 pt-3 md:pt-0 col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 text-[#F6F1E8] mb-1">
              <Clock className="w-4 h-4 text-[#B58A52]" />
              <span className="font-semibold text-base sm:text-lg">
                Until 12:00 AM
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#F6F1E8]/70">
              Evening Dining
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

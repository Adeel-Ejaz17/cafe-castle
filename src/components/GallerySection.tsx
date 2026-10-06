import React, { useState, useMemo } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/restaurantData';
import { ImageLightbox } from './ImageLightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#E9E0D3] text-[#24211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
              Visual Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2A211C] tracking-tight leading-none">
              The Gallery.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'exterior', label: 'Architecture & Patio' },
              { id: 'food', label: 'Food & Dining' },
              { id: 'coffee', label: 'Coffee & Drinks' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#2A211C] text-[#F6F1E8] shadow-sm'
                    : 'bg-white/60 text-[#716A61] hover:bg-white hover:text-[#2A211C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-[#2A211C] ${
                  isFeatured ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Scrim overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Expand Indicator icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-[#F6F1E8] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-[#F6F1E8]">
                  <span className="text-[11px] uppercase tracking-widest text-[#B58A52] font-semibold block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug text-[#F6F1E8]">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#F6F1E8]/70 mt-1 line-clamp-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-[#716A61]">
          Click any image to view in full-screen lightbox • High-resolution captures of Coffee Castle Taxila
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  );
};

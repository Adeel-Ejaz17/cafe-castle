import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../data/restaurantData';

interface ImageLightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onSelectPhoto(photos[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onSelectPhoto(photos[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, photos, onClose, onSelectPhoto]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar with counter & close */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#F6F1E8] z-20">
        <span className="text-xs uppercase tracking-widest text-[#B58A52] font-semibold tabular-nums">
          Photo {currentIndex + 1} of {photos.length}
        </span>
        <button
          onClick={onClose}
          type="button"
          className="p-2 text-[#F6F1E8] hover:text-[#B58A52] transition-colors rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Close Lightbox (ESC)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#F6F1E8] hover:text-[#B58A52] bg-black/40 hover:bg-black/70 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Previous Image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#F6F1E8] hover:text-[#B58A52] bg-black/40 hover:bg-black/70 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Next Image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div
        className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[72vh] w-auto overflow-hidden rounded-lg shadow-2xl">
          <img
            src={photo.src}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-serif text-lg sm:text-xl font-normal text-[#F6F1E8]">
            {photo.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#F6F1E8]/70 mt-1">
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

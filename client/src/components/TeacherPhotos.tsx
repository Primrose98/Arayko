import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  animation?: string;
}

interface TeacherPhotosProps {
  photos: Photo[];
  className?: string;
}

export function TeacherPhotos({ photos, className }: TeacherPhotosProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveIndex(null);
    }
    if (activeIndex !== null) {
      window.addEventListener('keydown', onKeyDown);
      // Prevent background scroll when lightbox is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeIndex]);

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12", className)}>
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className={cn(
              "photo-frame group relative overflow-hidden rounded-xl shadow-lg cursor-zoom-in",
              photo.animation || "animate-float-up-down",
              photo.className
            )}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: index % 2 === 0 ? '6s' : '8s'
            }}
            onClick={() => setActiveIndex(index)}
            role="button"
            aria-label="Open image"
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              fetchpriority="low"
            />
            {photo.caption && (
              <div className="photo-caption">
                <p className="text-sm font-medium">{photo.caption}</p>
              </div>
            )}
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={() => setActiveIndex(null)}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <button 
              className="px-3 py-2 sm:px-3 sm:py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition text-lg sm:text-base"
              onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className="max-h-[88vh] sm:max-h-[90vh] max-w-[96vw] sm:max-w-[95vw] w-auto h-auto object-contain rounded-md sm:rounded-lg shadow-xl"
            />
            {photos[activeIndex].caption && (
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-white/90 px-3 sm:px-4">
                <span className="text-sm">{photos[activeIndex].caption}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Default export with sample photos (to be replaced with actual photos)
const defaultPhotos: Photo[] = [
  {
    src: '/placeholder-teacher-1.jpg',
    alt: 'Ma\'am Larisa teaching class',
    caption: 'Inspiring the next generation',
    className: 'row-span-2',
    animation: 'animate-float-up-down'
  },
  {
    src: '/placeholder-teacher-2.jpg',
    alt: 'Ma\'am Larisa with students',
    caption: 'Mentoring students',
    className: 'md:col-span-2',
    animation: 'animate-slide-left'
  },
  {
    src: '/placeholder-teacher-3.jpg',
    alt: 'Ma\'am Larisa at work',
    caption: 'Dedicated to education',
    className: 'md:row-span-2',
    animation: 'animate-rotate-slow'
  },
  {
    src: '/placeholder-teacher-4.jpg',
    alt: 'Classroom moments',
    caption: 'Creating engaging lessons',
    className: 'lg:col-span-2',
    animation: 'animate-slide-right'
  },
];

// Export default with sample photos
export default function DefaultTeacherPhotos() {
  return <TeacherPhotos photos={defaultPhotos} />;
}

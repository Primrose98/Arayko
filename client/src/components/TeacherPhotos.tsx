import React from 'react';
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
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12", className)}>
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className={cn(
            "photo-frame group relative overflow-hidden rounded-xl shadow-lg",
            photo.animation || "animate-float-up-down",
            photo.className
          )}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: index % 2 === 0 ? '6s' : '8s'
          }}
        >
          <img 
            src={photo.src} 
            alt={photo.alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
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

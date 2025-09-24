import React from 'react';
import { cn } from '@/lib/utils';
import { TeacherPhotos } from './TeacherPhotos';

type Photo = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  animation?: string;
};

export function MemoriesSection() {
  const memories: Photo[] = [
    {
      src: '/images/IMG_8008.JPG',
      alt: 'Ma\'am Larisa teaching class',
      caption: 'Inspiring the next generation',
      className: 'row-span-2',
      animation: 'animate-float-up-down'
    },
    {
      src: '/images/IMG_8019.JPG',
      alt: 'Classroom moments',
      caption: 'Engaging classroom activities',
      className: 'md:col-span-2',
      animation: 'animate-slide-left'
    },
    {
      src: '/images/IMG_9349.JPG',
      alt: 'Ma\'am Larisa at work',
      caption: 'Dedicated to education',
      className: 'md:row-span-2',
      animation: 'animate-rotate-slow'
    },
    {
      src: '/images/d14f21fb982ffcb27f413758d77e6a61.jpeg',
      alt: 'Ma\'am Larisa with students',
      caption: 'Creating lasting memories',
      className: 'lg:col-span-2',
      animation: 'animate-slide-right'
    },
    {
      src: '/images/einstein (Facebook Cover).zip - 1.png',
      alt: 'Special moments',
      caption: 'Celebrating achievements',
      className: 'row-span-2',
      animation: 'animate-float-up-down'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            OUR MOMENTS TOGETHER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing the special moments with Ma'am Larisa that we'll always treasure
          </p>
        </div>
        
        <TeacherPhotos photos={memories} />
      </div>
    </section>
  );
}

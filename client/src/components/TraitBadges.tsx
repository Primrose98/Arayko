import React from 'react';
import { Heart, Sparkles, Star, Award, Smile, Zap, AwardIcon, Sparkle } from 'lucide-react';

type TraitBadgesProps = {
  traits: string[]
  className?: string
}

const traitIcons = [
  <Heart key="heart" className="w-4 h-4" />,
  <Sparkles key="sparkles" className="w-4 h-4" />,
  <Star key="star" className="w-4 h-4" />,
  <Award key="award" className="w-4 h-4" />,
  <Smile key="smile" className="w-4 h-4" />,
  <Zap key="zap" className="w-4 h-4" />,
  <AwardIcon key="award2" className="w-4 h-4" />,
  <Sparkle key="sparkle" className="w-4 h-4" />
];

const colors = [
  'bg-pink-100 text-pink-800 border-pink-200',
  'bg-blue-100 text-blue-800 border-blue-200',
  'bg-purple-100 text-purple-800 border-purple-200',
  'bg-amber-100 text-amber-800 border-amber-200',
  'bg-rose-100 text-rose-800 border-rose-200',
  'bg-sky-100 text-sky-800 border-sky-200',
  'bg-emerald-100 text-emerald-800 border-emerald-200',
  'bg-violet-100 text-violet-800 border-violet-200'
];

export function TraitBadges({ traits, className }: TraitBadgesProps) {
  if (!traits || traits.length === 0) return null;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center mb-10">
          <span className="px-6 py-2 bg-white text-2xl font-script text-primary shadow-lg rounded-full border border-primary/20">
            Traits We Love About You
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {traits.map((trait, index) => {
          const colorIndex = index % colors.length;
          const iconIndex = index % traitIcons.length;
          
          return (
            <div 
              key={trait}
              className={`relative p-4 rounded-xl border-2 ${colors[colorIndex]} transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-start space-x-2`}
            >
              <div className="mt-0.5">
                {React.cloneElement(traitIcons[iconIndex], {
                  className: `${colors[colorIndex].replace('text-', 'text-').split(' ')[0].replace('800', '600')} w-5 h-5`
                })}
              </div>
              <span className="font-medium">{trait}</span>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                <div className={`w-2 h-2 rounded-full ${colors[colorIndex].split(' ')[0].replace('bg-', 'bg-').replace('100', '500')}`}></div>
              </div>
              
              {/* Animated sparkle effect */}
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-white/80 animate-ping opacity-75"></div>
            </div>
          );
        })}
      </div>
      
      {/* Decorative elements */}
      <div className="mt-12 relative
        before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent">
        <div className="absolute -top-6 left-1/4 w-4 h-4 rounded-full bg-pink-300/80 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute -top-6 left-1/2 w-3 h-3 rounded-full bg-blue-300/80 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute -top-6 right-1/4 w-4 h-4 rounded-full bg-purple-300/80 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground italic">
          You make a difference every day with your kindness and dedication.
        </p>
      </div>
    </div>
  );
}

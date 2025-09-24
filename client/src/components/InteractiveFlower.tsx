import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveFlowerProps {
  Icon: LucideIcon;
  quote: string;
  color: string;
  delay?: string;
  name: string;
}

export function InteractiveFlower({ Icon, quote, color, delay = "0s", name }: InteractiveFlowerProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleQuote = () => {
    setIsRevealed(!isRevealed);
  };

  // Add continuous rotation effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center group">
      <button
        onClick={toggleQuote}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "text-6xl transition-all duration-700 ease-in-out",
          color,
          "hover:scale-110 transform rotate-slow",
          isHovered ? "paused" : "running"
        )}
        style={{ animationDelay: delay }}
        data-testid={`button-icon-${name.toLowerCase()}`}
      >
        <Icon className="w-16 h-16 mx-auto" />
      </button>
      <div
        className={`mt-4 text-lg font-medium text-foreground bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg transition-all duration-500 ${
          isRevealed 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-5'
        }`}
        data-testid={`text-quote-${name.toLowerCase()}`}
      >
        {quote}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

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

  return (
    <div className="text-center group">
      <button
        onClick={toggleQuote}
        className={`text-6xl ${color} hover:scale-110 transition-all duration-300 transform float-animation`}
        style={{ animationDelay: delay }}
        data-testid={`button-flower-${name.toLowerCase()}`}
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
        {isRevealed && quote}
      </div>
    </div>
  );
}

import { Heart, Leaf, Star, Sparkles } from 'lucide-react';

const particles = [
  { 
    Icon: Heart, 
    className: "top-1/4 left-1/4 w-4 h-4 text-primary", 
    style: { animationDelay: "0s" } 
  },
  { 
    Icon: Leaf, 
    className: "top-1/3 right-1/3 w-3 h-3 text-secondary", 
    style: { animationDelay: "3s" } 
  },
  { 
    Icon: Star, 
    className: "top-1/2 left-1/6 w-4 h-4 text-accent", 
    style: { animationDelay: "6s" } 
  },
  { 
    Icon: Sparkles, 
    className: "top-3/4 left-1/2 w-4 h-4 text-secondary", 
    style: { animationDelay: "12s" } 
  },
];

const stars = [
  { 
    className: "top-1/6 right-1/6 w-2 h-2 text-accent", 
    style: { animationDelay: "1s" } 
  },
  { 
    className: "top-1/5 left-1/8 w-2 h-2 text-secondary", 
    style: { animationDelay: "2s" } 
  },
  { 
    className: "top-4/5 right-1/8 w-2 h-2 text-primary", 
    style: { animationDelay: "4s" } 
  },
];

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Petals */}
      {particles.map((particle, index) => (
        <div
          key={`particle-${index}`}
          className={`absolute ${particle.className} drift-animation`}
          style={particle.style}
        >
          <particle.Icon className="w-full h-full" />
        </div>
      ))}

      {/* Twinkling Stars */}
      {stars.map((star, index) => (
        <div
          key={`star-${index}`}
          className={`absolute ${star.className} twinkle-animation`}
          style={star.style}
        >
          <Star className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}

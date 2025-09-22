import { useEffect, useState } from 'react';
import { FloatingParticles } from '@/components/FloatingParticles';
import { MusicPlayer } from '@/components/MusicPlayer';
import { InteractiveFlower } from '@/components/InteractiveFlower';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { 
  Flower, 
  Flower2, 
  Heart, 
  Leaf, 
  Sparkles, 
  Sprout 
} from 'lucide-react';

const quotes = [
  "A teacher takes a hand, opens a mind, and touches a heart.",
  "Teaching is the profession that creates all other professions.",
  "The influence of a good teacher can never be erased."
];

const studentMessages = [
  { name: "Sarah M.", message: "You make learning fun and exciting!" },
  { name: "Michael R.", message: "Thank you for believing in me." },
  { name: "Emma L.", message: "You're the best teacher ever!" },
  { name: "David K.", message: "Your patience means everything to us." },
];

export default function Home() {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const { targetRef: appreciationRef, hasIntersected: appreciationVisible } = useIntersectionObserver();
  const { targetRef: interactiveRef, hasIntersected: interactiveVisible } = useIntersectionObserver();
  const { targetRef: notesRef, hasIntersected: notesVisible } = useIntersectionObserver();
  const { targetRef: closingRef, hasIntersected: closingVisible } = useIntersectionObserver();

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <FloatingParticles />
      <MusicPlayer />

      {/* Welcome Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          {/* Blooming Flowers Animation */}
          <div className="relative mb-12">
            <div 
              className="absolute -top-12 -left-12 text-6xl text-primary bloom-animation" 
              style={{ animationDelay: "0.5s" }}
            >
              <Flower className="w-16 h-16" />
            </div>
            <div 
              className="absolute -top-8 -right-16 text-5xl text-secondary bloom-animation" 
              style={{ animationDelay: "1s" }}
            >
              <Flower2 className="w-14 h-14" />
            </div>
            <div 
              className="absolute -bottom-8 -left-8 text-4xl text-accent bloom-animation" 
              style={{ animationDelay: "1.5s" }}
            >
              <Flower className="w-12 h-12" />
            </div>
            <div 
              className="absolute -bottom-12 -right-8 text-5xl text-primary bloom-animation" 
              style={{ animationDelay: "2s" }}
            >
              <Sprout className="w-14 h-14" />
            </div>
            
            {/* Central Flower Bouquet */}
            <div 
              className="text-8xl text-primary bloom-animation" 
              style={{ animationDelay: "2.5s" }}
            >
              <Sparkles className="w-24 h-24 mx-auto" />
            </div>
          </div>

          {/* Welcome Message */}
          <div 
            className={`section-transition ${welcomeVisible ? 'visible' : ''}`}
            data-testid="section-welcome"
          >
            <h1 className="text-6xl md:text-8xl font-script font-bold text-primary mb-6 float-animation">
              Happy Teacher's Day!
            </h1>
            <p 
              className="text-2xl md:text-3xl font-script text-primary-foreground float-animation" 
              style={{ animationDelay: "0.5s" }}
              data-testid="text-teacher-name"
            >
              To Mrs. Johnson
            </p>
          </div>
        </div>
      </section>

      {/* Appreciation Section */}
      <section 
        ref={appreciationRef}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`section-transition ${appreciationVisible ? 'visible' : ''}`}
            data-testid="section-appreciation"
          >
            <div className="mb-12">
              <h2 
                className="text-4xl md:text-5xl font-script text-primary mb-8 typewriter-animation"
                data-testid="text-main-message"
              >
                Thank you for your patience, wisdom, and kindness.
              </h2>
              <p 
                className="text-2xl md:text-3xl text-foreground mb-8 fade-in-up" 
                style={{ animationDelay: "4s" }}
                data-testid="text-sub-message"
              >
                You inspire us to be better every day.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border shadow-xl">
              <p 
                className="text-xl md:text-2xl font-script text-card-foreground italic mb-6 fade-in-up" 
                style={{ animationDelay: "6s" }}
                data-testid="text-metaphor"
              >
                "Like flowers bloom under sunlight, we grow under your guidance."
              </p>
              <p 
                className="text-lg text-muted-foreground fade-in-up" 
                style={{ animationDelay: "8s" }}
                data-testid="text-signature"
              >
                With gratitude, from Class 5A
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section 
        ref={interactiveRef}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`section-transition ${interactiveVisible ? 'visible' : ''}`}
            data-testid="section-interactive"
          >
            <h3 className="text-3xl font-script text-primary text-center mb-12">
              Click the flowers to discover something special
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InteractiveFlower
                Icon={Flower2}
                quote={quotes[0]}
                color="text-primary hover:text-primary-foreground"
                delay="0s"
                name="flower2"
              />
              <InteractiveFlower
                Icon={Flower}
                quote={quotes[1]}
                color="text-secondary hover:text-secondary-foreground"
                delay="1s"
                name="flower"
              />
              <InteractiveFlower
                Icon={Sparkles}
                quote={quotes[2]}
                color="text-accent hover:text-accent-foreground"
                delay="2s"
                name="sparkles"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class Notes Section */}
      <section 
        ref={notesRef}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className={`section-transition ${notesVisible ? 'visible' : ''}`}
            data-testid="section-notes"
          >
            <h3 className="text-4xl font-script text-primary text-center mb-12">
              Messages from Your Students
            </h3>

            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentMessages.map((student, index) => (
                  <div 
                    key={student.name}
                    className="bg-background/60 rounded-lg p-4 border border-border"
                    data-testid={`card-student-${index}`}
                  >
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {student.name}
                    </p>
                    <p className="text-foreground">"{student.message}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section 
        ref={closingRef}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`section-transition ${closingVisible ? 'visible' : ''}`}
            data-testid="section-closing"
          >
            {/* Final Flower Garden */}
            <div className="relative mb-12">
              <div 
                className="text-4xl text-primary float-animation absolute -top-8 -left-8" 
                style={{ animationDelay: "0.5s" }}
              >
                <Leaf className="w-10 h-10" />
              </div>
              <div 
                className="text-5xl text-secondary float-animation absolute -top-4 -right-12" 
                style={{ animationDelay: "1s" }}
              >
                <Flower2 className="w-12 h-12" />
              </div>
              <div 
                className="text-6xl text-accent float-animation absolute -bottom-4 -left-12" 
                style={{ animationDelay: "1.5s" }}
              >
                <Flower className="w-14 h-14" />
              </div>
              <div 
                className="text-4xl text-primary float-animation absolute -bottom-8 -right-8" 
                style={{ animationDelay: "2s" }}
              >
                <Sprout className="w-10 h-10" />
              </div>
              
              <div className="text-8xl text-primary float-animation">
                <Heart className="w-24 h-24 mx-auto" />
              </div>
            </div>

            <h2 
              className="text-5xl md:text-6xl font-script text-primary mb-8 fade-in-up" 
              style={{ animationDelay: "1s" }}
              data-testid="text-final-message"
            >
              We are forever grateful for you.
            </h2>

            <div 
              className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl fade-in-up" 
              style={{ animationDelay: "3s" }}
            >
              <p className="text-xl md:text-2xl text-foreground mb-6">
                Your dedication shapes our future, and your kindness touches our hearts.
              </p>
              <p className="text-lg text-muted-foreground font-script">
                Happy Teacher's Day, Mrs. Johnson! 🌸
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

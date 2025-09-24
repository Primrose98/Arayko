import { useEffect, useMemo, useState } from 'react';
import { FloatingParticles } from '@/components/FloatingParticles';
import { MusicPlayer } from '@/components/MusicPlayer';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { ParallaxGarden } from '@/components/ParallaxGarden';
import { ElegantCTA } from '@/components/ElegantCTA';
import { InteractiveFlower } from '@/components/InteractiveFlower';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { RotatingText } from '@/components/RotatingText';
import { TraitBadges } from '@/components/TraitBadges';
import { SectionDivider } from '@/components/SectionDivider';
import { defaultContent } from '@/shared/content';
// import { PhotoFrame } from '@/components/PhotoFrame';
import { NotesRibbon } from '@/components/NotesRibbon';
import { StickyNote } from '@/components/StickyNote';
import { FlourishBorder } from '@/components/FlourishBorder';
import { 
  Flower, 
  Flower2, 
  Heart, 
  Leaf, 
  Sparkles, 
  Sprout 
} from 'lucide-react';

// Use static content file
const initialContent = defaultContent;

export default function Home() {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [content] = useState(initialContent);
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

  // No customization: stick to static content

  return (
    <div className="min-h-screen theme-roses">
      <FloatingParticles />
      <FloatingOrbs />
      <MusicPlayer />

      {/* Welcome Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden p-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="greeting-container">
            {/* Decorative Elements */}
            <div className="absolute -top-16 -left-16 text-6xl text-primary gentle-float" style={{ animationDelay: '0.5s' }}>
              <Flower className="w-16 h-16" />
            </div>
            <div className="absolute -top-12 -right-20 text-5xl text-secondary gentle-float" style={{ animationDelay: '1s' }}>
              <Flower2 className="w-14 h-14" />
            </div>
            <div className="absolute bottom-20 -left-12 text-4xl text-accent gentle-float" style={{ animationDelay: '1.5s' }}>
              <Flower className="w-12 h-12" />
            </div>
            <div className="absolute -bottom-16 -right-12 text-5xl text-primary gentle-float" style={{ animationDelay: '2s' }}>
              <Sprout className="w-14 h-14" />
            </div>
            
            {/* Central Content */}
            <div 
              className={`section-transition ${welcomeVisible ? 'visible' : ''} relative z-10`}
              data-testid="section-welcome"
            >
              <div className="mb-8">
                <div className="text-5xl md:text-7xl font-script text-secondary mb-2">
                  Hello, Teacher!
                </div>
                <div className="w-24 h-1 bg-primary/30 mx-auto my-4 rounded-full"></div>
                <h1 className="text-6xl md:text-8xl font-script font-bold text-primary text-glow mb-6">
                  Happy Teacher's Day!
                </h1>
                <div className="w-16 h-1 bg-secondary/30 mx-auto my-4 rounded-full"></div>
                <div className="text-2xl md:text-3xl font-script text-foreground/80 mb-8">
                  Celebrating you today and always
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl max-w-2xl mx-auto">
                <p 
                  className="text-2xl md:text-3xl font-script text-foreground mb-6 subtle-pulse"
                  data-testid="text-teacher-name"
                >
                  To <span className="text-primary font-bold"><RotatingText items={[content.teacherName]} className="inline" /></span>
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Your dedication and passion light up our learning journey
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 flex justify-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-secondary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Our Appreciation" />

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
                <RotatingText items={content.quotes} intervalMs={5000} />
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
                With gratitude, from {content.className}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Photo section removed for now */}

      <SectionDivider label="Traits We Love" />

      {/* Traits badges to add visual density */}
      <section className="flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <TraitBadges traits={content.traits} className="mb-4" />
        </div>
      </section>

      <SectionDivider label="Interactive" />

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <InteractiveFlower
                Icon={Flower2}
                quote={content.quotes[0]}
                color="text-primary hover:text-primary-foreground"
                delay="0s"
                name="flower2"
              />
              <InteractiveFlower
                Icon={Flower}
                quote={content.quotes[1]}
                color="text-secondary hover:text-secondary-foreground"
                delay="1s"
                name="flower"
              />
              <InteractiveFlower
                Icon={Sparkles}
                quote={content.quotes[2]}
                color="text-accent hover:text-accent-foreground"
                delay="2s"
                name="sparkles"
              />
            </div>
            <ParallaxGarden className="mt-2" />
          </div>
        </div>
      </section>

      <SectionDivider label="Messages" />

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

            {/* Scrolling ribbon preview */}
            <div className="mb-8">
              <NotesRibbon messages={content.messages} />
            </div>

            <FlourishBorder className="p-8" tone="accent">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.messages.map((student, index) => (
                  <StickyNote
                    key={student.name}
                    author={student.name}
                    message={student.message}
                    color={["yellow","pink","mint","lavender"][index % 4] as any}
                    tilt={(index % 2 === 0 ? 'left' : 'right') as any}
                    className="min-h-32"
                  />
                ))}
              </div>
            </FlourishBorder>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex items-center justify-center px-6 relative">
        <div className="max-w-3xl mx-auto w-full">
          <ElegantCTA />
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

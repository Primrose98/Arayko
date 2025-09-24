import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

type ElegantCTAProps = {
  onPrimary?: () => void
  onSecondary?: () => void
}

export function ElegantCTA({ onPrimary, onSecondary }: ElegantCTAProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-8 shadow-xl">
      <div className="absolute -inset-40 opacity-40 blur-3xl" style={{ background: 'radial-gradient(60% 60% at 30% 30%, hsl(330 80% 80% / 0.5), transparent 60%)' }} />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-primary twinkle-animation" />
          <h3 className="text-2xl md:text-3xl font-script text-primary">With heartfelt gratitude</h3>
        </div>
        <p className="text-muted-foreground text-center max-w-prose">
          May your days continue to bloom with joy and inspiration. Thank you for guiding us with patience and kindness.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={onPrimary}>View Dedication</Button>
          <Button variant="outline" onClick={onSecondary}>Share This</Button>
        </div>
      </div>
    </div>
  )
}



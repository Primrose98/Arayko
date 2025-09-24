import { useEffect, useRef } from 'react'
import { Flower, Flower2, Leaf, Sprout } from 'lucide-react'

type ParallaxGardenProps = {
  className?: string
}

export function ParallaxGarden({ className }: ParallaxGardenProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width - 0.5
      const cy = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--parallax-x', String(cx * 10))
      el.style.setProperty('--parallax-y', String(cy * 10))
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ perspective: 600 as any }}>
      <div className="relative h-56 md:h-72 rounded-xl overflow-hidden border border-border bg-card/70 backdrop-blur">
        <div className="absolute inset-0" style={{ transform: 'translate3d(calc(var(--parallax-x,0)*1px), calc(var(--parallax-y,0)*1px), 0)' }}>
          <Leaf className="absolute left-6 top-6 w-8 h-8 text-primary float-animation" />
          <Flower2 className="absolute right-10 top-10 w-10 h-10 text-secondary float-animation" style={{ animationDelay: '0.6s' }} />
          <Flower className="absolute left-20 bottom-8 w-12 h-12 text-accent float-animation" style={{ animationDelay: '1.2s' }} />
          <Sprout className="absolute right-20 bottom-6 w-8 h-8 text-primary float-animation" style={{ animationDelay: '1.8s' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/0 via-background/20 to-background/0" />
      </div>
    </div>
  )
}



import { cn } from '@/lib/utils'

type FloatingOrbsProps = {
  className?: string
}

export function FloatingOrbs({ className }: FloatingOrbsProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="orb orb-animate" style={{ top: '10%', left: '10%', width: 220, height: 220, background: 'radial-gradient(circle at 30% 30%, hsl(330 80% 70%), transparent 60%)' }} />
      <div className="orb orb-animate" style={{ top: '60%', left: '5%', width: 260, height: 260, background: 'radial-gradient(circle at 30% 30%, hsl(200 80% 70%), transparent 60%)', animationDelay: '1s' }} />
      <div className="orb orb-animate" style={{ top: '20%', right: '10%', width: 240, height: 240, background: 'radial-gradient(circle at 30% 30%, hsl(45 90% 70%), transparent 60%)', animationDelay: '2s' }} />
      <div className="orb orb-animate" style={{ bottom: '10%', right: '15%', width: 300, height: 300, background: 'radial-gradient(circle at 30% 30%, hsl(280 70% 70%), transparent 60%)', animationDelay: '3s' }} />
    </div>
  )
}



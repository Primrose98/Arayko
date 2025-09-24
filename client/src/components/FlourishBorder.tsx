import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type FlourishBorderProps = PropsWithChildren<{
  className?: string
  tone?: 'primary' | 'accent' | 'muted'
}>

export function FlourishBorder({ children, className, tone = 'primary' }: FlourishBorderProps) {
  const toneClass =
    tone === 'primary' ? 'flourish-primary' : tone === 'accent' ? 'flourish-accent' : 'flourish-muted'

  return (
    <div className={cn('flourish-border relative rounded-xl border border-border bg-card/80 shadow-xl', toneClass, className)}>
      <div aria-hidden className="flourish-top" />
      <div aria-hidden className="flourish-bottom" />
      {children}
    </div>
  )
}



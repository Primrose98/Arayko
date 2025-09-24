import { cn } from '@/lib/utils'

type SectionDividerProps = {
  label?: string
  className?: string
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn('flex items-center gap-4 my-16 opacity-80', className)}>
      <div className="h-px flex-1 bg-border" />
      {label ? (
        <span className="text-sm uppercase tracking-wider text-muted-foreground">{label}</span>
      ) : null}
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}



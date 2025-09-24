type TraitBadgesProps = {
  traits: string[]
  className?: string
}

export function TraitBadges({ traits, className }: TraitBadgesProps) {
  if (!traits || traits.length === 0) return null
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 justify-center">
        {traits.map((trait) => (
          <span
            key={trait}
            className="px-3 py-1 rounded-full border border-border bg-card/70 text-sm text-card-foreground shadow-sm"
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  )
}



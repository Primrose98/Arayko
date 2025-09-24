import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export type FlowerTheme =
  | 'roses'
  | 'sunflowers'
  | 'cherry'
  | 'lavender'
  | 'mint'
  | 'ocean'
  | 'sunset'

type ThemeSwitcherProps = {
  value: FlowerTheme
  onChange: (t: FlowerTheme) => void
}

export function ThemeSwitcher({ value, onChange }: ThemeSwitcherProps) {
  const themes: FlowerTheme[] = [
    'roses',
    'sunflowers',
    'cherry',
    'lavender',
    'mint',
    'ocean',
    'sunset',
  ]
  return (
    <div className="flex flex-wrap items-center gap-2">
      {themes.map((t) => (
        <Button
          key={t}
          size="sm"
          variant={t === value ? 'default' : 'outline'}
          onClick={() => onChange(t)}
        >
          {t}
        </Button>
      ))}
    </div>
  )
}




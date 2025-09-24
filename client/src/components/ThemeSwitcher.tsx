import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export type FlowerTheme = 'roses' | 'sunflowers' | 'cherry'

type ThemeSwitcherProps = {
  value: FlowerTheme
  onChange: (t: FlowerTheme) => void
}

export function ThemeSwitcher({ value, onChange }: ThemeSwitcherProps) {
  const themes: FlowerTheme[] = ['roses', 'sunflowers', 'cherry']
  return (
    <div className="flex items-center gap-2">
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




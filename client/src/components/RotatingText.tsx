import { useEffect, useRef, useState } from 'react'
import { cycleIndex } from '@/lib/utils'

type RotatingTextProps = {
  items: string[]
  intervalMs?: number
  className?: string
  testId?: string
}

export function RotatingText({ items, intervalMs = 4000, className, testId }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!items || items.length === 0) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => cycleIndex(i, items.length))
      setFadeKey((k) => k + 1)
    }, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [items, intervalMs])

  const text = items.length > 0 ? items[index] : ''

  return (
    <span className={`${className ?? ''} inline-block`} data-testid={testId}>
      <span key={fadeKey} className="fade-cycle-item inline-block">{text}</span>
    </span>
  )
}



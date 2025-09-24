import { useEffect, useMemo, useRef, useState } from 'react'

type NotesRibbonProps = {
  messages: { name: string; message: string }[]
}

export function NotesRibbon({ messages }: NotesRibbonProps) {
  // Fade between slices of messages instead of infinite marquee
  const groupSize = 6
  const groups = useMemo(() => {
    const result: typeof messages[] = []
    for (let i = 0; i < messages.length; i += groupSize) {
      result.push(messages.slice(i, i + groupSize))
    }
    return result.length > 0 ? result : [messages]
  }, [messages])

  const [groupIndex, setGroupIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setGroupIndex((i) => (i + 1) % groups.length)
    }, 6000)
    return () => { if (timerRef.current) window.clearInterval(timerRef.current) }
  }, [groups.length])

  const current = groups[groupIndex]

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 fade-cycle-item">
        {current.map((m, i) => (
          <span
            key={`${m.name}-${i}`}
            className="inline-flex items-center px-3 py-1 rounded-full bg-background/70 border border-border text-sm"
          >
            <span className="text-muted-foreground mr-2">{m.name}:</span>
            <span className="text-foreground">“{m.message}”</span>
          </span>
        ))}
      </div>
    </div>
  )
}




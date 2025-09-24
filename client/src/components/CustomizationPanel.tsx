import { useEffect, useMemo, useState } from 'react'
import { defaultContent, type TeacherContent } from '@/shared/content'
import { loadFromStorage, saveToStorage } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type CustomizationPanelProps = {
  value: TeacherContent
  onChange: (next: TeacherContent) => void
}

const STORAGE_KEY = 'newsensei:content'

export function useContentPersistence(initial: TeacherContent) {
  const [content, setContent] = useState<TeacherContent>(
    loadFromStorage<TeacherContent>(STORAGE_KEY, initial),
  )
  useEffect(() => {
    saveToStorage(STORAGE_KEY, content)
  }, [content])
  return [content, setContent] as const
}

export function CustomizationPanel({ value, onChange }: CustomizationPanelProps) {
  const [teacherName, setTeacherName] = useState(value.teacherName)
  const [className, setClassName] = useState(value.className)
  const [traitsText, setTraitsText] = useState(value.traits.join(', '))
  const [quotesText, setQuotesText] = useState(value.quotes.join('\n'))
  const [messagesText, setMessagesText] = useState(
    value.messages.map((m) => `${m.name}: ${m.message}`).join('\n'),
  )

  useEffect(() => {
    setTeacherName(value.teacherName)
    setClassName(value.className)
    setTraitsText(value.traits.join(', '))
    setQuotesText(value.quotes.join('\n'))
    setMessagesText(value.messages.map((m) => `${m.name}: ${m.message}`).join('\n'))
  }, [value])

  const parseTraits = (text: string) =>
    text
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

  const parseQuotes = (text: string) =>
    text
      .split(/\n+/)
      .map((q) => q.trim())
      .filter(Boolean)

  const parseMessages = (text: string) =>
    text
      .split(/\n+/)
      .map((line) => {
        const [name, ...rest] = line.split(':')
        const message = rest.join(':').trim()
        return name && message ? { name: name.trim(), message } : null
      })
      .filter((v): v is { name: string; message: string } => Boolean(v))

  const apply = () => {
    onChange({
      teacherName,
      className,
      traits: parseTraits(traitsText),
      quotes: parseQuotes(quotesText),
      messages: parseMessages(messagesText),
    })
  }

  const reset = () => {
    onChange(defaultContent)
  }

  return (
    <Card className="bg-card/80 border-border">
      <CardHeader>
        <CardTitle className="text-lg">Customize</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Teacher Name</label>
            <Input value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Class</label>
            <Input value={className} onChange={(e) => setClassName(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Traits (comma separated)</label>
          <Input value={traitsText} onChange={(e) => setTraitsText(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Quotes (one per line)</label>
          <Textarea rows={4} value={quotesText} onChange={(e) => setQuotesText(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Messages (format: Name: message, one per line)</label>
          <Textarea rows={6} value={messagesText} onChange={(e) => setMessagesText(e.target.value)} />
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={reset}>Reset</Button>
          <Button onClick={apply}>Apply</Button>
        </div>
      </CardContent>
    </Card>
  )
}




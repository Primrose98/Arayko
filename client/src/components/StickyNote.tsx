import { cn } from '@/lib/utils'

type StickyNoteProps = {
  author: string
  message: string
  color?: 'yellow' | 'pink' | 'mint' | 'lavender'
  tilt?: 'left' | 'right' | 'none'
  className?: string
}

export function StickyNote({ author, message, color = 'yellow', tilt = 'none', className }: StickyNoteProps) {
  const colorClass =
    color === 'yellow' ? 'note-yellow' :
    color === 'pink' ? 'note-pink' :
    color === 'mint' ? 'note-mint' : 'note-lavender'

  const tiltClass = tilt === 'left' ? '-rotate-2' : tilt === 'right' ? 'rotate-2' : ''

  return (
    <div className={cn('sticky-note', colorClass, tiltClass, className)}>
      <div className="pin" />
      <div className="content">
        <p className="author">{author}</p>
        <p className="message">“{message}”</p>
      </div>
      <div className="corner" />
    </div>
  )
}



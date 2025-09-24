import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type PhotoFrameProps = {
  title?: string
  className?: string
}

export function PhotoFrame({ title = 'Our Teacher', className }: PhotoFrameProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onPick = () => inputRef.current?.click()

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImageUrl(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="mx-auto max-w-md">
        <div className="relative rounded-[1.75rem] border border-border bg-card/70 shadow-xl p-3">
          <div className="rounded-[1.25rem] overflow-hidden bg-background aspect-[4/5] flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            ) : (
              <button
                onClick={onPick}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                data-testid="photoframe-upload-button"
              >
                Click to upload a photo
              </button>
            )}
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background border border-border text-xs text-muted-foreground">
            {title}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onPick}
            className="px-4 py-2 rounded-lg border border-border bg-card/70 text-sm hover:bg-card transition-colors"
          >
            {imageUrl ? 'Change Photo' : 'Upload Photo'}
          </button>
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onChange} />
      </div>
    </div>
  )
}




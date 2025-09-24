import { useMemo, useRef } from 'react'
import { encodeState } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type QRShareProps = {
  baseUrl?: string
  payload: unknown
}

export function QRShare({ baseUrl = window.location.origin, payload }: QRShareProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const url = useMemo(() => {
    const s = encodeState(payload)
    return `${baseUrl}/?s=${s}`
  }, [baseUrl, payload])

  // Lightweight QR generator (qrcode algorithm simplified would be large). Use Image API from QR server.
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {}
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <img src={qrSrc} alt="Share QR" className="rounded-lg border border-border bg-background" width={220} height={220} />
      <div className="text-xs text-muted-foreground break-all max-w-[260px]">{url}</div>
      <Button size="sm" variant="outline" onClick={copy}>Copy Link</Button>
    </div>
  )
}




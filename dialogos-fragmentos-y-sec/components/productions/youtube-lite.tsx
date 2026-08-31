'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

/**
 * Lightweight YouTube facade: shows the thumbnail until the user opts in,
 * then swaps to the real iframe. Avoids loading the heavy YT player upfront.
 */
export function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-ink"
      aria-label={`Reproducir: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
      <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
        <Play className="size-7 translate-x-0.5 fill-current" />
      </span>
    </button>
  )
}

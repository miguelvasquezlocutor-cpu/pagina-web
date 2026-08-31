'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { bookMeta, bookSections } from '@/lib/book'
import { cn } from '@/lib/utils'

/**
 * Digital-book experience: a cover + turnable content spreads.
 * Page 0 = cover; subsequent pages map to table-of-contents sections.
 */
export function BookReader() {
  const totalPages = bookSections.length + 1 // cover + sections
  const [page, setPage] = useState(0)
  const [turning, setTurning] = useState<'next' | 'prev' | null>(null)

  const go = (dir: 'next' | 'prev') => {
    setPage((p) => {
      const next = dir === 'next' ? Math.min(p + 1, totalPages - 1) : Math.max(p - 1, 0)
      if (next !== p) {
        setTurning(dir)
        setTimeout(() => setTurning(null), 450)
      }
      return next
    })
  }

  const isCover = page === 0
  const section = isCover ? null : bookSections[page - 1]

  return (
    <div className="flex flex-col items-center">
      {/* Book stage */}
      <div className="relative w-full max-w-3xl [perspective:2000px]">
        <div
          className={cn(
            'relative aspect-[3/4] w-full overflow-hidden rounded-r-2xl rounded-l-md shadow-2xl transition-transform duration-500 sm:aspect-[4/3]',
            turning === 'next' && 'origin-left [transform:rotateY(-6deg)]',
            turning === 'prev' && 'origin-right [transform:rotateY(6deg)]',
          )}
        >
          {isCover ? <Cover /> : <SpreadPage index={page} />}

          {/* spine shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-ink/25 to-transparent"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go('prev')}
          disabled={page === 0}
          className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-opacity disabled:opacity-40"
          aria-label="Página anterior"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Ir a sección">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={i === 0 ? 'Portada' : `Sección ${i}`}
              onClick={() => setPage(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                i === page ? 'w-7 bg-blue' : 'w-2 bg-border hover:bg-blue/50',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go('next')}
          disabled={page === totalPages - 1}
          className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-opacity disabled:opacity-40"
          aria-label="Página siguiente"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        {isCover ? 'Portada' : `${section?.title} · ${page} de ${totalPages - 1}`}
      </p>
    </div>
  )
}

function Cover() {
  return (
    <div className="flex h-full flex-col justify-between bg-secondary p-8 text-secondary-foreground md:p-12">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/70">
        <BookOpen className="size-4" />
        {bookMeta.collection}
      </div>
      <div>
        <h2 className="font-serif text-4xl font-semibold leading-[1.02] text-balance md:text-5xl">
          {bookMeta.title}
        </h2>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-secondary-foreground/85">
          {bookMeta.subtitle}
        </p>
      </div>
      <div className="text-sm">
        <p className="font-semibold uppercase tracking-wide text-secondary-foreground/60">
          Coordinación
        </p>
        <p className="mt-1">{bookMeta.coordinators.join(' · ')}</p>
      </div>
    </div>
  )
}

function SpreadPage({ index }: { index: number }) {
  const section = bookSections[index - 1]
  return (
    <div className="flex h-full flex-col bg-card p-8 md:p-12">
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-5xl font-semibold text-primary">{section.number}</span>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            {section.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{section.subtitle}</p>
        </div>
      </div>

      <div className="mt-8 flex-1 border-t border-border pt-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">Contenido</p>
        <ul className="flex flex-col gap-3">
          {section.articles.map((a) => (
            <li key={a} className="flex items-start gap-3 text-sm leading-snug text-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
        {section.pending && (
          <p className="mt-6 rounded-xl bg-muted px-4 py-3 text-xs italic text-muted-foreground">
            Sección abierta: este contenido continúa creciendo con nuevas incursiones en el campo.
          </p>
        )}
      </div>
    </div>
  )
}

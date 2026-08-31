'use client'

import { useMemo, useState } from 'react'
import { Video, FileText, Presentation, Podcast, Link2, ScrollText, CalendarDays } from 'lucide-react'
import { activities, type Activity } from '@/lib/activities'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const kindIcon = {
  video: Video,
  pptx: Presentation,
  pdf: FileText,
  podcast: Podcast,
  link: Link2,
  acta: ScrollText,
} as const

export function ActivitiesTimeline() {
  const years = useMemo(() => {
    return Array.from(new Set(activities.map((a) => a.year))).sort((a, b) => a - b)
  }, [])
  const [filter, setFilter] = useState<'all' | 'realizado' | 'proximo'>('all')

  const list = activities.filter((a) => (filter === 'all' ? true : a.status === filter))

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
      {/* Filters */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {(
          [
            { key: 'all', label: 'Todas' },
            { key: 'realizado', label: 'Realizadas' },
            { key: 'proximo', label: 'Próximas' },
          ] as const
        ).map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              filter === f.key
                ? 'bg-blue text-background'
                : 'bg-muted text-muted-foreground hover:bg-secondary/20',
            )}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"
        />

        <ol className="space-y-10">
          {years.map((year) => {
            const yearItems = list.filter((a) => a.year === year)
            if (yearItems.length === 0) return null
            return (
              <li key={year}>
                <div className="mb-8 flex items-center gap-3 md:justify-center">
                  <span className="relative z-10 rounded-full bg-primary px-4 py-1.5 font-serif text-lg font-semibold text-primary-foreground">
                    {year}
                  </span>
                </div>
                <ul className="space-y-6">
                  {yearItems.map((a, i) => (
                    <TimelineCard key={a.id} activity={a} side={i % 2 === 0 ? 'left' : 'right'} />
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

function TimelineCard({ activity, side }: { activity: Activity; side: 'left' | 'right' }) {
  return (
    <Reveal
      as="li"
      className={cn(
        'relative pl-12 md:w-1/2 md:pl-0',
        side === 'left' ? 'md:pr-10 md:text-left' : 'md:ml-auto md:pl-10',
      )}
    >
      {/* node */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-4 top-6 z-10 size-3 -translate-x-1/2 rounded-full ring-4 ring-background',
          activity.status === 'proximo' ? 'bg-secondary' : 'bg-primary',
          side === 'left' ? 'md:left-full md:-translate-x-1/2' : 'md:left-0 md:-translate-x-1/2',
        )}
      />
      <article className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            <CalendarDays className="size-3.5" />
            {activity.date}
          </span>
          <span
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-semibold',
              activity.status === 'proximo'
                ? 'bg-secondary/20 text-blue'
                : 'bg-primary/25 text-foreground',
            )}
          >
            {activity.status === 'proximo' ? 'Próxima' : 'Realizada'}
          </span>
        </div>

        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-blue">{activity.type}</p>
        <h3 className="mt-1 font-serif text-xl font-semibold leading-snug text-foreground text-pretty">
          {activity.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-foreground/80">{activity.institution}</p>

        {activity.participants && (
          <p className="mt-2 text-sm text-muted-foreground">{activity.participants}</p>
        )}
        {activity.description && (
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {activity.description}
          </p>
        )}

        {activity.materials && activity.materials.length > 0 && (
          <div className="mt-4 border-t border-border pt-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Materiales
            </p>
            <ul className="flex flex-col gap-2">
              {activity.materials.map((m) => {
                const Icon = kindIcon[m.kind]
                return (
                  <li key={m.label}>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                      <Icon className="size-3.5 text-blue" />
                      {m.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </article>
    </Reveal>
  )
}

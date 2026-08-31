import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue',
        className,
      )}
    >
      <span className="h-px w-6 bg-blue" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-serif text-3xl font-semibold leading-[1.05] text-foreground text-balance sm:text-4xl md:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

/**
 * Interior page banner with organic shapes, matching the reference art direction.
 */
export function PageBanner({
  eyebrow,
  title,
  intro,
  tone = 'yellow',
}: {
  eyebrow: string
  title: string
  intro?: string
  tone?: 'yellow' | 'blue'
}) {
  const bg = tone === 'yellow' ? 'bg-primary' : 'bg-secondary'
  const fg = tone === 'yellow' ? 'text-primary-foreground' : 'text-secondary-foreground'
  return (
    <section className={cn('relative overflow-hidden', bg, fg)}>
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-background/15"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-background/10"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-6 md:pb-20 md:pt-20">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">{intro}</p>
        )}
      </div>
    </section>
  )
}

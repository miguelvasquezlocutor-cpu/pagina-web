import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Wave } from '@/components/wave'
import { projectTitle, projectSubtitle } from '@/lib/nav'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-campus.png"
          alt="Vista aérea del campus universitario con edificios y áreas verdes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/45 to-secondary/50" />
      </div>

      <div className="mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-center px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
            Publicación multimedia · UNSAM
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.98] text-background text-balance drop-shadow-sm sm:text-6xl md:text-7xl">
            {projectTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/90 md:text-xl">
            {projectSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/inventario"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explorar el inventario de voces
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/libro"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              <BookOpen className="size-4" />
              Leer el libro
            </Link>
          </div>
        </div>
      </div>

      <Wave className="-mb-px" fill="var(--yellow)" />
    </section>
  )
}

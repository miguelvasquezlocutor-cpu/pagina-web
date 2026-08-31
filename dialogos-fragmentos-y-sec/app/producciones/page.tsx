import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, PenLine, Mic, Sparkles } from 'lucide-react'
import { PageBanner, Eyebrow, SectionTitle } from '@/components/section'
import { Wave } from '@/components/wave'
import { Reveal } from '@/components/reveal'
import { YouTubeLite } from '@/components/productions/youtube-lite'
import {
  reviews,
  reviewsIntro,
  semblanzasIntro,
  semblanzasNote,
  entrevistasIntro,
  otrasIntro,
  otrasProducciones,
} from '@/lib/productions'

export const metadata: Metadata = {
  title: 'Producción de estudiantes — Diálogos, fragmentos y secuencias',
  description:
    'Reseñas audiovisuales, semblanzas escritas, entrevistas en profundidad y otras producciones realizadas por estudiantes en el marco del proyecto.',
}

export default function ProduccionesPage() {
  return (
    <>
      <PageBanner
        tone="yellow"
        eyebrow="Producción de estudiantes"
        title="Voces que investigan otras voces"
        intro="Estudiantes de grado retoman el archivo del proyecto y producen sus propias miradas: reseñas audiovisuales, semblanzas escritas y entrevistas en profundidad sobre mujeres de la comunicación audiovisual argentina."
      />
      <Wave fill="var(--background)" />

      <div className="bg-background">
        {/* Reseñas */}
        <section id="resenas" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
          <Reveal>
            <Eyebrow>
              <GraduationCap className="size-3.5" aria-hidden="true" />
              Reseñas audiovisuales
            </Eyebrow>
            <SectionTitle className="mt-4">Reseñas audiovisuales</SectionTitle>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {reviewsIntro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal key={review.title} delay={i * 80}>
                <article className="flex flex-col gap-4">
                  {review.youtubeId ? (
                    <YouTubeLite id={review.youtubeId} title={review.title} />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
                      Material próximamente
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-xl font-semibold leading-snug text-foreground text-balance">
                      {review.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Por <span className="font-medium text-foreground">{review.student}</span>
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                      {review.course} · {review.year}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Wave fill="var(--muted)" flip />

        {/* Semblanzas */}
        <section id="semblanzas" className="scroll-mt-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16">
              <Reveal>
                <Eyebrow>
                  <PenLine className="size-3.5" aria-hidden="true" />
                  Semblanzas escritas
                </Eyebrow>
                <SectionTitle className="mt-4">Retratos en palabras</SectionTitle>
                <div className="mt-6 rounded-2xl border border-border bg-background p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{semblanzasNote}</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {semblanzasIntro}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Wave fill="var(--secondary)" />

        {/* Entrevistas */}
        <section id="entrevistas" className="scroll-mt-24 bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                <Mic className="size-3.5" aria-hidden="true" />
                Entrevistas en profundidad
              </span>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-[1.05] text-balance sm:text-4xl md:text-5xl">
                El archivo audiovisual de testimonios
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed opacity-90 md:text-lg">
                {entrevistasIntro}
              </p>
              <Link
                href="/inventario"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Explorar el inventario de voces
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        <Wave fill="var(--background)" flip />

        {/* Otras producciones */}
        <section id="otras" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
          <Reveal>
            <Eyebrow>
              <Sparkles className="size-3.5" aria-hidden="true" />
              Otras producciones
            </Eyebrow>
            <SectionTitle className="mt-4">En desarrollo</SectionTitle>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {otrasIntro}
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otrasProducciones.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Por <span className="font-medium text-foreground">{p.author}</span>
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

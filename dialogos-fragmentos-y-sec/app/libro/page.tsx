import type { Metadata } from 'next'
import { PageBanner, Eyebrow, SectionTitle } from '@/components/section'
import { Wave } from '@/components/wave'
import { Reveal } from '@/components/reveal'
import { BookReader } from '@/components/book/book-reader'
import { bookMeta } from '@/lib/book'

export const metadata: Metadata = {
  title: 'Libro — Diálogos, fragmentos y secuencias',
  description:
    'El libro de la colección Léxico crítico del futuro (UNSAM Edita): introducción con el proceso de investigación, artículos temáticos y semblanzas de mujeres del audiovisual.',
}

export default function LibroPage() {
  return (
    <>
      <PageBanner
        eyebrow="El libro"
        title="Diálogos, fragmentos y secuencias"
        intro="Un volumen de la colección Léxico crítico del futuro, de UNSAM Edita: la sistematización del proceso de investigación, artículos temáticos y semblanzas."
      />
      <Wave fill="var(--background)" />

      {/* Reader */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <BookReader />
        </div>
      </section>

      {/* Credits */}
      <section className="bg-accent py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Ficha editorial</Eyebrow>
            <SectionTitle className="mt-4">Quiénes escriben este libro</SectionTitle>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl bg-card p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue">Coordinación</h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {bookMeta.coordinators.map((c) => (
                  <li key={c} className="text-lg font-medium text-foreground">
                    {c}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-blue">
                Colección
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{bookMeta.collection}</p>
            </Reveal>
            <Reveal className="rounded-2xl bg-card p-6 md:p-8" delay={100}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue">Autoras</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {bookMeta.authors.map((a) => (
                  <li
                    key={a}
                    className="rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground">{bookMeta.authorsNote}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

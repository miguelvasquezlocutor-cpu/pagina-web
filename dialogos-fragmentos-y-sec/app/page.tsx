import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { StatCards } from '@/components/stat-cards'
import { Reveal } from '@/components/reveal'
import { Wave } from '@/components/wave'
import { Eyebrow, SectionTitle } from '@/components/section'
import { concepts, projectParagraphs } from '@/lib/project'
import { mainNav } from '@/lib/nav'

const sectionLinks = mainNav.filter((n) => n.href !== '/')

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* El proyecto en números — on yellow field */}
      <section id="numeros" className="bg-primary pb-4 pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center text-primary-foreground/80 [&>span]:bg-primary-foreground/60">
              El proyecto en números
            </Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary-foreground text-balance sm:text-4xl md:text-5xl">
              Tres años de investigación-acción con perspectiva feminista
            </h2>
          </Reveal>
          <Reveal className="mt-10" delay={120}>
            <StatCards />
          </Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-primary-foreground/70">
            Los valores marcados como <span className="font-semibold">XXXX</span> quedan pendientes de
            confirmación al momento de esta publicación.
          </p>
        </div>
      </section>

      <Wave fill="var(--background)" />

      {/* Concepts: Diálogos, fragmentos y secuencias */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>El proyecto</Eyebrow>
              <SectionTitle className="mt-4">
                Diálogos, fragmentos y secuencias
              </SectionTitle>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {projectParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                href="/proyecto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                Conocer el proyecto y el equipo
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            <div className="flex flex-col gap-4">
              {concepts.map((c, i) => (
                <Reveal
                  as="article"
                  key={c.key}
                  delay={i * 100}
                  className="rounded-2xl border border-border bg-card p-6 md:p-7"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl font-semibold text-blue">{c.key}</span>
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section directory */}
      <section className="relative overflow-hidden bg-accent py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Recorrer la publicación</Eyebrow>
            <SectionTitle className="mt-4">Un archivo abierto para seguir explorando</SectionTitle>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectionLinks.map((item, i) => (
              <Reveal as="article" key={item.href} delay={i * 70}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="font-serif text-xl font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                    Ir a la sección
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

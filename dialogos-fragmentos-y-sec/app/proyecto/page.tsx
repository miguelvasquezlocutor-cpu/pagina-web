import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { Wave } from '@/components/wave'
import { PageBanner, Eyebrow, SectionTitle } from '@/components/section'
import {
  concepts,
  projectParagraphs,
  closingParagraphs,
  teamGroups,
  chairs,
} from '@/lib/project'

export const metadata: Metadata = {
  title: 'El proyecto — Diálogos, fragmentos y secuencias',
  description:
    'Proyecto de investigación-acción sobre las trayectorias de mujeres de la comunicación audiovisual en Argentina, desde la Carrera de Comunicación Audiovisual a distancia de la Escuela de Humanidades UNSAM.',
}

export default function ProyectoPage() {
  return (
    <>
      <PageBanner
        eyebrow="El proyecto"
        title="Rescatar trayectorias, construir un archivo imprescindible"
        intro="Un proyecto de investigación-acción con perspectiva feminista iniciado en septiembre de 2023 desde la Carrera Comunicación Audiovisual a distancia de la Escuela de Humanidades UNSAM."
      />
      <Wave fill="var(--background)" />

      {/* Narrative */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-foreground">
              {projectParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4">
            {concepts.map((c, i) => (
              <Reveal
                as="article"
                key={c.key}
                delay={i * 90}
                className="rounded-2xl border-l-4 border-secondary bg-card p-6 md:p-8"
              >
                <h3 className="font-serif text-2xl font-semibold text-blue">{c.key}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              {closingParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="relative scroll-mt-24 overflow-hidden bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-primary-foreground/80 [&>span]:bg-primary-foreground/60">
              Quiénes hacemos este proyecto
            </Eyebrow>
            <SectionTitle className="mt-4 text-primary-foreground">Equipo</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamGroups.map((group, i) => (
              <Reveal
                as="article"
                key={group.title}
                delay={(i % 3) * 80}
                className="flex flex-col rounded-2xl bg-card p-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue">
                  {group.title}
                </h3>
                {group.names.length > 0 ? (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {group.names.map((name) => (
                      <li key={name} className="text-sm font-medium text-foreground">
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {group.note && (
                  <p className="mt-3 text-sm italic text-muted-foreground">{group.note}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wave fill="var(--background)" />

      {/* Cátedras participantes */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Comunidad académica</Eyebrow>
            <SectionTitle className="mt-4">Cátedras que participaron del proyecto</SectionTitle>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-5 py-3 font-semibold text-foreground">Cátedra / Espacio</th>
                  <th className="px-5 py-3 font-semibold text-foreground">Período</th>
                  <th className="px-5 py-3 font-semibold text-foreground">Responsables</th>
                </tr>
              </thead>
              <tbody>
                {chairs.map((c, i) => (
                  <tr key={c.name} className={i % 2 ? 'bg-card' : 'bg-background'}>
                    <td className="px-5 py-4 font-medium text-foreground">{c.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.period}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.people}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

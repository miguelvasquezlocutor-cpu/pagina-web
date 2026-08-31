import type { Metadata } from 'next'
import { PageBanner } from '@/components/section'
import { Wave } from '@/components/wave'
import { ActivitiesTimeline } from '@/components/activities/timeline'

export const metadata: Metadata = {
  title: 'Presentaciones y actividades — Diálogos, fragmentos y secuencias',
  description:
    'Línea de tiempo de ponencias, conversatorios, talleres y presentaciones del proyecto en jornadas y congresos entre 2024 y 2026, con sus materiales asociados.',
}

export default function ActividadesPage() {
  return (
    <>
      <PageBanner
        tone="blue"
        eyebrow="Presentaciones y actividades"
        title="El proyecto en escena"
        intro="Como investigación-acción, los avances del trabajo de campo se presentan en jornadas, congresos y conversatorios. Recorré la línea de tiempo de actividades y sus materiales."
      />
      <Wave fill="var(--background)" />
      <div className="bg-background">
        <ActivitiesTimeline />
      </div>
    </>
  )
}

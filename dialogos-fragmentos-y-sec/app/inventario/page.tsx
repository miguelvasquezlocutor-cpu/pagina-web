import type { Metadata } from 'next'
import { PageBanner } from '@/components/section'
import { Wave } from '@/components/wave'
import { InventoryExplorer } from '@/components/inventory/inventory-explorer'

export const metadata: Metadata = {
  title: 'Inventario de voces — Diálogos, fragmentos y secuencias',
  description:
    'Base de datos navegable de mujeres de la comunicación audiovisual en Argentina: filtrable por rol, medio y provincia. Entrevistas semiestructuradas, entrevistas con registro audiovisual y semblanzas.',
}

export default function InventarioPage() {
  return (
    <>
      <PageBanner
        tone="blue"
        eyebrow="Inventario de voces"
        title="Un archivo navegable de trayectorias"
        intro="Los andamios de un archivo imprescindible: profesionales de la radio, la televisión y el cine de 19 provincias. Explorá por rol, medio y provincia, y accedé a los testimonios audiovisuales."
      />
      <Wave fill="var(--background)" />
      <div className="bg-background">
        <InventoryExplorer />
      </div>
    </>
  )
}

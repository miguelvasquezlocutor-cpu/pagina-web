'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X, PlayCircle, Database } from 'lucide-react'
import {
  voices,
  filterFacets,
  recordTypeLabels,
  recordTypeDescriptions,
  type RecordType,
} from '@/lib/inventory'
import { cn } from '@/lib/utils'

type FilterKey = 'roles' | 'mediaTypes' | 'provinces'

const facetConfig: { key: FilterKey; label: string; options: string[] }[] = [
  { key: 'roles', label: 'Rol', options: filterFacets.roles },
  { key: 'mediaTypes', label: 'Medio', options: filterFacets.mediaTypes },
  { key: 'provinces', label: 'Provincia', options: filterFacets.provinces },
]

const recordTypes: RecordType[] = ['entrevista-av', 'entrevista-semi', 'semblanza']

export function InventoryExplorer() {
  const [query, setQuery] = useState('')
  const [activeType, setActiveType] = useState<RecordType | 'all'>('all')
  const [selected, setSelected] = useState<Record<FilterKey, string[]>>({
    roles: [],
    mediaTypes: [],
    provinces: [],
  })
  const [showFilters, setShowFilters] = useState(false)

  const toggle = (key: FilterKey, value: string) => {
    setSelected((prev) => {
      const has = prev[key].includes(value)
      return { ...prev, [key]: has ? prev[key].filter((v) => v !== value) : [...prev[key], value] }
    })
  }

  const clearAll = () => {
    setSelected({ roles: [], mediaTypes: [], provinces: [] })
    setQuery('')
    setActiveType('all')
  }

  const activeCount =
    selected.roles.length +
    selected.mediaTypes.length +
    selected.provinces.length +
    (activeType !== 'all' ? 1 : 0) +
    (query ? 1 : 0)

  const results = useMemo(() => {
    return voices.filter((v) => {
      if (activeType !== 'all' && v.recordType !== activeType) return false
      if (query && !v.name.toLowerCase().includes(query.toLowerCase())) return false
      if (selected.roles.length && !selected.roles.some((r) => v.roles.includes(r))) return false
      if (selected.mediaTypes.length && !selected.mediaTypes.some((m) => v.mediaType.includes(m)))
        return false
      if (selected.provinces.length && !selected.provinces.includes(v.province)) return false
      return true
    })
  }, [query, activeType, selected])

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
      {/* Record type intro cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {recordTypes.map((rt) => {
          const active = activeType === rt
          return (
            <button
              key={rt}
              type="button"
              onClick={() => setActiveType(active ? 'all' : rt)}
              className={cn(
                'flex flex-col rounded-2xl border p-5 text-left transition-all',
                active
                  ? 'border-blue bg-secondary/15 ring-2 ring-blue'
                  : 'border-border bg-card hover:-translate-y-0.5 hover:shadow-sm',
              )}
              aria-pressed={active}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue">
                {recordTypeLabels[rt]}
              </span>
              <span className="mt-2 text-sm leading-snug text-muted-foreground">
                {recordTypeDescriptions[rt]}
              </span>
            </button>
          )
        })}
      </div>

      {/* Toolbar */}
      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre…"
            className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/30"
            aria-label="Buscar por nombre"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground"
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="size-4" />
          Filtros
          {activeCount > 0 && (
            <span className="ml-1 inline-flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeCount}
            </span>
          )}
        </button>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
            Limpiar
          </button>
        )}
      </div>

      {/* Filter facets */}
      {showFilters && (
        <div className="mt-4 grid gap-6 rounded-2xl border border-border bg-muted/40 p-6 md:grid-cols-3">
          {facetConfig.map((facet) => (
            <fieldset key={facet.key}>
              <legend className="mb-3 text-xs font-bold uppercase tracking-widest text-blue">
                {facet.label}
              </legend>
              <div className="flex flex-wrap gap-2">
                {facet.options.map((opt) => {
                  const on = selected[facet.key].includes(opt)
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggle(facet.key, opt)}
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                        on
                          ? 'border-blue bg-blue text-background'
                          : 'border-border bg-background text-muted-foreground hover:border-blue/60',
                      )}
                      aria-pressed={on}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </fieldset>
          ))}
        </div>
      )}

      {/* Results */}
      <div className="mt-8">
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{results.length}</span>{' '}
          {results.length === 1 ? 'registro' : 'registros'}
        </p>

        {results.length === 0 ? <EmptyState /> : <ResultsGrid />}
      </div>
    </div>
  )
}

function ResultsGrid() {
  // Reserved for when the voices dataset is populated.
  return null
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-secondary/20 text-blue">
        <Database className="size-6" />
      </span>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
        Archivo en construcción
      </h3>
      <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
        El inventario de voces está estructurado como una base de datos abierta. Los registros
        individuales —con roles, medios, provincias, años de experiencia y anécdotas relevantes en
        términos de género— se irán cargando y quedarán navegables mediante estos filtros. Las
        entrevistas con registro audiovisual priorizarán el acceso a sus video-resúmenes.
      </p>
      <div className="mt-6 flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
        <PlayCircle className="size-4 text-blue" />
        Los testimonios audiovisuales tendrán prioridad visual en cada ficha
      </div>
    </div>
  )
}

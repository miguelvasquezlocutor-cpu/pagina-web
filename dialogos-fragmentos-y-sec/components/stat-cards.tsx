'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, TrendingUp, MapPin, CalendarDays, Layers } from 'lucide-react'
import { stats } from '@/lib/project'
import { cn } from '@/lib/utils'

const icons = [Users, TrendingUp, MapPin, CalendarDays, Layers]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

function Counter({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return <>{value}</>
}

export function StatCards() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
    >
      {stats.map((stat, i) => {
        const Icon = icons[i % icons.length]
        const numeric = Number.parseInt(stat.value, 10)
        const isNumeric = !stat.pending && !Number.isNaN(numeric) && stat.value === String(numeric)
        return (
          <div
            key={stat.label}
            className={cn(
              'group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md',
              i === 1 && 'md:col-span-1',
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/20 text-secondary-foreground">
              <Icon className="size-5 text-blue" aria-hidden="true" />
            </div>
            <div className="font-serif text-4xl font-semibold leading-none text-foreground md:text-5xl">
              {stat.pending ? (
                <span className="text-blue/70">{stat.value}</span>
              ) : isNumeric ? (
                <Counter target={numeric} active={inView} />
              ) : (
                stat.value
              )}
            </div>
            <p className="mt-3 text-pretty text-sm leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}

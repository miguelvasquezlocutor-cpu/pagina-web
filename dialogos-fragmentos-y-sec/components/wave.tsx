import { cn } from '@/lib/utils'

type WaveProps = {
  className?: string
  /** color of the wave shape (the section it flows INTO) */
  fill?: string
  flip?: boolean
  variant?: 1 | 2
}

/**
 * Organic wave divider used to flow one color field into another,
 * inspired by the reference art direction.
 */
export function Wave({ className, fill = 'var(--yellow)', flip = false, variant = 1 }: WaveProps) {
  const paths = {
    1: 'M0,64 C240,140 480,10 720,48 C960,86 1200,150 1440,80 L1440,200 L0,200 Z',
    2: 'M0,110 C180,40 420,120 720,90 C1020,60 1260,150 1440,60 L1440,200 L0,200 Z',
  }
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none w-full overflow-hidden leading-[0]', className)}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="block h-[7vw] max-h-28 min-h-12 w-full"
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  )
}

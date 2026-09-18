import { cn } from '../lib/utils'
import { Container } from './container'

type Tone = 'default' | 'surface' | 'muted' | 'dark'

const toneClasses: Record<Tone, string> = {
  default: 'bg-site-bg text-site-fg',
  surface: 'bg-site-surface text-site-fg',
  muted: 'bg-site-surface-2 text-site-fg',
  dark: 'bg-site-dark text-site-dark-fg',
}

export function Section({
  id,
  tone = 'default',
  className,
  containerClassName,
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  containerClassName?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('py-14 sm:py-20', toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'default',
}: {
  eyebrow?: string
  title: string
  intro?: React.ReactNode
  align?: 'left' | 'center'
  tone?: Tone
}) {
  const muted = tone === 'dark' ? 'text-site-dark-fg/70' : 'text-site-muted-fg'
  const accent = tone === 'dark' ? 'text-site-dark-fg/60' : 'text-site-accent'
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl',
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.18em] font-mono',
            accent,
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-balance">
        {title}
      </h2>
      {intro ? <div className={cn('text-base sm:text-lg leading-relaxed', muted)}>{intro}</div> : null}
    </div>
  )
}

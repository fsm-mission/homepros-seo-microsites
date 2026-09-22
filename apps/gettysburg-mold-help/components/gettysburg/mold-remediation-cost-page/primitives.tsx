import Link from 'next/link'
import { cn } from '@repo/shared/lib/utils'

/**
 * Neutral, restrained list used across the mold-remediation-cost page.
 * Uses quiet moss markers rather than provider-style checkmarks.
 */
export function NeutralList({
  items,
  className,
}: {
  items: React.ReactNode[]
  className?: string
}) {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-site-muted-fg">
          <span
            aria-hidden="true"
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-site-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Restrained pull-quote treatment reserved for exact approved key questions.
 */
export function KeyQuestion({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-site-accent pl-5 py-1">
      <p className="font-display text-xl leading-snug text-site-fg text-balance sm:text-2xl">
        {children}
      </p>
    </blockquote>
  )
}

/**
 * A subtitle-style H3 for editorial subsections.
 */
export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-semibold leading-tight text-site-fg sm:text-2xl">
      {children}
    </h3>
  )
}

/**
 * Body paragraph at comfortable reading width.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-base leading-relaxed text-site-muted-fg sm:text-lg', className)}>
      {children}
    </p>
  )
}

/**
 * Contextual inline link. When `live` is false the destination is not yet
 * published, so we render descriptive text WITHOUT an anchor to avoid a broken
 * link (flagged for later activation).
 */
export function ContextualLink({
  href,
  live,
  children,
}: {
  href: string
  live: boolean
  children: React.ReactNode
}) {
  if (!live) {
    // TODO(internal-link): destination not yet published — activate when live.
    return (
      <span className="font-medium text-site-fg underline decoration-site-border underline-offset-4">
        {children}
      </span>
    )
  }
  return (
    <Link
      href={href}
      className="font-medium text-site-primary underline decoration-site-accent/50 underline-offset-4 transition-colors hover:decoration-site-accent"
    >
      {children}
    </Link>
  )
}

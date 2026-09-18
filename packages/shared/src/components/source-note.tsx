import { cn } from '../lib/utils'

export function SourceNote({
  children,
  tone = 'default',
  className,
}: {
  children: React.ReactNode
  tone?: 'default' | 'dark'
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-sm italic',
        tone === 'dark' ? 'text-site-dark-fg/60' : 'text-site-muted-fg',
        className,
      )}
    >
      {children}
    </p>
  )
}

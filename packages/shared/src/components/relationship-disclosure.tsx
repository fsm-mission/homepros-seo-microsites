import { Info } from 'lucide-react'

export function RelationshipDisclosure({
  tone = 'default',
  children,
}: {
  tone?: 'default' | 'dark'
  children: React.ReactNode
}) {
  const isDark = tone === 'dark'
  return (
    <aside
      className={
        isDark
          ? 'flex gap-3 rounded-lg border border-site-dark-fg/20 bg-site-dark-fg/5 p-5'
          : 'flex gap-3 rounded-lg border border-site-border bg-site-surface-2 p-5'
      }
    >
      <Info className={isDark ? 'mt-0.5 size-5 shrink-0 text-site-dark-fg/70' : 'mt-0.5 size-5 shrink-0 text-site-accent'} />
      <div
        className={
          isDark
            ? 'text-sm leading-relaxed text-site-dark-fg/80'
            : 'text-sm leading-relaxed text-site-muted-fg'
        }
      >
        {children}
      </div>
    </aside>
  )
}

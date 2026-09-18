'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import type { SiteConfig } from '../lib/site-config'
import { Container } from './container'
import { SiteButton } from './site-button'

export function SiteHeader({ site }: { site: SiteConfig }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-site-border bg-site-bg/90 backdrop-blur supports-[backdrop-filter]:bg-site-bg/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold text-site-fg">{site.name}</span>
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-site-muted-fg">
            {site.domain}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {site.nav.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-site-muted-fg transition-colors hover:text-site-fg"
            >
              {item.label}
            </a>
          ))}
          <SiteButton href="#request" variant="primary" className="px-4 py-2">
            Request Help
          </SiteButton>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-site-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'lg:hidden overflow-hidden border-site-border transition-[max-height] duration-300',
          open ? 'max-h-96 border-t' : 'max-h-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-site-fg hover:bg-site-surface-2"
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  )
}

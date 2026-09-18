import type { SiteConfig } from '../lib/site-config'
import { Container } from './container'

export function SiteFooter({ site }: { site: SiteConfig }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-site-border bg-site-dark text-site-dark-fg">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-1 text-sm font-mono uppercase tracking-[0.14em] text-site-dark-fg/60">
              {site.domain}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-site-dark-fg/75">
              A homeowner resource managed by HomePros Team. We help you submit a request and
              connect you with an appropriate independent participating provider.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-site-dark-fg/50 font-mono">
              On this page
            </span>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-site-dark-fg/80 transition-colors hover:text-site-dark-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-site-dark-fg/15 pt-6 text-xs leading-relaxed text-site-dark-fg/60">
          <p>
            {site.domain} is an independent lead-generation and homeowner-referral resource managed
            by HomePros Team. It is not a government agency and is not affiliated with, endorsed by,
            or acting on behalf of the Commonwealth of Pennsylvania or the Pennsylvania Department of
            Environmental Protection. References to certification, licensing, or state records are
            provided so homeowners can independently verify providers using official sources.
          </p>
          <p className="mt-3">© {year} HomePros Team. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

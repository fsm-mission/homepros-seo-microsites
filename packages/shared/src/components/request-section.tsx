import type { SiteKey } from '../lib/site-config'
import { Container } from './container'
import { RequestForm } from './request-form'

export function RequestSection({
  site,
  eyebrow,
  title,
  intro,
  points,
  showRadonFields = false,
  descriptionLabel,
  descriptionPlaceholder,
}: {
  site: SiteKey
  eyebrow: string
  title: string
  intro: string
  points: string[]
  showRadonFields?: boolean
  descriptionLabel: string
  descriptionPlaceholder: string
}) {
  return (
    <section id="request" className="scroll-mt-20 bg-site-dark py-16 text-site-dark-fg sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] font-mono text-site-dark-fg/60">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-site-dark-fg/80 sm:text-lg">{intro}</p>
            <ul className="flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-site-dark-fg/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-site-dark-fg/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-site-dark-fg/15 bg-site-bg p-6 text-site-fg sm:p-8">
            <RequestForm
              site={site}
              showRadonFields={showRadonFields}
              descriptionLabel={descriptionLabel}
              descriptionPlaceholder={descriptionPlaceholder}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

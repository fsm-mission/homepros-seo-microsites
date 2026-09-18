import { Check, X } from 'lucide-react'
import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const canTell = ['That radon is a potential concern within a geographic area.']

const cannotTell = [
  'your home’s actual radon concentration',
  'whether your home is above or below 4.0 pCi/L',
  'whether your neighbor’s result applies to your property',
  'whether a particular foundation automatically means high or low radon',
  'whether your home needs mitigation',
]

export function MapLimitations() {
  return (
    <Section id="map-limitations" tone="surface">
      <SectionHeading
        eyebrow="Maps vs. testing"
        title="A Radon Map Cannot Tell You Your Home's Radon Level"
        intro="Radon maps are useful for understanding regional potential. They are not a substitute for testing an individual home. Houses within the same area — including houses near one another — can produce different test results."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-site-border bg-site-bg p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-site-fg">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-site-primary/10 text-site-primary">
              <Check className="size-4" />
            </span>
            What a Map Can Tell You
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {canTell.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-site-muted-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-site-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-site-border bg-site-bg p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-site-fg">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-site-accent/10 text-site-accent">
              <X className="size-4" />
            </span>
            What a Map Cannot Tell You
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {cannotTell.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-site-muted-fg">
                <X className="mt-0.5 size-4 shrink-0 text-site-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-base leading-relaxed text-site-fg">
        Use maps for regional context, not as a prediction of what a particular house will test.
      </p>
      <SourceNote className="mt-4">
        Sources used in this section: U.S. Environmental Protection Agency · Pennsylvania Department
        of Environmental Protection.
      </SourceNote>
    </Section>
  )
}

const housingRows = [
  { metric: 'Median year built', city: '~1941', county: '~1976' },
  { metric: 'Built before 1940', city: '~49.3%', county: '~18.3%' },
  { metric: 'Built before 1980', city: '~85.7%', county: '~54.8%' },
]

export function HousingComparison() {
  return (
    <Section id="housing" tone="default">
      <SectionHeading
        eyebrow="Local housing context"
        title="York City and York County Homes Are Not the Same Housing Market"
        intro="Local housing data can provide useful context when thinking about how a mitigation system might need to be designed or routed. It should not be used to predict a home's radon level."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-site-border">
        <table className="w-full text-left">
          <thead className="bg-site-surface-2">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Housing metric
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                York City
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                York County
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-site-border bg-site-surface">
            {housingRows.map((row) => (
              <tr key={row.metric}>
                <td className="px-5 py-4 text-sm font-medium text-site-fg">{row.metric}</td>
                <td className="px-5 py-4 font-mono text-base text-site-fg">{row.city}</td>
                <td className="px-5 py-4 font-mono text-base text-site-fg">{row.county}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-site-muted-fg">
        <p>
          The differences matter because the physical characteristics of a home can affect how a
          mitigation contractor approaches the project.
        </p>
        <p>
          Depending on the property, relevant considerations may include foundation layout,
          accessibility, renovation history, finished areas, available system-routing paths, and
          other construction details.
        </p>
        <p>
          But housing age should not be confused with radon concentration. An older home is not
          automatically a higher-radon home; age is relevant to potential installation complexity,
          not a prediction of the test result.
        </p>
      </div>
      <SourceNote className="mt-4">
        Sources used in this section: U.S. Census Bureau / American Community Survey. See Sources
        &amp; Methodology for geographic definitions, source periods, and calculation notes.
      </SourceNote>
    </Section>
  )
}

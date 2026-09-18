import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const stats = [
  { label: 'Built before 1940', value: '~47.5%' },
  { label: 'Built before 1950', value: '~61.0%' },
  { label: 'Built before 1970', value: '~78.7%' },
  { label: 'Median year built', value: '~1942' },
]

export function BuildingHistory() {
  return (
    <Section id="building-history" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Local context"
            title="Why Building History Matters in Gettysburg"
            intro="Gettysburg has a substantial stock of older housing. According to 2020–2024 American Community Survey data, much of the borough's housing predates 1970."
          />
          <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-site-muted-fg">
            <p>
              The age of a home does not mean it has a mold problem. It does mean that when moisture
              or mold is discovered, understanding the property&apos;s history can be useful.
            </p>
            <p>
              Depending on the home, that may mean looking more closely at previous repairs, roof
              and drainage history, plumbing, wall assemblies, ventilation, possible moisture entry,
              and past water damage. The goal is to understand the building and the moisture problem
              rather than make assumptions based on age alone.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-site-border bg-site-bg p-6">
            <p className="font-display text-lg font-semibold text-site-fg">
              Gettysburg Borough Housing Snapshot
            </p>
            <dl className="mt-4 divide-y divide-site-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-3">
                  <dt className="text-sm text-site-muted-fg">{stat.label}</dt>
                  <dd className="font-mono text-lg font-semibold text-site-fg">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <SourceNote>
            Figures describe Gettysburg Borough specifically. Adams County is a broader geography
            with its own housing profile, so county-level figures should not be substituted for
            borough-specific data. Source: 2020–2024 American Community Survey.
          </SourceNote>
        </div>
      </div>
    </Section>
  )
}

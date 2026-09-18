import { Section, SectionHeading } from '@repo/shared/components/section'

const sources = [
  {
    name: 'U.S. Environmental Protection Agency (EPA)',
    note: 'Radon action level (4.0 pCi/L), health-risk guidance, and testing recommendations.',
  },
  {
    name: 'Pennsylvania Department of Environmental Protection (DEP)',
    note: 'Pennsylvania radon program information and radon-service certification requirements.',
  },
  {
    name: 'U.S. Census Bureau / American Community Survey',
    note: 'Housing-age and construction context for York City and York County (5-year estimates).',
  },
]

export function Methodology() {
  return (
    <Section id="methodology" tone="default">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Transparency"
          title="Sources & Methodology"
          intro="Figures and guidance on this page are drawn from public authorities. They are provided for general context and homeowner education, not as a substitute for testing a specific property or for professional advice."
        />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {sources.map((source) => (
          <div key={source.name} className="rounded-lg border border-site-border bg-site-surface p-5">
            <p className="font-display text-base font-semibold text-site-fg">{source.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-site-muted-fg">{source.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-site-muted-fg">
        <p>
          <strong className="text-site-fg">Geography:</strong> &ldquo;York City&rdquo; refers to the
          City of York; &ldquo;York County&rdquo; refers to the broader county. City-level and
          county-level figures describe different geographies and should not be substituted for one
          another.
        </p>
        <p>
          <strong className="text-site-fg">Estimates:</strong> Census figures are survey-based
          estimates with margins of error and are rounded here for readability. Percentages are
          derived from published American Community Survey tables.
        </p>
        <p>
          <strong className="text-site-fg">Interpretation:</strong> Housing-age data describes
          potential installation complexity and local context only. It does not predict any
          individual home&apos;s radon level, which can only be established by testing that home.
        </p>
      </div>
    </Section>
  )
}

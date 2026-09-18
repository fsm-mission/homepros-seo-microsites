import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const bands = [
  {
    range: 'Below 2.0 pCi/L',
    body: 'Review the test conditions and follow applicable EPA and Pennsylvania guidance about testing and your home’s circumstances.',
  },
  {
    range: '2.0–3.9 pCi/L',
    body: 'Below the EPA action level, but it does not mean there is zero radon risk. EPA guidance should be considered when deciding whether additional testing or reduction measures make sense.',
  },
  {
    range: '4.0 pCi/L or higher',
    body: 'This reaches the EPA action level. Follow authoritative guidance for confirming the result when appropriate and taking action to reduce radon.',
    action: true,
  },
]

export function ResultScale() {
  return (
    <Section id="when-recommended" tone="default">
      <SectionHeading
        eyebrow="Interpreting your result"
        title="When Is Radon Mitigation Recommended?"
        intro="A radon result of 4.0 picocuries per liter (pCi/L) or higher reaches the EPA action level for taking steps to reduce radon in the home."
      />

      <div className="mt-10 rounded-2xl border border-site-border bg-site-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-medium font-mono uppercase tracking-[0.12em] text-site-accent">
            EPA action level
          </span>
          <span className="font-mono text-2xl font-semibold text-site-primary">4.0 pCi/L</span>
        </div>
        {/* Visual scale */}
        <div className="mt-4 flex h-3 overflow-hidden rounded-full">
          <div className="w-1/4 bg-site-primary/25" />
          <div className="w-1/4 bg-site-primary/45" />
          <div className="flex-1 bg-site-primary" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-site-muted-fg">
          4.0 pCi/L should not be interpreted as a dividing line between &ldquo;safe&rdquo; and
          &ldquo;dangerous.&rdquo; Radon risk exists below the action level as well, and EPA guidance
          should be used when deciding what your test result means and what to do next.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {bands.map((band) => (
          <div
            key={band.range}
            className={
              band.action
                ? 'flex flex-col gap-2 rounded-lg border-2 border-site-primary bg-site-surface p-5'
                : 'flex flex-col gap-2 rounded-lg border border-site-border bg-site-surface p-5'
            }
          >
            <span className="font-mono text-lg font-semibold text-site-fg">{band.range}</span>
            <p className="text-sm leading-relaxed text-site-muted-fg">{band.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-site-muted-fg">
        Your measured result provides the starting point for deciding what to do next. Regional data
        and maps can provide context, but they do not replace a properly conducted test of the
        property.
      </p>
      <SourceNote className="mt-4">
        Sources used in this section: U.S. Environmental Protection Agency · Pennsylvania Department
        of Environmental Protection.
      </SourceNote>
    </Section>
  )
}

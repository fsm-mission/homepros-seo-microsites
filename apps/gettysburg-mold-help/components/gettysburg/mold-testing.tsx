import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const rows = [
  {
    situation: 'Visible mold is present',
    consider: 'Testing may not be necessary simply to confirm that mold exists.',
  },
  {
    situation: 'A musty odor but no visible source',
    consider: 'Further investigation may help identify hidden moisture or the source of the odor.',
  },
  {
    situation: 'Hidden moisture is suspected',
    consider:
      'Finding and addressing the moisture problem is important, whether or not sampling is appropriate.',
  },
  {
    situation: 'You have a health concern',
    consider:
      'Seek appropriate medical advice. Mold sampling should not be used to diagnose an illness.',
  },
  {
    situation: 'You want post-remediation verification',
    consider:
      'Whether verification or testing makes sense depends on the project and agreed scope.',
  },
]

export function MoldTesting() {
  return (
    <Section id="mold-testing" tone="default">
      <SectionHeading
        eyebrow="Testing"
        title="Do You Need Mold Testing Before Remediation?"
        intro="Not every mold situation requires sampling or laboratory testing. The right next step depends on what is visible, what is known about the moisture problem, and what questions need to be answered."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-site-border">
        <div className="hidden bg-site-surface-2 sm:grid sm:grid-cols-[1fr_1.4fr]">
          <div className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
            Your situation
          </div>
          <div className="border-l border-site-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
            What to consider
          </div>
        </div>
        <div className="divide-y divide-site-border bg-site-surface">
          {rows.map((row) => (
            <div key={row.situation} className="grid gap-1 px-5 py-4 sm:grid-cols-[1fr_1.4fr] sm:gap-0">
              <div className="font-medium text-site-fg sm:pr-5">{row.situation}</div>
              <div className="text-sm leading-relaxed text-site-muted-fg sm:border-l sm:border-site-border sm:pl-5">
                {row.consider}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-site-border bg-site-surface-2 p-6">
        <p className="text-base leading-relaxed text-site-fg">
          The EPA notes that when visible mold growth is present, sampling is usually unnecessary.
          The CDC also does not recommend routine mold testing as a general approach. The better
          question is often: <em>what information do we actually need before deciding what to do
          next?</em>
        </p>
      </div>
      <SourceNote className="mt-4">
        Sources referenced: U.S. Environmental Protection Agency · Centers for Disease Control and
        Prevention.
      </SourceNote>
    </Section>
  )
}

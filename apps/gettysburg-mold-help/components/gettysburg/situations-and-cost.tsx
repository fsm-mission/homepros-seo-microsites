import { Section, SectionHeading } from '@repo/shared/components/section'
import { SiteButton } from '@repo/shared/components/site-button'
import { SourceNote } from '@repo/shared/components/source-note'

const situations = [
  'a roof, plumbing, appliance, or other leak',
  'previous water damage',
  'persistent dampness or moisture',
  'discovering visible growth',
  'noticing a recurring musty odor',
  'finding moisture around windows or walls',
  'basement or lower-level moisture where present',
  'discovering mold during renovation, inspection, or real-estate activity',
]

const costFactors = [
  'affected square footage',
  'types of materials involved',
  'accessibility of affected areas',
  'containment requirements',
  'repairs to correct the moisture source',
  'demolition or material removal',
  'disposal requirements',
  'repair and reconstruction',
  'HVAC involvement',
  'testing or verification when justified',
]

export function CommonSituations() {
  return (
    <Section id="common-situations" tone="surface">
      <SectionHeading
        eyebrow="Reasons homeowners reach out"
        title="Common Mold and Moisture Situations"
        intro="People seek mold remediation help for many different reasons. The presence of one of these conditions does not automatically mean extensive remediation is necessary, but it may be worth investigating."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {situations.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-lg border border-site-border bg-site-bg px-4 py-3.5"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-site-accent" />
            <span className="text-sm leading-relaxed text-site-fg">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-site-border bg-site-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base text-site-fg">
          Not sure where to start? Tell us what you&apos;re seeing and HomePros Team can review your
          request.
        </p>
        <SiteButton href="#request" variant="primary" className="shrink-0">
          Request Mold Remediation Help
        </SiteButton>
      </div>
    </Section>
  )
}

export function CostFactors() {
  return (
    <Section id="cost-factors" tone="default">
      <SectionHeading
        eyebrow="Cost"
        title="What Affects Mold Remediation Cost in Gettysburg?"
        intro="There is no responsible one-size-fits-all price for mold remediation. A small, accessible affected area can be very different from a project involving hidden moisture, demolition, multiple rooms, or reconstruction."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {costFactors.map((factor) => (
          <div
            key={factor}
            className="flex items-center gap-3 rounded-lg border border-site-border bg-site-surface px-4 py-3"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-site-primary" />
            <span className="text-sm text-site-fg">{factor}</span>
          </div>
        ))}
      </div>
      <SourceNote className="mt-8 not-italic text-base text-site-muted-fg">
        A useful estimate should help you understand what work is being proposed and why, rather
        than giving you a number without explaining the scope behind it.
      </SourceNote>
    </Section>
  )
}

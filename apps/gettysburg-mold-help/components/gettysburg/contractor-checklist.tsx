import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const checklist = [
  {
    title: 'Pennsylvania HIC registration, where applicable',
    body: 'Check whether Home Improvement Consumer Protection Act registration applies. HIC registration should not be confused with a mold-remediation license or government endorsement.',
  },
  {
    title: 'Insurance',
    body: 'Ask what insurance the company carries and request appropriate documentation when relevant.',
  },
  {
    title: 'A written scope of work',
    body: 'You should be able to understand what the contractor is proposing to do.',
  },
  {
    title: 'How the moisture source will be addressed',
    body: 'Ask what is known about the moisture problem and whether additional investigation or repairs are needed.',
  },
  {
    title: 'The containment approach',
    body: 'If containment is proposed, ask why it is appropriate for the project.',
  },
  {
    title: 'What will be removed versus cleaned',
    body: 'The scope should explain how affected materials will be handled.',
  },
  {
    title: 'Drying and moisture goals',
    body: 'Ask how moisture conditions will be evaluated and addressed.',
  },
  {
    title: 'Who handles reconstruction',
    body: 'If materials must be removed, clarify whether reconstruction is included or handled separately.',
  },
  {
    title: 'Why testing is — or is not — being recommended',
    body: 'Testing should answer a useful question, not simply be added automatically.',
  },
  {
    title: 'Any warranty or guarantee actually offered',
    body: 'Ask for the terms in writing rather than assuming coverage exists.',
  },
]

export function ContractorChecklist() {
  return (
    <Section id="contractor-checklist" tone="muted">
      <SectionHeading
        eyebrow="Choosing a provider"
        title="How to Evaluate a Mold Remediation Contractor in Pennsylvania"
        intro="Choosing a provider can be difficult when you are already worried about the property. Instead of relying only on price, ask questions that help you understand how the contractor intends to approach the problem."
        tone="muted"
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {checklist.map((item) => (
          <li
            key={item.title}
            className="flex gap-3 rounded-lg border border-site-border bg-site-surface p-5"
          >
            <span
              aria-hidden
              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 border-site-primary text-site-primary"
            />
            <div>
              <p className="font-medium text-site-fg">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-site-muted-fg">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <SourceNote className="mt-8 not-italic text-base text-site-muted-fg">
        A contractor who explains the reasoning behind the proposed scope can make it easier for you
        to compare options and make an informed decision.
      </SourceNote>
    </Section>
  )
}

export function RentalConsiderations() {
  return (
    <Section id="rental-considerations" tone="default">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-site-border bg-site-surface p-6">
            <p className="font-display text-lg font-semibold text-site-fg">
              Gettysburg Borough occupancy
            </p>
            <dl className="mt-4 divide-y divide-site-border">
              <div className="flex items-center justify-between py-3">
                <dt className="text-sm text-site-muted-fg">Renter occupied</dt>
                <dd className="font-mono text-lg font-semibold text-site-fg">~53.3%</dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="text-sm text-site-muted-fg">Owner occupied</dt>
                <dd className="font-mono text-lg font-semibold text-site-fg">~46.7%</dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="text-sm text-site-muted-fg">In 2+ unit structures</dt>
                <dd className="font-mono text-lg font-semibold text-site-fg">~37.3%</dd>
              </div>
            </dl>
          </div>
          <SourceNote>Source: 2020–2024 American Community Survey, Gettysburg Borough.</SourceNote>
        </div>

        <div>
          <SectionHeading
            eyebrow="Owners, landlords &amp; renters"
            title="Mold Questions When You Rent or Manage Property"
            intro="Mold and moisture problems can become more complicated when the person occupying a property is not the person responsible for maintaining it."
          />
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-site-muted-fg">
            <p>
              Useful steps can include documenting visible moisture or damage, reporting problems
              promptly, coordinating access for evaluation and repairs, and keeping communication
              clear about what has been observed and what work is planned.
            </p>
            <p>
              In multifamily properties, the investigation may also need to consider
              building-specific factors such as shared walls, adjacent spaces, or shared HVAC
              components where applicable.
            </p>
            <p className="text-sm italic">
              These situations can vary significantly by property and circumstance. This information
              is intended to help you understand practical considerations, not provide legal advice.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

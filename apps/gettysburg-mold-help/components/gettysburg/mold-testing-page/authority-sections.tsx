import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'
import { NeutralList, Prose } from './primitives'

export function PennsylvaniaGuidance() {
  return (
    <Section tone="default">
      <div className="max-w-3xl">
        <SectionHeading title="What Pennsylvania Says About Mold" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            Pennsylvania homeowners should be careful not to confuse general contractor or
            home-improvement requirements with a specialized state household-mold licensing program.
          </Prose>
          <Prose>
            Pennsylvania does not have a specialized state regulatory or licensing program
            specifically governing household mold in the way consumers may sometimes assume.
          </Prose>
          <Prose>
            Pennsylvania Department of Health guidance instead emphasizes practical issues such as
            addressing moisture and appropriately cleaning or removing affected materials.
          </Prose>
          <Prose>That distinction matters when evaluating provider credentials.</Prose>
          <Prose>
            Depending on the contractor and work involved, Pennsylvania Home Improvement Contractor
            registration requirements may apply. That registration should not be represented as a
            specialized Pennsylvania mold-remediation or mold-testing license, and it is not a
            government endorsement of a provider&apos;s recommendations.
          </Prose>
        </div>
        <SourceNote className="mt-8">
          Sources used in this section: Pennsylvania Department of Health · Pennsylvania government
          resources
        </SourceNote>
      </div>
    </Section>
  )
}

export function RentersOwnersManagers() {
  return (
    <Section tone="muted">
      <div className="max-w-3xl">
        <SectionHeading
          title="Mold Testing for Renters, Owners, and Property Managers"
          intro="Mold and moisture concerns can become more complicated when the occupant and property owner are different people."
        />
        <Prose className="mt-6">
          Whether you are a renter, homeowner, landlord, or property manager, useful documentation
          may include:
        </Prose>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'where visible growth, moisture, or staining was observed',
            'when the condition was first noticed',
            'photographs of visible conditions',
            'known leaks or previous water events',
            'dates the problem was reported',
            'maintenance or repair activity',
            'recurring odors or moisture conditions',
            'areas that may require further evaluation',
            'testing or inspection reports that have already been completed',
          ]}
        />
      </div>

      <Prose className="mt-8 max-w-3xl">
        Testing may sometimes provide additional documentation, but it should not substitute for
        reporting and investigating a known moisture problem.
      </Prose>

      <div className="mt-8 max-w-3xl rounded-lg border border-site-border bg-site-surface-2 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
          Scope boundary
        </p>
        <div className="mt-3 flex flex-col gap-4">
          <p className="text-base leading-relaxed text-site-fg">
            Questions involving legal duties, lease requirements, disclosure obligations, access, or
            responsibility for repairs depend on the circumstances.
          </p>
          <p className="text-base leading-relaxed text-site-fg">
            Those questions should be addressed through appropriate Pennsylvania legal, housing, or
            real-estate guidance rather than relying on a mold-testing provider for legal advice.
          </p>
        </div>
      </div>
    </Section>
  )
}

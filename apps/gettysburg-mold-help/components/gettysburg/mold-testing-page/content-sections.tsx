import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'
import { TestingDecisionMatrix } from './testing-decision-matrix'
import { ContextualLink, KeyQuestion, NeutralList, Prose, SubHeading } from './primitives'

export function DoYouNeedTesting() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="Do You Need Mold Testing?" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            Whether testing makes sense depends on what you already know and what you are trying to
            find out.
          </Prose>
          <Prose>
            If mold growth is clearly visible, testing simply to confirm that mold exists may
            provide relatively little additional information. EPA guidance states that when visible
            mold growth is present, sampling is usually unnecessary.
          </Prose>
          <Prose>The CDC also does not recommend routine mold testing.</Prose>
          <Prose>
            That does not mean testing never has value. It means the testing should have a defined
            purpose.
          </Prose>
        </div>
      </div>
    </Section>
  )
}

export function DecisionMatrixSection() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <SectionHeading eyebrow="Decision tool" title="Should I Test for Mold?" />
      <TestingDecisionMatrix />

      <div className="mt-10 max-w-3xl border-l-2 border-site-accent pl-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
          The practical takeaway is simple
        </p>
        <p className="mt-3 font-display text-xl leading-snug text-site-fg text-balance sm:text-2xl">
          Before paying for testing, understand what information you expect the test to provide and
          how that information will affect your next decision.
        </p>
      </div>

      <SourceNote className="mt-8">
        Sources used in this section: U.S. Environmental Protection Agency · Centers for Disease
        Control and Prevention · Pennsylvania Department of Health
      </SourceNote>
    </Section>
  )
}

export function SignsFurtherEvaluation() {
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="Signs You May Need Further Mold Evaluation"
          intro="Some situations warrant a closer look even when it is not yet clear whether laboratory testing will be useful."
        />
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <p className="text-base font-medium text-site-fg">
          Further evaluation may make sense if you are dealing with:
        </p>
        <NeutralList
          className="mt-5"
          items={[
            'a persistent musty odor without an identified source',
            'suspected moisture behind walls, ceilings, flooring, or other concealed areas',
            'a previous leak, flooding event, or water problem where current conditions are unclear',
            'visible growth that returns after previous cleaning',
            'staining, deterioration, or other conditions that may point to an unresolved moisture problem',
            'disputed or unclear property conditions',
            'a need for documentation related to a specific property decision',
          ]}
        />
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          These conditions do not automatically mean you need air or surface sampling.
        </Prose>
        <Prose>Further evaluation does not automatically mean laboratory testing.</Prose>
        <Prose>
          Depending on the situation, investigating moisture, building conditions, previous water
          damage, and affected materials may provide more useful information than sampling alone.
        </Prose>
      </div>

      {/* Middle CTA — writer-approved location, links to the live homepage request experience. */}
      <div className="mt-10 max-w-3xl rounded-lg border border-site-border bg-site-surface p-6">
        <p className="text-base leading-relaxed text-site-fg">
          Not sure what kind of help you need?{' '}
          <ContextualLink href="/" live>
            Request mold remediation help in Gettysburg
          </ContextualLink>
          .
        </p>
      </div>
    </Section>
  )
}

export function WhenTestingMayBeUseful() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="When Testing May Be Useful"
          intro="Testing can be more useful when there is a specific uncertainty that sampling may help resolve."
        />

        <div className="mt-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SubHeading>A Hidden Source Is Suspected</SubHeading>
            <Prose>
              A persistent musty odor, previous water damage, or other property conditions may raise
              questions even when visible mold is not obvious.
            </Prose>
            <Prose>
              In those situations, the investigation may involve looking for concealed moisture or
              affected materials.
            </Prose>
            <Prose>
              Sampling may sometimes be one part of that evaluation, but a test result by itself
              does not locate or correct the source of unwanted moisture.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Post-Remediation Verification</SubHeading>
            <Prose>
              Depending on the project, testing or other verification measures may be considered
              after remediation.
            </Prose>
            <Prose>
              The appropriate approach depends on the scope of work and the criteria being used to
              evaluate completion.
            </Prose>
            <Prose>Before paying for post-remediation sampling, ask:</Prose>
            <KeyQuestion>
              What are we trying to verify, and how will the results be interpreted?
            </KeyQuestion>
            <Prose>
              Do not assume that every remediation project requires exactly the same
              post-remediation testing protocol.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Disputed or Uncertain Conditions</SubHeading>
            <Prose>
              Testing may sometimes provide additional documentation when conditions at a property
              are disputed or unclear.
            </Prose>
            <Prose>
              An owner, occupant, property manager, contractor, or another party may need
              information about a particular area or condition.
            </Prose>
            <Prose>
              The appropriate testing method depends on the question being investigated. Sampling
              should not be assumed to resolve every disagreement about a property.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>A Specific Question Needs an Answer</SubHeading>
            <Prose>
              Testing is most useful when the provider can explain what information it is intended to
              produce and why that information matters.
            </Prose>
            <Prose>
              If a recommendation for testing is unclear, ask what decision the result is expected to
              inform.
            </Prose>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function WhenTestingMayNotAdd() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="When Testing May Not Add Much"
          intro="There are also situations where sampling may provide relatively little additional decision value."
        />

        <div className="mt-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SubHeading>Visible Mold Is Already Present</SubHeading>
            <Prose>
              If mold growth is clearly visible, sampling simply to establish that mold exists may
              not be necessary.
            </Prose>
            <Prose>
              EPA guidance states that sampling is usually unnecessary when visible mold growth is
              present.
            </Prose>
            <Prose>The more useful questions may be:</Prose>
            <NeutralList
              items={[
                'Where is the unwanted moisture coming from?',
                'Has the moisture source been corrected?',
                'What materials are affected?',
                'Can affected materials be appropriately cleaned, or do some need to be removed?',
                'How extensive is the affected area?',
                'Is additional investigation needed?',
              ]}
            />
            <Prose>
              {/* TODO(internal-link): /mold-removal-vs-remediation/ not yet published. */}
              <ContextualLink href="/mold-removal-vs-remediation/" live={false}>
                Learn more about the difference between mold removal and mold remediation.
              </ContextualLink>
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>The Moisture Source Is Obvious</SubHeading>
            <Prose>
              Suppose there has been a known plumbing leak and affected materials are visibly wet or
              mold-damaged.
            </Prose>
            <Prose>
              Testing may not be the most useful first step simply because mold is involved.
            </Prose>
            <Prose>
              Understanding the extent of the moisture problem, stopping the unwanted water,
              evaluating affected materials, and determining what needs to be cleaned, removed,
              dried, or repaired may provide a clearer path forward.
            </Prose>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function TestingVsMoisture() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="Mold Testing vs. Moisture Investigation"
          intro="Mold testing and moisture investigation are related, but they answer different questions."
        />
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-site-border bg-site-surface">
        <div className="grid md:grid-cols-2">
          <div className="p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-site-fg">Mold Testing</h3>
            <p className="mt-4 text-base leading-relaxed text-site-muted-fg">
              Mold testing provides information about samples collected under particular conditions.
              Depending on the method, this may involve air samples, surface samples, or other
              material submitted for laboratory analysis.
            </p>
          </div>
          <div className="border-t border-site-border p-6 sm:p-8 md:border-l md:border-t-0">
            <h3 className="font-display text-lg font-semibold text-site-fg">
              Moisture Investigation
            </h3>
            <p className="mt-4 text-base leading-relaxed text-site-muted-fg">
              Moisture investigation focuses on where unwanted moisture is present, where it may be
              coming from, and what areas or materials may be affected.
            </p>
          </div>
        </div>
        <div className="border-t border-site-border bg-site-surface-2 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
            Key distinction
          </p>
          <p className="mt-3 text-base leading-relaxed text-site-fg">
            A mold sample cannot repair a plumbing leak, stop water intrusion, dry wet materials, or
            automatically establish the full extent of concealed moisture. Likewise, a moisture
            investigation does not necessarily provide the same information as laboratory analysis.
            The appropriate approach depends on what is already known about the property and what
            information is still needed.
          </p>
        </div>
      </div>
    </Section>
  )
}

export function ProfessionalEvaluation() {
  const items = [
    'discussing current and previous water problems',
    'looking for visible mold or suspected affected areas',
    'evaluating musty odors or staining',
    'investigating possible moisture sources',
    'assessing relevant building materials',
    'considering moisture conditions in accessible materials',
    'reviewing previous repairs or water events',
    'identifying areas that may require further investigation',
    'evaluating accessibility of suspected concealed areas',
    'considering HVAC-related concerns where relevant',
    'determining whether sampling would provide useful additional information',
  ]
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="What a Professional Mold Evaluation May Include"
          intro="There is no single evaluation process appropriate for every property."
        />
        <Prose className="mt-6">
          Depending on the circumstances and the provider&apos;s role, an evaluation may include:
        </Prose>
      </div>

      <div className="mt-8 rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-site-muted-fg">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-site-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          The objective should be to understand the property conditions well enough to determine an
          appropriate next step.
        </Prose>
        <Prose>
          If remediation appears necessary, the discussion should move toward the affected areas,
          materials, moisture source, proposed scope, and responsibilities for any related repairs.
        </Prose>
        <p className="text-base leading-relaxed text-site-fg">
          <ContextualLink href="/" live>
            Learn about mold remediation help in Gettysburg.
          </ContextualLink>
        </p>
      </div>
    </Section>
  )
}

export function SamplingMethods() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="Air Testing, Surface Sampling, and Other Mold Tests"
          intro="Not all mold sampling provides the same type of information."
        />

        <div className="mt-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SubHeading>Air Sampling</SubHeading>
            <Prose>
              Air sampling collects samples intended to provide information about airborne material
              under the conditions present when the samples are taken.
            </Prose>
            <Prose>The results need context.</Prose>
            <Prose>
              An air sample is not a complete diagnosis of a building and should not be treated as a
              medical diagnosis of an occupant.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Surface Sampling</SubHeading>
            <Prose>Surface sampling collects material from a particular surface or location.</Prose>
            <Prose>
              It may provide information about the sampled material, but the result does not
              automatically establish the full extent of a moisture or mold problem elsewhere in the
              property.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Laboratory Analysis</SubHeading>
            <Prose>Collected samples may be submitted to a laboratory for analysis.</Prose>
            <Prose>
              Before paying for laboratory work, understand what is being analyzed, why, and how the
              results will be used.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Property and Moisture Evaluation</SubHeading>
            <Prose>
              Visual observations, moisture investigation, documentation of affected materials, and
              evaluation of previous or current water conditions may also form part of the broader
              investigation.
            </Prose>
            <Prose>
              No one method should automatically be treated as universally required or inherently
              superior.
            </Prose>
          </div>
        </div>
      </div>
    </Section>
  )
}

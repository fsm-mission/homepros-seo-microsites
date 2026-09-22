import { Section, SectionHeading } from '@repo/shared/components/section'
import { CostChangeMatrix } from './cost-change-matrix'
import { ContextualLink, KeyQuestion, NeutralList, Prose, SubHeading } from './primitives'

export function DirectCostAnswer() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="How Much Does Mold Remediation Cost in Gettysburg?" />
        <div className="mt-6 flex flex-col gap-5">
          <div className="rounded-lg border border-site-border bg-site-surface-2 p-6">
            <p className="text-base font-medium leading-relaxed text-site-fg sm:text-lg">
              We do not have a verified, representative Gettysburg pricing dataset that supports
              publishing a responsible local average.
            </p>
          </div>
          <Prose>
            The actual price depends on the affected area, materials involved, accessibility,
            containment, demolition, moisture-source repairs, reconstruction, and other
            project-specific conditions.
          </Prose>
          <div className="border-l-2 border-site-accent pl-5">
            <p className="text-base font-medium leading-relaxed text-site-fg sm:text-lg">
              The most useful way to evaluate cost is to understand the proposed scope and compare
              equivalent work.
            </p>
          </div>
          <p className="text-base leading-relaxed text-site-fg">
            If you need help with a mold problem,{' '}
            <ContextualLink href="/" live>
              request mold remediation help in Gettysburg
            </ContextualLink>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}

export function WhyNoOneSizePrice() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="Why There Is No One-Size-Fits-All Price" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            &ldquo;Mold remediation&rdquo; describes a type of work, not one standardized project.
          </Prose>
          <Prose>
            One property might involve an accessible affected area with limited material removal.
            Another might require containment, removal of damaged building materials, access to
            concealed spaces, correction of a moisture problem, drying, and reconstruction
            afterward.
          </Prose>
          <Prose>
            That means the total price can depend on several different categories of work:
          </Prose>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'affected area',
            'affected materials',
            'accessibility',
            'containment',
            'demolition and disposal',
            'moisture-source correction',
            'drying or moisture control',
            'reconstruction',
            'testing or verification when justified by the situation',
          ]}
        />
      </div>

      <Prose className="mt-8 max-w-3xl">
        Before deciding whether an estimate is high or low, understand{' '}
        <strong className="font-semibold text-site-fg">
          what work the estimate actually includes.
        </strong>
      </Prose>
    </Section>
  )
}

export function CostFactors() {
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="The Factors That Affect Mold Remediation Cost" />

        <div className="mt-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SubHeading>Affected Area</SubHeading>
            <Prose>
              The amount of affected material can influence labor, containment, material removal,
              cleaning, disposal, and restoration requirements.
            </Prose>
            <Prose>
              But visible square footage should not be treated as a complete price calculator. What
              can be seen from the room may not establish the full project scope.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Type of Material</SubHeading>
            <Prose>Different materials can require different approaches.</Prose>
            <Prose>
              The work involved with affected drywall, insulation, wood, flooring, trim, or other
              building materials may differ depending on their condition and whether they can be
              appropriately cleaned or need to be removed.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Demolition and Material Removal</SubHeading>
            <Prose>
              Some projects may require building materials to be removed to address affected
              materials or gain access to the area involved.
            </Prose>
            <Prose>
              Demolition can affect both the remediation scope and the amount of reconstruction
              required afterward.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Containment</SubHeading>
            <Prose>
              Containment may be appropriate depending on the work being performed and the
              conditions at the property.
            </Prose>
            <Prose>
              If containment is part of the proposed project, ask what it involves and why the
              contractor recommends it.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Moisture-Source Repairs</SubHeading>
            <Prose>
              Mold remediation and moisture correction are related, but they are not necessarily the
              same line item.
            </Prose>
            <Prose>
              A roof leak, plumbing problem, drainage issue, condensation problem, or another source
              of unwanted moisture may require separate work.
            </Prose>
            <Prose>
              Ask whether correcting the moisture source is included in the remediation proposal,
              handled by another provider, or excluded from the estimate.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Accessibility</SubHeading>
            <Prose>
              A readily accessible area may require a different amount of labor than an affected area
              behind finished walls, above ceilings, inside cavities, or in another
              difficult-to-reach location.
            </Prose>
            <Prose>Access can also influence demolition and reconstruction.</Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>HVAC Involvement</SubHeading>
            <Prose>
              If conditions involving the HVAC system are relevant to the project, the proposed
              scope may differ from work confined to accessible building surfaces.
            </Prose>
            <Prose>
              Do not assume HVAC work is necessary on every mold project. Ask why it is being
              recommended and what specifically is included.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Reconstruction</SubHeading>
            <Prose>
              Removing affected building materials can leave walls, ceilings, flooring, insulation,
              trim, or other finishes requiring restoration.
            </Prose>
            <Prose>
              Some remediation proposals include reconstruction. Others stop after remediation.
            </Prose>
            <Prose>That distinction can significantly change the total price.</Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Testing or Verification</SubHeading>
            <Prose>Testing is not automatically necessary for every mold situation.</Prose>
            <Prose>
              If testing or post-remediation verification is proposed, ask what question it is
              intended to answer, whether it changes a decision, and whether it is included in the
              estimate.
            </Prose>
            <p className="text-base leading-relaxed text-site-fg">
              <ContextualLink href="/mold-testing-gettysburg-pa/" live>
                Learn when mold testing may or may not be useful.
              </ContextualLink>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function CostChangeMatrixSection() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Scope comparison"
        title="What Changes the Cost?"
        intro="Use this matrix to understand why one remediation proposal may differ from another."
      />
      <CostChangeMatrix />

      <div className="mt-10 max-w-3xl flex flex-col gap-4">
        <Prose>The goal is not to attach a generic dollar amount to each factor.</Prose>
        <p className="font-display text-xl leading-snug text-site-fg text-balance sm:text-2xl">
          It is to understand which factors are driving the scope of your particular estimate.
        </p>
      </div>
    </Section>
  )
}

export function RemediationVsReconstruction() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="Remediation Costs vs. Reconstruction Costs"
          intro="One of the easiest ways to misunderstand a mold-remediation estimate is to assume every proposal covers the same phases of work."
        />
        <Prose className="mt-6">It may help to separate the project into three categories.</Prose>

        <div className="mt-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SubHeading>Moisture-Source Correction</SubHeading>
            <Prose>This addresses the condition contributing to unwanted moisture.</Prose>
            <Prose>
              Depending on the property, that might involve a plumbing repair, roof repair, drainage
              work, ventilation changes, or another moisture-related correction.
            </Prose>
            <Prose>The remediation provider may or may not perform that work.</Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Remediation</SubHeading>
            <Prose>
              This addresses affected areas and materials according to the project&apos;s defined
              scope.
            </Prose>
            <Prose>
              The work may include containment where appropriate, cleaning, material removal,
              disposal, drying or moisture control, and related remediation activities.
            </Prose>
          </div>

          <div className="flex flex-col gap-4 border-t border-site-border pt-12">
            <SubHeading>Reconstruction</SubHeading>
            <Prose>
              Reconstruction restores building materials and finishes removed during the work.
            </Prose>
            <Prose>
              That could involve replacing drywall, insulation, trim, flooring, paint, or other
              finishes depending on what was removed.
            </Prose>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-site-accent pl-6">
          <p className="font-display text-xl leading-snug text-site-fg text-balance sm:text-2xl">
            Two estimates can look dramatically different if one includes reconstruction and another
            ends when remediation is complete.
          </p>
        </div>

        <Prose className="mt-8">
          Before comparing totals, determine where each contractor&apos;s responsibility begins and
          ends.
        </Prose>
        <p className="mt-5 text-base leading-relaxed text-site-fg">
          <ContextualLink href="/mold-removal-vs-remediation/" live={false}>
            Learn more about the difference between mold removal and mold remediation.
          </ContextualLink>
        </p>
      </div>
    </Section>
  )
}

export function SmallVsHidden() {
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="Small Visible Areas vs. Hidden or Multi-Room Problems"
          intro="A small visible area does not automatically mean a simple project, and a concealed condition does not automatically mean an expensive one."
        />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>The relevant question is what the property conditions actually require.</Prose>
          <Prose>
            A more limited project may involve an accessible area, materials that can be addressed
            without extensive demolition, and a moisture source that has already been identified and
            corrected.
          </Prose>
          <Prose>A more complicated project might involve:</Prose>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'concealed affected materials',
            'multiple affected areas',
            'difficult access',
            'demolition',
            'containment',
            'unresolved moisture',
            'HVAC-related considerations',
            'reconstruction',
          ]}
        />
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>Visible size is only one part of the picture.</Prose>
        <div className="border-l-2 border-site-accent pl-5">
          <p className="text-base font-medium leading-relaxed text-site-fg sm:text-lg">
            Accessibility, affected materials, concealed conditions, containment, moisture problems,
            demolition, and reconstruction can matter alongside the size of the visible area.
          </p>
        </div>
      </div>
    </Section>
  )
}

export function EstimateShouldInclude() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading
          title="What Should Be Included in a Mold Remediation Estimate?"
          intro="A useful written estimate should make the proposed scope understandable."
        />
        <Prose className="mt-6">Before approving work, look for clarity about:</Prose>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'which rooms or areas are included',
            'which materials will be cleaned',
            'which materials will be removed',
            'containment, if applicable',
            'demolition',
            'disposal',
            'moisture-related work',
            'drying or moisture goals where applicable',
            'testing or verification, if proposed',
            'reconstruction',
            'exclusions',
            'warranties or guarantees actually being offered',
            'who is responsible for each portion of the project',
          ]}
        />
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          Do not assume that an item is included because another contractor included it in a
          different proposal.
        </Prose>
        <Prose>If something matters to your decision, get it clarified in writing.</Prose>
      </div>
    </Section>
  )
}

export function CompareQuotes() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="How to Compare Mold Remediation Quotes" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            Start by comparing the{' '}
            <strong className="font-semibold text-site-fg">scope</strong>, not just the bottom-line
            number.
          </Prose>
          <Prose>
            Suppose one contractor proposes cleaning certain materials while another proposes
            removing them.
          </Prose>
          <Prose>
            Or one estimate includes reconstruction while another stops after remediation.
          </Prose>
          <Prose>
            One may include moisture-source work. Another may expect you to hire someone else.
          </Prose>
          <Prose>
            One may recommend testing or verification for a specific reason. Another may not include
            it.
          </Prose>
          <Prose>Those are not necessarily equivalent projects.</Prose>
          <Prose>When comparing quotes, ask:</Prose>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'Are they addressing the same areas?',
            'Are they proposing the same cleaning or removal approach?',
            'Does each include the same containment work?',
            'Does either proposal include moisture-source correction?',
            'Is demolition included?',
            'Is reconstruction included?',
            'Is testing or verification included?',
            'What is excluded?',
            'What could change the price?',
          ]}
        />
      </div>

      <div className="mt-8 max-w-3xl border-l-2 border-site-accent pl-5">
        <p className="text-base font-medium leading-relaxed text-site-fg sm:text-lg">
          Compare equivalent scopes before comparing bottom-line prices.
        </p>
      </div>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-site-fg">
        <ContextualLink href="/choosing-a-mold-remediation-contractor/" live={false}>
          Learn what to look for when choosing a mold remediation contractor.
        </ContextualLink>
      </p>
    </Section>
  )
}

export function ScopePriceChanges() {
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="How Are Scope and Price Changes Handled?" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>Some conditions may not be fully visible before work begins.</Prose>
          <Prose>
            If opening a wall, removing material, or accessing a concealed area reveals additional
            affected material or moisture, the proposed scope may need to change.
          </Prose>
          <Prose>
            That does not mean every remediation project will uncover additional work. It means you
            should understand the process{' '}
            <strong className="font-semibold text-site-fg">before</strong> an unexpected condition
            arises.
          </Prose>
          <Prose>Ask:</Prose>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'What conditions could change the scope?',
            'How will additional work be documented?',
            'Will I receive an updated written scope or price?',
            'Who must approve additional work?',
            'Does additional work proceed automatically, or does it wait for authorization?',
          ]}
        />
      </div>

      <div className="mt-8 max-w-3xl">
        <KeyQuestion>
          Before work starts, ask how unexpected conditions and price changes are approved.
        </KeyQuestion>
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          That conversation can help prevent confusion over what was originally included and what
          constitutes additional work.
        </Prose>
        <p className="text-base leading-relaxed text-site-fg">
          If you are reviewing a proposed remediation scope and need help finding a provider,{' '}
          <ContextualLink href="/" live>
            request mold remediation help in Gettysburg
          </ContextualLink>
          .
        </p>
      </div>
    </Section>
  )
}

export function InsuranceCoverage() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="Does Insurance Cover Mold Remediation?" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            Insurance coverage depends on the individual policy and the circumstances involved.
          </Prose>
          <Prose>
            Do not assume mold remediation is either automatically covered or automatically excluded
            based on a general online statement.
          </Prose>
          <Prose>
            If insurance may be relevant to your situation, review your policy and contact your
            insurer or an appropriate insurance professional for guidance about your specific
            coverage.
          </Prose>
          <Prose>
            Written documentation from a remediation provider may help describe property conditions,
            proposed work, and project scope, but the contractor should not be treated as the final
            authority on what your policy covers.
          </Prose>
        </div>
      </div>
    </Section>
  )
}

export function EstimateMoreThanExpected() {
  return (
    <Section tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="If the Estimate Is More Than You Expected" />
        <div className="mt-6 flex flex-col gap-5">
          <Prose>
            If a mold remediation estimate is higher than expected, start by making sure you
            understand the scope before deciding what can or cannot be changed.
          </Prose>
          <Prose>Ask for a written proposal that distinguishes, where practical:</Prose>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <NeutralList
          items={[
            'remediation work',
            'moisture-source repairs',
            'reconstruction',
            'additional or optional work',
          ]}
        />
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          Ask which items are necessary to address the identified mold or moisture problem and why.
        </Prose>
        <Prose>
          If you compare providers, compare equivalent scopes rather than only the total price. A
          lower estimate may simply exclude work included in another proposal.
        </Prose>
        <Prose>
          You can also ask individual providers whether they offer payment options that apply to the
          project. Availability and terms vary by provider.
        </Prose>
      </div>
    </Section>
  )
}

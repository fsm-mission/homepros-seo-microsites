import { ShieldCheck } from 'lucide-react'
import { Section, SectionHeading } from '@repo/shared/components/section'
import { RelationshipDisclosure } from '@repo/shared/components/relationship-disclosure'
import { SourceNote } from '@repo/shared/components/source-note'

const steps = [
  {
    title: 'Verify the provider in current PA DEP records',
    body: 'Confirm the individual and/or firm as appropriate using current Pennsylvania information.',
  },
  {
    title: 'Confirm certification for the relevant service',
    body: 'Testing and mitigation are different services. Make sure the certification shown applies to the service you need.',
  },
  {
    title: 'Confirm current status',
    body: 'Do not assume an old certificate, badge, or website statement establishes current certification.',
  },
  {
    title: 'Review the proposed scope and estimate',
    body: 'Understand the system being proposed, routing, included work, price, and responsibilities before agreeing to installation.',
  },
  {
    title: 'Understand post-installation testing',
    body: 'Ask how the home’s radon concentration will be measured after installation so system performance can be evaluated.',
  },
  {
    title: 'Review warranties and service responsibilities',
    body: 'Ask what is covered, for how long, who handles future service, and what responsibilities belong to the provider or homeowner.',
  },
]

export function Certification() {
  return (
    <Section id="certification" tone="muted">
      <SectionHeading
        eyebrow="Choosing a provider"
        title="Verify a Pennsylvania-Certified Radon Mitigator"
        intro="Pennsylvania regulates radon service providers, and PA DEP maintains information homeowners can use to verify radon professionals."
        tone="muted"
      />

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-site-muted-fg">
        Don&rsquo;t rely only on a website badge or a contractor saying they are &ldquo;certified.&rdquo;
        Use current Pennsylvania records as part of your contractor-verification process.
      </p>

      <h3 className="mt-10 font-display text-xl font-semibold text-site-fg">
        Before Hiring a Radon Mitigator
      </h3>
      <ol className="mt-5 grid gap-4 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-lg border border-site-border bg-site-surface p-5"
          >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-site-primary font-mono text-sm font-semibold text-site-primary-fg">
              {i + 1}
            </span>
            <div>
              <p className="font-medium text-site-fg">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-site-muted-fg">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex items-start gap-3 rounded-lg border border-site-primary/30 bg-site-surface p-5">
        <ShieldCheck className="size-6 shrink-0 text-site-primary" />
        <p className="text-sm leading-relaxed text-site-fg">
          Certification verifies applicable credentials or requirements; it should not be
          interpreted as a PA DEP quality ranking, recommendation, or endorsement of a particular
          provider.
        </p>
      </div>

      <p className="mt-6 font-mono text-sm text-site-primary">
        Learn how to verify a Pennsylvania radon provider.
      </p>

      <div className="mt-8">
        <RelationshipDisclosure>
          References to Pennsylvania radon certification are provided so you can independently verify
          a provider&apos;s credentials using official Commonwealth resources. York Radon Help is not
          a certifying body and does not issue or confirm certifications.
        </RelationshipDisclosure>
      </div>
      <SourceNote className="mt-4">
        Sources used in this section: Pennsylvania Department of Environmental Protection
      </SourceNote>
    </Section>
  )
}

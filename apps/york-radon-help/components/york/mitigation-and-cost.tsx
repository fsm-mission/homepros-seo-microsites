import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const systemParts = [
  {
    title: 'A suction point',
    body: 'An opening or connection is established to create suction beneath an appropriate portion of the structure.',
  },
  {
    title: 'Piping',
    body: 'Pipe carries soil gas away from beneath the building.',
  },
  {
    title: 'A radon fan',
    body: 'A purpose-designed fan creates the pressure difference needed for the system.',
  },
  {
    title: 'A discharge route',
    body: 'The system vents radon-containing gas outdoors at an appropriate location.',
  },
  {
    title: 'Supporting sealing work',
    body: 'Certain openings may be sealed as part of supporting system performance, depending on the property and design.',
  },
  {
    title: 'Crawlspace approaches where applicable',
    body: 'Properties with crawlspaces may require a membrane or other system design suited to those conditions.',
  },
  {
    title: 'Post-installation measurement',
    body: 'The home’s radon level should be measured after mitigation to determine system performance.',
  },
]

const flow = [
  'Soil beneath home',
  'Suction point',
  'Vent piping',
  'Radon fan',
  'Outdoor discharge',
]

export function WhatMitigationInvolves() {
  return (
    <Section id="mitigation" tone="surface">
      <SectionHeading
        eyebrow="How mitigation works"
        title="How Radon Mitigation Systems Reduce Indoor Radon"
        intro="A radon mitigation system is designed to reduce the amount of radon entering or accumulating inside a building."
      />

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-site-muted-fg">
        The exact design depends on the property. One of the most common approaches involves soil
        depressurization, which creates suction beneath the home and directs radon-containing soil
        gas outside before it can accumulate indoors.
      </p>

      <h3 className="mt-10 font-display text-xl font-semibold text-site-fg">
        A Typical System May Include
      </h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {systemParts.map((part) => (
          <div
            key={part.title}
            className="rounded-lg border border-site-border bg-site-bg p-5"
          >
            <h4 className="font-display text-base font-semibold text-site-fg">{part.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-site-muted-fg">{part.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-site-primary/30 bg-site-surface-2 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-site-accent">
          Simple System Concept
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
          {flow.map((node, i) => (
            <div key={node} className="flex items-center gap-2">
              <span className="rounded-md border border-site-border bg-site-bg px-3 py-1.5 font-mono text-sm text-site-fg">
                {node}
              </span>
              {i < flow.length - 1 && (
                <span aria-hidden className="font-mono text-site-primary">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-base leading-relaxed text-site-fg">
        The exact number of suction points, pipe route, fan selection, crawlspace treatment, and
        other design decisions should be based on the individual property rather than a generic
        installation plan.
      </p>
      <p className="mt-4 font-mono text-sm text-site-primary">
        See how radon mitigation systems work.
      </p>
      <SourceNote className="mt-4">
        Sources used in this section: U.S. Environmental Protection Agency · Pennsylvania Department
        of Environmental Protection
      </SourceNote>
    </Section>
  )
}

const costFactors = [
  'foundation type and layout',
  'multiple foundation areas',
  'finished basement areas',
  'crawlspaces',
  'sump pits',
  'number of suction points needed',
  'system routing',
  'electrical requirements',
  'fan selection',
  'accessibility',
  'exterior versus other appropriate routing options',
  'aesthetic considerations',
  'other property-specific installation requirements',
]

export function CostFactors() {
  return (
    <Section id="cost-factors" tone="default">
      <SectionHeading
        eyebrow="Cost"
        title="What Affects Radon Mitigation Cost in York?"
        intro="There isn’t a responsible single “York average” we can give every homeowner."
      />

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-site-muted-fg">
        You may see specific dollar ranges published online, but a quoted range is not necessarily
        the same thing as a representative study of actual York-area mitigation projects. We would
        rather explain the variables than present an unsupported local average as fact.
      </p>

      <p className="mt-8 text-base leading-relaxed text-site-fg">
        The cost of a radon mitigation project can depend on factors such as:
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
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

      <div className="mt-10 rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-site-fg">
          Compare the Scope, Not Just the Price
        </h3>
        <p className="mt-3 text-base leading-relaxed text-site-muted-fg">
          When reviewing estimates, the most useful comparison is not simply which contractor has
          the lowest total.
        </p>
        <p className="mt-4 text-base font-medium leading-relaxed text-site-fg">
          Compare the proposed system design and scope &mdash; not just the total price.
        </p>
        <p className="mt-4 text-base leading-relaxed text-site-muted-fg">
          Ask what system is being proposed, why that design fits the property, what work is
          included, how post-installation performance will be checked, and whether the estimates you
          are comparing actually cover equivalent work.
        </p>
      </div>

      <p className="mt-6 font-mono text-sm text-site-primary">
        See the factors that can affect radon mitigation cost in York.
      </p>
    </Section>
  )
}

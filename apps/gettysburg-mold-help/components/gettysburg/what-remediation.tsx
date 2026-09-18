import { Droplets, PanelsTopLeft, Trash2, Wind, Hammer, CircleCheckBig } from 'lucide-react'
import { Section, SectionHeading } from '@repo/shared/components/section'
import { SourceNote } from '@repo/shared/components/source-note'

const parts = [
  {
    icon: Droplets,
    title: 'Finding the Moisture Source',
    body: 'Mold and moisture problems can return when the underlying source is not addressed. Identifying leaks, water intrusion, excessive moisture, or other contributing conditions is an important part of evaluating the problem.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Containing Affected Areas',
    body: 'Depending on the location and scope of the work, containment may be used to help isolate affected areas while remediation is underway.',
  },
  {
    icon: Trash2,
    title: 'Removing or Cleaning Materials',
    body: 'Some materials may be cleaned while others may need to be removed. The appropriate approach depends on the material, its condition, and the extent of the problem.',
  },
  {
    icon: Wind,
    title: 'Drying and Moisture Control',
    body: 'Addressing wet or damp conditions is an important part of correcting the environment that allowed the problem to develop.',
  },
  {
    icon: Hammer,
    title: 'Repair and Reconstruction',
    body: 'If remediation requires removing drywall, flooring, insulation, trim, or other building materials, repair or reconstruction may also be needed.',
  },
  {
    icon: CircleCheckBig,
    title: 'Verifying the Problem Was Addressed',
    body: 'The important question is not simply whether visible mold is gone, but whether the conditions contributing to the problem have been properly addressed.',
  },
]

export function WhatRemediationInvolves() {
  return (
    <Section id="what-remediation-involves" tone="default">
      <SectionHeading
        eyebrow="Understanding the work"
        title="What Mold Remediation Involves"
        intro="Mold remediation is about more than making visible mold disappear. The appropriate scope depends on the property, affected materials, extent of moisture, accessibility, and other conditions found during evaluation."
      />
      <ol className="mt-12 flex flex-col">
        {parts.map((part, index) => {
          const isLast = index === parts.length - 1
          return (
            <li key={part.title} className="group relative flex gap-5 sm:gap-8">
              {/* Marker column: step number, icon, connecting rule */}
              <div className="relative flex flex-col items-center">
                <span className="flex flex-col items-center gap-2 pt-1">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-site-primary/70">
                    {`Step ${String(index + 1).padStart(2, '0')}`}
                  </span>
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-site-border bg-site-surface text-site-primary shadow-sm">
                    <part.icon className="size-5" />
                  </span>
                </span>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-gradient-to-b from-site-border to-site-border/30"
                  />
                )}
              </div>
              {/* Text column */}
              <div className={isLast ? 'pb-0 pt-1' : 'pb-10 pt-1 sm:pb-12'}>
                <h3 className="font-display text-xl font-semibold text-site-fg">{part.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-site-muted-fg">{part.body}</p>
              </div>
            </li>
          )
        })}
      </ol>
      <SourceNote className="mt-8 not-italic text-site-muted-fg">
        Not sure how remediation differs from simply removing mold? A provider can help you
        understand the difference between mold removal and remediation for your situation.
      </SourceNote>
    </Section>
  )
}

import Link from 'next/link'
import { Section, SectionHeading } from '@repo/shared/components/section'

/**
 * Related cluster pages. Published destinations render as links; unpublished
 * ones render as plain text to avoid broken links. Convert each entry to a
 * <Link> once the corresponding route goes live.
 */
const RESOURCES: { label: string; href: string; live: boolean }[] = [
  { label: 'Mold Testing in Gettysburg, PA', href: '/mold-testing-gettysburg-pa/', live: true },
  {
    label: 'How to Choose a Mold Remediation Contractor',
    href: '/choosing-a-mold-remediation-contractor/',
    live: false,
  },
  { label: 'Mold Removal vs. Mold Remediation', href: '/mold-removal-vs-remediation/', live: false },
  { label: 'Sources & Methodology', href: '/sources-methodology/', live: false },
]

export function RelatedResources() {
  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="Related Resources" />
        <ul className="mt-8 flex flex-col divide-y divide-site-border border-y border-site-border">
          {RESOURCES.map((resource) => (
            <li key={resource.href} className="py-4">
              {resource.live ? (
                <Link
                  href={resource.href}
                  className="font-display text-lg font-medium text-site-primary underline decoration-site-accent/50 underline-offset-4 transition-colors hover:decoration-site-accent"
                >
                  {resource.label}
                </Link>
              ) : (
                // TODO(internal-link): activate as a <Link> when this route is published.
                <span className="font-display text-lg font-medium text-site-fg">
                  {resource.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

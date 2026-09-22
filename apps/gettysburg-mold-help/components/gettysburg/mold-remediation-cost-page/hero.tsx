import { Container } from '@repo/shared/components/container'
import { Breadcrumbs } from './breadcrumbs'
import { Prose } from './primitives'

/**
 * DecisionSummary — visually emphasizes concepts already present in the
 * approved writer copy. It must not introduce new conclusions; every line
 * below appears verbatim in the approved copy.
 */
function DecisionSummary() {
  const points = [
    'The answer depends heavily on what the project actually requires.',
    'We do not have a verified, representative Gettysburg pricing dataset that supports publishing a responsible local average.',
    'The most useful way to evaluate cost is to understand the proposed scope and compare equivalent work.',
  ]
  return (
    <aside
      aria-label="Decision summary"
      className="rounded-lg border border-site-border bg-site-surface-2 p-6 sm:p-8"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] font-mono text-site-accent">
        Decision summary
      </span>
      <ul className="mt-5 flex flex-col divide-y divide-site-border">
        {points.map((point, i) => (
          <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
            <span
              className="font-display text-lg font-semibold text-site-accent"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-base leading-relaxed text-site-fg">{point}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function EditorialPageHero() {
  return (
    <section id="top" className="bg-site-bg pt-8 pb-14 sm:pt-10 sm:pb-16">
      <Container>
        <Breadcrumbs />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl">
              What Does Mold Remediation Cost in Gettysburg, PA?
            </h1>
            <Prose>
              If you&apos;ve found mold or a persistent moisture problem in your Gettysburg property,
              one of your first questions may be:{' '}
              <strong className="font-semibold text-site-fg">
                How much will remediation cost?
              </strong>
            </Prose>
            <Prose>The answer depends heavily on what the project actually requires.</Prose>
            <Prose>
              Two jobs described as &ldquo;mold remediation&rdquo; can involve very different
              affected areas, materials, containment needs, demolition, moisture-source repairs, and
              reconstruction. That makes a generic price less useful than understanding the scope
              behind the estimate.
            </Prose>
          </div>

          <DecisionSummary />
        </div>
      </Container>
    </section>
  )
}

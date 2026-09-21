import { Container } from '@repo/shared/components/container'
import { Breadcrumbs } from './breadcrumbs'
import { ContextualLink, Prose } from './primitives'

/**
 * DecisionSummary — visually emphasizes concepts already present in the opening
 * writer copy. It must not introduce new conclusions; every line below appears
 * verbatim in the approved copy.
 */
function DecisionSummary() {
  const points = [
    'A useful mold test should help answer a specific question or inform a decision—not simply add another service to the project.',
    'EPA guidance states that when visible mold growth is present, sampling is usually unnecessary.',
    'The CDC also does not recommend routine mold testing.',
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
            <span className="font-display text-lg font-semibold text-site-accent" aria-hidden="true">
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
              Mold Testing in Gettysburg, PA: When It Helps and When It May Not
            </h1>
            <Prose>
              If you&apos;ve found mold, noticed a persistent musty odor, or discovered signs of
              moisture, you may be wondering whether mold testing should be your next step.
            </Prose>
            <Prose>
              The better question is often: Do I need mold testing, or is there a more useful next
              step?
            </Prose>
            <Prose>
              Mold testing can provide useful information in the right circumstances, but it is not
              automatically necessary whenever mold is suspected or visible. Sometimes the more
              important step is investigating the moisture source, determining what materials are
              affected, and deciding what needs to be cleaned, removed, dried, or repaired.
            </Prose>
            <Prose>
              A useful mold test should help answer a specific question or inform a decision—not
              simply add another service to the project.
            </Prose>
            {/* Early contextual CTA — destination is the live homepage request experience. */}
            <p className="text-base leading-relaxed text-site-fg">
              If you already have a mold or moisture problem and need help determining your next
              step,{' '}
              <ContextualLink href="/" live>
                request mold remediation help in Gettysburg
              </ContextualLink>
              .
            </p>
          </div>

          <DecisionSummary />
        </div>
      </Container>
    </section>
  )
}

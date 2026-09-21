import Link from 'next/link'
import { Container } from '@repo/shared/components/container'

export function RelationshipCta() {
  return (
    <section id="request" className="scroll-mt-20 bg-site-dark py-16 text-site-dark-fg sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Not Sure Whether You Need Testing or Remediation?
          </h2>
          <p className="text-base leading-relaxed text-site-dark-fg/85 sm:text-lg">
            You do not need to order a mold test simply because you are uncertain about what to do
            next.
          </p>
          <p className="text-base leading-relaxed text-site-dark-fg/85 sm:text-lg">
            If you&apos;ve found visible mold, noticed persistent moisture or a musty odor, or are
            dealing with previous water damage, start by understanding what is happening at the
            property and what information is actually needed to make the next decision.
          </p>

          <div className="flex flex-col gap-3 rounded-xl border border-site-dark-fg/15 bg-site-dark-fg/5 p-6">
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              GettysburgMoldHelp.com is managed by HomePros Team.
            </p>
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              HomePros Team reviews and manages service requests and may help connect homeowners and
              property owners with an appropriate participating provider serving the Gettysburg area.
            </p>
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              Participating independent providers are responsible for their own evaluations, testing
              recommendations, remediation scopes, estimates, pricing, availability, and services
              contracted directly with them.
            </p>
          </div>

          <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-site-primary px-6 py-3 text-base font-semibold text-site-primary-fg transition-colors hover:bg-site-primary-hover"
            >
              Request Mold Remediation Help
            </Link>
            <Link
              href="/"
              className="text-base font-medium text-site-dark-fg underline decoration-site-dark-fg/40 underline-offset-4 transition-colors hover:decoration-site-dark-fg"
            >
              Get Mold Remediation Help in Gettysburg
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

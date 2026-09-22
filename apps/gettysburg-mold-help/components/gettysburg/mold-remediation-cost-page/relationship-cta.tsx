import Link from 'next/link'
import { Container } from '@repo/shared/components/container'

const FLOW = [
  'what is affected',
  'what will be cleaned or removed',
  'how moisture will be addressed',
  'what is included',
  'what is excluded',
  'how scope changes are approved',
  'what happens after remediation',
]

export function RelationshipCta() {
  return (
    <section id="request" className="scroll-mt-20 bg-site-dark py-16 text-site-dark-fg sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Need Help With Mold Remediation in Gettysburg?
          </h2>
          <p className="text-base leading-relaxed text-site-dark-fg/85 sm:text-lg">
            A mold remediation price only makes sense in the context of the work included.
          </p>
          <p className="text-base leading-relaxed text-site-dark-fg/85 sm:text-lg">
            Before hiring, understand:
          </p>

          <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {FLOW.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-site-dark-fg/15 bg-site-dark-fg/5 px-3 py-1.5 text-sm font-medium text-site-dark-fg/90">
                  {step}
                </span>
                {i < FLOW.length - 1 ? (
                  <span aria-hidden="true" className="text-site-dark-fg/40">
                    &rarr;
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-2 flex flex-col gap-3 rounded-xl border border-site-dark-fg/15 bg-site-dark-fg/5 p-6">
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              GettysburgMoldHelp.com is managed by HomePros Team.
            </p>
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              HomePros Team reviews and manages service requests and may help connect homeowners
              with an appropriate participating provider serving the Gettysburg area.
            </p>
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              HomePros Team does not perform the mold remediation work described on this page.
            </p>
            <p className="text-base leading-relaxed text-site-dark-fg/90">
              Participating independent providers are responsible for evaluating the property,
              determining their own recommended scope, preparing their own estimates, establishing
              pricing and availability, and performing services the homeowner chooses to hire.
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
              Return to Mold Remediation Help in Gettysburg
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

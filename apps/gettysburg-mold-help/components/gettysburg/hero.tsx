import Image from 'next/image'
import { Container } from '@repo/shared/components/container'
import { SiteButton } from '@repo/shared/components/site-button'

export function GettysburgHero() {
  return (
    <section id="top" className="bg-site-bg pt-12 pb-16 sm:pt-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-site-border bg-site-surface px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-[0.14em] text-site-accent">
              Gettysburg &amp; Adams County
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Mold Remediation Help in Gettysburg, PA
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-site-muted-fg">
              If you&apos;ve found mold, noticed a persistent musty odor, or are dealing with
              moisture after a leak or water problem, figuring out what to do next can be stressful.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-site-muted-fg">
              Gettysburg Mold Help connects homeowners and property owners seeking mold remediation
              in Gettysburg and Adams County with an appropriate participating provider. The site is
              managed by HomePros Team — we help with the connection, while the provider evaluates
              the property, recommends the scope of work, and performs any services you choose to
              hire.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <SiteButton href="#request" variant="primary">
                Request Mold Remediation Help
              </SiteButton>
              <SiteButton href="#how-it-works" variant="secondary">
                Learn How the Process Works
              </SiteButton>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-site-border bg-site-surface shadow-sm">
              <Image
                src="/images/gettysburg-hero.png"
                alt="A historic brick and clapboard home exterior in a small Pennsylvania town"
                width={720}
                height={820}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

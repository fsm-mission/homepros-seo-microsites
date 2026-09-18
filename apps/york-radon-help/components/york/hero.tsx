import Image from 'next/image'
import { Container } from '@repo/shared/components/container'
import { SiteButton } from '@repo/shared/components/site-button'

export function YorkHero() {
  return (
    <section id="top" className="bg-site-bg pt-12 pb-16 sm:pt-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-site-border bg-site-surface px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-[0.14em] text-site-accent">
              York &amp; York County
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Radon Mitigation Help in York, PA
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-site-muted-fg">
              If you have a radon test result and aren&apos;t sure what to do next, you shouldn&apos;t
              have to sort through conflicting claims to figure it out.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-site-muted-fg">
              York Radon Help connects homeowners with an appropriate Pennsylvania-certified
              participating provider. The site is managed by HomePros Team — we review and manage the
              request, while participating providers handle testing, mitigation recommendations,
              pricing, installation, and services you choose to hire.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <SiteButton href="#request" variant="primary">
                Request Radon Mitigation Help
              </SiteButton>
              <SiteButton href="#when-recommended" variant="secondary">
                Check What Your Radon Result Means
              </SiteButton>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-site-border bg-site-surface shadow-sm">
              <Image
                src="/images/york-hero.png"
                alt="A modern suburban home exterior with a radon mitigation vent pipe on the side wall"
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

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const sites = [
  {
    href: '/gettysburg',
    domain: 'GettysburgMoldHelp.com',
    title: 'Mold Remediation Help in Gettysburg, PA',
    description:
      'Connecting Gettysburg and Adams County homeowners with an appropriate participating mold remediation provider.',
    image: '/images/gettysburg-hero.png',
    alt: 'Historic home exterior in a small Pennsylvania town',
  },
  {
    href: '/york',
    domain: 'YorkRadonHelp.com',
    title: 'Radon Mitigation Help in York, PA',
    description:
      'Connecting York-area homeowners with a Pennsylvania-certified participating radon mitigation provider.',
    image: '/images/york-hero.png',
    alt: 'Suburban home with a radon mitigation vent pipe',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-16 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            HomePros Team
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Local homeowner service resources
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            HomePros Team manages homeowner request and provider-matching resources for specific
            services and locations. Choose a resource below to learn more and request help.
          </p>
        </header>

        <div className="mt-12 grid flex-1 gap-6 md:grid-cols-2">
          {sites.map((site) => (
            <Link
              key={site.href}
              href={site.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={site.image || '/placeholder.svg'}
                  alt={site.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {site.domain}
                </span>
                <h2 className="text-xl font-semibold leading-snug">{site.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-600">{site.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-zinc-900">
                  Visit resource
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-xs leading-relaxed text-zinc-500">
          <p>
            These resources are independent lead-generation and homeowner-referral websites managed
            by HomePros Team. They are not government agencies and are not affiliated with or
            endorsed by the Commonwealth of Pennsylvania. Participating providers are independent and
            responsible for the services they perform.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} HomePros Team. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

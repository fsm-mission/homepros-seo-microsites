import type { Metadata } from 'next'
import { SiteHeader } from '@repo/shared/components/site-header'
import { SiteFooter } from '@repo/shared/components/site-footer'
import { TrustStrip } from '@repo/shared/components/trust-strip'
import { HowItWorks } from '@repo/shared/components/how-it-works'
import { Faq } from '@repo/shared/components/faq'
import { Section, SectionHeading } from '@repo/shared/components/section'
import { RequestSection } from '@repo/shared/components/request-section'
import { FinalCta } from '@repo/shared/components/final-cta'
import { AboutSite } from '@repo/shared/components/about-site'
import { RelationshipDisclosure } from '@repo/shared/components/relationship-disclosure'
import { yorkConfig } from '@/lib/site-config'
import { buildMetadata, webPageJsonLd, webSiteJsonLd, organizationJsonLd } from '@repo/shared/lib/seo'
import { YorkHero } from '@/components/york/hero'
import { ResultScale } from '@/components/york/result-scale'
import { MapLimitations, HousingComparison } from '@/components/york/map-and-housing'
import { WhatMitigationInvolves, CostFactors } from '@/components/york/mitigation-and-cost'
import { Certification } from '@/components/york/certification'
import { Methodology } from '@/components/york/methodology'
import { YorkData } from '@/components/york/york-data'
import { yorkFaqs } from '@/components/york/faqs'

const CANONICAL = 'https://yorkradonhelp.com'

export const metadata: Metadata = buildMetadata(yorkConfig, CANONICAL)

const steps = [
  {
    title: 'Tell Us About Your Home',
    body: 'Submit your contact information, ZIP Code, and whether you already have a radon test result.',
  },
  {
    title: 'Share Your Result If You Have One',
    body: 'If you know the measured level in pCi/L, include it with your request. If you don’t have a result yet, just select No or Not Sure.',
  },
  {
    title: 'HomePros Team Reviews Your Request',
    body: 'We review the information you provide to better understand the type of assistance you’re seeking.',
  },
  {
    title: 'Connect With an Appropriate Provider',
    body: 'When appropriate, your request may be matched or referred to a participating provider who can discuss testing, mitigation, availability, system options, scope, pricing, and next steps with you.',
  },
]

export default function YorkPage() {
  return (
    <div className={`${yorkConfig.theme} min-h-screen bg-site-bg text-site-fg`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd(yorkConfig, CANONICAL)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd(
              yorkConfig,
              CANONICAL,
              'Homeowners in the York area can request radon mitigation help and connect with a Pennsylvania-certified participating provider.',
            ),
          ),
        }}
      />

      <SiteHeader site={yorkConfig} />
      <main>
        <YorkHero />
        <TrustStrip
          items={[
            'Managed by HomePros Team',
            'PA-certified participating providers',
            'York City & York County focus',
            'Start with your test result',
          ]}
        />
        <ResultScale />
        <MapLimitations />
        <HousingComparison />
        <WhatMitigationInvolves />
        <CostFactors />
        <Certification />
        <YorkData />

        <HowItWorks
          title="Get Help Finding Radon Mitigation in York"
          intro="If your test result indicates you need to take action — or you're simply unsure what the next step should be — HomePros Team can help you start the process of finding an appropriate participating provider serving the York area. HomePros Team manages the request and matching process. Participating providers perform the actual radon services you choose to hire."
          steps={steps}
        />

        <RequestSection
          site="york"
          eyebrow="Request help"
          title="Start With Your Radon Result"
          intro="If you have a test result, share it below — but you can also request help if you haven't tested yet. HomePros Team reviews every request and connects you with a certified provider when appropriate."
          points={[
            'Have a result? Share the pCi/L reading if you know it',
            "Haven't tested yet? You can still request help",
            'Providers handle testing, design, and follow-up verification',
          ]}
          showRadonFields
          descriptionLabel="Brief description of your home or situation"
          descriptionPlaceholder="Foundation type, when you tested, and anything else that would help."
        />

        <Section id="faqs" tone="surface">
          <SectionHeading
            eyebrow="Questions & answers"
            title="Radon Mitigation FAQs"
            intro="Common questions from York-area homeowners about radon results, testing, and mitigation."
          />
          <div className="mt-10">
            <Faq items={yorkFaqs} />
          </div>
        </Section>

        <Methodology />

        <FinalCta
          title="Have a Radon Result You're Unsure About?"
          body="You don't need to interpret your result alone or decide on a system before asking for help. Share what you know and HomePros Team can connect you with a Pennsylvania-certified provider."
          cta="Request Radon Mitigation Help"
          footnote="Have a result or haven't tested yet? Either way, start by telling us about your home."
        />

        <AboutSite>
          <p>
            YorkRadonHelp.com is managed by HomePros Team as a resource for people seeking radon
            testing and mitigation help. HomePros Team manages the request and provider-matching
            process; participating providers are responsible for evaluating properties, designing
            systems, setting their own pricing and availability, performing follow-up testing, and
            performing services contracted directly with them.
          </p>
          <RelationshipDisclosure>
            York Radon Help is an independent homeowner-referral resource. It is not a government
            agency and is not affiliated with or endorsed by the Commonwealth of Pennsylvania or the
            Pennsylvania Department of Environmental Protection. References to certification are
            provided so you can independently verify providers using official sources.
          </RelationshipDisclosure>
        </AboutSite>
      </main>
      <SiteFooter site={yorkConfig} />
    </div>
  )
}

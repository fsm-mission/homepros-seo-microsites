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
import { gettysburgConfig } from '@/lib/site-config'
import { buildMetadata, webPageJsonLd, webSiteJsonLd, organizationJsonLd } from '@repo/shared/lib/seo'
import { GettysburgHero } from '@/components/gettysburg/hero'
import { WhatRemediationInvolves } from '@/components/gettysburg/what-remediation'
import { BuildingHistory } from '@/components/gettysburg/building-history'
import { MoldTesting } from '@/components/gettysburg/mold-testing'
import { CommonSituations, CostFactors } from '@/components/gettysburg/situations-and-cost'
import { ContractorChecklist, RentalConsiderations } from '@/components/gettysburg/contractor-checklist'
import { gettysburgFaqs } from '@/components/gettysburg/faqs'

const CANONICAL = 'https://gettysburgmoldhelp.com'

export const metadata: Metadata = buildMetadata(gettysburgConfig, CANONICAL)

const steps = [
  {
    title: 'Tell Us About the Property',
    body: 'Submit your contact information and a brief description of the mold, moisture, or water-related concern.',
  },
  {
    title: 'HomePros Team Reviews the Request',
    body: 'We review the information you provide so we can better understand the type of help you are seeking.',
  },
  {
    title: 'You May Be Connected With a Provider',
    body: 'When appropriate, your request may be matched or referred to a participating provider that can discuss the situation with you.',
  },
  {
    title: 'Discuss the Property and Your Options',
    body: 'The provider handles availability, inspection or evaluation, proposed scope, pricing, scheduling, and any services you decide to purchase.',
  },
]

export default function GettysburgPage() {
  return (
    <div className={`${gettysburgConfig.theme} min-h-screen bg-site-bg text-site-fg`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd(gettysburgConfig, CANONICAL)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd(
              gettysburgConfig,
              CANONICAL,
              'Homeowners seeking mold remediation in Gettysburg and Adams County can request help connecting with an appropriate participating provider.',
            ),
          ),
        }}
      />

      <SiteHeader site={gettysburgConfig} />
      <main>
        <GettysburgHero />
        <TrustStrip
          items={[
            'Managed by HomePros Team',
            'Gettysburg & Adams County focus',
            'Independent provider matching',
            'Request help without committing',
          ]}
        />
        <WhatRemediationInvolves />
        <BuildingHistory />
        <MoldTesting />
        <CommonSituations />
        <CostFactors />
        <ContractorChecklist />
        <RentalConsiderations />

        <HowItWorks
          title="How Gettysburg Mold Help Works"
          intro="You should know who you're contacting before submitting your information. GettysburgMoldHelp.com is managed by HomePros Team and does not present itself as the company performing mold remediation."
          steps={steps}
        />

        <RequestSection
          site="gettysburg"
          eyebrow="Request help"
          title="Tell Us What's Going On"
          intro="Start with a few details about the property and the mold or moisture problem. You do not need to diagnose the issue yourself before asking for help."
          points={[
            'No pressure to identify the type of mold yourself',
            'Share any known history of leaks or water damage',
            'HomePros Team reviews every request individually',
          ]}
          descriptionLabel="Brief description of the problem"
          descriptionPlaceholder="Where is the problem located? Any known leaks, water damage, or musty odors?"
        />

        <Section id="faqs" tone="default">
          <SectionHeading
            eyebrow="Questions & answers"
            title="Mold Remediation FAQs"
            intro="Common questions from Gettysburg homeowners, landlords, and renters."
          />
          <div className="mt-10">
            <Faq items={gettysburgFaqs} />
          </div>
        </Section>

        <FinalCta
          title="Need Mold Remediation Help in Gettysburg?"
          body="You do not need to know the exact type of mold or have the entire problem figured out before asking for help. Tell us what you've noticed and where the problem is located."
          cta="Request Mold Remediation Help"
          footnote="No pressure to diagnose the problem yourself. Start by telling us what's going on."
        />

        <AboutSite>
          <p>
            GettysburgMoldHelp.com is managed by HomePros Team as a resource for people seeking mold
            and moisture-related service help. HomePros Team manages the request and
            provider-matching process; participating providers are responsible for evaluating
            properties, proposing scopes of work, setting their own pricing and availability, and
            performing services contracted directly with them.
          </p>
          <RelationshipDisclosure>
            Gettysburg Mold Help is an independent homeowner-referral resource. It is not a
            government agency and is not affiliated with or endorsed by the Commonwealth of
            Pennsylvania. References to registration or licensing are provided so you can
            independently verify providers using official sources.
          </RelationshipDisclosure>
        </AboutSite>
      </main>
      <SiteFooter site={gettysburgConfig} />
    </div>
  )
}

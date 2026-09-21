import type { Metadata } from 'next'
import { SiteHeader } from '@repo/shared/components/site-header'
import { SiteFooter } from '@repo/shared/components/site-footer'
import { AboutSite } from '@repo/shared/components/about-site'
import { RelationshipDisclosure } from '@repo/shared/components/relationship-disclosure'
import { gettysburgConfig, IS_PRODUCTION } from '@/lib/site-config'
import { EditorialPageHero } from '@/components/gettysburg/mold-testing-page/hero'
import {
  DoYouNeedTesting,
  DecisionMatrixSection,
  SignsFurtherEvaluation,
  WhenTestingMayBeUseful,
  WhenTestingMayNotAdd,
  TestingVsMoisture,
  ProfessionalEvaluation,
  SamplingMethods,
} from '@/components/gettysburg/mold-testing-page/content-sections'
import { QuestionsChecklist } from '@/components/gettysburg/mold-testing-page/questions-checklist'
import {
  PennsylvaniaGuidance,
  RentersOwnersManagers,
} from '@/components/gettysburg/mold-testing-page/authority-sections'
import { CostFactors, AfterTesting } from '@/components/gettysburg/mold-testing-page/cost-and-next'
import { AccessibleFaq } from '@/components/gettysburg/mold-testing-page/accessible-faq'
import { RelationshipCta } from '@/components/gettysburg/mold-testing-page/relationship-cta'
import { RelatedResources } from '@/components/gettysburg/mold-testing-page/related-resources'

const CANONICAL = 'https://gettysburgmoldhelp.com/mold-testing-gettysburg-pa/'

/**
 * TODO(metadata): Final title/description strings are placeholders pending
 * copy/SEO approval. The primary keyword/service/location relationship
 * (mold testing · Gettysburg, PA) is preserved.
 */
const TITLE = 'Mold Testing in Gettysburg, PA: When It Helps and When It May Not | Gettysburg Mold Help'
const DESCRIPTION =
  'Deciding whether you need mold testing in Gettysburg, PA? Understand when testing helps, when it may not, and what questions to ask before paying for it. Managed by HomePros Team.'

export const metadata: Metadata = {
  metadataBase: new URL('https://gettysburgmoldhelp.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    siteName: gettysburgConfig.domain,
    title: TITLE,
    description: DESCRIPTION,
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Mold Testing in Gettysburg, PA: When It Helps and When It May Not',
  url: CANONICAL,
  description: DESCRIPTION,
  isPartOf: {
    '@type': 'WebSite',
    name: gettysburgConfig.domain,
    url: 'https://gettysburgmoldhelp.com',
  },
  publisher: { '@type': 'Organization', name: 'HomePros Team' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gettysburgmoldhelp.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Mold Testing in Gettysburg, PA',
      item: CANONICAL,
    },
  ],
}

export default function MoldTestingPage() {
  return (
    <div className={`${gettysburgConfig.theme} min-h-screen bg-site-bg text-site-fg`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SiteHeader site={gettysburgConfig} />
      <main>
        <EditorialPageHero />
        <DoYouNeedTesting />
        <DecisionMatrixSection />
        <SignsFurtherEvaluation />
        <WhenTestingMayBeUseful />
        <WhenTestingMayNotAdd />
        <TestingVsMoisture />
        <ProfessionalEvaluation />
        <SamplingMethods />
        <QuestionsChecklist />
        <PennsylvaniaGuidance />
        <RentersOwnersManagers />
        <CostFactors />
        <AfterTesting />
        <AccessibleFaq />
        <RelationshipCta />
        <RelatedResources />

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

import type { Metadata } from 'next'
import { SiteHeader } from '@repo/shared/components/site-header'
import { SiteFooter } from '@repo/shared/components/site-footer'
import { AboutSite } from '@repo/shared/components/about-site'
import { RelationshipDisclosure } from '@repo/shared/components/relationship-disclosure'
import { gettysburgConfig, IS_PRODUCTION } from '@/lib/site-config'
import { EditorialPageHero } from '@/components/gettysburg/mold-remediation-cost-page/hero'
import {
  DirectCostAnswer,
  WhyNoOneSizePrice,
  CostFactors,
  CostChangeMatrixSection,
  RemediationVsReconstruction,
  SmallVsHidden,
  EstimateShouldInclude,
  CompareQuotes,
  ScopePriceChanges,
  InsuranceCoverage,
  EstimateMoreThanExpected,
} from '@/components/gettysburg/mold-remediation-cost-page/content-sections'
import { QuestionsBeforeHiring } from '@/components/gettysburg/mold-remediation-cost-page/questions-checklist'
import { AccessibleFaq } from '@/components/gettysburg/mold-remediation-cost-page/accessible-faq'
import { RelationshipCta } from '@/components/gettysburg/mold-remediation-cost-page/relationship-cta'
import { RelatedResources } from '@/components/gettysburg/mold-remediation-cost-page/related-resources'

const CANONICAL = 'https://gettysburgmoldhelp.com/mold-remediation-cost-gettysburg-pa/'

const TITLE = 'Mold Remediation Cost in Gettysburg, PA | Cost Factors'
const DESCRIPTION =
  'Learn what affects mold remediation cost in Gettysburg, PA, how to compare estimates by scope, and what to ask before approving remediation work.'

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
  name: 'What Does Mold Remediation Cost in Gettysburg, PA?',
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
      name: 'Mold Remediation Cost in Gettysburg, PA',
      item: CANONICAL,
    },
  ],
}

export default function MoldRemediationCostPage() {
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
        <DirectCostAnswer />
        <WhyNoOneSizePrice />
        <CostFactors />
        <CostChangeMatrixSection />
        <RemediationVsReconstruction />
        <SmallVsHidden />
        <EstimateShouldInclude />
        <CompareQuotes />
        <ScopePriceChanges />
        <InsuranceCoverage />
        <EstimateMoreThanExpected />
        <QuestionsBeforeHiring />
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

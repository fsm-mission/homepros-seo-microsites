import type { Metadata } from 'next'
import { IS_PRODUCTION, type SiteConfig } from './site-config'

/**
 * TODO(metadata): Final title/description strings are placeholders pending
 * copy/SEO approval under the build-intake contract. The primary
 * keyword/service/location relationship is preserved.
 */
export function buildMetadata(site: SiteConfig, canonicalUrl: string): Metadata {
  const titlePlaceholder =
    site.key === 'gettysburg'
      ? 'Mold Remediation Help in Gettysburg, PA | Gettysburg Mold Help'
      : 'Radon Mitigation Help in York, PA | York Radon Help'

  const descriptionPlaceholder =
    site.key === 'gettysburg'
      ? 'Homeowners seeking mold remediation in Gettysburg and Adams County can request help. Managed by HomePros Team, connecting you with an appropriate participating provider.'
      : 'Homeowners in the York area can request radon mitigation help and connect with a Pennsylvania-certified participating provider. Managed by HomePros Team.'

  return {
    metadataBase: new URL(canonicalUrl),
    title: titlePlaceholder,
    description: descriptionPlaceholder,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: IS_PRODUCTION
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: site.domain,
      title: titlePlaceholder,
      description: descriptionPlaceholder,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HomePros Team',
    description:
      'HomePros Team manages homeowner service-help requests and the provider-matching process for its resource microsites.',
  }
}

export function webSiteJsonLd(site: SiteConfig, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.domain,
    url,
    publisher: { '@type': 'Organization', name: 'HomePros Team' },
  }
}

export function webPageJsonLd(site: SiteConfig, url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: site.tagline,
    url,
    description,
    isPartOf: { '@type': 'WebSite', name: site.domain, url },
  }
}

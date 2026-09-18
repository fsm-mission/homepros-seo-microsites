export type NavItem = { label: string; href: string }

export type SiteKey = 'gettysburg' | 'york'

export type SiteConfig = {
  key: SiteKey
  theme: string
  name: string
  domain: string
  basePath: string
  tagline: string
  nav: NavItem[]
}

/**
 * Indexing is opt-in. Only when NEXT_PUBLIC_SITE_ENV is explicitly "production"
 * do pages become indexable. Every preview/staging deployment stays noindex.
 */
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_SITE_ENV === 'production'

export const gettysburgConfig: SiteConfig = {
  key: 'gettysburg',
  theme: 'theme-gettysburg',
  name: 'Gettysburg Mold Help',
  domain: 'GettysburgMoldHelp.com',
  basePath: '/gettysburg',
  tagline: 'Mold Remediation Help in Gettysburg, PA',
  nav: [
    { label: 'Mold Help', href: '#what-remediation-involves' },
    { label: 'Costs', href: '#cost-factors' },
    { label: 'Testing', href: '#mold-testing' },
    { label: 'Resources', href: '#contractor-checklist' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Request Help', href: '#request' },
  ],
}

export const yorkConfig: SiteConfig = {
  key: 'york',
  theme: 'theme-york',
  name: 'York Radon Help',
  domain: 'YorkRadonHelp.com',
  basePath: '/york',
  tagline: 'Radon Mitigation Help in York, PA',
  nav: [
    { label: 'Your Result', href: '#when-recommended' },
    { label: 'What Mitigation Involves', href: '#mitigation' },
    { label: 'Costs', href: '#cost-factors' },
    { label: 'Sources', href: '#methodology' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Request Help', href: '#request' },
  ],
}

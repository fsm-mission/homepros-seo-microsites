import type { SiteConfig } from '@repo/shared/lib/site-config'

export { IS_PRODUCTION } from '@repo/shared/lib/site-config'
export type { SiteConfig, SiteKey, NavItem } from '@repo/shared/lib/site-config'

export const gettysburgConfig: SiteConfig = {
  key: 'gettysburg',
  theme: 'theme-gettysburg',
  name: 'Gettysburg Mold Help',
  domain: 'GettysburgMoldHelp.com',
  basePath: '/',
  tagline: 'Mold Remediation Help in Gettysburg, PA',
  nav: [
    { label: 'Mold Help', href: '#what-remediation-involves' },
    { label: 'Costs', href: '#cost-factors' },
    { label: 'Mold Remediation Cost', href: '/mold-remediation-cost-gettysburg-pa/' },
    { label: 'Testing', href: '#mold-testing' },
    { label: 'Mold Testing', href: '/mold-testing-gettysburg-pa/' },
    { label: 'Resources', href: '#contractor-checklist' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Request Help', href: '#request' },
  ],
}

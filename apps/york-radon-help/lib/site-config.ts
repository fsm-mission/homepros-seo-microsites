import type { SiteConfig } from '@repo/shared/lib/site-config'

export { IS_PRODUCTION } from '@repo/shared/lib/site-config'
export type { SiteConfig, SiteKey, NavItem } from '@repo/shared/lib/site-config'

export const yorkConfig: SiteConfig = {
  key: 'york',
  theme: 'theme-york',
  name: 'York Radon Help',
  domain: 'YorkRadonHelp.com',
  basePath: '/',
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

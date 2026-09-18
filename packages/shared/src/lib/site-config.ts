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

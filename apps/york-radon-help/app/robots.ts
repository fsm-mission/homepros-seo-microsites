import type { MetadataRoute } from 'next'
import { IS_PRODUCTION } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    // Preview / staging: disallow all crawling.
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://yorkradonhelp.com/sitemap.xml',
  }
}

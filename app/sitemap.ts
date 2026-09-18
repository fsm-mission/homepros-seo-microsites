import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: '/gettysburg', lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: '/york', lastModified: now, changeFrequency: 'monthly', priority: 1 },
  ]
}

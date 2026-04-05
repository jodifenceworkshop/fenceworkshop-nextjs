import type { MetadataRoute } from 'next'
import { getAllProductHandles, getProductUrl } from '@/lib/shopify'

const SITE_URL = 'https://www.fenceworkshop.com'

const STATIC_PATHS = [
  '/',
  '/about-us/',
  '/contact/',
  '/shop/',
  '/shop/aluminum-fencing/',
  '/shop/driveway-gates/',
  '/shop/walk-gates/',
  '/shop/fence-posts/',
  '/shop/accessories/',
  '/shop/resources/pool-code-aluminum-fence/',
  '/shop/resources/pet-fence/',
  '/shop/resources/how-to-install-aluminum-fence/',
  '/shop/resources/aluminum-vs-steel-fencing/',
  '/installation/georgia/commercial-fence-installation/',
  '/installation/georgia/atlanta-fence-installation/',
  '/installation/georgia/marietta-fence-installation/',
  '/installation/georgia/alpharetta-fence-installation/',
  '/installation/georgia/ornamental-aluminum-fence/',
  '/installation/georgia/commercial-chain-link-fence/',
  '/installation/georgia/commercial-security-fence/',
  '/installation/georgia/security-gate-systems/',
  '/installation/georgia/security-fence-gate-repair/',
  '/installation/georgia/dumpster-enclosure-gates/',
  '/installation/georgia/dumpster-gate-repair/',
  '/installation/georgia/parking-garage-fencing/',
  '/installation/georgia/warehouse-industrial-fencing/',
  '/installation/georgia/slide-gates/',
  '/installation/georgia/roll-gate-slide-gate-repair/',
  '/installation/georgia/chain-link-fence-repair/',
  '/ameristar/',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
  }))

  let productEntries: MetadataRoute.Sitemap = []
  try {
    const handles = await getAllProductHandles()
    productEntries = handles.map((p) => ({
      url: `${SITE_URL}${getProductUrl(p)}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Shopify unavailable at build, skip product URLs
  }

  return [...staticEntries, ...productEntries]
}

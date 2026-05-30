import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductOptions from '@/components/ProductOptions'
import { getProductByHandle, getRelatedProductsByStyle, getProductUrl, formatPrice } from '@/lib/shopify'
import ProductGallery from '@/components/ProductGallery'
import type { Metadata } from 'next'

const CATEGORY_LABELS: Record<string, string> = {
  'driveway-gates': 'Driveway Gates',
  'walk-gates': 'Walk Gates',
  'aluminum-fencing': 'Aluminum Fencing',
  'fence-posts': 'Fence Posts',
  'accessories': 'Accessories',
  'fence-kits': 'Fence Kits',
}

// Known fence styles for related product matching
const FENCE_STYLES = [
  'athens', 'atlanta', 'avalon', 'berkley', 'brookhaven', 'buford', 'candler',
  'chamblee', 'cobb', 'dawson', 'dublin', 'dunwoody', 'ellijay', 'emory',
  'savannah', 'sharpsburg',
]

function detectStyle(slug: string): string | null {
  return FENCE_STYLES.find((s) => slug.startsWith(s)) ?? null
}

type StyleDescriptor = { short: string; full: string }

const STYLE_DESCRIPTORS: Record<string, StyleDescriptor> = {
  atlanta:    { short: 'Spear-Top 3-Rail',                  full: 'Spear-Top 3-Rail Aluminum Fence' },
  avalon:     { short: 'Spear-Top Puppy Picket',            full: 'Spear-Top 4-Rail Puppy Picket Aluminum Fence' },
  athens:     { short: 'Spear-Top Double Picket',           full: 'Spear-Top 3-Rail Double Picket Aluminum Fence' },
  brookhaven: { short: 'Smooth-Top 3-Rail',                 full: 'Smooth-Top 3-Rail Aluminum Fence' },
  berkley:    { short: 'Smooth-Top Puppy Picket',           full: 'Smooth-Top 4-Rail Puppy Picket Aluminum Fence' },
  buford:     { short: 'Smooth-Top Double Picket',          full: 'Smooth-Top 3-Rail Double Picket Aluminum Fence' },
  candler:    { short: 'Decorative Spear',                  full: 'Smooth-Top Aluminum Fence with Decorative Spears' },
  cobb:       { short: 'Decorative Spear Puppy Picket',     full: 'Smooth-Top Aluminum Fence with Decorative Spears & Puppy Pickets' },
  chamblee:   { short: 'Decorative Spear Double Picket',    full: 'Smooth-Top Aluminum Fence with Decorative Spears & Double Pickets' },
  dawson:     { short: 'Staggered Spear-Top',               full: 'Staggered Spear-Top 3-Rail Aluminum Fence' },
  dublin:     { short: 'Staggered Spear-Top Puppy Picket',  full: 'Staggered Spear-Top 3-Rail Aluminum Fence with Puppy Pickets' },
  dunwoody:   { short: 'Staggered Spear-Top Double Picket', full: 'Staggered Spear-Top 3-Rail Aluminum Fence with Double Pickets' },
  savannah:   { short: 'Smooth-Top 2-Rail',                 full: 'Smooth-Top 2-Rail Aluminum Fence' },
  sharpsburg: { short: 'Smooth-Top 2-Rail Double Picket',   full: 'Smooth-Top 2-Rail Double Picket Aluminum Fence' },
}

const CATEGORY_PRODUCT_TYPES: Record<string, string> = {
  'driveway-gates':   'Driveway Gate',
  'walk-gates':       'Walk Gate',
  'aluminum-fencing': 'Fence Panel',
  'fence-posts':      'Fence Post',
  'fence-kits':       'Fence Kit',
}

const KNOWN_COLORS = ['Black', 'Bronze', 'White', 'Silver']

function extractAttributes(title: string): { height: string | null; color: string | null } {
  const heightMatch = title.match(/(\d+)\s*ft/i)
  const height = heightMatch ? `${heightMatch[1]}ft` : null
  const color = KNOWN_COLORS.find((c) => title.includes(c)) ?? null
  return { height, color }
}

function buildKeywordMeta(
  slug: string,
  category: string,
  productTitle: string,
): { pageTitle: string; schemaName: string } {
  const style = detectStyle(slug)
  const descriptor = style ? STYLE_DESCRIPTORS[style] : null
  const productType = CATEGORY_PRODUCT_TYPES[category]

  if (!descriptor || !productType) {
    return { pageTitle: `${productTitle} | Fence Workshop`, schemaName: productTitle }
  }

  const { height, color } = extractAttributes(productTitle)
  const styleName = style!.charAt(0).toUpperCase() + style!.slice(1)
  const parts = [descriptor.short, 'Aluminum', productType, height, color].filter(Boolean) as string[]
  const base = parts.join(' ')

  return {
    pageTitle: `${base} | ${styleName} Style`,
    schemaName: base,
  }
}

// Pool-code compliant style + height combos (45" rail spacing rule)
const POOL_CODE_COMBOS: Array<{ style: string; heights: string[] }> = [
  { style: 'athens', heights: ['6'] },
  { style: 'atlanta', heights: ['6'] },
  { style: 'brookhaven', heights: ['5', '6'] },
  { style: 'buford', heights: ['5', '6'] },
  { style: 'candler', heights: ['5', '6'] },
  { style: 'chamblee', heights: ['5', '6'] },
  { style: 'dawson', heights: ['6'] },
  { style: 'dunwoody', heights: ['6'] },
  { style: 'savannah', heights: ['4', '5'] },
]

// Pet-friendly styles (tight picket spacing / puppy picket variants)
const PET_FRIENDLY_STYLES = [
  'athens', 'avalon', 'berkley', 'buford', 'chamblee', 'cobb', 'dublin', 'dunwoody',
]



function detectUseCases(title: string): { poolCode: boolean; petFriendly: boolean } {
  const lower = title.toLowerCase()
  const heightMatch = lower.match(/(\d+)\s*ft/)
  const height = heightMatch ? heightMatch[1] : null

  const poolCode = POOL_CODE_COMBOS.some(
    ({ style, heights }) => lower.includes(style) && height !== null && heights.includes(height),
  )
  const petFriendly = PET_FRIENDLY_STYLES.some((style) => lower.includes(style))

  return { poolCode, petFriendly }
}

export const revalidate = 60

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const product = await getProductByHandle(slug)
  if (!product) return { title: 'Product Not Found | Fence Workshop' }

  const { pageTitle } = buildKeywordMeta(slug, category, product.title)
  return {
    title: pageTitle,
    description: product.description.slice(0, 160),
    alternates: { canonical: `https://fenceworkshop.com/shop/${category}/${slug}/` },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params
  const product = await getProductByHandle(slug)

  if (!product) {
    notFound()
  }

  const images = product.images.edges.map((e) => e.node)
  const variants = product.variants.edges.map((e) => e.node)
  const categoryLabel = CATEGORY_LABELS[category] || 'Shop'
  const { poolCode, petFriendly } = detectUseCases(product.title)

  const style = detectStyle(slug)
  const relatedProducts = style
    ? await getRelatedProductsByStyle(style, slug)
    : []

  const { schemaName } = buildKeywordMeta(slug, category, product.title)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: schemaName,
    description: product.description,
    image: images.map((img) => img.url),
    sku: variants[0]?.sku || product.handle,
    brand: {
      '@type': 'Brand',
      name: 'Fence Workshop',
    },
    offers: {
      '@type': 'AggregateOffer',
      url: `https://fenceworkshop.com/shop/${category}/${slug}/`,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      lowPrice: product.priceRange.minVariantPrice.amount,
      highPrice: product.priceRange.maxVariantPrice.amount,
      offerCount: variants.length,
      availability: variants.some((v) => v.availableForSale)
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Fence Workshop',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Shop', item: 'https://fenceworkshop.com/shop/' },
      { '@type': 'ListItem', position: 2, name: categoryLabel, item: `https://fenceworkshop.com/shop/${category}/` },
      { '@type': 'ListItem', position: 3, name: product.title, item: `https://fenceworkshop.com/shop/${category}/${slug}/` },
    ],
  }


  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/shop/${category}/`} className="hover:text-brand-orange">{categoryLabel}</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>
      </div>

      {/* Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Image Gallery */}
          <div>
            <ProductGallery images={images} productTitle={product.title} />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            {/* Price Range */}
            <div className="mb-6">
              {product.priceRange.minVariantPrice.amount === product.priceRange.maxVariantPrice.amount ? (
                <p className="text-2xl font-semibold text-gray-900">
                  {formatPrice(product.priceRange.minVariantPrice)}
                </p>
              ) : (
                <p className="text-2xl font-semibold text-gray-900">
                  {formatPrice(product.priceRange.minVariantPrice)} &ndash; {formatPrice(product.priceRange.maxVariantPrice)}
                </p>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                American Made
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Ships Nationwide
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Manufacturer Warranty
              </span>
            </div>

            {/* Use-Case Badges */}
            {(poolCode || petFriendly) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {poolCode && (
                  <Link
                    href="/shop/resources/pool-code-aluminum-fence/"
                    className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Meets Pool Code
                  </Link>
                )}
                {petFriendly && (
                  <Link
                    href="/shop/resources/pet-fence/"
                    className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Pet &amp; Puppy Friendly
                  </Link>
                )}
              </div>
            )}

            {/* Variant Selector + Add to Cart (client component) */}
            <ProductOptions
              options={product.options}
              variants={variants}
            />

            {/* Description */}
            {product.descriptionHtml && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Product Details</h2>
                <div
                  className="prose prose-gray max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Automation Upsell — Driveway Gates only */}
      {category === 'driveway-gates' && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Looking to Automate?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Standard driveway gate panels are not built for automation. To automate your gate, you&apos;ll need the <strong>Automation Prep Upgrade</strong> — it replaces the standard bottom rail with a reinforced version engineered to accept gate operator arms. Already have an operator or plan to source your own? The Prep Upgrade is all you need. Want a complete automated solution? Add the <strong>LiftMaster LA400DC package</strong> and you&apos;ll have everything required to open your gate with the click of a button.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/shop/accessories/driveway-gate-automation-prep-upgrade/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    Automation Prep Upgrade
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Reinforces your gate panels with an oversized bottom rail engineered to accept gate operator arms. Required for any automated gate — order with your gate for a clean, factory-ready mounting point. Bring your own operator, or add the LiftMaster package below.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View Automation Prep Upgrade →</span>
              </Link>
              <Link
                href="/shop/accessories/liftmaster-la400dc-dual-swing-basic-automation-package/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    LiftMaster LA400DC Automation Package
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Complete dual swing gate automation package from LiftMaster. Add this alongside the Automation Prep Upgrade and you&apos;ll have everything needed for a fully automated driveway gate, straight from us.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View LiftMaster Package →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Cross-link: Automation Prep ↔ LiftMaster */}
      {slug === 'driveway-gate-automation-prep-upgrade' && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Automation Setup</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The Automation Prep Upgrade reinforces your gate for an operator — but you&apos;ll still need a gate operator to automate it. Add the LiftMaster LA400DC package and you&apos;ll have everything you need for a fully automated driveway gate.
            </p>
            <div className="max-w-sm">
              <Link
                href="/shop/accessories/liftmaster-la400dc-dual-swing-basic-automation-package/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    LiftMaster LA400DC Automation Package
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Complete dual swing gate automation package — two operators, remotes, and all mounting hardware. Pairs directly with the Automation Prep Upgrade.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View LiftMaster Package →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {slug === 'liftmaster-la400dc-dual-swing-basic-automation-package' && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Don&apos;t Forget the Automation Prep Upgrade</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The LiftMaster package includes the operator, remotes, and hardware — but your gate panels must be ordered with the Automation Prep Upgrade to accept the operator arms. Standard gate panels are not built for automation.
            </p>
            <div className="max-w-sm">
              <Link
                href="/shop/accessories/driveway-gate-automation-prep-upgrade/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    Automation Prep Upgrade
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Required gate panel upgrade — replaces the standard bottom rail with a reinforced version engineered to accept gate operator arms. Must be ordered with your driveway gate panels.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View Automation Prep Upgrade →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Need Help? */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Our team of professional fence installers can help you pick the right style, size, and accessories for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14043144419"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (404) 314-4419
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Complete Your {style ? style.charAt(0).toUpperCase() + style.slice(1) : ''} Fence System
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => {
                const relatedUrl = getProductUrl(related)
                const relatedImage = related.images.edges[0]?.node
                return (
                  <Link
                    key={related.handle}
                    href={relatedUrl}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="aspect-square relative bg-gray-100">
                      {relatedImage && (
                        <Image
                          src={relatedImage.url}
                          alt={relatedImage.altText || related.title}
                          fill
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors leading-snug">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {formatPrice(related.priceRange.minVariantPrice)}
                        {related.priceRange.minVariantPrice.amount !== related.priceRange.maxVariantPrice.amount && (
                          <span> &ndash; {formatPrice(related.priceRange.maxVariantPrice)}</span>
                        )}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

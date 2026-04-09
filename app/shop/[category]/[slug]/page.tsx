import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
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

// Shared gate dimension diagrams (same for all styles)
const DRIVEWAY_GATE_DIAGRAMS: { src: string; alt: string }[] = [
  { src: '/spec-diagrams/DOUBLE-ARCHED-GATE-KIT-DIMENSIONS_STRAIGHT-TOP-GATE-pdf.jpg', alt: 'Double Gate Kit Dimensions - Straight Top' },
  { src: '/spec-diagrams/DOUBLE-ARCHED-GATE-KIT-DIMENSIONS_RAINBOW-ARCH-TOP-GATE-pdf.jpg', alt: 'Double Gate Kit Dimensions - Rainbow Arch Top' },
  { src: '/spec-diagrams/DOUBLE-ARCHED-GATE-KIT-DIMENSIONS_ESTATE-ARCH-TOP-GATE-pdf.jpg', alt: 'Double Gate Kit Dimensions - Estate Arch Top' },
]

const WALK_GATE_DIAGRAMS: { src: string; alt: string }[] = [
  { src: '/spec-diagrams/SINGLE-FLAT-GATE-KIT-DIMENSIONS-pdf.jpg', alt: 'Walk Gate Kit Dimensions - Flat Top' },
  { src: '/spec-diagrams/SINGLE-ARCHED-GATE-KIT-DIMENSIONS-pdf.jpg', alt: 'Walk Gate Kit Dimensions - Arched Top' },
]

// Style-specific spec diagrams hosted in /public/spec-diagrams
const SPEC_DIAGRAMS: Record<string, { src: string; alt: string }[]> = {
  athens: [
    { src: '/spec-diagrams/ATHENS-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Athens Fence Panel Height Specifications' },
    { src: '/spec-diagrams/ATHENS-DOUBLE-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Athens Double Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/ATHENS-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Athens Aluminum Fence DIY Installation Specs' },
  ],
  atlanta: [
    { src: '/spec-diagrams/ATLANTA-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Atlanta Fence Panel Height Specifications' },
    { src: '/spec-diagrams/ATLANTA-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Atlanta Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/ATLANTA-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Atlanta Aluminum Fence DIY Installation Specs' },
  ],
  avalon: [
    { src: '/spec-diagrams/AVALON-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Avalon Fence Panel Height Specifications' },
    { src: '/spec-diagrams/AVALON-PUPPY-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Avalon Puppy Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/AVALON-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Avalon Aluminum Fence DIY Installation Specs' },
  ],
  berkley: [
    { src: '/spec-diagrams/BERKLEY-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Berkley Fence Panel Height Specifications' },
    { src: '/spec-diagrams/BERKLEY-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Berkley Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/BERKLEY-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Berkley Aluminum Fence DIY Installation Specs' },
  ],
  brookhaven: [
    { src: '/spec-diagrams/BROOKHAVEN-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Brookhaven Fence Panel Height Specifications' },
    { src: '/spec-diagrams/BROOKHAVEN-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Brookhaven Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/BROOKHAVEN-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Brookhaven Aluminum Fence DIY Installation Specs' },
  ],
  buford: [
    { src: '/spec-diagrams/BUFORD-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Buford Fence Panel Height Specifications' },
    { src: '/spec-diagrams/BUFORD-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Buford Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/BUFORD-ALUMINUM-FENCING-DIY-SPECS-600x464.jpg', alt: 'Buford Aluminum Fence DIY Installation Specs' },
  ],
  candler: [
    { src: '/spec-diagrams/CANDLER-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Candler Fence Panel Height Specifications' },
    { src: '/spec-diagrams/CANDLER-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Candler Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/CANDLER-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Candler Aluminum Fence DIY Installation Specs' },
  ],
  chamblee: [
    { src: '/spec-diagrams/CHAMBLEE-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Chamblee Fence Panel Height Specifications' },
    { src: '/spec-diagrams/CHAMBLEE-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Chamblee Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/CHAMBLEE-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Chamblee Aluminum Fence DIY Installation Specs' },
  ],
  cobb: [
    { src: '/spec-diagrams/COBB-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Cobb Fence Panel Height Specifications' },
    { src: '/spec-diagrams/COBB-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Cobb Aluminum Fence DIY Installation Specs' },
  ],
  dawson: [
    { src: '/spec-diagrams/DAWSON-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Dawson Fence Panel Height Specifications' },
    { src: '/spec-diagrams/DAWSON-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Dawson Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/DAWSON-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Dawson Aluminum Fence DIY Installation Specs' },
  ],
  dublin: [
    { src: '/spec-diagrams/DUBLIN-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Dublin Fence Panel Height Specifications' },
    { src: '/spec-diagrams/DUBLIN-PUPPY-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Dublin Puppy Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/DUBLIN-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Dublin Aluminum Fence DIY Installation Specs' },
  ],
  dunwoody: [
    { src: '/spec-diagrams/DUNWOODY-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Dunwoody Fence Panel Height Specifications' },
    { src: '/spec-diagrams/DUNWOODY-DOUBLE-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Dunwoody Double Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/DUNWOODY-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Dunwoody Aluminum Fence DIY Installation Specs' },
  ],
  savannah: [
    { src: '/spec-diagrams/SAVANNAH-RESIDENTIAL-ALUMINUM-FENCE-HEIGHTS-pdf.jpg', alt: 'Savannah Fence Panel Height Specifications' },
    { src: '/spec-diagrams/SAVANNAH-STANDARD-PICKET-RACKABLE-ALUMINUM-FENCING-pdf.jpg', alt: 'Savannah Standard Picket Rackable Fence Specifications' },
    { src: '/spec-diagrams/SAVANNAH-ALUMINUM-FENCING-DIY-SPECS-pdf.jpg', alt: 'Savannah Aluminum Fence DIY Installation Specs' },
  ],
}

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
  const { slug } = await params
  const product = await getProductByHandle(slug)
  if (!product) return { title: 'Product Not Found | Fence Workshop' }

  return {
    title: `${product.title} | Fence Workshop`,
    description: product.description.slice(0, 160),
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

  // Append spec diagrams (gate dimension diagrams + style-specific panel diagrams)
  const gateDiagrams =
    category === 'driveway-gates' ? DRIVEWAY_GATE_DIAGRAMS :
    category === 'walk-gates' ? WALK_GATE_DIAGRAMS : []
  const styleDiagrams = style ? (SPEC_DIAGRAMS[style] ?? []) : []
  const specDiagrams = [...gateDiagrams, ...styleDiagrams]
  const specImages: import('@/lib/shopify').ShopifyImage[] = specDiagrams.map((d) => ({
    url: d.src,
    altText: d.alt,
    width: 800,
    height: 618,
  }))
  const allImages = [...images, ...specImages]

  return (
    <main className="min-h-screen bg-white">
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
            <ProductGallery images={allImages} productTitle={product.title} />
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

            {/* Need Help? */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Our team of professional fence installers can help you pick the right style, size, and accessories for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+14043144419"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (404) 314-4419
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
                <li><Link href="/shop/fence-posts/" className="hover:underline">Fence Posts</Link></li>
                <li><Link href="/shop/accessories/" className="hover:underline">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
                <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
                <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">Installation Guide</Link></li>
                <li><Link href="/shop/resources/aluminum-vs-steel-fencing/" className="hover:underline">Aluminum vs Steel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">Fence Workshop</p>
                <p>1522 Huber St NW</p>
                <p>Atlanta, GA 30318</p>
                <p className="mt-2">(404) 314-4419</p>
              </div>
              <div className="md:text-right">
                <p>&copy; 2026 Fence Workshop. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

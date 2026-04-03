import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import ProductOptions from '@/components/ProductOptions'
import { getProductByHandle, formatPrice } from '@/lib/shopify'
import type { Metadata } from 'next'

const CATEGORY_LABELS: Record<string, string> = {
  'driveway-gates': 'Driveway Gates',
  'walk-gates': 'Walk Gates',
  'aluminum-fencing': 'Aluminum Fencing',
  'fence-posts': 'Fence Posts',
  'accessories': 'Accessories',
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
            {images.length > 0 && (
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={images[0].url}
                  alt={images[0].altText || product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={img.url}
                      alt={img.altText || product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 25vw, 12vw"
                    />
                  </div>
                ))}
              </div>
            )}
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

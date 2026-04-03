import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { getProductsByCategory, getProductUrl, formatPrice } from '@/lib/shopify'
import type { Metadata } from 'next'

// Category configuration
const categories: Record<string, { title: string; description: string; heading: string; intro: string }> = {
  'driveway-gates': {
    title: 'Aluminum Driveway Gates | Double Swing Gate Kits | Fence Workshop',
    description: 'Shop American-made aluminum double driveway gates. Complete gate kits with panels, hinges, and latch hardware. Multiple styles, heights, and widths available.',
    heading: 'Aluminum Driveway Gates',
    intro: 'Our double-swing driveway gate kits include everything you need — gate panels, hinges, latch, and drop rod. American-made from 6063-T5 aluminum with TGIC powder coating for lasting durability.',
  },
  'walk-gates': {
    title: 'Aluminum Walk Gates | Pedestrian Gate Kits | Fence Workshop',
    description: 'Shop American-made aluminum walk gates for pedestrian entry. Complete kits with gate panel, self-closing hinges, and latch. Multiple styles and sizes.',
    heading: 'Aluminum Walk Gates',
    intro: 'Pedestrian walk gate kits complete with gate panel, self-closing hinges, and gravity latch. Available in multiple styles and sizes to match your fence panels.',
  },
  'aluminum-fencing': {
    title: 'Aluminum Fence Panels | Residential & Commercial Fencing | Fence Workshop',
    description: 'Shop American-made aluminum fence panels in multiple styles and heights. Professional-grade 6063-T5 aluminum with TGIC powder coating. Ships nationwide.',
    heading: 'Aluminum Fence Panels',
    intro: 'Professional-grade aluminum fence panels manufactured from 6063-T5 aluminum with TGIC polyester powder coating. Choose from over a dozen styles in 3ft, 4ft, and 5ft heights.',
  },
  'fence-posts': {
    title: 'Aluminum Fence Posts | Line, Corner & Gate Posts | Fence Workshop',
    description: 'Shop aluminum fence posts — line posts, corner posts, end posts, T-posts, and gate posts. Color-matched to your fence panels. Ships nationwide.',
    heading: 'Aluminum Fence Posts',
    intro: 'Color-matched aluminum fence posts available in every post type — line, corner, end, T-post, and blank. Gate posts are also available for walk gate and driveway gate installations.',
  },
  'accessories': {
    title: 'Fence Hardware & Accessories | Hinges, Latches & More | Fence Workshop',
    description: 'Shop aluminum fence accessories — gate hinges, latches, drop rods, post caps, deck mounts, decorative finials, and more. Everything you need to complete your fence project.',
    heading: 'Fence Hardware & Accessories',
    intro: 'Everything you need to complete your fence installation — gate latches, self-closing hinges, drop rods, post caps, deck mounts, and decorative accessories.',
  },
}

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const cat = categories[category]
  if (!cat) return { title: 'Shop | Fence Workshop' }
  return { title: cat.title, description: cat.description }
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const cat = categories[category]

  if (!cat) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="h-20" />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/shop/" className="text-brand-orange hover:underline">Back to Shop</Link>
        </div>
      </main>
    )
  }

  const products = await getProductsByCategory(category)

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      {/* Category Header */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-300">{cat.heading}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {cat.heading}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {cat.intro}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">No products found in this category yet.</p>
              <Link href="/shop/" className="text-brand-orange hover:underline mt-2 inline-block">Back to Shop</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const image = product.images.edges[0]?.node
                const url = getProductUrl(product)
                const minPrice = product.priceRange.minVariantPrice
                const maxPrice = product.priceRange.maxVariantPrice
                const samePrice = minPrice.amount === maxPrice.amount

                return (
                  <Link
                    key={product.id}
                    href={url}
                    className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square relative bg-gray-100">
                      {image && (
                        <Image
                          src={image.url}
                          alt={image.altText || product.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="text-sm font-semibold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                        {product.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-gray-700">
                        {samePrice
                          ? formatPrice(minPrice)
                          : `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

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

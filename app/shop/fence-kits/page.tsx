import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProductsByCategory, formatPrice, getProductUrl } from '@/lib/shopify'

export const metadata: Metadata = {
  title: 'DIY Aluminum Fence Kits | Pool Fence Kits | Ships Nationwide',
  description: 'Shop DIY aluminum fence kits — complete kits with panels, posts, walk gate, and hardware sized to your total footage. Pool fence kits available. Kits start at $2,693.59. Ships nationwide.',
  alternates: { canonical: 'https://fenceworkshop.com/shop/fence-kits/' },
}

export const revalidate = 60

const faqItems = [
  {
    question: 'How much does a DIY aluminum fence kit cost?',
    answer: 'DIY aluminum fence kits start at $2,693.59 for our most popular styles in black. Pricing varies based on total footage, fence style, height, and color. Call (404) 314-4419 for a custom kit quote sized to your exact footage.',
  },
  {
    question: 'Do fence kits include a gate?',
    answer: 'Yes. Every fence kit includes a walk gate with self-closing hinges and gravity latch. If you also need a driveway gate, those are available separately in our driveway gates section.',
  },
  {
    question: 'Do you sell aluminum pool fence kits?',
    answer: 'Yes. Pool fence kits include panels, posts, a walk gate, and pool code compliant hardware including a MagnaLatch pool gate latch. See our pool code aluminum fence guide for compliant styles and heights, or call (404) 314-4419 to build the right kit for your pool enclosure.',
  },
  {
    question: 'What fence styles are available in kits?',
    answer: 'Kits are currently available in smooth-top 3-rail and spear-top 3-rail styles in black. More styles coming soon. Call (404) 314-4419 if you need a specific style not yet listed.',
  },
  {
    question: "What if my perimeter doesn't match a standard kit size?",
    answer: "No problem — we build custom kits for any footage. Tell us your total linear footage, style, height, color, and number of gate openings, and we'll put together a kit sized to your exact project. Call (404) 314-4419 for custom kit pricing.",
  },
  {
    question: "What's the difference between a fence kit and buying parts separately?",
    answer: "A fence kit is the easiest option — we calculate all the quantities for your footage and ship everything together. Buying parts separately gives more flexibility for projects with custom angles, partial panels, or unusual layouts. Both options use the same materials at the same wholesale pricing.",
  },
  {
    question: 'How are fence kits shipped?',
    answer: 'Via freight carrier, directly to your address. Typical lead time is 7–10 business days for in-stock styles. Made-to-order styles may take 2–3 weeks.',
  },
  {
    question: 'Do kits include installation instructions?',
    answer: 'Yes. Every kit ships with professional installation instructions prepared by our installation team.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const STYLE_ORDER = ['brookhaven', 'atlanta']

function detectKitStyle(handle: string): string | null {
  return STYLE_ORDER.find((s) => handle.startsWith(s)) ?? null
}

function detectKitFootage(handle: string): string {
  const match = handle.match(/(\d+)ft/)
  return match ? `${match[1]}ft` : ''
}

export default async function FenceKitsPage() {
  const allKits = await getProductsByCategory('fence-kits')

  // Group products by style
  const kitsByStyle = STYLE_ORDER.map((styleName) => {
    const products = allKits
      .filter((p) => detectKitStyle(p.handle) === styleName)
      .sort((a, b) => {
        const aFt = parseInt(a.handle.match(/(\d+)ft/)?.[1] ?? '0')
        const bFt = parseInt(b.handle.match(/(\d+)ft/)?.[1] ?? '0')
        return aFt - bFt
      })
    return { styleName, products }
  }).filter((group) => group.products.length > 0)

  const styleDisplayNames: Record<string, string> = {
    brookhaven: 'Smooth-Top 3-Rail',
    atlanta: 'Spear-Top 3-Rail',
  }

  const styleDescriptions: Record<string, string> = {
    brookhaven: 'Smooth-top 3-rail aluminum fence — clean, modern look. HOA-friendly, residential and commercial. Pool-code approved at 5ft and 6ft heights.',
    atlanta: 'Spear-top 3-rail aluminum fence — classic wrought-iron style for residential and commercial properties. Pool-code approved at 6ft height.',
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            DIY Aluminum Fence Kits
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
            Everything You Need. One Order. Ships Nationwide.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Our fence kits include every panel, post, gate, and piece of hardware needed to complete
            your fence project. No estimating, no missing parts, no second orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kits"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              View Kits Below
            </a>
            <a
              href="tel:+14043144419"
              className="inline-block bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white transition-colors text-center"
            >
              Call (404) 314-4419
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What&apos;s in Every Fence Kit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Fence Panels',
                description: 'All panels needed for your linear footage — no estimating required.',
              },
              {
                title: 'Fence Posts',
                description: 'Line, corner, end, and gate posts — every post type for a complete install.',
              },
              {
                title: 'Gate Kit',
                description: 'Walk gate with hinges and latch included in every kit.',
              },
              {
                title: 'All Hardware',
                description: 'Screws, caps, drop rod — everything you need, nothing missing.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <svg
                  className="w-10 h-10 text-brand-orange mb-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Products */}
      <section id="kits" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your Fence Kit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available in smooth-top 3-rail and spear-top 3-rail styles. Select your footage below.
            </p>
          </div>

          {kitsByStyle.length > 0 ? (
            <div className="space-y-16">
              {kitsByStyle.map(({ styleName, products }) => (
                <div key={styleName}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{styleDisplayNames[styleName] ?? styleName}</h3>
                    <p className="text-gray-600">{styleDescriptions[styleName]}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => {
                      const productUrl = getProductUrl(product)
                      const footage = detectKitFootage(product.handle)
                      const image = product.images.edges[0]?.node
                      return (
                        <Link
                          key={product.handle}
                          href={productUrl}
                          className="group bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                        >
                          {image ? (
                            <div className="aspect-square relative bg-gray-100">
                              <Image
                                src={image.url}
                                alt={image.altText || product.title}
                                fill
                                className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                          ) : (
                            <div className="aspect-square bg-gray-100 flex items-center justify-center">
                              <span className="text-4xl font-bold text-gray-300">{footage}</span>
                            </div>
                          )}
                          <div className="p-5 flex flex-col items-center text-center flex-1">
                            <p className="text-2xl font-bold text-gray-900 mb-1">{footage}</p>
                            <p className="text-lg font-semibold text-brand-orange mb-1">
                              {formatPrice(product.priceRange.minVariantPrice)}
                              {product.priceRange.minVariantPrice.amount !== product.priceRange.maxVariantPrice.amount && (
                                <span className="text-base"> &ndash; {formatPrice(product.priceRange.maxVariantPrice)}</span>
                              )}
                            </p>
                            {(() => {
                              const lowestCompare = product.variants.edges
                                .map((e) => e.node.compareAtPrice)
                                .filter((p): p is NonNullable<typeof p> => p !== null && parseFloat(p.amount) > 0)
                                .sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))[0]
                              return lowestCompare ? (
                                <p className="text-sm text-gray-400 line-through mb-1">
                                  from {formatPrice(lowestCompare)}
                                </p>
                              ) : null
                            })()}
                            <p className="text-xs text-gray-500 mb-4">Kit savings vs. buying separately</p>
                            <span className="w-full bg-brand-orange group-hover:bg-brand-orange-dark text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors text-center">
                              View Kit
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Prices shown start at 4ft height, black, straight top. Height, color, and gate options affect final price.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">Fence kits coming soon — contact us for availability.</p>
          )}

          <p className="text-center text-gray-600 mt-12 text-sm">
            More styles coming soon — Avalon, Athens, Berkley, and others. Contact us to ask about a specific style.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Measure Your Perimeter',
                description:
                  'Walk your property line and note your total linear footage. That number is all you need to choose the right kit.',
              },
              {
                step: '2',
                title: 'Choose Your Kit',
                description:
                  'Select your style, footage, height, color, and gate option. We confirm the kit contents before your order ships.',
              },
              {
                step: '3',
                title: 'We Ship to Your Door',
                description:
                  'Freight delivery nationwide. Your complete fence kit arrives typically within 7–10 business days.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Kit vs. Individual Parts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Buy a Kit Instead of Individual Parts?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'No Estimating Errors',
                description:
                  'We calculate exactly what you need — panels, posts, hardware, and gate — based on your footage.',
              },
              {
                title: 'One Shipment',
                description:
                  'Everything arrives together. No waiting on multiple orders or tracking down missing parts mid-project.',
              },
              {
                title: 'Kit Pricing',
                description:
                  'Kits are priced better than buying panels, posts, and hardware separately. You save by ordering complete.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
            Our kits are designed by professional fence installers who know exactly what gets forgotten
            on DIY projects — corner posts, end caps, gate hardware. Every kit is complete.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Fence Kit FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order Your Fence Kit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us or submit your project details online. We&apos;ll confirm your kit contents and
            get your order placed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14043144419"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Call (404) 314-4419
            </a>
            <Link
              href="/contact/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

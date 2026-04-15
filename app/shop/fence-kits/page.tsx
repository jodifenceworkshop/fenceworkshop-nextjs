import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Aluminum Fence Kits — Complete DIY Fence Systems | Fence Workshop',
  description: 'Shop all-inclusive aluminum fence kits from Fence Workshop. Everything you need — panels, posts, gates, and hardware — in one package. Available in 100ft, 150ft, 200ft, and 250ft. Ships nationwide.',
}

const faqItems = [
  {
    question: 'Do fence kits include gates?',
    answer: 'Yes, every kit includes one walk gate with hinges and latch. Upgrade options available.',
  },
  {
    question: "What if my perimeter doesn't match a standard kit size?",
    answer: 'Contact us — we can adjust kit contents for non-standard footage.',
  },
  {
    question: 'Can I choose my fence style?',
    answer: 'Currently available in Brookhaven and Atlanta. More styles coming soon.',
  },
  {
    question: 'How are fence kits shipped?',
    answer: 'Freight carrier, directly to your address. Typically 7–10 business days.',
  },
  {
    question: 'Do kits include installation instructions?',
    answer: 'Yes, every kit ships with professional installation instructions.',
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

const kitStyles = [
  {
    name: 'Brookhaven',
    description: 'Classic flat-top aluminum fence with wide picket spacing — clean, open look for residential properties.',
  },
  {
    name: 'Atlanta',
    description: 'Standard picket spear-top aluminum fence — timeless style for yards, pools, and light commercial applications.',
  },
]

const kitFootages = [
  { footage: '100ft', price: '$2,434' },
  { footage: '150ft', price: '$3,591' },
  { footage: '200ft', price: '$4,897' },
  { footage: '250ft', price: '$5,997' },
]

export default function FenceKitsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            All-Inclusive Aluminum Fence Kits
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
              Available in Brookhaven and Atlanta styles. Select your footage below.
            </p>
          </div>

          <div className="space-y-16">
            {kitStyles.map((style) => (
              <div key={style.name}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {kitFootages.map((kit) => (
                    <div
                      key={`${style.name}-${kit.footage}`}
                      className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col items-center text-center"
                    >
                      <p className="text-2xl font-bold text-gray-900 mb-2">{kit.footage}</p>
                      <p className="text-xl font-semibold text-brand-orange mb-1">{kit.price}</p>
                      <p className="text-xs text-gray-500 mb-4">Starting price, varies by height/options</p>
                      <Link
                        href="/contact/"
                        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors text-center"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Prices shown are for 4ft height, black, straight top. Height, color, and gate options affect final price.
                </p>
              </div>
            ))}
          </div>

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
                <li><Link href="/shop/fence-kits/" className="hover:underline">Fence Kits</Link></li>
                <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/chain-link-fencing/" className="hover:underline">Chain Link Fencing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
                <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
                <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">Installation Guide</Link></li>
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

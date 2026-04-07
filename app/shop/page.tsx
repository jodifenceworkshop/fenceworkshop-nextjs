import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Aluminum Fencing, Gates & Accessories | Fence Workshop',
  description: 'Buy American-made aluminum fences, driveway gates, walk gates, and accessories online from Fence Workshop. Premium materials designed by installers, shipped nationwide.',
}

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-shop-aluminum-fencing.jpg"
            alt="Aluminum fence panels and gates available for online purchase from Fence Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-gray-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Shop Fencing &amp; Gates Online
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Premium Aluminum Fencing — Shipped Nationwide
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop sells American-made aluminum fencing, driveway gates, walk gates, and accessories
              online to homeowners, contractors, and property managers across the U.S. Every product we
              sell is designed using real-world installation experience — so you get materials that perform
              and install the way they should.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Browse Products
              </Link>
              <a
                href="tel:+14043144419"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
              >
                Call (404) 314-4419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white font-medium">Designed by Professional Installers</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-white font-medium">Ships Nationwide to Your Door</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Manufacturer Warranty Included</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h18v18H3zm4-4h10M7 13h10M7 9h10" />
              </svg>
              <span className="text-white font-medium">Made in the USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Shop Online</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aluminum Fencing &amp; Gates
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our aluminum fencing systems are built for durability and curb appeal. Choose from a wide
              range of styles for residential and light commercial applications — all available for
              online purchase with nationwide shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aluminum Fencing */}
            <Link href="/shop/aluminum-fencing/" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <Image
                  src="/images/shop-aluminum-fencing.jpg"
                  alt="Aluminum fence panels and posts"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aluminum Fencing</h3>
                <p className="text-gray-600 mb-3">
                  Durable, low-maintenance aluminum fence systems available in a variety of styles —
                  from flat-top to spear-top, with options for puppy pickets and decorative finishes.
                </p>
                <span className="text-brand-green font-semibold group-hover:underline">Shop Aluminum Fencing →</span>
              </div>
            </Link>

            {/* Driveway Gates */}
            <Link href="/shop/driveway-gates/" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <Image
                  src="/images/shop-driveway-gates.jpg"
                  alt="Aluminum driveway gate"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Driveway Gates</h3>
                <p className="text-gray-600 mb-3">
                  Single and double swing aluminum driveway gates designed for residential properties.
                  Available in multiple widths and styles to match your fence system.
                </p>
                <span className="text-brand-green font-semibold group-hover:underline">Shop Driveway Gates →</span>
              </div>
            </Link>

            {/* Walk Gates */}
            <Link href="/shop/walk-gates/" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <Image
                  src="/images/shop-walk-gates.jpg"
                  alt="Aluminum walk gate"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Walk Gates</h3>
                <p className="text-gray-600 mb-3">
                  Pedestrian walk gates for side yards, backyards, and pool areas. Self-closing and
                  lockable options available to match your aluminum fence.
                </p>
                <span className="text-brand-green font-semibold group-hover:underline">Shop Walk Gates →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy From Fence Workshop */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Why Buy From Us</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built by Installers. Sold with Confidence.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Unlike big-box retailers, every product in our shop is selected and vetted by professional
                fence installers. We don&#39;t just sell fencing — we install it every day across Georgia.
                That hands-on experience means better material specs, practical system designs, and real
                support when you have questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Installer-tested materials</p>
                    <p className="text-gray-600">We know what holds up because we build with it daily.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Real support from real people</p>
                    <p className="text-gray-600">Questions about your project? Talk to someone who builds fences for a living.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Fair, transparent pricing</p>
                    <p className="text-gray-600">Direct manufacturer relationships mean competitive prices without sacrificing quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/aluminum-fence-installation.jpg"
                  alt="Professional aluminum fence installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Resources</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fence Guides &amp; Planning Resources
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choosing the right fence matters. We provide clear, practical guidance to help you
              plan your project and choose the right materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/shop/resources/how-to-install-aluminum-fence/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ How to Install Aluminum Fence Panels</h3>
              <p className="text-gray-600">Step-by-step guide from professional installers</p>
            </Link>
            <Link
              href="/shop/resources/aluminum-vs-steel-fencing/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Aluminum vs Steel Fencing</h3>
              <p className="text-gray-600">Compare materials to choose the right fence for your needs</p>
            </Link>
            <Link
              href="/shop/resources/pool-code-aluminum-fence/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Pool Code Aluminum Fence Guide</h3>
              <p className="text-gray-600">Which styles and heights meet pool barrier code requirements</p>
            </Link>
            <Link
              href="/shop/resources/pet-fence/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Pet &amp; Puppy Fence Guide</h3>
              <p className="text-gray-600">Best aluminum fence styles to contain small dogs, puppies, and cats</p>
            </Link>
            <Link
              href="/shop/resources/residential-vs-commercial-aluminum-fence/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">→ Residential vs Commercial Grade</h3>
              <p className="text-gray-600">Compare aluminum fence grades and learn which one your project needs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Fencing Options */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Additional Options</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Looking for Something Else?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We also work with vinyl and chain link fencing. Contact us for pricing, availability,
              and project guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link
              href="/shop/vinyl-fencing/"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vinyl Fencing</h3>
              <p className="text-gray-600 mb-4">
                Low-maintenance vinyl fencing in privacy, picket, and post-and-rail styles.
                One of the longest-lasting fencing options available.
              </p>
              <span className="text-brand-orange font-semibold hover:underline">Learn More →</span>
            </Link>
            <Link
              href="/shop/chain-link-fencing/"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chain Link Fencing</h3>
              <p className="text-gray-600 mb-4">
                Affordable, durable chain link fencing for residential and commercial properties.
                Available in galvanized and vinyl-coated options.
              </p>
              <span className="text-brand-orange font-semibold hover:underline">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Fence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is available to help you select the right materials for your project.
            Call us or request a quote online.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Installation */}
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
                <li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>

            {/* Repair Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li>
                <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
                <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li>
                <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
                <li><Link href="/reviews/" className="hover:underline">Reviews</Link></li>
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

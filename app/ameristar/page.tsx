import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ameristar Fence Supply & Installation | Fence Workshop',
  description: 'Fence Workshop is an authorized Ameristar fence supplier and installer in Georgia. Steel and aluminum ornamental fencing for commercial, industrial, and residential properties.',
}

export default function AmeristarPage() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/about-us/" className="hover:text-white transition-colors">
                About
              </Link>
              <span>/</span>
              <span className="text-gray-200">Ameristar Fencing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Ameristar Metal Fencing
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Choosing the Best Ameristar Fencing System for Your Property
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop is an authorized Ameristar supplier and installer throughout Georgia
              and the Southeast. We help commercial and residential customers select, spec, and install
              the right Ameristar steel or aluminum fencing system for their property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/installation/georgia/commercial-fence-installation/#quote"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Get a Free Quote
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Authorized Ameristar Supplier</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h-3m3 0v-2.25m0 2.25h3" />
                </svg>
              <span className="text-white font-medium">Supply &amp; Installation</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white font-medium">USA-Manufactured Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Overview</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Ameristar Fencing?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ameristar is the largest ornamental fence manufacturer in the world, based in Tulsa, Oklahoma
              with over 400 American workers and more than 25 years in business. They design, build, and
              manufacture all products at their own environmentally friendly, high-production facility —
              controlling every aspect from raw material to finished product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Superior Manufacturing',
                description: 'Ameristar is the only architectural metal fencing manufacturer that controls all aspects of its manufacturing process in-house — from raw material to boxed product. Their products are made from 62% recycled material.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Industry-Leading Warranties',
                description: 'Ameristar provides a 20-year E-coat warranty on all steel products and a 5-year warranty on all aluminum products. Their powder coating process is the benchmark standard in the industry.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Competitive Price Point',
                description: 'Ameristar\'s highly efficient manufacturing process ensures competitive pricing, while their superior structural design and premium powder coating guarantee a significantly lower long-term cost.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steel Fencing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Steel Fencing</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ameristar Steel Fence Systems
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ameristar offers two distinct steel fencing lines — Montage and Aegis — both built with
              durable steel and backed by a 20-year E-coat manufacturer warranty.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Montage Steel Fencing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Montage fencing features Ameristar&rsquo;s proprietary &ldquo;pro-fusion welding&rdquo; technology,
                which reduces manufacturing cost and labor — making it a cost-effective option without sacrificing
                structural integrity or appearance.
              </p>
              <ul className="space-y-2">
                {['Pro-fusion welded construction', 'Residential, commercial, and industrial grades', 'Cost-effective for large perimeter projects', '20-year E-coat warranty'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aegis Steel Fencing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Aegis fencing line draws its structural strength from an internal retaining rod system,
                making it highly customizable and adaptable to different site conditions, terrain, and
                security requirements.
              </p>
              <ul className="space-y-2">
                {['Internal retaining rod design', 'Maximum customization and adaptability', 'Residential, commercial, and industrial grades', '20-year E-coat warranty'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aluminum Fencing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Aluminum Fencing</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ameristar Aluminum Fence Systems
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              For properties where aluminum is preferred, Ameristar offers two aluminum lines that
              combine the appearance of steel with the corrosion resistance and lightweight benefits of aluminum.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Echelon Aluminum Fencing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Echelon line features concealed fasteners and a virtually screw-less appearance,
                delivering a clean, architectural look with the structural strength typically associated
                with steel fencing.
              </p>
              <ul className="space-y-2">
                {['Concealed fastener system', 'Virtually screw-less appearance', 'Architectural-grade aesthetics', '5-year manufacturer warranty'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aegis Aluminum Fencing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Aegis aluminum line is suitable for residential, commercial, and industrial applications —
                offering the same adaptability and internal retaining rod design as the steel version in a
                corrosion-resistant aluminum construction.
              </p>
              <ul className="space-y-2">
                {['Internal retaining rod design', 'Residential, commercial, and industrial grades', 'Corrosion-resistant aluminum construction', '5-year manufacturer warranty'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ameristar Fencing for Every Application
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Fencing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ameristar commercial fencing is available in heights up to 8 feet and can be upgraded
                with Impasse and Stalwart security features for facilities requiring enhanced perimeter
                protection. Available in both aluminum and steel.
              </p>
              <Link href="/installation/georgia/commercial-fence-installation/" className="text-brand-orange hover:underline font-medium">
                Commercial Installation &rarr;
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Fencing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Industrial-grade Ameristar fencing with Impasse and Stalwart security upgrades for
                warehouses, utilities, and high-security facilities. Multiple styles and colors available
                for a cost-effective industrial fencing solution.
              </p>
              <Link href="/installation/georgia/commercial-security-fence/" className="text-brand-orange hover:underline font-medium">
                Security Fence Installation &rarr;
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Fencing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stylish residential fencing that meets even the strictest HOA requirements. Ameristar
                residential fences are available in both aluminum and steel with a range of styles
                and finishes to complement any home.
              </p>
              <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline font-medium">
                Shop Aluminum Fencing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Area</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ameristar Fence Supply &amp; Installation in Georgia
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Fence Workshop supplies and installs Ameristar fencing products throughout Metro Atlanta
            and Georgia. We also ship Ameristar materials nationwide. Whether you need professional
            installation or materials for your own crew, we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="text-brand-orange hover:underline font-medium">
              Atlanta
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/installation/georgia/marietta-fence-installation/" className="text-brand-orange hover:underline font-medium">
              Marietta
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="text-brand-orange hover:underline font-medium">
              Alpharetta
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/installation/georgia/commercial-fence-installation/" className="text-brand-orange hover:underline font-medium">
              All Georgia Services
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/installation/georgia/commercial-fence-installation/#quote"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+14043144419"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Call (404) 314-4419
            </a>
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
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li>
                <li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li>
              </ul>
            </div>
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

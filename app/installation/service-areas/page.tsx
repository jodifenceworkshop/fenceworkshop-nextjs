import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Fence Installation Service Areas — Georgia",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fence Workshop",
    "telephone": "+14043144419",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1522 Huber St NW",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30318"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Atlanta", "addressRegion": "GA" },
    { "@type": "City", "name": "Marietta", "addressRegion": "GA" },
    { "@type": "City", "name": "Alpharetta", "addressRegion": "GA" },
    { "@type": "City", "name": "Roswell", "addressRegion": "GA" },
    { "@type": "City", "name": "Sandy Springs", "addressRegion": "GA" },
    { "@type": "City", "name": "Smyrna", "addressRegion": "GA" },
    { "@type": "City", "name": "Kennesaw", "addressRegion": "GA" },
  ],
  "description": "Commercial fence installation and repair throughout Metro Atlanta and Georgia. Serving Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Kennesaw, and surrounding communities."
}

export const metadata: Metadata = {
  title: 'Fence Installation Service Areas in Georgia | Fence Workshop',
  description: 'Commercial fence installation and repair throughout Metro Atlanta and Georgia. Serving Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Kennesaw, and surrounding areas.',
}

const primaryAreas = [
  {
    city: 'Atlanta',
    description: 'Our home base and most active service area. We install and repair commercial chain link, ornamental aluminum, security fencing, dumpster gates, and automated gate systems throughout Atlanta — Buckhead, Midtown, Downtown, West Midtown, Old Fourth Ward, and beyond.',
    href: '/installation/georgia/atlanta-fence-installation/',
    image: '/images/hero-georgia-installation.jpg',
    imageAlt: 'Commercial fence installation in Atlanta, GA',
  },
  {
    city: 'Marietta',
    description: 'Commercial fence installation and repair throughout Marietta and Cobb County. Chain link, security fencing, ornamental gates, dumpster enclosures, and slide gate systems for commercial and industrial properties.',
    href: '/installation/georgia/marietta-fence-installation/',
    image: '/images/service-chain-link-fence.jpg',
    imageAlt: 'Commercial fence installation in Marietta, GA',
  },
  {
    city: 'Alpharetta',
    description: 'Fence installation and repair for commercial properties, office parks, warehouses, and mixed-use developments in Alpharetta and north Fulton County. All fence types and gate systems.',
    href: '/installation/georgia/alpharetta-fence-installation/',
    image: '/images/service-security-fence.jpg',
    imageAlt: 'Commercial fence installation in Alpharetta, GA',
  },
]

const additionalAreas = [
  'Roswell', 'Sandy Springs', 'Smyrna', 'Kennesaw', 'Decatur', 'College Park',
  'East Point', 'Peachtree City', 'Norcross', 'Duluth', 'Lawrenceville',
  'Woodstock', 'Canton', 'Cumming', 'Johns Creek', 'Gainesville',
]

const services = [
  { title: 'Commercial Chain Link Fence', href: '/installation/georgia/commercial-chain-link-fence/' },
  { title: 'Commercial Security Fence', href: '/installation/georgia/commercial-security-fence/' },
  { title: 'Ornamental Aluminum Fence', href: '/installation/georgia/ornamental-aluminum-fence/' },
  { title: 'Security Gate Systems', href: '/installation/georgia/security-gate-systems/' },
  { title: 'Slide Gates', href: '/installation/georgia/slide-gates/' },
  { title: 'Dumpster Enclosure Gates', href: '/installation/georgia/dumpster-enclosure-gates/' },
  { title: 'Warehouse & Industrial Fencing', href: '/installation/georgia/warehouse-industrial-fencing/' },
  { title: 'Parking Garage Fencing', href: '/installation/georgia/parking-garage-fencing/' },
  { title: 'Dumpster Gate Repair', href: '/installation/georgia/dumpster-gate-repair/' },
  { title: 'Chain Link Fence Repair', href: '/installation/georgia/chain-link-fence-repair/' },
  { title: 'Roll Gate & Slide Gate Repair', href: '/installation/georgia/roll-gate-slide-gate-repair/' },
  { title: 'Security Fence & Gate Repair', href: '/installation/georgia/security-fence-gate-repair/' },
]

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-georgia-installation.jpg"
            alt="Commercial fence installation across Metro Atlanta and Georgia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link>
              <span>/</span>
              <span className="text-gray-200">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">Fence Installation Service Areas in Georgia</h1>
            <p className="text-xl md:text-2xl font-bold text-brand-orange mb-6 leading-tight">Metro Atlanta &amp; Surrounding Georgia Communities</p>
            <p className="text-lg text-gray-200 mb-8">Fence Workshop installs and repairs commercial fencing throughout Metro Atlanta and across the state of Georgia. Based in Atlanta, we serve commercial clients from small businesses to large industrial facilities.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Get a Free Quote</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-white font-medium">Based in Atlanta, GA</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-white font-medium">Licensed &amp; Insured in Georgia</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="text-white font-medium">Commercial &amp; Industrial Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Area Pages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Primary Service Areas</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Work in Georgia</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We primarily serve Metro Atlanta and the surrounding communities, with experience on projects throughout the state.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{area.city}, GA</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                  <span className="text-brand-orange font-semibold text-sm">View {area.city} Services &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Extended Service Area</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We Also Serve</h2>
              <p className="text-lg text-gray-700 mb-8">In addition to our primary service areas, we regularly work in communities throughout Metro Atlanta and North Georgia. If you don&rsquo;t see your city listed, contact us — we likely serve your area.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {additionalAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">&bull;</span>
                    <span className="text-gray-700">{area}, GA</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-600 italic">We also take on larger commercial projects statewide. Call us to discuss your project location.</p>
            </div>
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Services Available Statewide</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Install &amp; Repair</h2>
              <p className="text-lg text-gray-700 mb-6">Every service we offer is available throughout our service area — installation and repair.</p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="flex items-center gap-2 text-brand-orange hover:underline font-medium">
                      <span>&rarr;</span>
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Get Started</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <p className="text-lg text-gray-700 mb-6">Tell us about your project and we&rsquo;ll get back to you quickly — usually the same business day. We serve commercial clients throughout Metro Atlanta and Georgia.</p>
              <p className="text-lg text-gray-700 mb-4">Not sure if we cover your area? Give us a call and we&rsquo;ll let you know.</p>
              <a href="tel:+14043144419" className="text-brand-orange font-bold text-xl hover:underline">(404) 314-4419</a>
              <div className="mt-8 space-y-3">
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium">&larr; All Commercial Fence Services in Georgia</Link>
                <Link href="/installation/georgia/fence-repair/" className="block text-brand-orange hover:underline font-medium">&rarr; Fence &amp; Gate Repair Services</Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Project Quote</h3>
              <p className="text-gray-600 mb-6">Installation or repair — describe your project and we&rsquo;ll be in touch.</p>
              <QuoteForm subject="Service Area Quote Request" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Service Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/commercial-chain-link-fence/" className="hover:underline">Commercial Chain Link</Link></li>
                <li><Link href="/installation/georgia/commercial-security-fence/" className="hover:underline">Security Fencing</Link></li>
                <li><Link href="/installation/georgia/security-gate-systems/" className="hover:underline">Security Gate Systems</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li>
                <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
                <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li>
                <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll & Slide Gate Repair</Link></li>
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

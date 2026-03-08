import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Fence Installation in Georgia | Fence Workshop',
  description: 'Licensed commercial fence installation across Georgia and Metro Atlanta. Chain link, security fence, ornamental, dumpster gates, roll gates, and more. Get a free quote.',
}

const installationServices = [
  {
    title: 'Chain Link Fence Installation',
    description: 'Heavy-duty commercial and industrial chain link for perimeter security, job sites, and property boundaries. Available in galvanized or vinyl-coated finishes.',
    image: '/images/service-chain-link-fence.jpg',
  },
  {
    title: 'Security Fence Installation',
    description: 'High-security fencing systems including anti-climb designs, barbed wire, and razor ribbon topping for facilities requiring maximum perimeter protection.',
    image: '/images/service-security-fence.jpg',
  },
  {
    title: 'Ornamental & Aluminum Fence Installation',
    description: 'Architectural-grade ornamental and aluminum fencing for commercial properties, municipalities, and high-end residential projects through general contractors.',
    image: '/images/service-ornamental-gate.jpg',
  },
  {
    title: 'Dumpster Gate Installation',
    description: 'Custom dumpster enclosure gates built to local code. We work with property managers, HOAs, and commercial facilities for new installs and replacements.',
    image: '/images/service-dumpster-gate.jpg',
  },
  {
    title: 'Roll Gate & Slide Gate Installation',
    description: 'Manual and motorized roll gates for commercial driveways and facility entrances. Includes gate opener systems integrated into your gate installation.',
    image: '/images/service-chain-link-fence.jpg',
  },
  {
    title: 'Warehouse & Industrial Fencing',
    description: 'Interior and exterior fencing for warehouses, distribution centers, and industrial facilities. Partition fencing, cage systems, and perimeter security.',
    image: '/images/service-warehouse-fencing.jpg',
  },
  {
    title: 'Parking Deck & Garage Fencing',
    description: 'Perimeter cable systems, guard rails, and safety fencing for parking structures. Code-compliant installations with durable powder-coat finishes.',
    image: null,
  },
  {
    title: 'Security Gate Systems',
    description: 'Swing gates, slide gates, and access control integration for commercial and industrial facilities. Gate openers and operators included with gate system installations.',
    image: null,
  },
]

const repairServices = [
  {
    title: 'Dumpster Gate Repair',
    description: 'Fast repair for broken hinges, damaged frames, and sagging dumpster enclosure gates. We service commercial properties throughout Metro Atlanta.',
  },
  {
    title: 'Chain Link Fence Repair',
    description: 'Fabric repair, post replacement, tension wire, and top rail repairs for commercial chain link systems. Quick turnaround to restore your perimeter security.',
  },
  {
    title: 'Security Fence & Gate Repair',
    description: 'Repairs to high-security fencing, crash-damaged sections, and compromised perimeter systems. Emergency response available for facilities with urgent security needs.',
  },
  {
    title: 'Roll Gate & Slide Gate Repair',
    description: 'Track repair, roller replacement, gate operator service, and frame straightening for commercial roll and slide gates.',
  },
]

const faqs = [
  {
    question: 'Do you install fences for residential customers?',
    answer: 'Our primary focus is commercial fence installation. We occasionally work on residential projects that come through general contractors — typically high-end custom or ornamental installations. If you have a commercial project, we\'d love to connect.',
  },
  {
    question: 'What areas of Georgia do you serve?',
    answer: 'We\'re based in Metro Atlanta and serve clients throughout Georgia. Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities. We also take on larger projects statewide.',
  },
  {
    question: 'Are you licensed and insured for commercial fence work in Georgia?',
    answer: 'Yes. Fence Workshop is fully licensed and insured for commercial fence installation in Georgia. We\'ve been in business for 20+ years and stand behind our work.',
  },
  {
    question: 'How do I get a quote for a fence installation project?',
    answer: 'Use the form on this page or give us a call. We\'ll ask a few questions about your project and schedule a site visit if needed. Most commercial projects receive a detailed quote within a few business days.',
  },
]

export default function GeorgiaInstallationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-georgia-installation.jpg"
            alt="Commercial fence and drive gate installation in Georgia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Commercial Fence Installation in Georgia
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Metro Atlanta&rsquo;s Trusted Commercial Fence Contractor
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Fence Workshop provides professional commercial and industrial fence installation throughout Metro Atlanta
              and across Georgia. Licensed &amp; insured. 20+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Get a Free Quote
              </a>
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
              <span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">20+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-medium">Commercial &amp; Industrial Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white font-medium">Best Customer Service from Start to Finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Installation Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Fence Installation Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We specialize in commercial and industrial fence installations throughout Georgia. Every project is managed
              by experienced installers from permit to final inspection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationServices.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video relative bg-gray-300">
                  {service.image ? (
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image placeholder</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Repair Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Fence Repair Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We handle fence and gate repairs for commercial facilities throughout Metro Atlanta.
              Whether it&rsquo;s storm damage, wear, or a gate that&rsquo;s off the track — we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Quote Form */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: service areas + overview */}
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving Metro Atlanta &amp; Georgia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Fence Workshop has been installing commercial and industrial fencing across Georgia for over 20 years.
                We work with property managers, general contractors, municipalities, and business owners to deliver
                code-compliant fence installations on time and on budget.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs,
                Kennesaw, and surrounding communities. We also take on larger projects statewide.
              </p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta/" className="block text-brand-orange hover:underline font-medium">
                  → Commercial Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/marietta/" className="block text-brand-orange hover:underline font-medium">
                  → Commercial Fence Installation in Marietta, GA
                </Link>
                <Link href="/installation/georgia/alpharetta/" className="block text-brand-orange hover:underline font-medium">
                  → Commercial Fence Installation in Alpharetta, GA
                </Link>
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your project and we&rsquo;ll respond within one business day.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Type of Project *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="chain-link">Chain Link Fence Installation</option>
                    <option value="security-fence">Security Fence Installation</option>
                    <option value="ornamental">Ornamental / Aluminum Fence Installation</option>
                    <option value="dumpster-gate">Dumpster Gate Installation</option>
                    <option value="roll-gate">Roll Gate / Slide Gate Installation</option>
                    <option value="warehouse">Warehouse / Industrial Fencing</option>
                    <option value="parking">Parking Deck / Garage Fencing</option>
                    <option value="security-gate">Security Gate System</option>
                    <option value="repair">Fence or Gate Repair</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                    placeholder="Location, approximate footage, timeline, etc."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
                <li><Link href="/installation/georgia/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta/" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/marietta/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta/" className="hover:underline">Alpharetta Fence Installation</Link></li>
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
                <li><Link href="/about/" className="hover:underline">About Fence Workshop</Link></li>
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

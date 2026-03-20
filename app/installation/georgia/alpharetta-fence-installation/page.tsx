import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you pull permits for fence installation in Alpharetta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fence Workshop researches and coordinates permit requirements for commercial fence installations in Alpharetta, Milton, and the surrounding North Fulton area. Requirements vary by municipality and project type — we confirm what's needed before work starts so there are no delays at inspection."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Alpharetta and North Fulton do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve commercial clients throughout Alpharetta, Johns Creek, Milton, Roswell, Sandy Springs, and Cumming. We regularly work on office parks, tech campuses, distribution facilities, and commercial properties throughout the GA-400 corridor."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with general contractors and property managers in Alpharetta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we work with general contractors, commercial property managers, and corporate facilities teams throughout North Fulton County. We're experienced coordinating with construction schedules on active commercial sites and delivering code-compliant installations with minimal disruption."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you start a commercial fence project in Alpharetta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After a site visit and quote approval, most commercial projects are scheduled within 1–3 weeks depending on material lead times and crew availability. Emergency fence and gate repairs can often be handled faster — call us to discuss your timeline."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial Fence Installation in Alpharetta, GA | Fence Workshop',
  description: 'Fence Workshop provides commercial fence installation throughout Alpharetta and North Fulton County, GA — chain link, security, ornamental, and gate systems. Licensed & insured. Free quotes.',
}

const installationServices = [
  {
    title: 'Chain Link Fence Installation',
    description: 'Heavy-duty commercial and industrial chain link for Alpharetta-area perimeter security, job sites, and property boundaries. Available in galvanized or vinyl-coated finishes with multiple height options.',
    image: '/images/service-chain-link-fence.jpg',
    alt: 'Commercial chain link fence installation in Alpharetta, GA',
    href: '/installation/georgia/commercial-chain-link-fence/',
  },
  {
    title: 'Security Fence Installation',
    description: 'High-security fencing systems for North Fulton commercial and industrial facilities — anti-climb designs, barbed wire, and razor ribbon topping for maximum perimeter protection.',
    image: '/images/service-security-fence.jpg',
    alt: 'Industrial security fence installation in Alpharetta, GA',
    href: '/installation/georgia/commercial-security-fence/',
  },
  {
    title: 'Ornamental & Aluminum Fence Installation',
    description: 'Architectural-grade ornamental and aluminum fencing for Alpharetta office parks, tech campuses, and HOA communities through general contractors and property managers.',
    image: '/images/service-ornamental-gate.jpg',
    alt: 'Ornamental aluminum fence installation in Alpharetta, GA',
    href: '/installation/georgia/ornamental-aluminum-fence/',
  },
  {
    title: 'Dumpster Gate Installation',
    description: 'Custom dumpster enclosure gates built to North Fulton County code. We work with property managers, HOAs, and commercial facilities throughout Alpharetta for new installs and replacements.',
    image: '/images/service-dumpster-gate.jpg',
    alt: 'Commercial dumpster gate installation in Alpharetta, GA',
    href: '/installation/georgia/dumpster-enclosure-gates/',
  },
  {
    title: 'Roll Gate & Slide Gate Installation',
    description: 'Manual and motorized roll gates for Alpharetta commercial driveways and facility entrances. Includes gate opener systems integrated into your installation.',
    image: '/images/service-roll-gate.jpg',
    alt: 'Commercial roll gate and slide gate installation in Alpharetta, GA',
    href: '/installation/georgia/slide-gates/',
  },
  {
    title: 'Warehouse & Industrial Fencing',
    description: 'Interior and exterior fencing for Alpharetta-area warehouses, distribution centers, and tech facilities along the GA-400 corridor. Partition fencing, cage systems, and perimeter security.',
    image: '/images/service-warehouse-fencing.jpg',
    alt: 'Warehouse and industrial fence installation in Alpharetta, GA',
    href: '/installation/georgia/warehouse-industrial-fencing/',
  },
  {
    title: 'Parking Deck & Garage Fencing',
    description: 'Perimeter cable systems, guard rails, and safety fencing for North Fulton parking structures. Code-compliant installations with durable powder-coat finishes.',
    image: '/images/service-parking-deck.jpg',
    alt: 'Parking deck gate and fencing installation in Alpharetta, GA',
    href: '/installation/georgia/parking-garage-fencing/',
  },
  {
    title: 'Security Gate Systems',
    description: 'Swing gates, slide gates, and access control integration for Alpharetta commercial and corporate facilities. Gate openers and operators included with installations.',
    image: '/images/service-security-gate.jpg',
    alt: 'Commercial security gate system installation in Alpharetta, GA',
    href: '/installation/georgia/security-gate-systems/',
  },
]

const repairServices = [
  {
    title: 'Dumpster Gate Repair',
    description: 'Fast repair for broken hinges, damaged frames, and sagging dumpster enclosure gates at commercial properties throughout Alpharetta and North Fulton County.',
    image: '/images/repair-dumpster-gate.jpg',
    alt: 'Commercial dumpster gate repair in Alpharetta, GA',
    href: '/installation/georgia/dumpster-gate-repair/',
  },
  {
    title: 'Chain Link Fence Repair',
    description: 'Fabric repair, post replacement, tension wire, and top rail repairs for commercial chain link systems in Alpharetta. Quick turnaround to restore perimeter security.',
    image: '/images/repair-chain-link.jpg',
    alt: 'Chain link fence repair in Alpharetta, GA',
    href: '/installation/georgia/chain-link-fence-repair/',
  },
  {
    title: 'Security Fence & Gate Repair',
    description: 'Repairs to high-security fencing, crash-damaged sections, and compromised perimeter systems. Emergency response available for North Fulton facilities with urgent security needs.',
    image: '/images/repair-security-fence.jpg',
    alt: 'Security fence and gate repair in Alpharetta, GA',
    href: '/installation/georgia/security-fence-gate-repair/',
  },
  {
    title: 'Roll Gate & Slide Gate Repair',
    description: 'Track repair, roller replacement, gate operator service, and frame straightening for commercial roll and slide gates throughout Alpharetta and North Fulton County.',
    image: '/images/repair-roll-gate.jpg',
    alt: 'Commercial roll gate and slide gate repair in Alpharetta, GA',
    href: '/installation/georgia/roll-gate-slide-gate-repair/',
  },
]

const faqs = [
  {
    question: 'Do you pull permits for fence installation in Alpharetta?',
    answer: 'Yes. Fence Workshop researches and coordinates permit requirements for commercial fence installations in Alpharetta, Milton, and the surrounding North Fulton area. Requirements vary by municipality and project type — we confirm what\'s needed before work starts so there are no delays at inspection.',
  },
  {
    question: 'What areas of Alpharetta and North Fulton do you serve?',
    answer: 'We serve commercial clients throughout Alpharetta, Johns Creek, Milton, Roswell, Sandy Springs, and Cumming. We regularly work on office parks, tech campuses, distribution facilities, and commercial properties throughout the GA-400 corridor.',
  },
  {
    question: 'Do you work with general contractors and property managers in Alpharetta?',
    answer: 'Yes — we work with general contractors, commercial property managers, and corporate facilities teams throughout North Fulton County. We\'re experienced coordinating with construction schedules on active commercial sites and delivering code-compliant installations with minimal disruption.',
  },
  {
    question: 'How quickly can you start a commercial fence project in Alpharetta?',
    answer: 'After a site visit and quote approval, most commercial projects are scheduled within 1–3 weeks depending on material lead times and crew availability. Emergency fence and gate repairs can often be handled faster — call us to discuss your timeline.',
  },
]

export default function AlpharettaInstallationPage() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-georgia-installation.jpg"
            alt="Commercial fence and gate installation by Fence Workshop in Alpharetta, GA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">
                Georgia Installation
              </Link>
              <span>/</span>
              <span className="text-white">Alpharetta</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Commercial Fence Installation in Alpharetta, GA
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              North Fulton&rsquo;s Trusted Commercial Fence Contractor
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Fence Workshop provides professional commercial and industrial fence installation
              throughout Alpharetta and North Fulton County. Licensed &amp; insured. 15+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
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
              <span className="text-white font-medium">Licensed &amp; insured fence contractor in Alpharetta</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">15+ Years in Business</span>
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
              Commercial Fence Installation Services in Alpharetta
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We specialize in commercial and industrial fence installations throughout Alpharetta and North Fulton County.
              Every project is managed by experienced crews from permit to final inspection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationServices.map((service) => (
              <Link key={service.title} href={service.href} className="block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="aspect-video relative bg-gray-300">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
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
              Commercial Fence Repair in Alpharetta
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We handle fence and gate repairs for commercial facilities throughout Alpharetta and North Fulton County.
              Whether it&rsquo;s storm damage, wear, or a gate that&rsquo;s off the track &mdash; we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service) => (
              <Link key={service.title} href={service.href} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="aspect-video relative bg-gray-300">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Alpharetta Fence Installation Process Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              As a commercial fencing contractor serving Alpharetta and North Fulton County, we manage every step —
              from initial site visit to final walkthrough. No surprises. No change orders mid-project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: '01',
                title: 'Request a Quote',
                description: 'Fill out our form or call us directly. We\'ll gather project details — scope, materials, site conditions, and your timeline — and follow up within one business day.',
              },
              {
                step: '02',
                title: 'Site Visit & Design',
                description: 'We visit your Alpharetta property, take measurements, and confirm specifications. Our team handles permit research for the City of Alpharetta, City of Milton, or North Fulton County and coordinates with your general contractor or property manager.',
              },
              {
                step: '03',
                title: 'Fabrication & Materials',
                description: 'Materials are sourced and fabricated to your exact specifications. Commercial fencing is cut, welded, and assembled to fit your property layout before installation begins.',
              },
              {
                step: '04',
                title: 'Installation & Walkthrough',
                description: 'Our experienced crews install on schedule, coordinating around your operations to minimize disruption. Every job ends with a final walkthrough to confirm it meets code and your expectations.',
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Quote Form */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: service areas */}
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Alpharetta &amp; North Fulton Areas We Serve
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Fence Workshop is based in Atlanta and regularly serves commercial clients throughout Alpharetta
                and North Fulton County — including tech companies, office parks, property management firms,
                and general contractors working along the GA-400 corridor.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our active Alpharetta service area includes:
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {[
                  'Alpharetta', 'Johns Creek', 'Milton', 'Roswell',
                  'Sandy Springs', 'Cumming', 'Duluth', 'Suwanee',
                  'Peachtree Corners', 'Norcross', 'Dunwoody', 'Brookhaven',
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-orange font-bold">→</span>
                    {area}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  ← Back to Georgia Fence Installation
                </Link>
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  → Commercial Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  → Commercial Fence Installation in Marietta, GA
                </Link>
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your Alpharetta project and we&rsquo;ll respond within one business day.</p>
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
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don&rsquo;t ask us. See what our customers and partners have to say about working with Fence Workshop.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;I had a terrific experience with Fence Workshop. Their team was professional, responsive, and clearly
                takes pride in their work. The installation was efficient, craftsmanship was excellent, and the finished
                fence looks fantastic. It&rsquo;s refreshing to work with a company that delivers exactly what they promise.&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">Joseph Donini</p>
                <p className="text-gray-600">Commercial Property Owner</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;I love working with Fence Workshop. When I put them on a job, I know it will be completed exactly
                as scheduled and for the quoted amount. They have never come back mid-project asking for additional
                funds, which speaks volumes about their integrity and planning. The quality of their work is outstanding.
                They consistently go above and beyond to ensure every project is completed professionally and is
                aesthetically pleasing. Adam and Blair are both fantastic to work with and truly make my job easier.&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">Eddie Jensen</p>
                <p className="text-gray-600">Account Executive, Miner, LTD. - Southeast Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alpharetta Fence Installation — Frequently Asked Questions
            </h2>
          </div>
          <ul className="space-y-8">
            {faqs.map((faq) => (
              <li key={faq.question} className="flex gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
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

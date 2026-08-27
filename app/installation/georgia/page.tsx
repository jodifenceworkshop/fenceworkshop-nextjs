import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://fenceworkshop.com/#business',
  name: 'Fence Workshop',
  description: 'Commercial and residential fence installation contractor in Atlanta, GA. Chain link, security fencing, aluminum, ornamental steel, gate systems, bollards, and fence repair throughout Metro Atlanta and Georgia.',
  url: 'https://fenceworkshop.com/installation/georgia/',
  telephone: '+14043144419',
  email: 'atlanta@fenceworkshop.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1522 Huber St NW',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30318',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Atlanta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Marietta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Alpharetta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Roswell', addressRegion: 'GA' },
    { '@type': 'City', name: 'Sandy Springs', addressRegion: 'GA' },
    { '@type': 'City', name: 'Smyrna', addressRegion: 'GA' },
    { '@type': 'City', name: 'Kennesaw', addressRegion: 'GA' },
    { '@type': 'City', name: 'Woodstock', addressRegion: 'GA' },
    { '@type': 'City', name: 'Dunwoody', addressRegion: 'GA' },
    { '@type': 'City', name: 'Decatur', addressRegion: 'GA' },
    { '@type': 'City', name: 'Johns Creek', addressRegion: 'GA' },
    { '@type': 'City', name: 'Brookhaven', addressRegion: 'GA' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fence Installation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chain Link Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Gate Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bollard Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fence Repair' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Fence Installation in Georgia', item: 'https://fenceworkshop.com/installation/georgia/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of fence installation do you offer in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fence Workshop installs commercial and residential fencing throughout Metro Atlanta and Georgia. Our commercial services include chain link, security fencing, ornamental aluminum, gate systems, slide gates, dumpster enclosures, warehouse partitions, bollards, and parking garage fencing. We also install residential fencing including ornamental steel, aluminum, wood, vinyl, and custom driveway gates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve commercial and industrial clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Commercial and industrial fence installation is our primary focus. We work with property managers, general contractors, municipalities, HOAs, warehouses, distribution centers, and industrial facilities throughout Georgia. We are a local commercial fencing contractor — not a national referral service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities in Georgia do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Kennesaw, Woodstock, Decatur, Dunwoody, Johns Creek, and Brookhaven. We serve clients throughout Metro Atlanta and take on larger commercial projects statewide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you licensed and insured for fence installation in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fence Workshop is a fully licensed and insured fence contractor in Georgia with 15+ years of experience. We handle permits, site visits, fabrication, and installation — from initial quote to final walkthrough.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a quote for fence installation in Atlanta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the quote form on this page or call us at (404) 314-4419. We respond within one business day and schedule a site visit for larger projects. Most commercial projects receive a detailed quote within a few business days of the site visit.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Fence Installation in Atlanta, GA | Commercial & Residential Fence Contractor',
  description: 'Licensed commercial and residential fence installation contractor in Atlanta, GA. Chain link, security fencing, aluminum, gate systems, bollards & fence repair throughout Metro Atlanta. Free quotes — (404) 314-4419.',
  alternates: { canonical: 'https://fenceworkshop.com/installation/georgia/' },
}

const commercialServices = [
  {
    title: 'Commercial Fence Installation',
    description: 'Chain link, security, ornamental, and specialty fencing for commercial and industrial properties throughout Georgia.',
    image: '/images/commercial-fence-installation-georgia.jpg',
    alt: 'Commercial fence installation in Georgia',
    href: '/installation/georgia/commercial-fence-installation/',
  },
  {
    title: 'Commercial Chain Link Fence',
    description: 'Heavy-gauge galvanized and vinyl-coated chain link for job sites, warehouses, industrial facilities, and commercial properties.',
    image: '/images/commercial-chain-link-fence-installation-atlanta-ga.jpg',
    alt: 'Commercial chain link fence installation in Atlanta, GA',
    href: '/installation/georgia/commercial-chain-link-fence/',
  },
  {
    title: 'Commercial Security Fence',
    description: 'High-security perimeter fencing with anti-climb designs, barbed wire, and razor ribbon topping for maximum protection.',
    image: '/images/commercial-security-fence-atlanta-ga.jpg',
    alt: 'Commercial security fence installation in Atlanta, GA',
    href: '/installation/georgia/commercial-security-fence/',
  },
  {
    title: 'Security Gate Systems',
    description: 'Swing gates, slide gates, and access control integration for commercial and industrial facilities.',
    image: '/images/commercial-security-gate-atlanta-ga.jpg',
    alt: 'Commercial security gate system installation in Atlanta, GA',
    href: '/installation/georgia/security-gate-systems/',
  },
  {
    title: 'Slide Gates',
    description: 'Manual and motorized slide gates for commercial driveways, warehouse entrances, and industrial facilities.',
    image: '/images/commercial-roll-gate-installation-atlanta-ga.jpg',
    alt: 'Commercial slide gate installation in Atlanta, GA',
    href: '/installation/georgia/slide-gates/',
  },
  {
    title: 'Dumpster Enclosure Gates',
    description: 'Custom dumpster enclosures and gates built to local code for HOAs, commercial properties, and multi-family facilities.',
    image: '/images/dumpster-gate-installation-atlanta-ga.jpg',
    alt: 'Dumpster enclosure gate installation in Atlanta, GA',
    href: '/installation/georgia/dumpster-enclosure-gates/',
  },
  {
    title: 'Warehouse Partitions',
    description: 'Interior chain link partitions and security caging for warehouses, distribution centers, and industrial facilities.',
    image: '/images/warehouse-partitions-atlanta-ga.jpg',
    alt: 'Warehouse partition installation in Atlanta, GA',
    href: '/installation/georgia/warehouse-partitions/',
  },
  {
    title: 'Parking Garage Fencing',
    description: 'Perimeter cable systems, guard rails, and safety fencing for parking structures and garages.',
    image: '/images/parking-garage-security-fence-corner-partition-georgia.jpg',
    alt: 'Parking garage fencing installation in Georgia',
    href: '/installation/georgia/parking-garage-fencing/',
  },
  {
    title: 'Bollard Installation',
    description: 'Steel pipe bollards, removable bollards, and vehicle barriers for storefronts, loading docks, and access control points.',
    image: '/images/commercial-bollard-installation-atlanta-ga.jpg',
    alt: 'Commercial bollard installation in Atlanta, GA',
    href: '/installation/georgia/bollard-installation/',
  },
]

const repairServices = [
  {
    title: 'Fence Repair',
    description: 'Commercial fence repair for damaged aluminum, chain link, and security fencing throughout Metro Atlanta.',
    image: '/images/ornamental-fence-installation-brick-wall-georgia.jpg',
    alt: 'Commercial fence repair in Atlanta, GA',
    href: '/installation/georgia/fence-repair/',
  },
  {
    title: 'Chain Link Fence Repair',
    description: 'Fabric repair, post replacement, tension wire, and top rail repairs for commercial chain link systems.',
    image: '/images/chain-link-fence-repair-atlanta-ga.jpg',
    alt: 'Chain link fence repair in Atlanta, GA',
    href: '/installation/georgia/chain-link-fence-repair/',
  },
  {
    title: 'Security Fence & Gate Repair',
    description: 'Repairs to high-security fencing, crash-damaged sections, and compromised perimeter systems.',
    image: '/images/security-fence-repair-atlanta-ga.jpg',
    alt: 'Security fence and gate repair in Atlanta, GA',
    href: '/installation/georgia/security-fence-gate-repair/',
  },
  {
    title: 'Dumpster Gate Repair',
    description: 'Fast repair for broken hinges, damaged frames, and sagging dumpster enclosure gates.',
    image: '/images/dumpster-gate-repair-atlanta-ga.jpg',
    alt: 'Dumpster gate repair in Atlanta, GA',
    href: '/installation/georgia/dumpster-gate-repair/',
  },
  {
    title: 'Roll Gate & Slide Gate Repair',
    description: 'Track repair, roller replacement, gate operator service, and frame straightening for commercial slide gates.',
    image: '/images/roll-gate-repair-atlanta-ga.jpg',
    alt: 'Roll gate and slide gate repair in Atlanta, GA',
    href: '/installation/georgia/roll-gate-slide-gate-repair/',
  },
  {
    title: 'Bollard Replacement',
    description: 'Vehicle-damaged, leaning, and knocked-over bollards repaired or replaced. Post replacement and footing repair.',
    image: '/images/yellow-steel-bollards-security-gate-georgia.jpg',
    alt: 'Bollard replacement in Georgia',
    href: '/installation/georgia/bollard-replacement/',
  },
]

const faqs = [
  {
    question: 'What types of fence installation do you offer in Georgia?',
    answer: 'Fence Workshop installs commercial and residential fencing throughout Metro Atlanta and Georgia. Our commercial services include chain link, security fencing, ornamental aluminum, gate systems, slide gates, dumpster enclosures, warehouse partitions, bollards, and parking garage fencing. We also install residential fencing including ornamental steel, aluminum, wood, vinyl, and custom driveway gates.',
  },
  {
    question: 'Do you serve commercial and industrial clients?',
    answer: 'Yes. Commercial and industrial fence installation is our primary focus. We work with property managers, general contractors, municipalities, HOAs, warehouses, distribution centers, and industrial facilities throughout Georgia. We are a local commercial fencing contractor — not a national referral service.',
  },
  {
    question: 'What cities in Georgia do you serve?',
    answer: 'Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Kennesaw, Woodstock, Decatur, Dunwoody, Johns Creek, and Brookhaven. We serve clients throughout Metro Atlanta and take on larger commercial projects statewide.',
  },
  {
    question: 'Are you licensed and insured for fence installation in Georgia?',
    answer: 'Yes. Fence Workshop is a fully licensed and insured fence contractor in Georgia with 15+ years of experience. We handle permits, site visits, fabrication, and installation — from initial quote to final walkthrough.',
  },
  {
    question: 'How do I get a quote for fence installation in Atlanta?',
    answer: 'Use the quote form on this page or call us at (404) 314-4419. We respond within one business day and schedule a site visit for larger projects. Most commercial projects receive a detailed quote within a few business days of the site visit.',
  },
]

export default function GeorgiaInstallationHubPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <div className="h-20" />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial-fence-installation-georgia.jpg"
            alt="Commercial and residential fence installation in Atlanta, GA by Fence Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Fence Installation in Atlanta, GA
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Commercial &amp; Residential Fence Contractor
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Fence Workshop is a licensed fence installation contractor serving Metro Atlanta and Georgia.
              Commercial, industrial, and residential — chain link, security fencing, aluminum, gate systems,
              bollards, and more. 15+ years in business.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: 'Licensed & insured fence contractors in Georgia' },
              { text: '15+ Years of Experience' },
              { text: 'Commercial & Industrial Specialists' },
              { text: 'Free Quotes — (404) 314-4419' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Installation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Commercial Installation</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Fence Installation Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We specialize in commercial and industrial fence installations throughout Georgia. Every project
              is managed by experienced installers from permit to final inspection.{' '}
              <Link href="/installation/georgia/commercial-fence-installation/" className="text-brand-orange hover:underline">
                Learn more about our commercial fence installation →
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video relative bg-gray-300">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Installation */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/residential-fence-installation-atlanta-ga.jpg"
                alt="Custom residential fence installation in Atlanta, GA"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Residential Installation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Residential Fence Installation in Georgia
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We install custom residential fences, driveway gates, and railings throughout Metro Atlanta.
                Ornamental steel, aluminum, wood, and vinyl — built and installed by experienced fence
                contractors with 15+ years in the field.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our residential work focuses on custom projects where craftsmanship matters. We also serve
                general contractors on multi-family and mixed-use projects across Georgia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/installation/georgia/residential-fence-installation/"
                  className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  View Residential Services
                </Link>
                <Link
                  href="/installation/georgia/aluminum-fence-installation/"
                  className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
                >
                  Aluminum Fence Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fence Repair Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Repair Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Fence Repair in Atlanta, GA
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We handle fence and gate repairs for commercial facilities throughout Metro Atlanta — storm damage,
              vehicle impacts, worn hardware, and gates off their track.{' '}
              <Link href="/installation/georgia/fence-repair/" className="text-brand-orange hover:underline">
                View all repair services →
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video relative bg-gray-300">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Quote Form */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving Metro Atlanta &amp; Georgia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Fence Workshop is based in Atlanta and serves commercial and residential clients across Metro Atlanta
                and throughout Georgia. We work directly with property owners, managers, and general contractors —
                no national middleman.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-8 text-gray-700">
                {[
                  'Atlanta', 'Marietta', 'Alpharetta', 'Roswell',
                  'Sandy Springs', 'Smyrna', 'Kennesaw', 'Woodstock',
                  'Decatur', 'Dunwoody', 'Johns Creek', 'Brookhaven',
                  'Tucker', 'Chamblee', 'Norcross', 'Lawrenceville',
                  'Gainesville', 'Buford', 'McDonough', 'Stockbridge',
                ].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 py-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {city}, GA
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  → Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  → Fence Installation in Alpharetta, GA
                </Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  → Fence Installation in Marietta, GA
                </Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">
                  → View All Georgia Service Areas
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <QuoteForm subject="Fence Installation Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fence Installation in Georgia — Frequently Asked Questions
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

      <Footer />
    </main>
  )
}

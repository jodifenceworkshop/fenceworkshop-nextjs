import Link from 'next/link'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Bollard Installation",
  "description": "Professional commercial bollard installation throughout Metro Atlanta and Georgia — storefront protection, dumpster enclosures, parking lots, loading docks, and access control points.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fence Workshop",
    "telephone": "+14043144419",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1522 Huber St NW",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30318",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Atlanta", "addressRegion": "GA" },
    { "@type": "City", "name": "Marietta", "addressRegion": "GA" },
    { "@type": "City", "name": "Alpharetta", "addressRegion": "GA" },
    { "@type": "City", "name": "Roswell", "addressRegion": "GA" },
    { "@type": "City", "name": "Smyrna", "addressRegion": "GA" },
    { "@type": "City", "name": "Sandy Springs", "addressRegion": "GA" },
    { "@type": "City", "name": "Kennesaw", "addressRegion": "GA" },
    { "@type": "City", "name": "Duluth", "addressRegion": "GA" },
    { "@type": "City", "name": "Decatur", "addressRegion": "GA" },
    { "@type": "City", "name": "Norcross", "addressRegion": "GA" }
  ],
  "serviceType": "Bollard Installation"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of bollards do you install?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We install steel pipe bollards, removable bollards, surface-mount bollards, and decorative cast iron bollards for commercial applications. The right type depends on your security requirements, traffic conditions, and aesthetic goals. We assess your site and recommend the best system for your specific application."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between fixed and removable bollards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixed bollards are set in concrete and provide permanent vehicle barriers. Removable bollards use a receiver sleeve set in concrete so the post can be unlocked and removed when access is needed — common for delivery areas, emergency vehicle access points, and seasonal access routes. We install both types and can combine them in the same installation."
      }
    },
    {
      "@type": "Question",
      "name": "How deep do bollards need to be set?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard steel pipe bollards are typically set 3–4 feet into concrete to provide adequate vehicle barrier resistance. The exact depth depends on the bollard diameter, post schedule, and impact requirements for your application. We follow ASTM and IBC guidelines for commercial bollard installations."
      }
    },
    {
      "@type": "Question",
      "name": "Can bollards be installed in existing concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We core drill existing concrete to set bollard sleeves or install surface-mount bollard systems designed for retrofit applications. This is common for storefront protection, parking lot upgrades, and adding bollards to existing dumpster enclosures without full demolition."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install bollards around dumpster enclosures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Bollards around dumpster enclosures are one of our most common installations. They protect gate hinges, posts, and enclosure walls from waste hauler truck damage — extending the life of the enclosure significantly. We typically install them in conjunction with new enclosure builds or as an add-on to existing enclosures."
      }
    },
    {
      "@type": "Question",
      "name": "Do you paint or finish bollards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Standard steel pipe bollards are primed and painted in your choice of color — safety yellow is most common for high-visibility applications, but we can match any color. We also install bollard covers (plastic sleeves) for properties that want a cleaner, finished appearance."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Bollard Installation in Georgia | Commercial Vehicle Barriers | Fence Workshop',
  description: 'Commercial bollard installation throughout Metro Atlanta and Georgia. Steel pipe bollards, removable bollards, storefront protection, parking lot barriers. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'What types of bollards do you install?', answer: 'We install steel pipe bollards, removable bollards, surface-mount bollards, and decorative cast iron bollards for commercial applications. The right type depends on your security requirements, traffic conditions, and aesthetic goals. We assess your site and recommend the best system for your specific application.' },
  { question: 'What is the difference between fixed and removable bollards?', answer: 'Fixed bollards are set in concrete and provide permanent vehicle barriers. Removable bollards use a receiver sleeve set in concrete so the post can be unlocked and removed when access is needed — common for delivery areas, emergency vehicle access points, and seasonal access routes. We install both types and can combine them in the same installation.' },
  { question: 'How deep do bollards need to be set?', answer: 'Standard steel pipe bollards are typically set 3–4 feet into concrete to provide adequate vehicle barrier resistance. The exact depth depends on the bollard diameter, post schedule, and impact requirements for your application. We follow ASTM and IBC guidelines for commercial bollard installations.' },
  { question: 'Can bollards be installed in existing concrete?', answer: 'Yes. We core drill existing concrete to set bollard sleeves or install surface-mount bollard systems designed for retrofit applications. This is common for storefront protection, parking lot upgrades, and adding bollards to existing dumpster enclosures without full demolition.' },
  { question: 'Do you install bollards around dumpster enclosures?', answer: 'Yes. Bollards around dumpster enclosures are one of our most common installations. They protect gate hinges, posts, and enclosure walls from waste hauler truck damage — extending the life of the enclosure significantly. We typically install them in conjunction with new enclosure builds or as an add-on to existing enclosures.' },
  { question: 'Do you paint or finish bollards?', answer: 'Yes. Standard steel pipe bollards are primed and painted in your choice of color — safety yellow is most common for high-visibility applications, but we can match any color. We also install bollard covers (plastic sleeves) for properties that want a cleaner, finished appearance.' },
]

export default function BollardInstallationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link>
              <span>/</span>
              <span className="text-gray-200">Bollard Installation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Bollard Installation in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Steel Pipe Bollards, Removable Bollards &amp; Vehicle Barriers</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Fence Workshop installs commercial bollards throughout Metro Atlanta and Georgia — storefront protection, dumpster enclosure perimeters, parking lots, loading docks, and access control points. Fixed and removable bollard systems. Licensed &amp; insured with 15+ years experience.</p>
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
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-white font-medium">Licensed &amp; insured fence contractors</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="text-white font-medium">Commercial &amp; Industrial Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              <span className="text-white font-medium">Best Customer Service from Start to Finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bollard Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Bollard Systems</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Bollards We Install</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We install the full range of commercial bollard systems — from basic pipe bollards to removable and decorative options. The right choice depends on your application, traffic conditions, and access requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Steel Pipe Bollards',
                description: 'The most common commercial bollard — schedule 40 or schedule 80 steel pipe, set in concrete with a dome or flat cap. Primed and painted safety yellow or custom color. Built to withstand vehicle impact and daily abuse.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'Removable Bollards',
                description: 'A sleeve is set in concrete and the bollard post locks in and out as needed. Ideal for delivery areas, fire lanes, emergency vehicle access, and seasonal entry points that need to be opened periodically.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
              },
              {
                title: 'Surface-Mount Bollards',
                description: 'For retrofit applications where cutting into existing concrete is not feasible. Surface-mount systems bolt directly to the slab and provide vehicle deterrence without full core drilling or sleeve installation.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Decorative Bollards',
                description: 'Cast iron and steel bollards in architectural styles for storefronts, pedestrian areas, and properties where aesthetics matter alongside protection. Available in a range of profiles, heights, and finishes.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
              },
              {
                title: 'Bollard Covers & Sleeves',
                description: 'High-visibility plastic covers and decorative sleeves fit over standard pipe bollards to improve appearance and visibility. Available in yellow, red, white, and custom colors. Easy to replace when damaged.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Bollard & Fence Combinations',
                description: 'Bollards are frequently installed alongside fencing, dumpster enclosures, and gate systems as part of a complete perimeter solution. We integrate bollard placement with your existing or new fence and gate layout.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Install */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Install Bollards</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Bollards serve a wide range of commercial applications — from protecting storefronts to managing parking lot traffic to securing perimeters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Dumpster Enclosures', description: 'Bollards installed along the sides and front of dumpster enclosures protect gate hinges, posts, and walls from waste hauler truck damage. One of the most cost-effective ways to extend enclosure life — we install these on new builds and as upgrades to existing enclosures.' },
              { title: 'Storefronts & Retail', description: 'Protect storefront windows, doors, and building facades from vehicle intrusion. Bollards installed at storefronts deter smash-and-grab theft, accidental vehicle impact, and intentional ram attacks. Common for retail strips, banks, and convenience stores.' },
              { title: 'Parking Lots & Garages', description: 'Define traffic flow, protect columns and curbs, mark pedestrian pathways, and prevent vehicles from accessing restricted areas. We install bollards throughout parking lots and garages as part of larger parking structure projects.' },
              { title: 'Loading Docks & Warehouses', description: 'Protect dock doors, building corners, rack systems, and pedestrian walkways from forklift and truck traffic. Industrial bollards in warehouses and distribution centers prevent costly equipment and structural damage.' },
              { title: 'Restaurants & Food Service', description: 'Outdoor dining areas, drive-through lanes, and building perimeters all benefit from bollard protection. We install bollard systems that protect infrastructure while maintaining the property aesthetic.' },
              { title: 'Government & Institutional', description: 'Schools, municipal buildings, hospitals, and government facilities use bollards to control vehicle access, protect building entrances, and secure pedestrian zones. We install to IBC and site-specific security requirements.' },
            ].map((a) => (
              <div key={a.title} className="flex gap-4">
                <span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Property managers, warehouse operators, and retail facility teams throughout Atlanta trust Fence Workshop for bollard installation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "We had a waste hauler take out our dumpster enclosure gate for the third time. Fence Workshop installed bollards around the whole enclosure and we haven't had a problem since. Should have done it years ago.", name: "James R.", role: "Property Manager, Kennesaw GA" },
              { quote: "Fast, clean install. They came out, assessed our loading dock situation, and had bollards in the ground within a week. Our forklift operators finally have proper protection around the dock doors.", name: "Sandra T.", role: "Warehouse Operations Director, Norcross GA" },
              { quote: "We manage a retail strip center and needed storefront bollards before our lease renewal. Fence Workshop handled the whole thing — permit, installation, paint. Professional from start to finish.", name: "Carlos M.", role: "Commercial Property Manager, Marietta GA" },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workmanship Guarantee */}
      <section className="py-12 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white mb-2">Our Workmanship Guarantee</h2>
              <p className="text-white/90 text-lg">Every bollard installation we complete is backed by our workmanship guarantee. If anything we installed doesn&rsquo;t perform as it should, we come back and make it right — no questions asked. We&rsquo;ve built this business on repeat work from property managers and facility teams who trust us to get it right the first time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Bollard Installation Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Straightforward from site assessment to finished installation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Site Assessment', description: 'We walk the site, assess the application, and determine the right bollard type, spacing, and installation method — sleeve-set, surface-mount, or core drilled into existing concrete.' },
              { step: '02', title: 'Quote & Layout', description: 'We provide a clear quote with bollard type, quantity, spacing, and finish. For larger installations, we mark the layout for your review before digging begins.' },
              { step: '03', title: 'Installation', description: 'We core drill or excavate, set sleeves or pour concrete footings, and install the bollards plumb and at consistent height. Paint or covers applied on-site.' },
              { step: '04', title: 'Done Right', description: 'We inspect the finished installation for alignment, depth, and finish quality. Bollards are ready for immediate use upon completion.' },
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

      {/* Related Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Bollards are frequently part of a larger fence, gate, or enclosure project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Dumpster Enclosure & Gate Installation', description: 'Custom dumpster enclosures built to code — bollards installed alongside to protect gates and posts from hauler damage.', href: '/installation/georgia/dumpster-enclosure-gates/' },
              { title: 'Parking Garage Fencing & Barriers', description: 'Cable railing, vehicle barriers, and guard rails for commercial parking structures — often combined with bollard perimeters.', href: '/installation/georgia/parking-garage-fencing/' },
              { title: 'Bollard Repair & Replacement', description: 'Damaged or knocked-over bollards repaired and replaced. Fast service for commercial properties throughout Georgia.', href: '/installation/georgia/bollard-repair/' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bollard Installation Across Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">We install commercial bollards throughout Metro Atlanta and across the state of Georgia. Most projects can be scheduled within a few business days.</p>
              <p className="text-lg text-gray-700 mb-4">Serving commercial properties throughout Metro Atlanta including:</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-8 text-gray-700">
                {['Atlanta', 'Marietta', 'Alpharetta', 'Roswell', 'Sandy Springs', 'Smyrna', 'Kennesaw', 'Decatur', 'Tucker', 'Chamblee', 'Duluth', 'Norcross', 'Johns Creek', 'Woodstock', 'Stone Mountain', 'Lawrenceville'].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 py-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {city}, GA
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Installation in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Installation in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Installation in Alpharetta, GA</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-2">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your project — number of bollards, application, and location — and we&rsquo;ll get back to you quickly.</p>
              <QuoteForm subject="Bollard Installation Quote Request" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bollard Installation — Frequently Asked Questions</h2>
          </div>
          <ul className="space-y-8">
            {faqs.map((faq) => (
              <li key={faq.question} className="flex gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span>
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
                <li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li>
                <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
                <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li>
                <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
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

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Dumpster Enclosure & Gate Installation",
  "description": "Custom dumpster enclosures and gates for commercial properties, HOAs, apartment communities, and retail centers throughout Metro Atlanta and Georgia.",
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
  "serviceType": "Dumpster Enclosure Installation"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does my property need a dumpster enclosure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Georgia municipalities require commercial dumpster screening. Requirements vary by jurisdiction — some require full enclosures with gates, while others accept screening walls. We'll confirm the code requirements for your specific property location before beginning work."
      }
    },
    {
      "@type": "Question",
      "name": "Can you replace just the gates on an existing enclosure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dumpster gate replacement is one of our most common services. We can replace gates, hinges, latches, and frames without rebuilding the entire enclosure. This is often the most cost-effective solution when the enclosure structure is still in good condition."
      }
    },
    {
      "@type": "Question",
      "name": "What size dumpster enclosure do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosure size depends on the number and size of your containers. Standard enclosures fit 2-yard, 4-yard, 6-yard, and 8-yard dumpsters. We measure your containers and build to fit, including clearance for waste hauler access and lid operation."
      }
    },
    {
      "@type": "Question",
      "name": "How long do dumpster enclosure gates last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With proper materials (steel frame, heavy-duty hinges), a well-built enclosure gate lasts 10–15+ years. We use commercial-grade hardware designed for daily abuse from waste haulers, tenants, and weather exposure."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build enclosures for compactors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build custom enclosures and screening walls for compactors, balers, and recycling containers in addition to standard dumpster enclosures. These are sized to accommodate the specific equipment and hauler access requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a dumpster enclosure cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost varies significantly based on size, material, and configuration. A basic chain link enclosure with privacy slats starts in the low thousands. Steel panel enclosures with canopy roofs and bollards run higher. We provide free on-site quotes — call (404) 314-4419 or request a quote on our website."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a dumpster gate and a dumpster enclosure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dumpster gate refers specifically to the swinging doors — the part that opens and closes for hauler access. A dumpster enclosure is the full structure: the walls or screening panels on three sides plus the gates on the front. We build both."
      }
    },
    {
      "@type": "Question",
      "name": "Can you replace just the dumpster enclosure doors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Replacing the doors (gates) on an existing enclosure is one of the most cost-effective repairs we do. If your enclosure walls are still structurally sound but the gates are sagging, the hinges have failed, or the latches are broken, we can replace just the gate panels and hardware without touching the walls."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install dumpster enclosures near me in Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install and repair dumpster enclosures throughout Metro Atlanta and surrounding Georgia — including Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Decatur, Dunwoody, Kennesaw, Duluth, Norcross, Tucker, Johns Creek, and Lawrenceville."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Dumpster Gates & Trash Enclosure Gates — Atlanta, GA | Fence Workshop',
  description: 'Dumpster gates, trash enclosure gates, and garbage enclosure installation in Atlanta, GA. Commercial dumpster enclosures for property managers, HOAs, apartments, and retail centers. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'Does my property need a dumpster enclosure?', answer: 'Most Georgia municipalities require commercial dumpster screening. Requirements vary by jurisdiction — some require full enclosures with gates, while others accept screening walls. We\'ll confirm the code requirements for your specific property location before beginning work.' },
  { question: 'Can you replace just the gates on an existing enclosure?', answer: 'Yes. Dumpster gate replacement is one of our most common services. We can replace gates, hinges, latches, and frames without rebuilding the entire enclosure. This is often the most cost-effective solution when the enclosure structure is still in good condition.' },
  { question: 'What size dumpster enclosure do I need?', answer: 'Enclosure size depends on the number and size of your containers. Standard enclosures fit 2-yard, 4-yard, 6-yard, and 8-yard dumpsters. We measure your containers and build to fit, including clearance for waste hauler access and lid operation.' },
  { question: 'How long do dumpster enclosure gates last?', answer: 'With proper materials (steel frame, heavy-duty hinges), a well-built enclosure gate lasts 10–15+ years. We use commercial-grade hardware designed for daily abuse from waste haulers, tenants, and weather exposure.' },
  { question: 'Do you build enclosures for compactors?', answer: 'Yes. We build custom enclosures and screening walls for compactors, balers, and recycling containers in addition to standard dumpster enclosures. These are sized to accommodate the specific equipment and hauler access requirements.' },
  { question: 'How much does a dumpster enclosure cost?', answer: 'Cost varies significantly based on size, material, and configuration. A basic chain link enclosure with privacy slats starts in the low thousands. Steel panel enclosures with canopy roofs and bollards run higher. We provide free on-site quotes — pricing over the phone without seeing the property and containers isn\'t something we do, because it leads to surprises for both sides. Call (404) 314-4419 or request a quote above.' },
  { question: 'What\'s the difference between a dumpster gate and a dumpster enclosure?', answer: 'A dumpster gate refers specifically to the swinging doors — the part that opens and closes for hauler access. A dumpster enclosure is the full structure: the walls or screening panels on three sides plus the gates on the front. We build both. Gate-only replacements are one of our most common jobs when the enclosure walls are still in good condition.' },
  { question: 'Can you replace just the dumpster enclosure doors?', answer: 'Yes. Replacing the doors (gates) on an existing enclosure is one of the most cost-effective repairs we do. If your enclosure walls are still structurally sound but the gates are sagging, the hinges have failed, or the latches are broken, we can replace just the gate panels and hardware without touching the walls.' },
  { question: 'Do you install dumpster enclosures near me in Atlanta?', answer: 'Yes. We install and repair dumpster enclosures throughout Metro Atlanta and surrounding Georgia — including Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Decatur, Dunwoody, Kennesaw, Duluth, Norcross, Tucker, Johns Creek, and Lawrenceville. If you\'re not sure whether we serve your area, call us at (404) 314-4419.' },
]

export default function DumpsterEnclosureGatesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Installation</Link>
              <span>/</span>
              <span className="text-gray-200">Dumpster Enclosures &amp; Gates</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Dumpster Gates &amp; Enclosures — Atlanta, GA</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Dumpster Gate Installation, Garbage Enclosures &amp; Trash Enclosures</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">One of the only fence companies in Georgia that specializes in both supplying and installing dumpster gates and garbage enclosures. Custom trash enclosures for commercial properties, HOAs, apartment communities, and retail centers throughout Metro Atlanta. Built to local code with durable materials designed for heavy daily use. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Get a Free Quote</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span></div>
            <div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div>
            <div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg><span className="text-white font-medium">Commercial &amp; Industrial Specialists</span></div>
            <div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">Best Customer Service from Start to Finish</span></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Dumpster Enclosures</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Commercial Dumpster Enclosures?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Dumpster enclosures protect property appearance, meet local code requirements, and stand up to the heavy daily use that comes with commercial waste management.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-[16/7] relative bg-gray-200">
              <Image src="/images/dumpster-enclosure-cmu-wall-atlanta-ga.jpg" alt="Custom dumpster enclosure gate installation in Atlanta, GA by Fence Workshop" fill className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Code Compliance', description: 'Many Georgia municipalities require screened dumpster enclosures for commercial properties. We build to local code every time.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>) },
              { title: 'Property Appearance', description: 'Hide unsightly waste areas and improve curb appeal. Properly enclosed dumpsters protect property values and tenant satisfaction.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>) },
              { title: 'Built for Heavy Use', description: 'Steel frames, heavy-duty hinges, and reinforced gates designed to withstand daily abuse from waste haulers and tenants.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { title: 'Custom Sizes & Configurations', description: 'Single, double, and triple dumpster enclosures with pedestrian access gates. Sized to fit your specific containers.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Multiple Material Options', description: 'Chain link with privacy slats, wood composite, steel panel, and ornamental options to match your property aesthetic.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>) },
              { title: 'Fast Turnaround', description: 'Dumpster gate replacements and new enclosure installations are among our fastest-completing projects. Minimal disruption to your property.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
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

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Enclosure Applications</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We build dumpster enclosures for every type of commercial property throughout Georgia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Apartment Communities & HOAs', description: 'Enclosed dumpster pads that meet community standards and withstand high-volume residential use from multiple tenants.' },
              { title: 'Shopping Centers & Retail', description: 'Screened waste areas that maintain the professional appearance of retail environments and meet landlord specifications.' },
              { title: 'Restaurants & Food Service', description: 'Enclosed dumpster areas that meet health code requirements and keep waste areas secure, contained, and odor-controlled.' },
              { title: 'Office Parks & Corporate Properties', description: 'Professional enclosures that screen waste containers from tenants, visitors, and street view at corporate properties.' },
              { title: 'Hotels & Hospitality', description: 'Discreet waste management enclosures for hospitality properties requiring aesthetic consistency with the overall property design.' },
              { title: 'Medical & Healthcare Facilities', description: 'Secure enclosures for medical waste containers meeting healthcare facility requirements and regulatory standards.' },
            ].map((app) => (
              <div key={app.title} className="flex gap-4">
                <span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span>
                <div><h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3><p className="text-gray-600 leading-relaxed">{app.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Trash Enclosure Gates</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trash Enclosure Gates for Commercial Properties</h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">A trash enclosure gate is the hinged front panel of a dumpster enclosure — the part that opens for waste hauler access and closes to screen the waste area from tenants, customers, and the street. When property managers search for trash enclosure gates, they&rsquo;re usually looking for one of two things: a replacement gate for an existing enclosure, or a complete new trash enclosure installation.</p>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">We handle both. Whether you need a single trash enclosure gate replaced or a full enclosure built from scratch, Fence Workshop builds to commercial-grade standards — heavy-gauge steel frames, industrial hinges, and hardware designed for daily waste hauler abuse. We serve commercial property managers, HOAs, apartment communities, retail centers, and restaurants throughout Metro Atlanta and Georgia.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {[
                { title: 'Trash Enclosure Gate Replacement', description: 'Existing enclosure walls still solid? We replace just the gate panels, hinges, and hardware — no need to rebuild the entire enclosure. Fast turnaround for urgent repairs.' },
                { title: 'New Trash Enclosure Installation', description: 'New construction or full enclosure replacement? We design, fabricate, and install complete trash enclosures including walls, gates, posts, and optional roofing.' },
                { title: 'Gate Hardware & Latch Repair', description: 'Cane bolts, drop rods, slide bolts, and locking hardware repaired or replaced to keep your enclosure gate latched securely between hauler pickups.' },
                { title: 'Trash Enclosure Gates Near Me', description: 'We serve Metro Atlanta and all of Georgia. Free on-site quotes — call (404) 314-4419 or request a quote above. Licensed & insured.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Work</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Dumpster Enclosures &amp; Gates — Atlanta, GA</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Every dumpster enclosure and gate installation is custom-built to fit the property. Browse our project gallery to see the range of materials, configurations, and property types we work with across Metro Atlanta and Georgia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/dumpster-gate-installation-bollards-atlanta-ga.jpg', alt: 'Commercial dumpster gate installation with bollards in Atlanta, GA' },
              { src: '/images/commercial-dumpster-gate-installation-atlanta-ga.jpg', alt: 'Commercial dumpster gate installed under canopy in Atlanta, GA' },
              { src: '/images/dumpster-enclosure-apartment-complex-atlanta-ga.jpg', alt: 'Dumpster enclosure installation for apartment complex in Atlanta, GA' },
              { src: '/images/garbage-enclosure-installation-atlanta-ga.jpg', alt: 'Custom garbage enclosure with roof installation in Atlanta, GA' },
              { src: '/images/dumpster-gate-brick-enclosure-atlanta-ga.jpg', alt: 'Steel panel dumpster gate in brick column enclosure, Atlanta, GA' },
              { src: '/images/commercial-trash-enclosure-installation-georgia.jpg', alt: 'Commercial trash enclosure with metal canopy roof in Georgia' },
              { src: '/images/wood-dumpster-gate-installation-atlanta-ga.jpg', alt: 'Wood finish dumpster gate installation in brick columns, Atlanta, GA' },
              { src: '/images/wood-composite-dumpster-gate-atlanta-ga.jpg', alt: 'Wide wood composite dumpster gate installation, Atlanta, GA' },
              { src: '/images/steel-dumpster-gate-installation-georgia.jpg', alt: 'Wide steel dumpster gate shown open at commercial property in Georgia' },
              { src: '/images/dumpster-enclosure-cmu-wall-atlanta-ga.jpg', alt: 'Dumpster enclosure gates installed in CMU block wall, Atlanta, GA' },
              { src: '/images/dumpster-enclosure-walk-gate-atlanta-ga.jpg', alt: 'Dumpster enclosure with double gate and pedestrian walk gate, Atlanta, GA' },
              { src: '/images/commercial-dumpster-enclosure-gates-georgia.jpg', alt: 'Commercial dumpster enclosure gates in Georgia' },
              { src: '/images/dumpster-gate-repair-replacement-atlanta-ga.jpg', alt: 'Dumpster gate repair and replacement installation in Atlanta, GA' },
              { src: '/images/dumpster-gate-hoa-installation-atlanta-ga.jpg', alt: 'Dumpster gate installation for HOA community in Atlanta, GA' },
              { src: '/images/large-dumpster-enclosure-gate-atlanta-ga.jpg', alt: 'Large multi-panel dumpster enclosure gate installation in Atlanta, GA' },
              { src: '/images/chain-link-dumpster-gate-installation-atlanta-ga.jpg', alt: 'Chain link dumpster gate with privacy slats, Atlanta, GA' },
              { src: '/images/chain-link-dumpster-enclosure-commercial-georgia.jpg', alt: 'Large commercial chain link dumpster enclosure with privacy slats in Georgia' },
              { src: '/images/steel-panel-dumpster-gate-bollards-georgia.jpg', alt: 'Steel panel dumpster gate with bollard posts in Georgia' },
              { src: '/images/dumpster-enclosure-block-wall-installation-georgia.jpg', alt: 'Dumpster enclosure gates installed in block wall in Georgia, gate open' },
              { src: '/images/custom-dumpster-gate-panel-atlanta-ga.jpg', alt: 'Custom X-brace dumpster gate panel detail, Atlanta, GA' },
              { src: '/images/dumpster-gate-replacement-atlanta-ga.jpg', alt: 'Dumpster gate replacement installation at commercial property, Atlanta, GA' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Property managers and facility teams throughout Atlanta trust Fence Workshop for dumpster enclosure work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "We manage 12 apartment properties across Metro Atlanta and Fence Workshop handles all our dumpster enclosure installs and repairs. They show up when they say they will and the work holds up. Our go-to vendor for this.",
                name: "Mark T.",
                role: "Regional Property Manager, Atlanta"
              },
              {
                quote: "Had a code enforcement notice on a Friday. Called Fence Workshop and they had a crew out Monday. New enclosure gate installed, everything passed inspection. Exactly what we needed.",
                name: "Sandra K.",
                role: "HOA Manager, Marietta GA"
              },
              {
                quote: "We've used a lot of fence contractors over the years. Fence Workshop is the only one that comes back to address issues without us having to chase them. That matters when you're managing a retail center.",
                name: "Brian L.",
                role: "Facilities Director, Sandy Springs GA"
              },
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
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white mb-2">Our Workmanship Guarantee</h2>
              <p className="text-white/90 text-lg">Every dumpster enclosure we install is backed by our workmanship guarantee. If anything we built doesn&rsquo;t perform as it should, we come back and make it right — no questions asked. We&rsquo;ve built this business on repeat work from property managers who know they can count on us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Enclosure Materials &amp; Options</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">The right material depends on your budget, property aesthetic, and how much abuse the enclosure will take. All options use heavy-gauge steel tube frames — the material choice affects the door panels and screening, not the structural frame. Here&rsquo;s how the most common options compare.</p>
          </div>

          {/* Material Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Material</th>
                  <th className="text-center px-4 py-3 font-semibold">Cost</th>
                  <th className="text-center px-4 py-3 font-semibold">Durability</th>
                  <th className="text-center px-4 py-3 font-semibold">Maintenance</th>
                  <th className="text-center px-4 py-3 font-semibold">Appearance</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-lg">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    material: 'Steel Panel',
                    cost: '$$$',
                    durability: 'Excellent',
                    maintenance: 'Low',
                    appearance: 'Industrial / Professional',
                    bestFor: 'High-traffic commercial, compactor enclosures',
                    highlight: true,
                  },
                  {
                    material: 'Chain Link + Privacy Slats',
                    cost: '$',
                    durability: 'Good',
                    maintenance: 'Low',
                    appearance: 'Functional',
                    bestFor: 'Budget installs, back-of-property locations',
                    highlight: false,
                  },
                  {
                    material: 'Wood Composite',
                    cost: '$$',
                    durability: 'Moderate',
                    maintenance: 'Medium',
                    appearance: 'Natural / Upscale',
                    bestFor: 'HOAs, retail centers, hospitality properties',
                    highlight: false,
                  },
                  {
                    material: 'Vinyl',
                    cost: '$$',
                    durability: 'Moderate',
                    maintenance: 'Very Low',
                    appearance: 'Clean / Modern',
                    bestFor: 'Properties needing low-maintenance screening',
                    highlight: false,
                  },
                  {
                    material: 'Ornamental Steel',
                    cost: '$$$',
                    durability: 'Excellent',
                    maintenance: 'Low',
                    appearance: 'Decorative / High-End',
                    bestFor: 'Upscale properties, HOAs with aesthetic requirements',
                    highlight: false,
                  },
                ].map((row, i) => (
                  <tr key={row.material} className={`border-b border-gray-200 ${row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {row.material}
                      {row.highlight && <span className="ml-2 text-xs bg-brand-orange text-white px-2 py-0.5 rounded-full">Most Popular</span>}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.cost}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.durability}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.maintenance}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.appearance}</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">$ = lowest cost &nbsp;·&nbsp; $$$ = highest cost &nbsp;·&nbsp; All gates use heavy-gauge steel tube frames regardless of screen material</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gate &amp; Frame Options</h3>
              <ul className="space-y-3">
                {['Heavy-gauge steel tube frames (2" and 2-1/2" square)', 'Industrial-grade strap hinges', 'Cane bolt and drop rod latch systems', 'Self-closing spring hinge options', 'Hot-dip galvanized + powder-coat finish', 'Bollard posts for truck protection'].map((item) => (
                  <li key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Screen &amp; Panel Options</h3>
              <ul className="space-y-3">
                {['Chain link with privacy slats', 'Wood composite screening panels', 'Corrugated steel panel infill', 'Vinyl privacy panel systems', 'Ornamental steel panel options', 'Custom color powder-coat finishes'].map((item) => (
                  <li key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Enclosure Installation — How It Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From quote to completion, we manage every step of your dumpster enclosure project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Request a Quote', description: 'Tell us about your project — number of containers, sizes, material preference, and any code requirements. We\'ll follow up within one business day.' },
              { step: '02', title: 'Site Visit & Measurement', description: 'We visit your property, measure containers, and confirm code requirements. We coordinate with your property manager or general contractor.' },
              { step: '03', title: 'Fabrication & Materials', description: 'Gates and frames are fabricated to your specifications. Most standard enclosure projects have quick turnaround on materials.' },
              { step: '04', title: 'Installation & Walkthrough', description: 'Our crews install on schedule with minimal disruption. Every project ends with a walkthrough to confirm proper operation and code compliance.' },
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Explore our other fencing solutions for your commercial property.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Bollard Installation', description: 'Steel pipe bollards installed around dumpster enclosures protect gate hinges, posts, and walls from waste hauler truck damage — extending enclosure life significantly.', href: '/installation/georgia/bollard-installation/' },
              { title: 'Dumpster Gate Repair', description: 'Fast repair for broken hinges, sagging gates, latch failure, and frame damage on commercial dumpster enclosures throughout Georgia.', href: '/installation/georgia/dumpster-gate-repair/' },
              { title: 'Commercial Chain Link Fence Installation', description: 'Heavy-duty commercial chain link for perimeter security, job sites, and property boundaries.', href: '/installation/georgia/commercial-chain-link-fence/' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Dumpster Enclosure Installation Across Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">We install and repair dumpster enclosures throughout <Link href="/installation/georgia/atlanta-fence-installation/" className="text-brand-orange hover:underline">Metro Atlanta</Link> and across Georgia for commercial properties, apartment communities, and retail centers. When the gate is already gone, our <Link href="/installation/georgia/dumpster-gate-repair/" className="text-brand-orange hover:underline">dumpster gate repair</Link> service handles broken hinges, bent frames, and latches — fast turnaround for code enforcement situations.</p>
              <p className="text-lg text-gray-700 mb-4">Our crews are active throughout Metro Atlanta including:</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-8 text-gray-700">
                {['Atlanta', 'Marietta', 'Alpharetta', 'Roswell', 'Sandy Springs', 'Smyrna', 'Kennesaw', 'Decatur', 'Tucker', 'Chamblee', 'Stone Mountain', 'Duluth', 'Norcross', 'Johns Creek', 'Woodstock', 'Lawrenceville'].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 py-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {city}, GA
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Alpharetta, GA</Link>
                <Link href="/installation/georgia/dumpster-gate-repair/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Gate Repair in Georgia</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-2">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <QuoteForm subject="Dumpster Enclosure & Gate Installation Quote" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Enclosure Installation — Frequently Asked Questions</h2>
          </div>
          <ul className="space-y-8">
            {faqs.map((faq) => (
              <li key={faq.question} className="flex gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span>
                <div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

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
    }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial Dumpster Enclosure & Gate Installation in Georgia | Fence Workshop',
  description: 'Commercial dumpster enclosure and gate installation in Metro Atlanta and Georgia. Code-compliant enclosures for property managers and HOAs. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'Does my property need a dumpster enclosure?', answer: 'Most Georgia municipalities require commercial dumpster screening. Requirements vary by jurisdiction — some require full enclosures with gates, while others accept screening walls. We\'ll confirm the code requirements for your specific property location before beginning work.' },
  { question: 'Can you replace just the gates on an existing enclosure?', answer: 'Yes. Dumpster gate replacement is one of our most common services. We can replace gates, hinges, latches, and frames without rebuilding the entire enclosure. This is often the most cost-effective solution when the enclosure structure is still in good condition.' },
  { question: 'What size dumpster enclosure do I need?', answer: 'Enclosure size depends on the number and size of your containers. Standard enclosures fit 2-yard, 4-yard, 6-yard, and 8-yard dumpsters. We measure your containers and build to fit, including clearance for waste hauler access and lid operation.' },
  { question: 'How long do dumpster enclosure gates last?', answer: 'With proper materials (steel frame, heavy-duty hinges), a well-built enclosure gate lasts 10–15+ years. We use commercial-grade hardware designed for daily abuse from waste haulers, tenants, and weather exposure.' },
  { question: 'Do you build enclosures for compactors?', answer: 'Yes. We build custom enclosures and screening walls for compactors, balers, and recycling containers in addition to standard dumpster enclosures. These are sized to accommodate the specific equipment and hauler access requirements.' },
]

export default function DumpsterEnclosureGatesPage() {
  return (
    <main className="min-h-screen">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Dumpster Enclosure &amp; Gate Installation in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Code-Compliant Enclosures for Commercial Properties</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Custom dumpster enclosures and gates for commercial properties, HOAs, apartment communities, and retail centers. Built to local code with durable materials designed for heavy daily use. Licensed &amp; insured with 15+ years experience.</p>
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
              <Image src="/images/service-dumpster-gate.jpg" alt="Commercial dumpster enclosure gate installed by Fence Workshop in Metro Atlanta" fill className="object-cover" />
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
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Enclosure Materials &amp; Options</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Dumpster Enclosure Installation Works</h2>
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
              <p className="text-lg text-gray-700 mb-6">We install and repair dumpster enclosures throughout Metro Atlanta and across the state of Georgia for commercial properties, apartment communities, and retail centers.</p>
              <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Enclosure Installation in Alpharetta, GA</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your dumpster enclosure project and we&rsquo;ll respond within one business day.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
                  <div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
                </div>
                <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
                <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
                <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="Number of containers, sizes, new install or replacement, etc."></textarea></div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Free Quote</button>
              </form>
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

      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li><li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li></ul></div>
            <div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div>
            <div><h3 className="font-bold text-lg mb-4">Repair Services</h3><ul className="space-y-2"><li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li><li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li><li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li><li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li></ul></div>
            <div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div>
          </div>
          <div className="border-t border-orange-400 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div>
              <div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

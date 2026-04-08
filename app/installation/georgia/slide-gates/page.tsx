import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Slide Gate & Rolling Gate Installation",
  "description": "Professional commercial slide gate and rolling gate installation for commercial and industrial facilities throughout Metro Atlanta and Georgia.",
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
  "serviceType": "Slide Gate Installation"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the difference between a cantilever and V-track slide gate?", "acceptedAnswer": { "@type": "Answer", "text": "Cantilever gates are suspended above the ground using a counterbalance system with no ground track, ideal for uneven surfaces or areas with debris. V-track gates ride on a ground-mounted steel track, offering a cost-effective solution for flat, paved surfaces. We install both types and recommend the best option based on your property conditions." } },
    { "@type": "Question", "name": "How wide can a slide gate opening be?", "acceptedAnswer": { "@type": "Answer", "text": "Standard commercial slide gates cover openings from 12 to 40 feet. For wider openings, we install telescoping slide gates that stack sections to cover 60+ feet while requiring less stacking space. We'll recommend the right configuration based on your opening width and available space." } },
    { "@type": "Question", "name": "Do you install gate operators and openers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install commercial-grade gate operators from LiftMaster, DoorKing, Linear, and HySecurity, complete with safety sensors, loop detectors, and access control integration. We handle the full installation including operator, wiring, and programming." } },
    { "@type": "Question", "name": "Can a slide gate be automated after initial installation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can retrofit manual slide gates with gate operators and access control at any time. The gate frame must be in good condition and properly sized for the operator. We assess the existing gate and recommend the right operator for the retrofit." } },
    { "@type": "Question", "name": "How much maintenance does a slide gate need?", "acceptedAnswer": { "@type": "Answer", "text": "Cantilever gates need very little — periodic lubrication of rollers and inspection of the operator. V-track gates require occasional track cleaning. We recommend annual maintenance for all motorized gates to ensure reliable operation and extend equipment life." } }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial Slide Gate & Rolling Gate Installation in Georgia | Fence Workshop',
  description: 'Commercial slide gate and rolling gate installation in Metro Atlanta and Georgia. Manual and motorized with gate openers. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'What is the difference between a cantilever and V-track slide gate?', answer: 'Cantilever gates are suspended above the ground using a counterbalance system with no ground track, ideal for uneven surfaces or areas with debris. V-track gates ride on a ground-mounted steel track, offering a cost-effective solution for flat, paved surfaces. We install both types and recommend the best option based on your property conditions.' },
  { question: 'How wide can a slide gate opening be?', answer: 'Standard commercial slide gates cover openings from 12 to 40 feet. For wider openings, we install telescoping slide gates that stack sections to cover 60+ feet while requiring less stacking space. We\'ll recommend the right configuration based on your opening width and available space.' },
  { question: 'Do you install gate operators and openers?', answer: 'Yes. We install commercial-grade gate operators from LiftMaster, DoorKing, Linear, and HySecurity, complete with safety sensors, loop detectors, and access control integration. We handle the full installation including operator, wiring, and programming.' },
  { question: 'Can a slide gate be automated after initial installation?', answer: 'Yes. We can retrofit manual slide gates with gate operators and access control at any time. The gate frame must be in good condition and properly sized for the operator. We assess the existing gate and recommend the right operator for the retrofit.' },
  { question: 'How much maintenance does a slide gate need?', answer: 'Cantilever gates need very little — periodic lubrication of rollers and inspection of the operator. V-track gates require occasional track cleaning. We recommend annual maintenance for all motorized gates to ensure reliable operation and extend equipment life.' },
]

export default function SlideGatesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Installation</Link><span>/</span><span className="text-gray-200">Slide Gates</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Slide Gate &amp; Rolling Gate Installation in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Motorized &amp; Manual Gate Systems for Commercial Facilities</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Professional slide gate and rolling gate installation for commercial and industrial facilities throughout Georgia. Manual and motorized options with gate opener systems for controlled vehicle access. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Get a Free Quote</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg><span className="text-white font-medium">Commercial &amp; Industrial Specialists</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">Best Customer Service from Start to Finish</span></div></div></div></section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Slide Gates</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Commercial Slide Gates?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Slide gates are the preferred vehicle access solution for commercial and industrial properties — space-efficient, heavy-duty, and easily automated.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/service-roll-gate.jpg" alt="Commercial motorized slide gate installation by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Space-Efficient Design', description: 'Slide gates open parallel to the fence line, requiring no swing clearance. Ideal for properties with limited space at the entrance.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Heavy-Duty Capacity', description: 'Commercial slide gates handle openings from 12 to 60+ feet. Cantilever and V-track designs for the heaviest industrial applications.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { title: 'Motorized & Manual Options', description: 'Pair with commercial-grade gate operators for automated access, or install manual slide gates for budget-conscious projects.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>) },
              { title: 'Access Control Integration', description: 'Works with keypads, card readers, telephone entry systems, and remote controls for secure, managed vehicle access.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Durable Construction', description: 'Steel and aluminum frame construction with galvanized or powder-coat finishes. Built to withstand daily commercial use for decades.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
              { title: 'Low-Maintenance Operation', description: 'Cantilever designs eliminate ground track maintenance. V-track systems require minimal upkeep compared to swing gates.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Slide Gate Applications</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Slide gates serve a wide range of commercial access control needs throughout Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Commercial Driveways & Entrances', description: 'Controlled vehicle access for office parks, shopping centers, and commercial properties with high traffic volume.' },
          { title: 'Industrial Yards & Facilities', description: 'Wide-opening slide gates for truck access at warehouses, manufacturing plants, and distribution centers.' },
          { title: 'Gated Communities & HOAs', description: 'Automated entrance gates with telephone entry, remote control, and visitor management integration.' },
          { title: 'Construction & Job Sites', description: 'Temporary and permanent slide gates for securing active work zones and construction staging areas.' },
          { title: 'Fleet Yards & Parking Facilities', description: 'Heavy-duty gates for fleet vehicle storage, employee parking, and secured lot entrances.' },
          { title: 'Schools & Government Facilities', description: 'Controlled campus access with automated gate systems meeting institutional security requirements.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Commercial property managers and industrial facility operators throughout Metro Atlanta rely on Fence Workshop for slide gate installations that work every time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "We needed a wide cantilever gate for our truck yard — 36-foot opening. Fence Workshop came out, designed the right system, and installed it with a commercial operator in one day. Gate has been running daily ever since without a single issue.",
                name: "Robert L.",
                role: "Yard Manager, Kennesaw GA"
              },
              {
                quote: "Our old V-track gate was constantly getting stuck. Fence Workshop replaced it with a cantilever system and a new LiftMaster operator. The difference was night and day. Very professional crew and they cleaned up after themselves.",
                name: "Tamara M.",
                role: "Property Manager, Marietta GA"
              },
              {
                quote: "Fence Workshop retrofitted our existing manual slide gate with an automated operator and keypad system. The process was smooth and they programmed everything before leaving. Well worth the upgrade.",
                name: "Jason P.",
                role: "Facilities Coordinator, Duluth GA"
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
              <p className="text-white/90 text-lg">Every slide gate project we complete is backed by our workmanship guarantee. If anything we installed doesn&rsquo;t perform as it should, we come back and make it right — no questions asked. We&rsquo;ve built this business on repeat work from commercial property managers and facility teams who count on us to get it right.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Slide Gate Materials &amp; Specifications</h2></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Gate Types</h3><ul className="space-y-3">{['Cantilever slide gates (no ground track)', 'V-track slide gates', 'Telescoping slide gates (for tight spaces)', 'Chain link infill slide gates', 'Ornamental / aluminum infill slide gates', 'Steel panel and picket infill options'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Operators &amp; Access Control</h3><ul className="space-y-3">{['LiftMaster commercial gate operators', 'DoorKing telephone entry systems', 'Linear and HySecurity operators', 'Keypad and card reader integration', 'Loop detectors and safety sensors', 'Battery backup and solar power options'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Slide Gate Installation Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">From quote to final testing, we manage every step of your commercial slide gate project.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Request a Quote', description: 'Tell us about your project — opening width, manual or motorized, access control needs, and timeline. We\'ll follow up within one business day.' },
          { step: '02', title: 'Site Visit & Design', description: 'We visit your property, measure the opening, assess stacking space, and recommend the right gate system. We handle permit research and utility locates.' },
          { step: '03', title: 'Fabrication & Materials', description: 'Gates are fabricated to your specifications. Operators and access control hardware are sourced and configured for your specific installation.' },
          { step: '04', title: 'Installation & Testing', description: 'Our crews install the gate, operator, and access control system. Every motorized gate is tested for proper operation, safety compliance, and user training.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Complete your access control system with our other commercial fencing services.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Security Gate Systems & Access Control', description: 'Swing gates, barrier arms, and full access control systems for commercial and industrial facilities.', href: '/installation/georgia/security-gate-systems/' },
          { title: 'Commercial Chain Link Fence Installation', description: 'Heavy-duty commercial chain link for perimeter security to pair with your slide gate system.', href: '/installation/georgia/commercial-chain-link-fence/' },
          { title: 'Commercial Security Fence Installation', description: 'High-security fencing with anti-climb designs and razor ribbon for maximum perimeter protection.', href: '/installation/georgia/commercial-security-fence/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Slide Gate Installation Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We install commercial slide gates and rolling gates throughout Metro Atlanta and across the state of Georgia for every type of commercial and industrial property.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Slide Gate Installation in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Slide Gate Installation in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Slide Gate Installation in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
          <p className="text-gray-600 mb-6">Tell us about your slide gate project and we&rsquo;ll respond within one business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="Opening width, manual or motorized, access control needs, etc."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Free Quote</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Slide Gate Installation — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li><li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Repair Services</h3><ul className="space-y-2"><li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li><li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li><li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li><li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

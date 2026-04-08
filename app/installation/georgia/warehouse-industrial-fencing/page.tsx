import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Warehouse & Industrial Fencing Installation",
  "description": "Professional warehouse partitions, interior cage systems, DEA compliance enclosures, and industrial fencing installation throughout Metro Atlanta and Georgia.",
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
  "serviceType": "Warehouse Fencing Installation"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a DEA compliance cage?", "acceptedAnswer": { "@type": "Answer", "text": "A DEA compliance cage is a secure interior enclosure required by the Drug Enforcement Administration for storing controlled substances. These cages must meet specific construction standards including welded wire mesh, locked access, and bolt-down anchoring. We build and install DEA-compliant cages for pharmacies, hospitals, and distribution facilities throughout Georgia." } },
    { "@type": "Question", "name": "Can you install interior fence partitions in an existing warehouse?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install interior wire partitions and cage systems in existing warehouses, distribution centers, and industrial buildings. Our systems are modular and can be configured around existing racking, columns, and equipment without disrupting your operations." } },
    { "@type": "Question", "name": "What materials are used for warehouse fencing?", "acceptedAnswer": { "@type": "Answer", "text": "Most warehouse and industrial interior fencing uses welded wire mesh panels in 10-gauge or heavier steel, mounted on steel posts with powder-coat or galvanized finish. We also install chain link partitions, expanded metal panels, and solid steel panels depending on security requirements and application." } },
    { "@type": "Question", "name": "How tall can interior warehouse partitions be?", "acceptedAnswer": { "@type": "Answer", "text": "Standard warehouse partitions range from 8 to 12 feet, but we can build floor-to-ceiling enclosures up to 20+ feet for high-bay warehouses. Ceiling panels can be added to fully enclose storage areas and prevent over-the-top access." } },
    { "@type": "Question", "name": "Do you install machine guarding and safety barriers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install OSHA-compliant machine guarding, safety barriers, and perimeter fencing around industrial equipment, robotic cells, and hazardous work areas. Our systems meet safety standards while allowing visibility and ventilation." } }
  ]
}

export const metadata: Metadata = {
  title: 'Warehouse & Industrial Fencing Installation in Georgia | Fence Workshop',
  description: 'Warehouse partitions, interior cage systems, DEA compliance cages, and industrial fencing in Metro Atlanta and Georgia. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'What is a DEA compliance cage?', answer: 'A DEA compliance cage is a secure interior enclosure required by the Drug Enforcement Administration for storing controlled substances. These cages must meet specific construction standards including welded wire mesh, locked access, and bolt-down anchoring. We build and install DEA-compliant cages for pharmacies, hospitals, and distribution facilities throughout Georgia.' },
  { question: 'Can you install interior fence partitions in an existing warehouse?', answer: 'Yes. We install interior wire partitions and cage systems in existing warehouses, distribution centers, and industrial buildings. Our systems are modular and can be configured around existing racking, columns, and equipment without disrupting your operations.' },
  { question: 'What materials are used for warehouse fencing?', answer: 'Most warehouse and industrial interior fencing uses welded wire mesh panels in 10-gauge or heavier steel, mounted on steel posts with powder-coat or galvanized finish. We also install chain link partitions, expanded metal panels, and solid steel panels depending on security requirements and application.' },
  { question: 'How tall can interior warehouse partitions be?', answer: 'Standard warehouse partitions range from 8 to 12 feet, but we can build floor-to-ceiling enclosures up to 20+ feet for high-bay warehouses. Ceiling panels can be added to fully enclose storage areas and prevent over-the-top access.' },
  { question: 'Do you install machine guarding and safety barriers?', answer: 'Yes. We install OSHA-compliant machine guarding, safety barriers, and perimeter fencing around industrial equipment, robotic cells, and hazardous work areas. Our systems meet safety standards while allowing visibility and ventilation.' },
]

export default function WarehouseIndustrialFencingPage() {
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
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Installation</Link><span>/</span><span className="text-gray-200">Warehouse &amp; Industrial Fencing</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Warehouse &amp; Industrial Fencing Installation in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Interior Partitions, Cage Systems &amp; Machine Guarding</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Professional warehouse fencing and industrial interior partition installation throughout Georgia. Secure storage cages, DEA compliance enclosures, tenant separation, and machine guarding for warehouses, distribution centers, and manufacturing facilities. Licensed &amp; insured with 15+ years experience.</p>
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
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Industrial Fencing</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Warehouse &amp; Industrial Fencing?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Interior fencing and cage systems protect inventory, secure restricted areas, and help facilities meet compliance requirements — all without permanent construction.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/service-warehouse-fencing.jpg" alt="Warehouse interior wire partition and cage system installed by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Inventory Protection', description: 'Secure high-value inventory, tools, and materials with locked cage systems that prevent unauthorized access and reduce shrinkage.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Regulatory Compliance', description: 'DEA cages, OSHA machine guarding, and fire-code-compliant partitions built to meet federal, state, and local requirements.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { title: 'Modular & Reconfigurable', description: 'Wire partition systems bolt together and can be reconfigured, expanded, or relocated as your warehouse layout changes — no permanent construction needed.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Tenant & Area Separation', description: 'Divide multi-tenant warehouses into secure, individually accessible zones with full-height partitions and lockable access points.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>) },
              { title: 'Machine & Equipment Guarding', description: 'OSHA-compliant safety barriers around industrial equipment, robotic cells, and hazardous work zones to protect workers and limit liability.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>) },
              { title: 'Quick Installation', description: 'Prefabricated panel systems install quickly with minimal disruption to warehouse operations. Most projects completed in days, not weeks.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial Fencing Applications</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Interior fencing and cage systems serve a wide range of warehouse and industrial needs throughout Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Warehouses & Distribution Centers', description: 'Secure storage cages, pick-module enclosures, and inventory protection systems for logistics and fulfillment operations.' },
          { title: 'Pharmaceutical & Healthcare Facilities', description: 'DEA-compliant controlled substance cages for pharmacies, hospitals, and pharmaceutical distribution centers.' },
          { title: 'Manufacturing & Assembly Plants', description: 'Machine guarding, robotic cell enclosures, and hazardous area barriers for manufacturing environments.' },
          { title: 'Data Centers & Server Rooms', description: 'Server cage enclosures with controlled access for colocation facilities and enterprise data centers.' },
          { title: 'Multi-Tenant Industrial Buildings', description: 'Tenant separation partitions with individual access control for shared warehouse and industrial spaces.' },
          { title: 'Government & Military Storage', description: 'High-security cage systems meeting federal storage requirements for sensitive materials and equipment.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Warehouse operators, distribution center managers, and pharmaceutical facilities throughout Georgia trust Fence Workshop for interior fencing and cage systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "We needed a DEA-compliant cage for our pharmacy storage area. Fence Workshop knew exactly what the requirements were, fabricated the cage to spec, and had it installed and ready for inspection within our timeline. No headaches.", name: "Rachel A.", role: "Pharmacy Operations Manager, Atlanta GA" },
              { quote: "We converted a section of our warehouse into a secured tenant area using Fence Workshop's wire partition system. The install was clean, fast, and the modular design lets us reconfigure when tenant needs change.", name: "Marcus E.", role: "Industrial Property Manager, Norcross GA" },
              { quote: "We needed OSHA machine guarding around three robotic cells in our plant. Fence Workshop understood the safety requirements, designed the enclosures to allow maintenance access, and had everything installed during a scheduled shutdown. Exactly what we needed.", name: "Christine B.", role: "Plant Safety Manager, Kennesaw GA" },
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
              <p className="text-white/90 text-lg">Every warehouse partition and industrial fencing system we install is backed by our workmanship guarantee. If any component fails to perform as installed or doesn&rsquo;t meet the compliance requirements we designed to, we come back and fix it. Your inventory, compliance status, and worker safety depend on it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Warehouse Fencing Materials &amp; Specifications</h2></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Partition &amp; Cage Systems</h3><ul className="space-y-3">{['Welded wire mesh panels (10-gauge and heavier)', 'Woven wire partitions', 'Chain link interior partitions', 'Expanded metal panels', 'Solid steel panel enclosures', 'Floor-to-ceiling cage systems with ceiling panels'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Access &amp; Hardware</h3><ul className="space-y-3">{['Hinged single and double swing doors', 'Sliding doors for wide openings', 'Cylinder and padlock locking hardware', 'Card reader and keypad access integration', 'Bolt-down and ceiling-mount anchoring', 'Powder-coat and galvanized finishes'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Warehouse Fencing Installation Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">From initial layout to final inspection, we manage every step of your interior fencing project.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Request a Quote', description: 'Tell us about your project — facility type, enclosure size, compliance requirements, and timeline. We\'ll follow up within one business day.' },
          { step: '02', title: 'Site Survey & Layout', description: 'We visit your facility, take measurements, and design the partition layout around your existing infrastructure. We identify anchoring points, door placement, and access flow.' },
          { step: '03', title: 'Fabrication & Staging', description: 'Panels and components are fabricated or sourced to your specifications. Materials are staged for efficient installation with minimal disruption to your operations.' },
          { step: '04', title: 'Installation & Inspection', description: 'Our crews install the partition system, mount all hardware, and verify compliance requirements. We walk through the finished project with your team before closeout.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Complete your facility security with our other commercial fencing services.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Bollard Installation', description: 'Steel pipe bollards for dock doors, building corners, rack systems, and pedestrian walkways — protecting equipment and structure from forklift and truck traffic.', href: '/installation/georgia/bollard-installation/' },
          { title: 'Commercial Chain Link Fence Installation', description: 'Heavy-duty commercial chain link for exterior perimeter security around warehouses and industrial facilities.', href: '/installation/georgia/commercial-chain-link-fence/' },
          { title: 'Commercial Security Fence Installation', description: 'High-security perimeter fencing with anti-climb designs and razor ribbon for maximum facility protection.', href: '/installation/georgia/commercial-security-fence/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Warehouse Fencing Installation Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We install warehouse partitions, cage systems, and industrial interior fencing throughout Metro Atlanta and across the state of Georgia.</p>
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
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Warehouse Fencing in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Warehouse Fencing in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Warehouse Fencing in Alpharetta, GA</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-2">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
          <p className="text-gray-600 mb-6">Tell us about your warehouse or industrial fencing project and we&rsquo;ll respond within one business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="Facility type, enclosure size, compliance requirements, etc."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Free Quote</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Warehouse Fencing — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li><li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Repair Services</h3><ul className="space-y-2"><li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li><li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li><li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li><li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

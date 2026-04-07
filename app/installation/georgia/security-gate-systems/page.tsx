import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What types of security gate systems do you install?", "acceptedAnswer": { "@type": "Answer", "text": "We install swing gates, slide gates, barrier arm gates, vertical pivot gates, and crash-rated barriers for commercial and industrial facilities. Each system can be paired with gate operators and access control hardware including keypads, card readers, telephone entry, and remote controls." } },
    { "@type": "Question", "name": "What gate operator brands do you install?", "acceptedAnswer": { "@type": "Answer", "text": "We install commercial-grade gate operators from LiftMaster, DoorKing, HySecurity, Linear, and other leading manufacturers. We recommend the right operator based on your gate type, size, usage frequency, and security requirements." } },
    { "@type": "Question", "name": "What is UL 325 compliance for gate operators?", "acceptedAnswer": { "@type": "Answer", "text": "UL 325 is the safety standard for gate operators and access control systems. It requires safety devices including photo eyes, sensing edges, and entrapment protection to prevent injury. All our gate operator installations comply with UL 325 requirements." } },
    { "@type": "Question", "name": "Can you add access control to an existing gate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We retrofit existing manual or automated gates with access control systems including keypads, card readers, telephone entry, license plate recognition, and remote control. We assess your existing gate and recommend compatible access control hardware." } },
    { "@type": "Question", "name": "Do you offer gate maintenance and repair services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide gate operator repair, access control troubleshooting, and preventive maintenance for commercial gate systems throughout Georgia. Regular maintenance extends equipment life and prevents costly breakdowns." } }
  ]
}

export const metadata: Metadata = {
  title: 'Security Gate Systems & Access Control Installation in Georgia | Fence Workshop',
  description: 'Commercial security gate systems and access control installation in Metro Atlanta and Georgia. Swing gates, slide gates, barrier arms, gate operators. Licensed & insured. Free quotes.',
}

const faqs = [
  { question: 'What types of security gate systems do you install?', answer: 'We install swing gates, slide gates, barrier arm gates, vertical pivot gates, and crash-rated barriers for commercial and industrial facilities. Each system can be paired with gate operators and access control hardware including keypads, card readers, telephone entry, and remote controls.' },
  { question: 'What gate operator brands do you install?', answer: 'We install commercial-grade gate operators from LiftMaster, DoorKing, HySecurity, Linear, and other leading manufacturers. We recommend the right operator based on your gate type, size, usage frequency, and security requirements.' },
  { question: 'What is UL 325 compliance for gate operators?', answer: 'UL 325 is the safety standard for gate operators and access control systems. It requires safety devices including photo eyes, sensing edges, and entrapment protection to prevent injury. All our gate operator installations comply with UL 325 requirements.' },
  { question: 'Can you add access control to an existing gate?', answer: 'Yes. We retrofit existing manual or automated gates with access control systems including keypads, card readers, telephone entry, license plate recognition, and remote control. We assess your existing gate and recommend compatible access control hardware.' },
  { question: 'Do you offer gate maintenance and repair services?', answer: 'Yes. We provide gate operator repair, access control troubleshooting, and preventive maintenance for commercial gate systems throughout Georgia. Regular maintenance extends equipment life and prevents costly breakdowns.' },
]

export default function SecurityGateSystemsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Installation</Link><span>/</span><span className="text-gray-200">Security Gate Systems</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Security Gate Systems &amp; Access Control Installation in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Automated Gates, Operators &amp; Access Control for Commercial Facilities</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Professional security gate and access control installation for commercial and industrial facilities throughout Georgia. Swing gates, slide gates, barrier arms, and gate operators with keypads, card readers, and telephone entry systems. UL 325 compliant, licensed &amp; insured with 15+ years experience.</p>
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
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Security Gates</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Commercial Security Gate Systems?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Automated security gates and access control give commercial facilities managed entry, enhanced security, and a professional first impression — all in one system.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/service-security-gate.jpg" alt="Commercial automated security gate system with access control installed by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Controlled Vehicle Access', description: 'Manage who enters and exits your property with automated gates and access control — keypads, card readers, telephone entry, and remote controls.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Multiple Gate Types', description: 'Swing gates, slide gates, barrier arms, and vertical pivot gates — we install the right system for your property layout and traffic volume.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'UL 325 Safety Compliance', description: 'Every gate operator installation includes required safety devices — photo eyes, sensing edges, and entrapment protection per UL 325 standards.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { title: 'Commercial-Grade Operators', description: 'LiftMaster, DoorKing, HySecurity, and Linear operators built for high-cycle commercial use with reliable daily operation.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>) },
              { title: 'Integration Ready', description: 'Gate systems integrate with security cameras, intercoms, license plate recognition, and building management systems for unified security.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>) },
              { title: 'Service & Maintenance', description: 'Ongoing gate operator repair, access control troubleshooting, and preventive maintenance programs to keep your system running reliably.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Security Gate System Applications</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Automated gate and access control systems for every type of commercial and industrial facility in Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Office Parks & Corporate Campuses', description: 'Automated entry gates with card reader and telephone entry systems for controlled employee and visitor access.' },
          { title: 'Industrial & Manufacturing Facilities', description: 'Heavy-duty slide gates and barrier arms for truck and vehicle access at warehouses, plants, and distribution centers.' },
          { title: 'Gated Communities & HOAs', description: 'Residential community entrance gates with telephone entry, remote control, and visitor management systems.' },
          { title: 'Government & Military Installations', description: 'High-security gate systems with crash-rated barriers and multi-factor access control for government facilities.' },
          { title: 'Healthcare & Education Campuses', description: 'Managed campus access with automated gates, emergency override, and integration with campus security systems.' },
          { title: 'Retail & Hospitality Properties', description: 'Barrier arms and gate systems for parking lot access control at shopping centers, hotels, and entertainment venues.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Equipment</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Gate Systems &amp; Access Control Equipment</h2></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Gate Types &amp; Operators</h3><ul className="space-y-3">{['Swing gate operators (single and dual)', 'Slide gate operators (chain and rack-driven)', 'Barrier arm gate systems', 'Vertical pivot and vertical lift gates', 'LiftMaster, DoorKing, HySecurity, Linear operators', 'Solar-powered and battery backup systems'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
        <div><h3 className="text-2xl font-bold text-gray-900 mb-4">Access Control Hardware</h3><ul className="space-y-3">{['Keypads and PIN entry systems', 'Proximity card and fob readers', 'Telephone entry and intercom systems', 'License plate recognition (LPR)', 'Remote control transmitters', 'Loop detectors, photo eyes, and safety edges'].map((i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{i}</span></li>))}</ul></div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Security Gate Installation Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">From consultation to commissioning, we manage every step of your security gate project.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Request a Quote', description: 'Tell us about your project — gate type, access control needs, traffic volume, and security requirements. We\'ll follow up within one business day.' },
          { step: '02', title: 'Site Visit & Design', description: 'We survey your property, assess entry points, and design the gate and access control system. We handle electrical planning, permit research, and utility coordination.' },
          { step: '03', title: 'Equipment & Fabrication', description: 'Gates are fabricated to specification. Operators and access control hardware are sourced, configured, and programmed for your specific installation.' },
          { step: '04', title: 'Installation & Commissioning', description: 'Our crews install the gate, operator, and access control system. We test every component, verify UL 325 compliance, and train your team on operation.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Pair your security gate system with our other commercial fencing services for complete perimeter protection.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Slide Gate Installation', description: 'Dedicated slide gate and rolling gate installations for wide commercial and industrial openings.', href: '/installation/georgia/slide-gates/' },
          { title: 'Commercial Security Fence Installation', description: 'High-security perimeter fencing with anti-climb designs to complement your automated gate system.', href: '/installation/georgia/commercial-security-fence/' },
          { title: 'Commercial Chain Link Fence Installation', description: 'Heavy-duty chain link perimeter fencing for commercial facilities paired with gate access control.', href: '/installation/georgia/commercial-chain-link-fence/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Security Gate Installation Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We install and service commercial security gate systems and access control throughout Metro Atlanta and across the state of Georgia.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Gate Systems in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Gate Systems in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Gate Systems in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
          <p className="text-gray-600 mb-6">Tell us about your security gate project and we&rsquo;ll respond within one business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="Gate type, access control needs, number of entry points, etc."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Free Quote</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Security Gate Systems — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li><li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Repair Services</h3><ul className="space-y-2"><li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li><li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li><li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li><li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you offer emergency security fence repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A compromised security perimeter is urgent. We prioritize emergency repairs for facilities with breached or damaged security fencing and can typically respond within 24 to 48 hours to secure the site and plan the full repair." } },
    { "@type": "Question", "name": "Can you repair anti-climb and high-security fencing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We repair 358 mesh (prison mesh), palisade fencing, expanded metal panels, and other high-security fence systems. We match the original materials and specifications to maintain the security rating of the perimeter." } },
    { "@type": "Question", "name": "Do you repair crash-damaged security gates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Vehicle impact damage to security gates is one of the most common emergency calls we receive. We can often temporarily secure the opening on the first visit, then fabricate and install a replacement gate or repair the existing one depending on the extent of damage." } },
    { "@type": "Question", "name": "Can you repair or replace barbed wire and razor ribbon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We replace damaged barbed wire arms, install new razor ribbon (concertina wire), and repair or add barbed wire topping to existing security fences. This is one of our most common security fence repairs." } },
    { "@type": "Question", "name": "Do you provide documentation for insurance claims?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For storm damage, vehicle impact, and vandalism repairs, we can provide detailed documentation including photos, damage assessments, and itemized repair invoices to support your insurance claim." } }
  ]
}

export const metadata: Metadata = {
  title: 'Security Fence & Gate Repair in Georgia | Emergency Service | Fence Workshop',
  description: 'Security fence and gate repair in Metro Atlanta and Georgia. Emergency response for crash damage, breached perimeters, gate operator failure. Licensed & insured. Call now.',
}

const faqs = [
  { question: 'Do you offer emergency security fence repair?', answer: 'Yes. A compromised security perimeter is urgent. We prioritize emergency repairs for facilities with breached or damaged security fencing and can typically respond within 24 to 48 hours to secure the site and plan the full repair.' },
  { question: 'Can you repair anti-climb and high-security fencing?', answer: 'Yes. We repair 358 mesh (prison mesh), palisade fencing, expanded metal panels, and other high-security fence systems. We match the original materials and specifications to maintain the security rating of the perimeter.' },
  { question: 'Do you repair crash-damaged security gates?', answer: 'Yes. Vehicle impact damage to security gates is one of the most common emergency calls we receive. We can often temporarily secure the opening on the first visit, then fabricate and install a replacement gate or repair the existing one depending on the extent of damage.' },
  { question: 'Can you repair or replace barbed wire and razor ribbon?', answer: 'Yes. We replace damaged barbed wire arms, install new razor ribbon (concertina wire), and repair or add barbed wire topping to existing security fences. This is one of our most common security fence repairs.' },
  { question: 'Do you provide documentation for insurance claims?', answer: 'Yes. For storm damage, vehicle impact, and vandalism repairs, we can provide detailed documentation including photos, damage assessments, and itemized repair invoices to support your insurance claim.' },
]

export default function SecurityFenceGateRepairPage() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link><span>/</span><span className="text-gray-200">Security Fence &amp; Gate Repair</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Security Fence &amp; Gate Repair in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Emergency &amp; Scheduled Repairs for High-Security Perimeters</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Security perimeter breached or damaged? We repair high-security fencing and gate systems throughout Metro Atlanta and Georgia — crash damage, storm damage, gate operator failures, barbed wire, and razor ribbon. Emergency response available. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Request Repair Service</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence contractors</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">24–48 Hour Emergency Response</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">High-Security Fence Specialists</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div></div></div></section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Common Repairs</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Fence &amp; Gate Problems We Fix</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From emergency breach repairs to gate operator service — we handle every type of security fence and gate repair for commercial and industrial facilities.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/repair-security-fence.jpg" alt="Security fence and gate repair by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Crash & Impact Damage', description: 'Vehicle impact can take out gates, posts, and entire fence sections. We respond fast to secure the breach and rebuild the damaged area to original specifications.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>) },
              { title: 'Gate Operator & Motor Repair', description: 'Gate won\'t open or close? We troubleshoot and repair commercial gate operators from LiftMaster, DoorKing, HySecurity, Linear, and other brands.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
              { title: 'Barbed Wire & Razor Ribbon', description: 'Damaged or missing barbed wire and razor ribbon leaves your perimeter vulnerable. We replace and install security toppings to restore your fence\'s deterrent value.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { title: 'Access Control Troubleshooting', description: 'Keypads, card readers, telephone entry, and loop detectors malfunction over time. We diagnose and repair access control hardware and wiring issues.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Storm & Vandalism Damage', description: 'High winds, fallen trees, and intentional damage compromise your security perimeter. We repair and reinforce damaged sections with matching materials and specs.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>) },
              { title: 'Safety Device & Sensor Repair', description: 'Photo eyes, sensing edges, and UL 325 safety devices must work correctly to prevent injury and liability. We test, repair, and replace all gate safety components.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Security Fence Repair for Critical Facilities</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair security fencing and gate systems for the facilities that need it most — fast.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Data Centers & Telecom', description: 'Perimeter security breaches at data centers and telecom facilities can trigger compliance violations. We respond quickly and repair to original security specifications.' },
          { title: 'Warehouses & Distribution Centers', description: 'Damaged security fencing at logistics facilities is a theft and liability risk. We restore perimeter integrity with matching materials and fast turnaround.' },
          { title: 'Government & Military Installations', description: 'Federal and state facilities require maintained security perimeters. We handle repairs with proper coordination and documentation.' },
          { title: 'Utilities & Infrastructure', description: 'Substations, water treatment, and critical infrastructure sites need perimeter security at all times. We prioritize utility repairs for fast restoration.' },
          { title: 'Corporate Campuses & Office Parks', description: 'Gate operator failures and access control issues disrupt daily operations. We troubleshoot and repair systems to minimize downtime.' },
          { title: 'Construction & Industrial Sites', description: 'Active job sites and industrial yards need maintained security fencing to prevent theft, trespassing, and liability exposure.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Security Fence Repair Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Fast response, clear communication, and repairs done right.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Report the Problem', description: 'Call us or submit a service request. For emergencies, call directly — we prioritize breached perimeters and non-functioning gate systems.' },
          { step: '02', title: 'Assessment & Temporary Secure', description: 'We inspect the damage, temporarily secure any breach if needed, and provide a clear repair plan with timeline and pricing.' },
          { step: '03', title: 'Repair & Restore', description: 'Our crews repair or replace damaged fence sections, gate components, operators, and access control hardware to original specifications.' },
          { step: '04', title: 'Test & Document', description: 'We test all repaired systems — gates, operators, safety devices, and access control — and provide documentation for your records or insurance.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence &amp; Gate Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Need an upgrade or full replacement? We handle new installations and other repair services.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Commercial Security Fence Installation', description: 'New high-security fencing with anti-climb designs, razor ribbon, and crash-rated options for maximum perimeter protection.', href: '/installation/georgia/commercial-security-fence/' },
          { title: 'Security Gate Systems & Access Control', description: 'New automated gate systems with operators, access control, and UL 325 safety compliance for commercial facilities.', href: '/installation/georgia/security-gate-systems/' },
          { title: 'Roll Gate & Slide Gate Repair', description: 'Track repair, roller replacement, and operator service for commercial roll and slide gates.', href: '/installation/georgia/roll-gate-slide-gate-repair/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Security Fence Repair Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We repair security fencing and gate systems throughout Metro Atlanta and across the state of Georgia. Emergency response available for critical facilities.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Fence Repair in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Fence Repair in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Security Fence Repair in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
          <p className="text-gray-600 mb-6">Describe the problem and we&rsquo;ll get back to you quickly. For emergencies, call us directly.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Facility</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe the Problem</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="What's damaged? Is this an emergency? Include facility address if possible."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Repair Service</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Security Fence Repair — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Resources</h3><ul className="space-y-2"><li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li><li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What brands of gate operators do you service?", "acceptedAnswer": { "@type": "Answer", "text": "We service and repair commercial gate operators from LiftMaster, DoorKing, HySecurity, Linear, FAAC, and other major manufacturers. If your operator isn't working, we can troubleshoot and repair it regardless of brand." } },
    { "@type": "Question", "name": "My gate is off the track — can you fix it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gates jumping the track is one of the most common repair calls we receive. We re-align the gate, inspect and repair the track or roller system, and identify what caused the derailment — whether it's debris, a bent track, worn rollers, or operator misalignment." } },
    { "@type": "Question", "name": "How quickly can you respond to a gate that won't open or close?", "acceptedAnswer": { "@type": "Answer", "text": "For commercial gates that are stuck open or closed — creating a security or access issue — we prioritize scheduling and can typically respond within 24 to 48 hours. We carry common replacement parts on our trucks to resolve most issues on the first visit." } },
    { "@type": "Question", "name": "Can you repair a gate that was hit by a vehicle?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Vehicle impact is a common cause of gate damage. Depending on the severity, we can straighten the gate frame, replace damaged sections, re-align the track, and repair or replace the operator. We can also provide documentation for insurance claims." } },
    { "@type": "Question", "name": "Do you offer preventive maintenance for commercial gates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Regular maintenance extends the life of your gate and operator, prevents costly breakdowns, and keeps safety devices functioning properly. We offer scheduled maintenance programs for commercial gate systems including lubrication, safety device testing, and operator inspection." } }
  ]
}

export const metadata: Metadata = {
  title: 'Roll Gate & Slide Gate Repair in Georgia | Commercial Service | Fence Workshop',
  description: 'Commercial roll gate and slide gate repair in Metro Atlanta and Georgia. Track repair, operator service, vehicle damage, roller replacement. Fast response. Licensed & insured.',
}

const faqs = [
  { question: 'What brands of gate operators do you service?', answer: 'We service and repair commercial gate operators from LiftMaster, DoorKing, HySecurity, Linear, FAAC, and other major manufacturers. If your operator isn\'t working, we can troubleshoot and repair it regardless of brand.' },
  { question: 'My gate is off the track — can you fix it?', answer: 'Yes. Gates jumping the track is one of the most common repair calls we receive. We re-align the gate, inspect and repair the track or roller system, and identify what caused the derailment — whether it\'s debris, a bent track, worn rollers, or operator misalignment.' },
  { question: 'How quickly can you respond to a gate that won\'t open or close?', answer: 'For commercial gates that are stuck open or closed — creating a security or access issue — we prioritize scheduling and can typically respond within 24 to 48 hours. We carry common replacement parts on our trucks to resolve most issues on the first visit.' },
  { question: 'Can you repair a gate that was hit by a vehicle?', answer: 'Yes. Vehicle impact is a common cause of gate damage. Depending on the severity, we can straighten the gate frame, replace damaged sections, re-align the track, and repair or replace the operator. We can also provide documentation for insurance claims.' },
  { question: 'Do you offer preventive maintenance for commercial gates?', answer: 'Yes. Regular maintenance extends the life of your gate and operator, prevents costly breakdowns, and keeps safety devices functioning properly. We offer scheduled maintenance programs for commercial gate systems including lubrication, safety device testing, and operator inspection.' },
]

export default function RollGateSlideGateRepairPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link><span>/</span><span className="text-gray-200">Roll Gate &amp; Slide Gate Repair</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Roll Gate &amp; Slide Gate Repair in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Track Repair, Operator Service &amp; Gate Restoration</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Commercial gate stuck, off-track, or damaged? We repair roll gates and slide gates throughout Metro Atlanta and Georgia — track repair, roller replacement, gate operator service, vehicle damage, and full gate restoration. Fast response for gates that are stuck open or won&rsquo;t close. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Request Repair Service</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence contractors</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">Fast Scheduling &amp; Response</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">All Major Operator Brands Serviced</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div></div></div></section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Common Repairs</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Roll Gate &amp; Slide Gate Problems We Fix</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From gates off the track to dead operators — we troubleshoot and fix every type of commercial roll gate and slide gate issue.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/repair-roll-gate.jpg" alt="Commercial roll gate and slide gate repair by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Track & Roller Repair', description: 'Bent tracks, worn rollers, and debris buildup cause gates to derail or bind. We repair V-tracks, replace rollers, and clean and realign the entire track system.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
              { title: 'Gate Operator Service', description: 'Operators fail from power surges, wear, or age. We troubleshoot, repair, and replace gate operators from LiftMaster, DoorKing, HySecurity, Linear, and other brands.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>) },
              { title: 'Vehicle & Impact Damage', description: 'Trucks and vehicles hit gates more often than you\'d think. We straighten frames, replace damaged panels, realign tracks, and get the gate operational again.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>) },
              { title: 'Chain & Drive Repair', description: 'Chain-driven and rack-and-pinion gate systems wear over time. We replace chains, sprockets, drive gears, and rack sections to restore smooth operation.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>) },
              { title: 'Cantilever System Repair', description: 'Cantilever gates rely on a counterbalance system with guide rollers. We replace worn rollers, re-level the gate, and adjust the counterbalance for proper operation.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Safety Device & Sensor Repair', description: 'Photo eyes, loop detectors, and sensing edges are required by UL 325 for automated gates. We test, repair, and replace safety devices to keep you compliant and liability-free.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Gate Repair for Every Commercial Facility</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair commercial roll gates and slide gates for facilities of every type and size throughout Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Warehouses & Distribution Centers', description: 'A gate stuck open or closed disrupts truck loading and facility security. We get warehouse and dock gates operational fast with minimal downtime.' },
          { title: 'Gated Communities & HOAs', description: 'Entrance gates that don\'t work frustrate residents and create security gaps. We repair operators, access control, and gate hardware for community entrance systems.' },
          { title: 'Industrial & Manufacturing Plants', description: 'Production facilities need reliable gate access for shift changes, deliveries, and emergency vehicles. We troubleshoot and fix gate systems to keep operations running.' },
          { title: 'Office Parks & Corporate Campuses', description: 'Automated entrance gates are the first impression for employees and visitors. We keep them operating reliably with repair and maintenance service.' },
          { title: 'Construction & Storage Yards', description: 'Roll gates at job sites and storage yards take heavy use and abuse. We repair damaged frames, tracks, and operators to maintain site security.' },
          { title: 'Fleet Yards & Parking Facilities', description: 'High-cycle gate systems at fleet yards and parking facilities wear out faster. We repair and replace components to keep up with daily traffic demands.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Gate Repair Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Fast diagnosis, clear communication, and repairs that last.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Call or Request Service', description: 'Tell us what\'s happening — gate won\'t move, off-track, operator not responding, vehicle damage. Photos help us prepare the right parts for the first visit.' },
          { step: '02', title: 'Diagnose the Problem', description: 'Our technician inspects the gate, track, operator, and safety devices to identify the root cause. We give you a clear repair plan and pricing before starting work.' },
          { step: '03', title: 'Repair on the Spot', description: 'We carry common parts — rollers, chains, operator boards, safety sensors — on our trucks. Most repairs are completed on the first visit without a return trip.' },
          { step: '04', title: 'Test & Verify', description: 'We cycle the gate, test the operator, verify safety devices, and confirm proper access control function before leaving. Your gate is back in full service.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence &amp; Gate Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Need a new gate or a full system upgrade? We handle installations too.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Slide Gate Installation', description: 'New cantilever and V-track slide gates with motorized operators for commercial and industrial facilities.', href: '/installation/georgia/slide-gates/' },
          { title: 'Security Gate Systems & Access Control', description: 'Full gate and access control system installations — swing gates, slide gates, barrier arms, and operators.', href: '/installation/georgia/security-gate-systems/' },
          { title: 'Security Fence & Gate Repair', description: 'Repairs to high-security fencing, crash-damaged perimeters, and compromised security systems.', href: '/installation/georgia/security-fence-gate-repair/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Gate Repair Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We repair commercial roll gates and slide gates throughout Metro Atlanta and across the state of Georgia. Fast response for gates that are stuck or non-operational.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Gate Repair in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Gate Repair in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Gate Repair in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
          <p className="text-gray-600 mb-6">Describe what&rsquo;s happening with your gate and we&rsquo;ll get back to you quickly.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Property</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe the Problem</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="What's happening with the gate? Operator brand if known? Include property address if possible."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Repair Service</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Gate Repair — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Resources</h3><ul className="space-y-2"><li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li><li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

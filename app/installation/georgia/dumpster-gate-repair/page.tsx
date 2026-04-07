import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How fast can you repair a dumpster gate?", "acceptedAnswer": { "@type": "Answer", "text": "Most dumpster gate repairs are completed in a single visit. We carry common hardware and materials on our trucks and can usually schedule service within a few business days — sooner for urgent situations like gates that won't close or latch." } },
    { "@type": "Question", "name": "Can you repair a dumpster gate that's dragging on the ground?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Sagging and dragging gates are one of the most common repairs we handle. The fix usually involves replacing worn hinges, adjusting the gate frame, or resetting the hinge posts. We diagnose the root cause and fix it so the gate swings and latches properly." } },
    { "@type": "Question", "name": "Do you replace dumpster gates or just repair them?", "acceptedAnswer": { "@type": "Answer", "text": "Both. If a gate can be repaired cost-effectively, we'll fix it on-site. If the frame is too far gone or the enclosure doesn't meet current code, we'll recommend a full replacement and provide a quote. We handle both repairs and new installations." } },
    { "@type": "Question", "name": "What does a dumpster gate repair typically cost?", "acceptedAnswer": { "@type": "Answer", "text": "Repair costs depend on the type of damage — hinge replacements and latch repairs are on the lower end, while frame straightening or post replacement costs more. We provide a quote before starting any work so there are no surprises." } },
    { "@type": "Question", "name": "Do you work with property management companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A large portion of our dumpster gate repair work comes from property managers, HOAs, and commercial facility managers. We understand the urgency — code enforcement notices, tenant complaints, and waste hauler damage all need quick resolution. We're set up to handle PO-based billing and multi-property accounts." } }
  ]
}

export const metadata: Metadata = {
  title: 'Dumpster Gate Repair in Georgia | Fast Commercial Service | Fence Workshop',
  description: 'Fast dumpster gate repair for commercial properties in Metro Atlanta and Georgia. Broken hinges, sagging gates, latch repair, frame damage. Licensed & insured. Call today.',
}

const faqs = [
  { question: 'How fast can you repair a dumpster gate?', answer: 'Most dumpster gate repairs are completed in a single visit. We carry common hardware and materials on our trucks and can usually schedule service within a few business days — sooner for urgent situations like gates that won\'t close or latch.' },
  { question: 'Can you repair a dumpster gate that\'s dragging on the ground?', answer: 'Yes. Sagging and dragging gates are one of the most common repairs we handle. The fix usually involves replacing worn hinges, adjusting the gate frame, or resetting the hinge posts. We diagnose the root cause and fix it so the gate swings and latches properly.' },
  { question: 'Do you replace dumpster gates or just repair them?', answer: 'Both. If a gate can be repaired cost-effectively, we\'ll fix it on-site. If the frame is too far gone or the enclosure doesn\'t meet current code, we\'ll recommend a full replacement and provide a quote. We handle both repairs and new installations.' },
  { question: 'What does a dumpster gate repair typically cost?', answer: 'Repair costs depend on the type of damage — hinge replacements and latch repairs are on the lower end, while frame straightening or post replacement costs more. We provide a quote before starting any work so there are no surprises.' },
  { question: 'Do you work with property management companies?', answer: 'Yes. A large portion of our dumpster gate repair work comes from property managers, HOAs, and commercial facility managers. We understand the urgency — code enforcement notices, tenant complaints, and waste hauler damage all need quick resolution. We\'re set up to handle PO-based billing and multi-property accounts.' },
]

export default function DumpsterGateRepairPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link><span>/</span><Link href="/installation/georgia/fence-repair/" className="hover:text-white transition-colors">Fence Repair</Link><span>/</span><span className="text-gray-200">Dumpster Gate Repair</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Dumpster Gate Repair in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Fast Repairs for Broken, Sagging &amp; Damaged Dumpster Gates</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Dumpster gate broken or won&rsquo;t close? We repair commercial dumpster enclosure gates throughout Metro Atlanta and Georgia — broken hinges, sagging frames, damaged latches, and full gate replacements. Fast service, licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Request Repair Service</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence contractors</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">Fast Scheduling &amp; Response</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">Most Repairs Done in One Visit</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div></div></div></section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Common Repairs</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Gate Problems We Fix</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Dumpster gates take a beating from waste haulers, weather, and daily use. We fix all of it — usually in a single visit.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/repair-dumpster-gate.jpg" alt="Commercial dumpster gate repair by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Broken & Worn Hinges', description: 'Heavy steel gates and daily hauler use destroy hinges fast. We replace commercial-grade hinges and reset posts so the gate swings freely and latches properly.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
              { title: 'Sagging & Dragging Gates', description: 'Gates that drag on pavement or won\'t close are a code violation waiting to happen. We diagnose whether it\'s hinge failure, post lean, or frame damage — and fix it.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>) },
              { title: 'Latch & Lock Repair', description: 'Cane bolts, slide bolts, and locking hardware wear out or get damaged. We repair or replace latching hardware so your enclosure stays secured between pickups.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Frame & Post Damage', description: 'Trucks backing into gates bends frames and shifts posts. We straighten or replace damaged framing and reset posts in concrete when needed.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Rust & Corrosion Repair', description: 'Corroded frames weaken the gate structure and look terrible. We cut out rusted sections, weld in new steel, and refinish with primer and paint or powder coat.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>) },
              { title: 'Full Gate Replacement', description: 'When repair isn\'t cost-effective, we build and install new dumpster gates to match your enclosure. Custom sizes, materials, and finishes to meet code and property standards.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Gate Repair for Every Property Type</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair dumpster enclosure gates for commercial and multi-family properties throughout Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Apartment Communities & HOAs', description: 'Broken dumpster gates are a top tenant complaint and code enforcement trigger. We get them fixed fast so your property stays compliant and presentable.' },
          { title: 'Shopping Centers & Retail', description: 'High-traffic retail dumpster areas take constant abuse from waste haulers. We repair and reinforce gates to handle the daily cycle.' },
          { title: 'Restaurants & Food Service', description: 'Health code requires secured waste enclosures. A broken gate puts your inspection at risk. We prioritize restaurant repairs for fast turnaround.' },
          { title: 'Office Parks & Commercial Buildings', description: 'Property managers need reliable vendors who show up and fix it right. We handle single repairs and ongoing maintenance for multi-property portfolios.' },
          { title: 'Hotels & Hospitality', description: 'Guest-facing properties can\'t afford a broken dumpster enclosure. We repair gates quickly and cleanly so your property looks its best.' },
          { title: 'Medical & Healthcare Facilities', description: 'Compliance-sensitive facilities need secured waste enclosures at all times. We understand the urgency and work around your operational schedule.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Dumpster Gate Repair Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Simple, fast, and transparent — from your first call to a gate that works.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Call or Request Service', description: 'Tell us what\'s wrong — sagging gate, broken hinge, won\'t latch, hauler damage. Include a photo if you can. We\'ll respond quickly with next steps.' },
          { step: '02', title: 'On-Site Assessment', description: 'Our crew arrives, inspects the damage, and gives you a clear repair-or-replace recommendation with pricing before any work begins.' },
          { step: '03', title: 'Same-Day Repair', description: 'Most dumpster gate repairs are completed on the first visit. We carry common hardware and materials on our trucks to minimize return trips.' },
          { step: '04', title: 'Done Right, Guaranteed', description: 'We test the gate for proper swing, latch, and closure before leaving. If it needs a full replacement, we\'ll schedule fabrication and come back to install.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence &amp; Gate Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Need more than a repair? We handle full installations and other commercial fence services.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Dumpster Enclosure & Gate Installation', description: 'New dumpster enclosures built to code — custom sizes, materials, and finishes for any commercial property.', href: '/installation/georgia/dumpster-enclosure-gates/' },
          { title: 'Chain Link Fence Repair', description: 'Fabric repair, post replacement, and top rail fixes for commercial chain link perimeter fencing.', href: '/installation/georgia/chain-link-fence-repair/' },
          { title: 'Commercial Chain Link Fence Installation', description: 'New commercial chain link fence installation for perimeter security, job sites, and property boundaries.', href: '/installation/georgia/commercial-chain-link-fence/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Dumpster Gate Repair Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We repair commercial dumpster gates throughout Metro Atlanta and across the state of Georgia. Fast scheduling for urgent repairs.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Gate Repair in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Gate Repair in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Dumpster Gate Repair in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
          <p className="text-gray-600 mb-6">Describe the problem and we&rsquo;ll get back to you quickly — usually the same business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Property</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe the Problem</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="What's wrong with the gate? How many gates need repair? Include property address if possible."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Repair Service</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Dumpster Gate Repair — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li><li><Link href="/installation/service-areas/" className="hover:underline">View Service Areas</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Repair Services</h3><ul className="space-y-2"><li><Link href="/installation/georgia/fence-repair/" className="hover:underline">All Repair Services</Link></li><li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li><li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Repair</Link></li><li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll &amp; Slide Gate Repair</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

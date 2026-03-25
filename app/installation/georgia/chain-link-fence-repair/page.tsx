import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How quickly can you repair a damaged chain link fence?", "acceptedAnswer": { "@type": "Answer", "text": "Most commercial chain link fence repairs are completed in one to two days depending on the scope. We carry standard chain link materials on our trucks and can often patch fabric, replace posts, or re-tension wire on the first visit. Larger sections may require a follow-up for materials." } },
    { "@type": "Question", "name": "Can you repair a section of chain link fence without replacing the whole thing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Section repairs are the most common service we provide. We can patch or replace damaged fabric, swap out bent or broken posts, replace top rail, and re-tension the system — all without tearing out and replacing the entire fence line." } },
    { "@type": "Question", "name": "Do you repair chain link fence after vehicle damage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Vehicle impact is one of the most common reasons we get called for commercial chain link repair. We straighten or replace bent posts, re-hang fabric, and get the fence line back to its original condition. We can also provide documentation for insurance claims if needed." } },
    { "@type": "Question", "name": "Can you add barbed wire or razor ribbon to an existing chain link fence?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install barbed wire arms, razor ribbon, and privacy slats on existing commercial chain link fences. This is a common upgrade for facilities looking to increase perimeter security without replacing the entire fence." } },
    { "@type": "Question", "name": "Do you handle emergency fence repairs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For commercial facilities with compromised perimeter security — storm damage, vehicle impact, or vandalism — we prioritize scheduling and can often respond within 24 to 48 hours to secure the breach and schedule full repair." } }
  ]
}

export const metadata: Metadata = {
  title: 'Chain Link Fence Repair in Georgia | Commercial Service | Fence Workshop',
  description: 'Commercial chain link fence repair in Metro Atlanta and Georgia. Storm damage, vehicle impact, fabric replacement, post repair. Fast service. Licensed & insured. Call today.',
}

const faqs = [
  { question: 'How quickly can you repair a damaged chain link fence?', answer: 'Most commercial chain link fence repairs are completed in one to two days depending on the scope. We carry standard chain link materials on our trucks and can often patch fabric, replace posts, or re-tension wire on the first visit. Larger sections may require a follow-up for materials.' },
  { question: 'Can you repair a section of chain link fence without replacing the whole thing?', answer: 'Yes. Section repairs are the most common service we provide. We can patch or replace damaged fabric, swap out bent or broken posts, replace top rail, and re-tension the system — all without tearing out and replacing the entire fence line.' },
  { question: 'Do you repair chain link fence after vehicle damage?', answer: 'Yes. Vehicle impact is one of the most common reasons we get called for commercial chain link repair. We straighten or replace bent posts, re-hang fabric, and get the fence line back to its original condition. We can also provide documentation for insurance claims if needed.' },
  { question: 'Can you add barbed wire or razor ribbon to an existing chain link fence?', answer: 'Yes. We install barbed wire arms, razor ribbon, and privacy slats on existing commercial chain link fences. This is a common upgrade for facilities looking to increase perimeter security without replacing the entire fence.' },
  { question: 'Do you handle emergency fence repairs?', answer: 'Yes. For commercial facilities with compromised perimeter security — storm damage, vehicle impact, or vandalism — we prioritize scheduling and can often respond within 24 to 48 hours to secure the breach and schedule full repair.' },
]

export default function ChainLinkFenceRepairPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link><span>/</span><span className="text-gray-200">Chain Link Fence Repair</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Chain Link Fence Repair in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Fast Repairs for Storm Damage, Vehicle Impact &amp; Wear</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Commercial chain link fence damaged or compromised? We repair chain link fencing throughout Metro Atlanta and Georgia — fabric replacement, post repair, top rail, tension wire, and barbed wire. Fast response for security-critical repairs. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Request Repair Service</a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">Call (404) 314-4419</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span className="text-white font-medium">Licensed &amp; insured fence contractors</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">Fast Scheduling &amp; Response</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-white font-medium">Emergency Repairs Available</span></div><div className="flex items-center gap-3"><svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg><span className="text-white font-medium">15+ Years in Business</span></div></div></div></section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Common Repairs</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chain Link Fence Problems We Fix</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From minor fabric patches to full section replacements — we handle every type of commercial chain link fence repair.</p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"><div className="aspect-[16/7] relative bg-gray-200"><Image src="/images/repair-chain-link.jpg" alt="Commercial chain link fence repair by Fence Workshop in Georgia" fill className="object-cover" /></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fabric Replacement & Patching', description: 'Cut, torn, or stretched chain link fabric compromises your perimeter. We replace damaged sections with matching gauge and coating — galvanized or vinyl-coated.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>) },
              { title: 'Post Repair & Replacement', description: 'Bent, broken, or leaning posts compromise the entire fence line. We reset or replace terminal, line, and corner posts with proper concrete footings.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>) },
              { title: 'Top Rail & Tension Wire', description: 'Damaged top rail lets the fence sag and looks unprofessional. We replace bent or missing top rail sections and re-tension wire to restore the fence line.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>) },
              { title: 'Vehicle & Storm Damage', description: 'Vehicles, falling trees, and high winds can take out entire fence sections. We respond quickly to secure the breach and rebuild the damaged area.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>) },
              { title: 'Gate Repair & Replacement', description: 'Chain link gates that won\'t open, close, or latch properly. We repair hinges, replace gate frames, and fix latching hardware for walk gates and drive gates.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
              { title: 'Barbed Wire & Security Upgrades', description: 'Add or replace barbed wire arms, razor ribbon, and privacy slats on existing chain link fences to increase security without a full replacement.', icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
            ].map((f) => (<div key={f.title} className="bg-gray-50 p-6 rounded-lg"><div className="mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Chain Link Fence Repair for Every Facility</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair commercial chain link fencing for facilities of every type and size throughout Georgia.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Warehouses & Industrial Sites', description: 'Perimeter breaches at industrial facilities are a security and liability issue. We repair and restore chain link perimeters quickly to keep your facility secured.' },
          { title: 'Construction & Job Sites', description: 'Temporary and permanent chain link fencing takes a beating on active construction sites. We repair and replace damaged sections to maintain site security.' },
          { title: 'Schools & Government Facilities', description: 'Campus perimeter security can\'t wait. We prioritize repairs for schools, government buildings, and public facilities with compromised fencing.' },
          { title: 'Commercial Properties & Office Parks', description: 'Property managers count on us for fast, reliable chain link fence repairs that keep their properties secure and looking professional.' },
          { title: 'Sports & Recreation Facilities', description: 'Backstops, tennis courts, and athletic field fencing need to be maintained for safety. We repair damaged sections and replace worn fabric.' },
          { title: 'Utilities & Infrastructure', description: 'Substations, water treatment plants, and telecom facilities require maintained perimeter fencing for security compliance. We handle repairs with proper clearance and coordination.' },
        ].map((a) => (<div key={a.title} className="flex gap-4"><span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3><p className="text-gray-600 leading-relaxed">{a.description}</p></div></div>))}
      </div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p><h2 className="text-4xl font-bold text-gray-900 mb-4">How Chain Link Fence Repair Works</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Fast, straightforward repairs that restore your perimeter security.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Call or Request Service', description: 'Tell us what happened — storm damage, vehicle impact, vandalism, or general wear. Photos help us prepare the right materials for the first visit.' },
          { step: '02', title: 'Assessment & Quote', description: 'We inspect the damage on-site and provide a clear repair quote. For emergency repairs, we can often begin securing the breach on the same visit.' },
          { step: '03', title: 'Repair & Restore', description: 'Our crews replace fabric, reset posts, install top rail, and re-tension the fence line. Most repairs are completed in one to two days.' },
          { step: '04', title: 'Final Inspection', description: 'We walk the repaired section to confirm it matches the existing fence line in height, tension, and finish. Your perimeter is fully restored.' },
        ].map((item) => (<div key={item.step}><div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>))}
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Other Commercial Fence &amp; Gate Services</h2><p className="text-lg text-gray-700 max-w-3xl mx-auto">Need a full replacement or additional fencing? We handle installations too.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Commercial Chain Link Fence Installation', description: 'When repair isn\'t enough, we install new commercial chain link fencing for perimeter security throughout Georgia.', href: '/installation/georgia/commercial-chain-link-fence/' },
          { title: 'Security Fence & Gate Repair', description: 'Repairs to high-security fencing, crash-damaged sections, and compromised perimeter systems.', href: '/installation/georgia/security-fence-gate-repair/' },
          { title: 'Commercial Security Fence Installation', description: 'High-security fencing with anti-climb designs and razor ribbon for maximum perimeter protection.', href: '/installation/georgia/commercial-security-fence/' },
        ].map((s) => (<Link key={s.title} href={s.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"><h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3><p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p><span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span></Link>))}
      </div></div></section>

      <section id="quote" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Chain Link Fence Repair Across Georgia</h2>
          <p className="text-lg text-gray-700 mb-6">We repair commercial chain link fencing throughout Metro Atlanta and across the state of Georgia. Emergency response available for security-critical situations.</p>
          <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
          <div className="space-y-3">
            <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Chain Link Fence Repair in Atlanta, GA</Link>
            <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Chain Link Fence Repair in Marietta, GA</Link>
            <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Chain Link Fence Repair in Alpharetta, GA</Link>
            <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
          <p className="text-gray-600 mb-6">Describe the damage and we&rsquo;ll get back to you quickly — usually the same business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Property</label><input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" /></div>
            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe the Damage</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none" placeholder="What happened? Approximate length of damaged section? Include property address if possible."></textarea></div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request Repair Service</button>
          </form>
        </div>
      </div></div></section>

      <section className="py-20 bg-gray-100"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p><h2 className="text-4xl font-bold text-gray-900 mb-4">Chain Link Fence Repair — Frequently Asked Questions</h2></div><ul className="space-y-8">{faqs.map((faq) => (<li key={faq.question} className="flex gap-4"><span className="text-brand-orange font-bold text-xl mt-0.5">&bull;</span><div><h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></li>))}</ul></div></section>

      <footer className="bg-brand-orange text-white py-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><h3 className="font-bold text-lg mb-4">Installation</h3><ul className="space-y-2"><li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li><li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li><li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li><li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Shop</h3><ul className="space-y-2"><li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li><li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li><li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li><li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Resources</h3><ul className="space-y-2"><li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li><li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li></ul></div><div><h3 className="font-bold text-lg mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li><li><Link href="/contact/" className="hover:underline">Contact</Link></li><li><Link href="/reviews/" className="hover:underline">Reviews</Link></li></ul></div></div><div className="border-t border-orange-400 pt-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p className="font-semibold mb-2">Fence Workshop</p><p>1522 Huber St NW</p><p>Atlanta, GA 30318</p><p className="mt-2">(404) 314-4419</p></div><div className="md:text-right"><p>&copy; 2026 Fence Workshop. All rights reserved.</p></div></div></div></div></footer>
    </main>
  )
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you repair a bollard that was hit by a vehicle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Vehicle impact is the most common reason we get called for bollard repair. Depending on the damage, we can straighten a bent post, replace the bollard, reset a shifted footing, or replace the concrete anchor sleeve. We assess the damage and give you a repair-or-replace recommendation before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Is it better to repair or replace a damaged bollard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the extent of the damage. A bent bollard cover or lightly damaged post can often be repaired or replaced inexpensively. A bollard that has been hit hard enough to shift its concrete footing or crack the surrounding slab typically warrants full replacement. We give you an honest assessment and let you decide."
      }
    },
    {
      "@type": "Question",
      "name": "My bollard is leaning — does it need to be replaced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. A leaning bollard is often caused by a damaged or shifted concrete footing rather than the post itself. We can excavate, reset the footing, and re-plumb the bollard in many cases without full replacement. If the post is bent or the base is cracked, replacement is typically the better option."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to a bollard repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most bollard repairs are scheduled within a few business days. If a downed bollard is creating an urgent safety or security issue — such as an unprotected storefront or exposed loading dock — we prioritize scheduling to address it quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you replace bollard covers and sleeves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Damaged or faded bollard covers are an easy, low-cost fix that makes a big difference in property appearance. We replace plastic bollard covers and sleeves on existing posts — no concrete work required for most cover replacements."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Bollard Repair & Replacement in Georgia | Commercial Service | Fence Workshop',
  description: 'Commercial bollard repair and replacement throughout Metro Atlanta and Georgia. Vehicle damage, leaning bollards, cover replacement. Fast service. Licensed & insured.',
}

const faqs = [
  { question: 'Can you repair a bollard that was hit by a vehicle?', answer: 'Yes. Vehicle impact is the most common reason we get called for bollard repair. Depending on the damage, we can straighten a bent post, replace the bollard, reset a shifted footing, or replace the concrete anchor sleeve. We assess the damage and give you a repair-or-replace recommendation before any work begins.' },
  { question: 'Is it better to repair or replace a damaged bollard?', answer: 'It depends on the extent of the damage. A bent bollard cover or lightly damaged post can often be repaired or replaced inexpensively. A bollard that has been hit hard enough to shift its concrete footing or crack the surrounding slab typically warrants full replacement. We give you an honest assessment and let you decide.' },
  { question: 'My bollard is leaning — does it need to be replaced?', answer: 'Not necessarily. A leaning bollard is often caused by a damaged or shifted concrete footing rather than the post itself. We can excavate, reset the footing, and re-plumb the bollard in many cases without full replacement. If the post is bent or the base is cracked, replacement is typically the better option.' },
  { question: 'How quickly can you respond to a bollard repair?', answer: 'Most bollard repairs are scheduled within a few business days. If a downed bollard is creating an urgent safety or security issue — such as an unprotected storefront or exposed loading dock — we prioritize scheduling to address it quickly.' },
  { question: 'Do you replace bollard covers and sleeves?', answer: 'Yes. Damaged or faded bollard covers are an easy, low-cost fix that makes a big difference in property appearance. We replace plastic bollard covers and sleeves on existing posts — no concrete work required for most cover replacements.' },
]

export default function BollardRepairPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <Link href="/installation/georgia/fence-repair/" className="hover:text-white transition-colors">Fence Repair</Link>
              <span>/</span>
              <span className="text-gray-200">Bollard Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Bollard Repair &amp; Replacement in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Fast Repairs for Damaged, Leaning &amp; Knocked-Over Bollards</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Bollard knocked over, leaning, or damaged by a vehicle? We repair and replace commercial bollards throughout Metro Atlanta and Georgia — post replacement, footing repair, cover replacement, and full reinstallation. Fast scheduling. Licensed &amp; insured with 15+ years experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">Request Repair Service</a>
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
              <span className="text-white font-medium">Fast Scheduling &amp; Response</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-medium">Repair or Replace — Honest Assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Common Repairs</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bollard Problems We Fix</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">From minor cover damage to full post-and-footing replacement — we handle every type of commercial bollard repair.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Vehicle Impact Damage',
                description: 'The most common bollard repair. We assess whether the post can be straightened and reinstalled or needs full replacement, and whether the concrete footing and surrounding slab were damaged in the impact.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
              },
              {
                title: 'Leaning & Shifted Bollards',
                description: 'Bollards lean when their concrete footing is damaged, undersized, or installed improperly. We excavate, reset or replace the footing, and reinstall the bollard plumb to the original height.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>),
              },
              {
                title: 'Knocked-Over Bollards',
                description: 'A fully downed bollard needs the sleeve and footing assessed before reinstallation. We determine whether the existing sleeve can be reused or needs to be replaced, then reinstall and repaint.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>),
              },
              {
                title: 'Rust & Corrosion',
                description: 'Unpainted or weathered steel bollards corrode at the base where moisture collects. We treat the rusted area, apply primer, and repaint — or replace the post if corrosion has compromised structural integrity.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
              },
              {
                title: 'Cover & Sleeve Replacement',
                description: 'Cracked, faded, or missing plastic bollard covers are a quick fix that restores appearance and high-visibility color. We replace covers on existing posts without any concrete work in most cases.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>),
              },
              {
                title: 'Removable Bollard Sleeve Repair',
                description: 'Damaged locking mechanisms or bent sleeves on removable bollard systems prevent proper insertion and locking. We repair or replace sleeves and hardware to restore full removable functionality.',
                icon: (<svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>),
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

      {/* Who We Serve */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bollard Repair for Every Property Type</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair bollards for commercial and institutional properties of all types throughout Georgia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Retail & Storefronts', description: 'Storefront bollards get hit regularly by cars and carts. We repair and replace them quickly to restore protection for your building facade and keep your property looking presentable.' },
              { title: 'Property Management & HOAs', description: 'Damaged bollards in parking lots, dumpster areas, and common areas need fast repair to maintain property appearance and safety. We work with property managers on single repairs and portfolio-wide service.' },
              { title: 'Warehouses & Distribution Centers', description: 'Dock bollards and interior warehouse bollards take constant forklift abuse. We repair and replace them to keep your equipment and building protected.' },
              { title: 'Restaurants & Drive-Throughs', description: 'Drive-through lanes and outdoor dining areas see frequent bollard damage from vehicles. We repair and replace bollards with minimal disruption to your operation.' },
              { title: 'Parking Lots & Garages', description: 'Parking structure bollards protect columns, curbs, and pedestrian areas. We repair vehicle-damaged bollards throughout parking facilities and lots.' },
              { title: 'Government & Institutional', description: 'Bollards at schools, hospitals, and government buildings need to be maintained for security and safety compliance. We handle repairs with proper documentation.' },
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

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Related Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Services You May Need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Bollard Installation', description: 'New bollard installations for storefronts, dumpster enclosures, parking lots, loading docks, and more throughout Georgia.', href: '/installation/georgia/bollard-installation/' },
              { title: 'Dumpster Gate Repair', description: 'Broken hinges, sagging gates, latch failure, and frame damage for commercial dumpster enclosures. Fast scheduling throughout Georgia.', href: '/installation/georgia/dumpster-gate-repair/' },
              { title: 'All Fence & Gate Repair Services', description: 'Chain link repair, roll gate repair, security fence repair, and more — commercial fence and gate repairs throughout Metro Atlanta and Georgia.', href: '/installation/georgia/fence-repair/' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bollard Repair Across Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">We repair and replace commercial bollards throughout Metro Atlanta and across the state of Georgia. Most repairs scheduled within a few business days.</p>
              <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Repair in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Repair in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Bollard Repair in Alpharetta, GA</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
                <Link href="/installation/georgia/fence-repair/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Fence &amp; Gate Repair Services</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
              <p className="text-gray-600 mb-6">Describe the damage and we&rsquo;ll get back to you quickly — usually the same business day.</p>
              <QuoteForm subject="Bollard Repair Request" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bollard Repair — Frequently Asked Questions</h2>
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

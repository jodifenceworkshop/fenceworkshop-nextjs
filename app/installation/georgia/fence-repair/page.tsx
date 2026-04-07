import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Fence Repair in Georgia",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fence Workshop",
    "telephone": "+14043144419",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1522 Huber St NW",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30318"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Georgia"
  },
  "description": "Commercial fence and gate repair services in Metro Atlanta and throughout Georgia. Dumpster gate repair, chain link fence repair, roll gate and slide gate repair, and security fence repair. Licensed and insured with 15+ years experience."
}

export const metadata: Metadata = {
  title: 'Commercial Fence Repair in Georgia | Fence Workshop',
  description: 'Commercial fence and gate repair throughout Metro Atlanta and Georgia. Dumpster gates, chain link, roll gates, slide gates, and security fencing. Fast response. Licensed & insured.',
}

const repairServices = [
  {
    title: 'Dumpster Gate Repair',
    description: 'Broken hinges, sagging gates, latch failure, frame damage, and full gate replacement for commercial dumpster enclosures. Most repairs completed in a single visit. Fast scheduling for property managers and HOAs.',
    href: '/installation/georgia/dumpster-gate-repair/',
    image: '/images/repair-dumpster-gate.jpg',
    imageAlt: 'Commercial dumpster gate repair in Georgia by Fence Workshop',
    tags: ['Broken Hinges', 'Sagging Gates', 'Latch Repair', 'Frame Damage', 'Full Replacement'],
  },
  {
    title: 'Chain Link Fence Repair',
    description: 'Fabric replacement, post repair and replacement, top rail, tension wire, and barbed wire upgrades for commercial chain link perimeters. Emergency response available for security-critical breaches.',
    href: '/installation/georgia/chain-link-fence-repair/',
    image: '/images/repair-chain-link.jpg',
    imageAlt: 'Commercial chain link fence repair in Georgia by Fence Workshop',
    tags: ['Fabric Replacement', 'Post Repair', 'Storm Damage', 'Vehicle Impact', 'Barbed Wire'],
  },
  {
    title: 'Roll Gate & Slide Gate Repair',
    description: 'Track repair, roller replacement, gate operator service, vehicle damage, and cantilever system repairs for commercial roll and slide gates. All major operator brands serviced — LiftMaster, DoorKing, HySecurity, and more.',
    href: '/installation/georgia/roll-gate-slide-gate-repair/',
    image: '/images/repair-roll-gate.jpg',
    imageAlt: 'Commercial roll gate and slide gate repair in Georgia by Fence Workshop',
    tags: ['Track & Roller Repair', 'Operator Service', 'Vehicle Damage', 'Safety Devices', 'Cantilever Systems'],
  },
  {
    title: 'Security Fence & Gate Repair',
    description: 'Emergency and scheduled repairs for high-security perimeters — crash damage, breached fencing, gate operator failures, barbed wire and razor ribbon, and access control troubleshooting. 24–48 hour emergency response.',
    href: '/installation/georgia/security-fence-gate-repair/',
    image: '/images/repair-security-fence.jpg',
    imageAlt: 'Security fence and gate repair in Georgia by Fence Workshop',
    tags: ['Crash Damage', 'Razor Ribbon', 'Gate Operators', 'Access Control', 'Emergency Response'],
  },
  {
    title: 'Bollard Repair & Replacement',
    description: 'Vehicle-damaged, leaning, and knocked-over bollards repaired or replaced. Post replacement, footing repair, cover replacement, and removable sleeve repair for commercial properties throughout Georgia.',
    href: '/installation/georgia/bollard-repair/',
    image: '/images/project-dumpster-gates.png',
    imageAlt: 'Commercial bollard repair in Georgia by Fence Workshop',
    tags: ['Vehicle Damage', 'Leaning Bollards', 'Post Replacement', 'Cover Replacement', 'Footing Repair'],
  },
]

export default function FenceRepairHubPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              <span className="text-gray-200">Fence Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">Commercial Fence Repair in Georgia</h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">Fast, Reliable Repairs for Every Fence &amp; Gate Type</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Fence Workshop repairs commercial fencing and gate systems throughout Metro Atlanta and Georgia. Dumpster gates, chain link perimeters, roll and slide gates, and high-security fencing. Licensed &amp; insured with 15+ years experience — most repairs scheduled within a few business days.</p>
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
              <span className="text-white font-medium">Fast Scheduling &amp; Emergency Response</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.5a.42.42 0 01-.06-.57l3.19-3.5a.42.42 0 01.58-.06l5.1 3.5a.42.42 0 01.06.57l-3.19 3.5a.42.42 0 01-.58.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white font-medium">Most Repairs Done in One Visit</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Repair Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fence &amp; Gate Repair Services We Offer</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We repair every type of commercial fence and gate system. Select a service below to learn more about what we fix and how we work.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {repairServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/7] relative overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Who We Serve</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fence Repair for Every Property Type</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We handle repair work for commercial and multi-family properties of all types throughout Georgia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Property Management Companies & HOAs', description: 'Broken dumpster gates, sagging fences, and damaged enclosures are top tenant complaints and code triggers. We work with property managers on single repairs and multi-property maintenance agreements.' },
              { title: 'Warehouses & Industrial Facilities', description: 'Perimeter fence breaches and gate outages disrupt operations and create security liabilities. We prioritize industrial repairs and respond fast to keep your facility secured.' },
              { title: 'Restaurants & Retail Centers', description: 'Health codes require secured waste enclosures. A broken gate puts your inspection at risk. We get restaurant and retail repairs scheduled quickly.' },
              { title: 'Office Parks & Corporate Campuses', description: 'Gate operator failures and access control issues disrupt daily operations. We troubleshoot and repair entrance gate systems to minimize downtime.' },
              { title: 'Schools & Government Facilities', description: 'Campus perimeter security and code compliance can\'t wait. We prioritize repairs for schools, municipalities, and public facilities.' },
              { title: 'Hotels & Healthcare Facilities', description: 'Guest-facing and compliance-sensitive properties need fast, clean repairs. We work around your operational schedule with minimal disruption.' },
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Fence Workshop</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Repair Done Right the First Time</h2>
              <p className="text-lg text-gray-700 mb-6">Fence Workshop has been repairing commercial fencing throughout Georgia for 15+ years. We carry common materials and hardware on our trucks so most repairs are completed in a single visit — no waiting on parts, no return trips.</p>
              <div className="space-y-4">
                {[
                  { title: 'Fast Scheduling', desc: 'Most repairs scheduled within a few business days. Emergency response available for urgent situations.' },
                  { title: 'Upfront Pricing', desc: 'We assess the damage and give you a clear quote before any work begins. No surprise charges.' },
                  { title: 'Commercial Experience', desc: '15+ years of commercial fence and gate work means we\'ve seen every type of damage and know how to fix it.' },
                  { title: 'Repair or Replace Guidance', desc: 'We give you an honest assessment of whether repair or replacement is the smarter investment.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/repair-dumpster-gate.jpg"
                  alt="Fence Workshop commercial fence repair crew in Georgia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Fence Repair Across Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">We repair commercial fencing and gate systems throughout Metro Atlanta and across the state of Georgia. Fast scheduling for urgent repairs — emergency response available.</p>
              <p className="text-lg text-gray-700 mb-8">Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities.</p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Fence Repair in Atlanta, GA</Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Fence Repair in Marietta, GA</Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Fence Repair in Alpharetta, GA</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">&larr; All Commercial Fence Services in Georgia</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Repair Service</h3>
              <p className="text-gray-600 mb-6">Describe the problem and we&rsquo;ll get back to you quickly — usually the same business day.</p>
              <QuoteForm subject="Fence Repair Request" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/dumpster-gate-repair/" className="hover:underline">Dumpster Gate Repair</Link></li>
                <li><Link href="/installation/georgia/chain-link-fence-repair/" className="hover:underline">Chain Link Fence Repair</Link></li>
                <li><Link href="/installation/georgia/roll-gate-slide-gate-repair/" className="hover:underline">Roll Gate & Slide Gate Repair</Link></li>
                <li><Link href="/installation/georgia/security-fence-gate-repair/" className="hover:underline">Security Fence & Gate Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/marietta-fence-installation/" className="hover:underline">Marietta Fence Installation</Link></li>
                <li><Link href="/installation/georgia/alpharetta-fence-installation/" className="hover:underline">Alpharetta Fence Installation</Link></li>
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

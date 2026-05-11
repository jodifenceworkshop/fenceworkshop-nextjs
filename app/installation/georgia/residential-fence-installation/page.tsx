import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import type { Metadata } from 'next'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Residential Fence, Gate & Railing Installation',
  description: 'Custom residential fence, gate, and railing installation throughout Metro Atlanta and Georgia. Wrought iron, ornamental steel, aluminum, wood, vinyl, and custom driveway gates.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Fence Workshop',
    telephone: '+14043144419',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1522 Huber St NW',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30318',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Atlanta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Marietta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Alpharetta', addressRegion: 'GA' },
    { '@type': 'City', name: 'Roswell', addressRegion: 'GA' },
    { '@type': 'City', name: 'Sandy Springs', addressRegion: 'GA' },
    { '@type': 'City', name: 'Smyrna', addressRegion: 'GA' },
    { '@type': 'City', name: 'Decatur', addressRegion: 'GA' },
    { '@type': 'City', name: 'Dunwoody', addressRegion: 'GA' },
    { '@type': 'City', name: 'Johns Creek', addressRegion: 'GA' },
    { '@type': 'City', name: 'Brookhaven', addressRegion: 'GA' },
  ],
  serviceType: 'Residential Fence Installation',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you install residential fences, or only commercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We install custom residential fences, gates, and railings throughout Metro Atlanta. Our residential work focuses on custom projects — wrought iron, ornamental steel, aluminum, wood, vinyl, and custom driveway gates. We are not a high-volume residential installer; we take on projects where craftsmanship and customization matter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between wrought iron and ornamental steel fencing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'True wrought iron is a historic material that is rarely used today due to cost and availability. What most homeowners call "wrought iron fence" is actually ornamental steel — a steel tube or flat bar fabricated to replicate the classic wrought iron look. Ornamental steel is more durable, more consistent, and significantly more affordable than true wrought iron. We install ornamental steel fencing and custom steel gates that deliver the look homeowners expect from wrought iron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a custom driveway gate for a residential property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design and install custom residential driveway gates in aluminum, steel, and ornamental iron styles. Gates can be swing, slide, or automated. We handle the full installation including posts, hardware, and gate operator systems if desired.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install residential railings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We install custom residential railings for stairs, porches, decks, and elevated entries. Materials include ornamental steel, aluminum, and wrought iron style. All railing installations meet local building code requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit for a residential fence in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit requirements vary by city and county. Most Metro Atlanta jurisdictions require a permit for fences over a certain height, and some HOAs have additional approval requirements. We can advise on typical requirements for your area, but the homeowner is ultimately responsible for obtaining any required permits.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Do you install residential fences, or only commercial?',
    answer: 'We install custom residential fences, gates, and railings throughout Metro Atlanta. Our residential work focuses on custom projects — wrought iron, ornamental steel, aluminum, wood, vinyl, and custom driveway gates. We are not a high-volume residential installer; we take on projects where craftsmanship and customization matter.',
  },
  {
    question: 'What is the difference between wrought iron and ornamental steel fencing?',
    answer: 'True wrought iron is a historic material that is rarely used today due to cost and availability. What most homeowners call "wrought iron fence" is actually ornamental steel — a steel tube or flat bar fabricated to replicate the classic wrought iron look. Ornamental steel is more durable, more consistent, and significantly more affordable than true wrought iron. We install ornamental steel fencing and custom steel gates that deliver the look homeowners expect from wrought iron.',
  },
  {
    question: 'Can you build a custom driveway gate for a residential property?',
    answer: 'Yes. We design and install custom residential driveway gates in aluminum, steel, and ornamental iron styles. Gates can be swing, slide, or automated. We handle the full installation including posts, hardware, and gate operator systems if desired.',
  },
  {
    question: 'Do you install residential railings?',
    answer: 'Yes. We install custom residential railings for stairs, porches, decks, and elevated entries. Materials include ornamental steel, aluminum, and wrought iron style. All railing installations meet local building code requirements.',
  },
  {
    question: 'Do I need a permit for a residential fence in Georgia?',
    answer: 'Permit requirements vary by city and county. Most Metro Atlanta jurisdictions require a permit for fences over a certain height, and some HOAs have additional approval requirements. We can advise on typical requirements for your area, but the homeowner is ultimately responsible for obtaining any required permits.',
  },
]

export const metadata: Metadata = {
  title: 'Residential Fence Installation in Atlanta, GA | Custom Fencing & Gates | Fence Workshop',
  description: 'Custom residential fence, gate, and railing installation throughout Metro Atlanta. Wrought iron, ornamental steel, aluminum, wood, vinyl, and custom driveway gates. Licensed & insured.',
}

export default function ResidentialFenceInstallationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/residential-fence-installation-atlanta-ga.jpg"
            alt="Custom residential fence installation in Atlanta, GA by Fence Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">Georgia Services</Link>
              <span>/</span>
              <span className="text-gray-200">Residential Fence Installation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Custom Residential Fence Installation in Atlanta, GA
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Wrought Iron, Ornamental Steel, Aluminum, Wood &amp; Custom Gates
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop installs custom residential fences, driveway gates, and railings throughout
              Metro Atlanta and Georgia. We specialize in custom work — ornamental steel, wrought iron style,
              aluminum, wood, and vinyl — built and installed by experienced fence contractors with 15+ years
              in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center">
                Request a Quote
              </a>
              <a href="tel:+14043144419" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center">
                Call (404) 314-4419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: 'Licensed & insured fence contractors' },
              { text: '15+ years of experience in Georgia' },
              { text: 'Custom work — not cookie-cutter installs' },
              { text: 'Free quotes throughout Metro Atlanta' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">What We Install</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom Residential Fencing &amp; Gate Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every residential project is custom-quoted based on your property, style, and requirements.
              No two installs are exactly alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Wrought Iron / Ornamental Steel */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/wrought-iron-ornamental-steel-fence-atlanta-ga.jpg"
                  alt="Custom wrought iron and ornamental steel fence installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wrought Iron &amp; Ornamental Steel</h3>
                <p className="text-gray-600 leading-relaxed">
                  The classic look of wrought iron, built with modern ornamental steel. Custom designs,
                  flat-top, spear-top, and architectural styles. Primed and painted to your spec.
                  Built to last decades.
                </p>
              </div>
            </div>

            {/* Aluminum Fencing */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/residential-aluminum-fencing-atlanta-ga.jpg"
                  alt="Residential aluminum fence installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aluminum Fencing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Low-maintenance, rust-free aluminum fencing in residential and commercial grades.
                  Pool-code compliant options available. Powder-coated in black, bronze, white, or custom colors.
                </p>
              </div>
            </div>

            {/* Custom Wood */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/custom-wood-fence-installation-atlanta-ga.jpg"
                  alt="Custom residential wood fence installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Wood Fencing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Privacy fencing, board-on-board, shadow box, and horizontal board styles.
                  Cedar and pressure-treated options. Custom heights and designs built to your property layout.
                </p>
              </div>
            </div>

            {/* Vinyl */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/residential-vinyl-fence-installation-atlanta-ga.jpg"
                  alt="Residential vinyl fence installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vinyl Fencing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Low-maintenance vinyl privacy, semi-privacy, and picket fencing. Resistant to rot,
                  insects, and weathering. Available in white, tan, and gray. HOA-friendly options available.
                </p>
              </div>
            </div>

            {/* Custom Driveway Gates */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/residential-driveway-gate-installation-atlanta-ga.jpg"
                  alt="Custom residential driveway gate installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Driveway Gates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom swing and slide gates for residential driveways in ornamental steel, aluminum,
                  and wood. Manual or automated. Custom sizing for any driveway width. Designed to
                  complement your fence and home aesthetic.
                </p>
              </div>
            </div>

            {/* Railings */}
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/custom-residential-railings-atlanta-ga.jpg"
                  alt="Custom residential railing installation in Atlanta, GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Residential Railings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ornamental steel, aluminum, and wrought iron style railings for stairs, porches,
                  decks, and elevated entries. Code-compliant installations. Custom designs available
                  to match your fence or home style.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wrought Iron / Steel Callout */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/custom-fence-installation-atlanta-ga.jpg"
                alt="Custom ornamental steel fence installed by Fence Workshop in Atlanta, GA"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Wrought Iron &amp; Ornamental Steel</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Wrought Iron Look — Built with Modern Steel
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When homeowners say "wrought iron fence," they almost always mean ornamental steel —
                a steel tube or flat bar fabricated to replicate the timeless wrought iron aesthetic.
                True wrought iron is a historic material that is rarely available or cost-effective today.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ornamental steel delivers the same classic look with superior consistency, longer life,
                and significantly lower cost. We custom-fabricate and install ornamental steel fencing
                and gates for residential properties throughout Metro Atlanta.
              </p>
              <a href="#quote" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fence Workshop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Fence Workshop</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom Work Done Right</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Not a High-Volume Operation',
                description: 'We are not a franchise or a high-volume residential installer. We take on residential projects where quality and customization matter — and we treat each one accordingly.',
              },
              {
                title: '15+ Years in Georgia',
                description: 'We know Metro Atlanta — the soil conditions, the HOA requirements, the city permit processes. That experience shows up in how we plan and execute your install.',
              },
              {
                title: 'Licensed & Insured',
                description: 'Every residential installation is performed by licensed, insured fence contractors. You get professional workmanship and full accountability from start to finish.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Service Areas */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Residential Fence Installation Across Metro Atlanta</h2>
              <p className="text-lg text-gray-700 mb-6">
                We install custom residential fences, gates, and railings throughout Metro Atlanta and
                the greater Georgia area. Contact us for availability in your city.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-8 text-gray-700">
                {[
                  'Atlanta', 'Marietta', 'Alpharetta', 'Roswell',
                  'Sandy Springs', 'Smyrna', 'Decatur', 'Dunwoody',
                  'Brookhaven', 'Johns Creek', 'Kennesaw', 'Woodstock',
                  'Tucker', 'Chamblee', 'Norcross', 'Lawrenceville',
                ].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 py-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {city}, GA
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium">&rarr; Commercial Fence Installation</Link>
                <Link href="/installation/service-areas/" className="block text-brand-orange hover:underline font-medium">&rarr; View All Service Areas</Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Residential Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your project and we&apos;ll get back to you within one business day.</p>
              <QuoteForm subject="Residential Fence Installation Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Residential Fence Installation — Frequently Asked Questions</h2>
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

      <Footer />
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What gauge chain link is best for commercial properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most commercial applications, we recommend 9-gauge chain link fabric for standard perimeter fencing and 6-gauge for high-security or industrial applications. The heavier the gauge (lower number), the thicker and more durable the wire. We'll recommend the right specification based on your security requirements and budget."
      }
    },
    {
      "@type": "Question",
      "name": "How tall can a commercial chain link fence be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial chain link fences are commonly installed at 6, 8, 10, or 12 feet. Some industrial and high-security applications go higher with additional support. Height requirements depend on your facility type, local code, and security needs — we handle permitting and compliance for every installation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between galvanized and vinyl-coated chain link?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Galvanized chain link is zinc-coated steel that resists rust and is the most cost-effective option for commercial fencing. Vinyl-coated (or PVC-coated) chain link adds a layer of colored polymer over the galvanized wire, offering additional corrosion resistance and a more finished appearance. Vinyl-coated is available in black, green, brown, and other colors."
      }
    },
    {
      "@type": "Question",
      "name": "How long does commercial chain link fence installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline depends on the scope of the project. A standard commercial perimeter fence (500–1,000 linear feet) typically takes 3–5 days to install once materials are on site. Larger projects or installations requiring extensive site prep may take longer. We provide a detailed timeline with every quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install barbed wire or razor wire on chain link fences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install barbed wire, razor ribbon, and concertina wire topping on commercial chain link fences where permitted by local code. These additions are common for industrial sites, construction yards, and high-security facilities. We'll confirm what's allowed in your jurisdiction before installation."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial Chain Link Fence Installation in Georgia | Fence Workshop',
  description: 'Commercial and industrial chain link fence installation throughout Metro Atlanta and Georgia. Galvanized & vinyl-coated. Licensed & insured. Free quotes.',
}

const faqs = [
  {
    question: 'What gauge chain link is best for commercial properties?',
    answer: 'For most commercial applications, we recommend 9-gauge chain link fabric for standard perimeter fencing and 6-gauge for high-security or industrial applications. The heavier the gauge (lower number), the thicker and more durable the wire. We\'ll recommend the right specification based on your security requirements and budget.',
  },
  {
    question: 'How tall can a commercial chain link fence be?',
    answer: 'Commercial chain link fences are commonly installed at 6, 8, 10, or 12 feet. Some industrial and high-security applications go higher with additional support. Height requirements depend on your facility type, local code, and security needs — we handle permitting and compliance for every installation.',
  },
  {
    question: 'What is the difference between galvanized and vinyl-coated chain link?',
    answer: 'Galvanized chain link is zinc-coated steel that resists rust and is the most cost-effective option for commercial fencing. Vinyl-coated (or PVC-coated) chain link adds a layer of colored polymer over the galvanized wire, offering additional corrosion resistance and a more finished appearance. Vinyl-coated is available in black, green, brown, and other colors.',
  },
  {
    question: 'How long does commercial chain link fence installation take?',
    answer: 'Timeline depends on the scope of the project. A standard commercial perimeter fence (500–1,000 linear feet) typically takes 3–5 days to install once materials are on site. Larger projects or installations requiring extensive site prep may take longer. We provide a detailed timeline with every quote.',
  },
  {
    question: 'Do you install barbed wire or razor wire on chain link fences?',
    answer: 'Yes. We install barbed wire, razor ribbon, and concertina wire topping on commercial chain link fences where permitted by local code. These additions are common for industrial sites, construction yards, and high-security facilities. We\'ll confirm what\'s allowed in your jurisdiction before installation.',
  },
]

export default function CommercialChainLinkFencePage() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section — no background image */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/installation/georgia/commercial-fence-installation/" className="hover:text-white transition-colors">
                Georgia Installation
              </Link>
              <span>/</span>
              <span className="text-gray-200">Chain Link Fence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Commercial Chain Link Fence Installation in Georgia
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Durable Perimeter Fencing for Commercial &amp; Industrial Properties
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop installs heavy-duty commercial chain link fencing throughout Metro Atlanta and Georgia.
              Galvanized and vinyl-coated options for job sites, warehouses, schools, and commercial properties.
              Licensed &amp; insured with 15+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+14043144419"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
              >
                Call (404) 314-4419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Licensed &amp; insured fence installers in Georgia</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">15+ Years in Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-medium">Commercial &amp; Industrial Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white font-medium">Best Customer Service from Start to Finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Chain Link */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Chain Link</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Commercial Chain Link Fencing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link is the most widely used commercial fencing material in the United States — and for
              good reason. It delivers reliable perimeter security at a lower cost per linear foot than
              almost any other fence type.
            </p>
          </div>

          {/* Feature Photo */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-[16/7] relative bg-gray-200">
              <Image
                src="/images/service-chain-link-fence.jpg"
                alt="Commercial chain link fence installed by Fence Workshop in Metro Atlanta"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost-Effective Perimeter Security',
                description: 'Chain link provides more linear footage per dollar than ornamental or wood alternatives. Ideal for large commercial properties, construction sites, and industrial yards where coverage matters most.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Durable & Low-Maintenance',
                description: 'Galvanized steel chain link resists rust and corrosion for decades with virtually zero maintenance. Vinyl-coated options add an extra layer of weather protection and a cleaner appearance.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Versatile Heights & Configurations',
                description: 'Available in heights from 4 to 12+ feet with options for barbed wire, razor ribbon, privacy slats, and windscreen. Configured to meet your specific security and aesthetic requirements.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
              },
              {
                title: 'Fast Installation',
                description: 'Chain link installs faster than most fence types, minimizing disruption to your operations. Our crews can typically complete 200–400 linear feet per day depending on terrain and conditions.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Security Add-Ons Available',
                description: 'Enhance your chain link fence with barbed wire, razor ribbon, anti-climb brackets, or tension wire. We also integrate chain link with gate systems, access control, and camera mounts.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: 'Code-Compliant Installations',
                description: 'Every installation meets Georgia and local municipal building codes. We handle permit research, utility locates, and inspections so you don\'t have to.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Use Cases */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Chain Link Fence Applications
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link fencing serves a wide range of commercial and industrial needs.
              Here are the most common applications we install throughout Georgia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Construction Sites & Job Sites',
                description: 'Temporary and permanent perimeter fencing for active construction zones. We provide quick-deploy chain link panels and permanent installations that meet OSHA and local safety requirements.',
              },
              {
                title: 'Warehouses & Distribution Centers',
                description: 'Perimeter security fencing for warehouse yards, loading areas, and truck staging zones. Interior partition fencing to secure inventory, equipment, and restricted areas within your facility.',
              },
              {
                title: 'Schools & Municipal Properties',
                description: 'Athletic field fencing, playground enclosures, and campus perimeter security. We work with school districts and municipalities across Georgia on code-compliant chain link installations.',
              },
              {
                title: 'Industrial & Manufacturing Facilities',
                description: 'Heavy-gauge chain link for manufacturing plants, processing facilities, and utility substations. Designed for long-term durability in demanding industrial environments.',
              },
              {
                title: 'Commercial Property Boundaries',
                description: 'Property line fencing for office parks, shopping centers, and multi-tenant commercial properties. Clear boundary definition with options for privacy slats and windscreen.',
              },
              {
                title: 'Parking Lots & Secured Yards',
                description: 'Vehicle storage, fleet yards, and parking lot perimeters. Integrated with slide gates and access control for controlled entry and exit points.',
              },
            ].map((app) => (
              <div key={app.title} className="flex gap-4">
                <span className="text-brand-orange font-bold text-2xl mt-1 flex-shrink-0">&bull;</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Materials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chain Link Fence Materials &amp; Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fabric &amp; Wire Options</h3>
              <ul className="space-y-3">
                {[
                  '6-gauge fabric — Heavy-duty for high-security and industrial applications',
                  '9-gauge fabric — Standard commercial grade for perimeter fencing',
                  '11-gauge fabric — Light commercial and temporary installations',
                  'Galvanized finish — Zinc-coated steel for corrosion resistance',
                  'Vinyl-coated finish — Available in black, green, brown, and white',
                  'Knuckle-knuckle or knuckle-twist selvage options',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Posts &amp; Framework</h3>
              <ul className="space-y-3">
                {[
                  'Schedule 40 steel posts — Standard commercial grade',
                  'Schedule 80 steel posts — Heavy-duty for taller fences and high-wind areas',
                  'Round or square terminal, line, and corner posts',
                  'Top rail, tension wire, and brace bands included',
                  'Concrete-set post foundations for permanent installations',
                  'Drive-set posts available for temporary or soft-soil applications',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Chain Link Fence Installation Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From quote to final inspection, we manage every step of your commercial chain link fence project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: '01',
                title: 'Request a Quote',
                description: 'Tell us about your project — property type, approximate footage, height requirements, and timeline. We\'ll follow up within one business day.',
              },
              {
                step: '02',
                title: 'Site Visit & Design',
                description: 'We visit your property, take measurements, and confirm specifications. We handle permit research and coordinate with your general contractor or property manager.',
              },
              {
                step: '03',
                title: 'Materials & Scheduling',
                description: 'We source commercial-grade materials and schedule your installation around your operations. No surprises on materials or pricing.',
              },
              {
                step: '04',
                title: 'Installation & Walkthrough',
                description: 'Our experienced crews install on schedule. Every project ends with a walkthrough to confirm it meets code and your expectations.',
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-6xl font-bold text-brand-orange/20 mb-2 leading-none">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Other Commercial Fence Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link is just one of the commercial fencing solutions we offer.
              Explore our other services to find the right fit for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Security Fence Installation',
                description: 'High-security fencing with anti-climb designs, barbed wire, and razor ribbon for facilities requiring maximum perimeter protection.',
                href: '/installation/georgia/commercial-security-fence/',
              },
              {
                title: 'Slide Gate & Rolling Gate Installation',
                description: 'Manual and motorized slide gates for commercial driveways and facility entrances, including gate opener systems.',
                href: '/installation/georgia/slide-gates/',
              },
              {
                title: 'Warehouse & Industrial Fencing',
                description: 'Interior and exterior fencing for warehouses, distribution centers, and industrial facilities including partition and cage systems.',
                href: '/installation/georgia/warehouse-industrial-fencing/',
              },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Quote Form */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: service areas */}
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Service Areas</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Chain Link Fence Installation Across Georgia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We install commercial chain link fencing throughout Metro Atlanta and across the state of Georgia.
                Whether you need 200 feet or 2,000 feet, our experienced crews deliver on time and on budget.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs,
                Kennesaw, and surrounding communities.
              </p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Chain Link Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Chain Link Fence Installation in Marietta, GA
                </Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Chain Link Fence Installation in Alpharetta, GA
                </Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">
                  &larr; All Commercial Fence Services in Georgia
                </Link>
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your chain link fence project and we&rsquo;ll respond within one business day.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                    placeholder="Approximate footage, height, location, timeline, etc."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chain Link Fence Installation — Frequently Asked Questions
            </h2>
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/vinyl-fencing/" className="hover:underline">Vinyl Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/guides/" className="hover:underline">Fence Guides</Link></li>
                <li><Link href="/maintenance/" className="hover:underline">Maintenance Tips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
                <li><Link href="/reviews/" className="hover:underline">Reviews</Link></li>
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

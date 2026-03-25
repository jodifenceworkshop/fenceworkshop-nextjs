import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is anti-climb fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anti-climb fencing uses tight mesh patterns (typically 358 mesh with 3\" x 0.5\" openings) that prevent hand and foot holds, making it extremely difficult to scale. It's commonly used for high-security facilities including data centers, utilities, and government properties. We install several anti-climb fence systems depending on your security requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install crash-rated fencing and barriers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install bollard-integrated fencing systems and K-rated vehicle barriers for facilities requiring anti-ram perimeter protection. These systems are rated to stop vehicles at specified speeds and weights, and are common at government buildings, data centers, and critical infrastructure sites."
      }
    },
    {
      "@type": "Question",
      "name": "Can security fencing be integrated with cameras and alarms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our security fence installations are designed with mounting points and conduit pathways for CCTV cameras, motion sensors, intrusion detection systems, and perimeter lighting. We coordinate with security integrators to ensure the fencing infrastructure supports your full security system."
      }
    },
    {
      "@type": "Question",
      "name": "What height is recommended for security fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial security fencing is typically installed at 8 to 12 feet depending on the threat level and facility type. Security toppings like barbed wire or razor ribbon add an additional 1 to 3 feet. We'll recommend the appropriate height based on your security assessment and local code requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle government and military security fence projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fence Workshop is experienced with security fence installations for government and military facilities, including projects with specific compliance requirements. We work with general contractors and facility managers on clearance-level projects throughout Georgia."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Commercial & Industrial Security Fence Installation in Georgia | Fence Workshop',
  description: 'High-security commercial and industrial fence installation in Metro Atlanta and Georgia. Anti-climb, barbed wire, razor ribbon. Licensed & insured. Free quotes.',
}

const faqs = [
  {
    question: 'What is anti-climb fencing?',
    answer: 'Anti-climb fencing uses tight mesh patterns (typically 358 mesh with 3" x 0.5" openings) that prevent hand and foot holds, making it extremely difficult to scale. It\'s commonly used for high-security facilities including data centers, utilities, and government properties. We install several anti-climb fence systems depending on your security requirements.',
  },
  {
    question: 'Do you install crash-rated fencing and barriers?',
    answer: 'Yes. We install bollard-integrated fencing systems and K-rated vehicle barriers for facilities requiring anti-ram perimeter protection. These systems are rated to stop vehicles at specified speeds and weights, and are common at government buildings, data centers, and critical infrastructure sites.',
  },
  {
    question: 'Can security fencing be integrated with cameras and alarms?',
    answer: 'Yes. Our security fence installations are designed with mounting points and conduit pathways for CCTV cameras, motion sensors, intrusion detection systems, and perimeter lighting. We coordinate with security integrators to ensure the fencing infrastructure supports your full security system.',
  },
  {
    question: 'What height is recommended for security fencing?',
    answer: 'Commercial security fencing is typically installed at 8 to 12 feet depending on the threat level and facility type. Security toppings like barbed wire or razor ribbon add an additional 1 to 3 feet. We\'ll recommend the appropriate height based on your security assessment and local code requirements.',
  },
  {
    question: 'Do you handle government and military security fence projects?',
    answer: 'Yes. Fence Workshop is experienced with security fence installations for government and military facilities, including projects with specific compliance requirements. We work with general contractors and facility managers on clearance-level projects throughout Georgia.',
  },
]

export default function CommercialSecurityFencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
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
              <span className="text-gray-200">Security Fence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Commercial &amp; Industrial Security Fence Installation in Georgia
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-orange mb-6 leading-tight">
              Maximum Perimeter Protection for High-Security Facilities
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Fence Workshop installs high-security fencing systems throughout Metro Atlanta and Georgia —
              including anti-climb mesh, barbed wire, razor ribbon, and crash-rated barriers for facilities
              requiring maximum perimeter protection. Licensed &amp; insured with 15+ years experience.
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

      {/* Why Security Fencing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-2">Why Security Fencing</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Commercial Security Fencing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              When standard fencing isn&rsquo;t enough, high-security fencing systems provide the perimeter
              protection your facility demands. Designed to deter, delay, and detect intrusion attempts.
            </p>
          </div>

          {/* Feature Photo */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-[16/7] relative bg-gray-200">
              <Image
                src="/images/service-security-fence.jpg"
                alt="High-security commercial fence installation by Fence Workshop in Georgia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Maximum Perimeter Protection',
                description: 'Anti-climb designs, tight mesh patterns, and reinforced frameworks that deter and delay intrusion attempts at your facility perimeter.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Multiple Topping Options',
                description: 'Barbed wire, razor ribbon, concertina wire, and anti-climb brackets to meet your security specification and threat assessment.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: 'Crash-Rated & Anti-Ram',
                description: 'Bollard-integrated and crash-rated fencing for facilities requiring vehicle barrier protection at the perimeter.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                  </svg>
                ),
              },
              {
                title: '24/7 Deterrent',
                description: 'Visible security fencing serves as a powerful deterrent, reducing the need for additional security measures and lowering incident rates.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  </svg>
                ),
              },
              {
                title: 'Integrated with Access Control',
                description: 'Designed to work with gate systems, cameras, card readers, and other access control infrastructure for a complete security perimeter.',
                icon: (
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                  </svg>
                ),
              },
              {
                title: 'Code-Compliant Installations',
                description: 'Every installation meets Georgia and local municipal building codes. We handle permit research, utility locates, and inspections.',
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
              Commercial Security Fence Applications
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              High-security fencing protects facilities where standard fencing falls short.
              Here are the most common applications we install throughout Georgia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Centers & Critical Infrastructure',
                description: 'High-security perimeter fencing meeting CISA and facility-specific security standards for data centers, telecommunications, and critical infrastructure sites.',
              },
              {
                title: 'Government & Military Facilities',
                description: 'Clearance-level perimeter security with anti-climb, anti-cut, and intrusion detection integration for government buildings and military installations.',
              },
              {
                title: 'Utility Substations & Power Plants',
                description: 'Code-required security fencing for electrical substations, water treatment facilities, and energy infrastructure meeting NERC CIP and local utility standards.',
              },
              {
                title: 'Correctional & Detention Facilities',
                description: 'Maximum-security fencing systems with anti-climb mesh, razor wire, and sally port integration for correctional and secure detention environments.',
              },
              {
                title: 'Warehouses & Distribution Centers',
                description: 'Perimeter security for high-value inventory, loading docks, and truck staging areas at warehouses and distribution facilities.',
              },
              {
                title: 'Corporate Campuses & Office Parks',
                description: 'Professional-grade security fencing that balances aesthetics with facility protection for corporate environments and business parks.',
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
              Security Fence Materials &amp; Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fence Types &amp; Materials</h3>
              <ul className="space-y-3">
                {[
                  'Anti-climb 358 mesh (3" x 0.5" openings)',
                  'Expanded metal security panels',
                  'Heavy-gauge welded wire mesh',
                  'Palisade / steel palisade fencing',
                  'High-security chain link (6-gauge minimum)',
                  'Steel and aluminum panel systems',
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Toppings &amp; Add-Ons</h3>
              <ul className="space-y-3">
                {[
                  'Single / double strand barbed wire',
                  'BTO-22 and BTO-28 razor ribbon',
                  'Flat wrap concertina coils',
                  'Anti-climb rotating spinners',
                  'Intrusion detection sensor mounting',
                  'CCTV and lighting bracket integration',
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
              How Security Fence Installation Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From security assessment to final inspection, we manage every step of your high-security fence project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: '01',
                title: 'Request a Quote',
                description: 'Tell us about your facility — security requirements, perimeter length, threat level, and timeline. We\'ll follow up within one business day.',
              },
              {
                step: '02',
                title: 'Site Visit & Assessment',
                description: 'We visit your property, assess security needs, take measurements, and confirm specifications. We handle permit research and coordinate with your security team.',
              },
              {
                step: '03',
                title: 'Materials & Scheduling',
                description: 'We source security-grade materials and schedule your installation. Specialized materials may require additional lead time — we\'ll communicate timelines clearly.',
              },
              {
                step: '04',
                title: 'Installation & Walkthrough',
                description: 'Our experienced crews install on schedule with minimal disruption to your operations. Every project ends with a security walkthrough and code verification.',
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
              Security fencing is just one part of a complete perimeter solution.
              Explore our other services to build a fully integrated security system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Chain Link Fence Installation',
                description: 'Heavy-duty commercial chain link for perimeter security, job sites, and property boundaries. Galvanized and vinyl-coated options.',
                href: '/installation/georgia/commercial-chain-link-fence/',
              },
              {
                title: 'Security Gate Systems & Access Control',
                description: 'Automated gate systems with keypads, card readers, and telephone entry for controlled vehicle and pedestrian access.',
                href: '/installation/georgia/security-gate-systems/',
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
                Security Fence Installation Across Georgia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We install high-security fencing throughout Metro Atlanta and across the state of Georgia.
                From data centers to government facilities, our experienced crews deliver secure, code-compliant installations.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs,
                Kennesaw, and surrounding communities.
              </p>
              <div className="space-y-3">
                <Link href="/installation/georgia/atlanta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Security Fence Installation in Atlanta, GA
                </Link>
                <Link href="/installation/georgia/marietta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Security Fence Installation in Marietta, GA
                </Link>
                <Link href="/installation/georgia/alpharetta-fence-installation/" className="block text-brand-orange hover:underline font-medium">
                  &rarr; Security Fence Installation in Alpharetta, GA
                </Link>
                <Link href="/installation/georgia/commercial-fence-installation/" className="block text-brand-orange hover:underline font-medium mt-6">
                  &larr; All Commercial Fence Services in Georgia
                </Link>
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Tell us about your security fence project and we&rsquo;ll respond within one business day.</p>
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
                    placeholder="Facility type, perimeter length, security requirements, timeline, etc."
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
              Security Fence Installation — Frequently Asked Questions
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

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Fence Installation in Georgia | Fence Workshop',
  description: 'Licensed commercial fence installation across Georgia and Metro Atlanta. Chain link, security fence, ornamental, dumpster gates, roll gates, and more. Get a free quote.',
}

const installationServices = [
  {
    title: 'Chain Link Fence Installation',
    description: 'Heavy-duty commercial and industrial chain link for perimeter security, job sites, and property boundaries. Available in galvanized or vinyl-coated finishes.',
    icon: '🔗',
  },
  {
    title: 'Security Fence Installation',
    description: 'High-security fencing systems including anti-climb designs, barbed wire, and razor ribbon topping for facilities requiring maximum perimeter protection.',
    icon: '🔒',
  },
  {
    title: 'Ornamental & Aluminum Fence Installation',
    description: 'Architectural-grade ornamental and aluminum fencing for commercial properties, municipalities, and high-end residential projects through general contractors.',
    icon: '🏛️',
  },
  {
    title: 'Dumpster Gate Installation',
    description: 'Custom dumpster enclosure gates built to local code. We work with property managers, HOAs, and commercial facilities for new installs and replacements.',
    icon: '🚪',
  },
  {
    title: 'Roll Gate & Slide Gate Installation',
    description: 'Manual and motorized roll gates for commercial driveways and facility entrances. Includes gate opener systems integrated into your gate installation.',
    icon: '↔️',
  },
  {
    title: 'Warehouse & Industrial Fencing',
    description: 'Interior and exterior fencing for warehouses, distribution centers, and industrial facilities. Partition fencing, cage systems, and perimeter security.',
    icon: '🏭',
  },
  {
    title: 'Parking Deck & Garage Fencing',
    description: 'Perimeter cable systems, guard rails, and safety fencing for parking structures. Code-compliant installations with durable powder-coat finishes.',
    icon: '🅿️',
  },
  {
    title: 'Security Gate Systems',
    description: 'Swing gates, slide gates, and access control integration for commercial and industrial facilities. Gate openers and operators included with gate system installations.',
    icon: '🔐',
  },
]

const repairServices = [
  {
    title: 'Dumpster Gate Repair',
    description: 'Fast repair for broken hinges, damaged frames, and sagging dumpster enclosure gates. We service commercial properties throughout Metro Atlanta.',
  },
  {
    title: 'Chain Link Fence Repair',
    description: 'Fabric repair, post replacement, tension wire, and top rail repairs for commercial chain link systems. Quick turnaround to restore your perimeter security.',
  },
  {
    title: 'Security Fence & Gate Repair',
    description: 'Repairs to high-security fencing, crash-damaged sections, and compromised perimeter systems. Emergency response available for facilities with urgent security needs.',
  },
  {
    title: 'Roll Gate & Slide Gate Repair',
    description: 'Track repair, roller replacement, gate operator service, and frame straightening for commercial roll and slide gates.',
  },
]

const faqs = [
  {
    question: 'Do you install fences for residential customers?',
    answer: 'Our primary focus is commercial fence installation. We occasionally work on residential projects that come through general contractors — typically high-end custom or ornamental installations. If you have a commercial project, we\'d love to connect.',
  },
  {
    question: 'What areas of Georgia do you serve?',
    answer: 'We\'re based in Metro Atlanta and serve clients throughout Georgia. Our most active service areas include Atlanta, Marietta, Alpharetta, Roswell, Smyrna, Sandy Springs, Kennesaw, and surrounding communities. We also take on larger projects statewide.',
  },
  {
    question: 'Are you licensed and insured for commercial fence work in Georgia?',
    answer: 'Yes. Fence Workshop is fully licensed and insured for commercial fence installation in Georgia. We\'ve been in business for 20+ years and stand behind our work.',
  },
  {
    question: 'How do I get a quote for a fence installation project?',
    answer: 'Use the form on this page or give us a call. We\'ll ask a few questions about your project and schedule a site visit if needed. Most commercial projects receive a detailed quote within a few business days.',
  },
]

const cityPages = [
  { name: 'Atlanta', href: '/installation/georgia/atlanta/' },
  { name: 'Marietta', href: '/installation/georgia/marietta/' },
  { name: 'Alpharetta', href: '/installation/georgia/alpharetta/' },
]

export default function GeorgiaInstallationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f5c52] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Commercial Fence Installation in Georgia
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Metro Atlanta&rsquo;s trusted fence contractor for commercial, industrial, and institutional projects. Licensed &amp; insured. 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-block bg-[#de903b] hover:bg-[#c47d30] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+14043144419"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/30 transition-colors"
            >
              Call Us: (404) 314-4419
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Fence Workshop has been installing commercial and industrial fencing across Georgia for over 20 years.
            We work with property managers, general contractors, municipalities, and business owners to deliver
            code-compliant fence installations on time and on budget. From chain link perimeter fencing to
            ornamental security gates, we handle projects of every scale throughout Metro Atlanta and beyond.
          </p>
        </div>
      </section>

      {/* Installation Services */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5c52] text-center mb-4">
            Commercial Fence Installation Services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            We specialize in commercial and industrial fence installations throughout Georgia. Every project is managed by experienced installers from permit to final inspection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#0f5c52] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5c52] text-center mb-4">
            Commercial Fence Repair Services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            We handle fence and gate repairs for commercial facilities throughout Metro Atlanta. Whether it&rsquo;s storm damage, wear, or a gate that&rsquo;s off the track — we can help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {repairServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-[#0f5c52] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5c52] mb-4">
            Georgia Service Areas
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            We serve commercial clients throughout Metro Atlanta and across Georgia. Browse our city pages for local project examples and area-specific information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {cityPages.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="inline-block bg-white border-2 border-[#0f5c52] text-[#0f5c52] hover:bg-[#0f5c52] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {city.name}, GA
              </Link>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            Don&rsquo;t see your city? <a href="#quote" className="text-[#de903b] hover:underline font-medium">Contact us</a> — we likely serve your area.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-[#0f5c52] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Get a Free Fence Installation Quote
          </h2>
          <p className="text-white/80 text-center mb-10 text-lg">
            Tell us about your project and we&rsquo;ll get back to you within one business day.
          </p>
          <form className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52]"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52]"
                  placeholder="ABC Property Management"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52]"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52]"
                  placeholder="(770) 555-0100"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Type of Project *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52] bg-white"
              >
                <option value="">Select a service...</option>
                <option value="chain-link">Chain Link Fence Installation</option>
                <option value="security-fence">Security Fence Installation</option>
                <option value="ornamental">Ornamental / Aluminum Fence Installation</option>
                <option value="dumpster-gate">Dumpster Gate Installation</option>
                <option value="roll-gate">Roll Gate / Slide Gate Installation</option>
                <option value="warehouse">Warehouse / Industrial Fencing</option>
                <option value="parking">Parking Deck / Garage Fencing</option>
                <option value="security-gate">Security Gate System</option>
                <option value="repair">Fence or Gate Repair</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f5c52] resize-none"
                placeholder="Tell us about your project — location, approximate footage, timeline, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#de903b] hover:bg-[#c47d30] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request My Free Quote
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">
              We respond within one business day. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f5c52] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-8 last:border-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

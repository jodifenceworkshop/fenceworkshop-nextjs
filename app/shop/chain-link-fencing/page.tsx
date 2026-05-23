import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Black Chain Link Fence for Sale | Vinyl Coated & Galvanized | Ships Nationwide',
  description: 'Shop black chain link fence and galvanized chain link fencing for residential and commercial properties. Vinyl coated and galvanized in 3ft–12ft heights, multiple gauges. Ships nationwide.',
  alternates: { canonical: 'https://fenceworkshop.com/shop/chain-link-fencing/' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you sell black chain link fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Black chain link fence — vinyl coated over a galvanized steel core — is our most popular chain link option. It delivers a clean, modern look that suits residential backyards, commercial properties, and sports facilities. Available in residential gauges (11.5 and 11 gauge) and commercial grade (9 gauge), in heights from 3ft to 12ft. Pricing is by quote — call (404) 314-4419 for a written quote on your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between galvanized and vinyl-coated chain link?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Galvanized chain link fence has a zinc coating applied to the steel wire, giving it a bright silver appearance and strong corrosion resistance. It is the most commonly used chain link option and the most economical. Vinyl-coated chain link starts with galvanized wire and adds a layer of PVC coating over it, available in black, dark green, or brown. The vinyl coating provides additional corrosion protection, a more finished appearance, and blends better into landscaping. Vinyl-coated chain link typically costs 20–40% more than galvanized but lasts longer in harsh environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gauge chain link fence should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chain link mesh is measured in wire gauge — and counterintuitively, a lower gauge number means thicker, heavier wire. For residential applications, 11.5 gauge and 11 gauge are standard choices and provide solid performance for yard enclosures. For light commercial and industrial use, 9 gauge is the most common selection, offering significantly more strength and rigidity. For high-security perimeters, 6 gauge mesh is available. As a general rule: 11.5ga for residential, 9ga for commercial, and 6ga for security or heavy-duty commercial applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How tall does a chain link fence need to be for security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For basic residential security (keeping kids and pets in, deterring casual trespassers), a 4ft or 5ft chain link fence is typically sufficient. For commercial properties, 6ft is the standard security height and is required by many local ordinances for commercial lot perimeters. For higher-security applications such as equipment yards, industrial facilities, and detention facilities, 8ft, 10ft, and 12ft heights are used — often combined with barbed wire or razor wire extensions at the top. Fence Workshop can supply chain link in heights from 3ft through 12ft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chain link fencing be used for sports courts and kennels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, chain link is the standard fencing material for tennis courts, basketball courts, baseball outfields, dog kennels, and animal enclosures. For tennis courts and high-use sports applications, a heavier 9-gauge or 6-gauge mesh is recommended due to the frequency of impact. Vinyl-coated chain link in black or green is popular for tennis courts and sports facilities because the dark color reduces visual distraction and blends into the surroundings. For dog kennels and animal enclosures, 9-gauge or heavier galvanized chain link is typically specified. Contact Fence Workshop for sport court and kennel project pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chain link fencing good for commercial properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chain link is one of the most widely used commercial fencing materials because it combines low cost, high durability, and excellent security visibility. Unlike solid privacy fencing, chain link allows security cameras and guards to monitor a property perimeter without obstruction. It is used extensively for commercial parking lots, construction site perimeters, equipment yards, storage facilities, schools, and government buildings. For commercial applications, we typically recommend 9-gauge galvanized chain link with commercial-grade posts, tension bar systems, and heavy-duty swing or slide gates. Call (404) 314-4419 to discuss your commercial chain link project.',
      },
    },
  ],
}

export default function ChainLinkFencingPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text and CTAs */}
            <div>
              <p className="text-brand-orange font-semibold uppercase tracking-wide mb-3 text-sm">
                Chain Link Fencing
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Black Chain Link Fence — Residential &amp; Commercial
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-brand-orange mb-5 leading-snug">
                The Most Affordable, Durable Fencing Option Available
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Fence Workshop supplies galvanized and vinyl-coated chain link fencing for residential
                yards, commercial properties, sports courts, kennels, and security perimeters. Available
                in heights from 3ft to 12ft and multiple wire gauges. Ships nationwide. Installation
                available in Georgia. Contact us for a written quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+14043144419"
                  className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
                >
                  Call (404) 314-4419
                </a>
                <Link
                  href="/contact/"
                  className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors text-center"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div>
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/shop-chain-link-vinyl-coated.jpg"
                  alt="Black vinyl coated chain link fence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chain Link */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Benefits</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Chain Link Fencing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link has been the workhorse of the fencing industry for over a century — and for
              good reason. No other fencing material delivers this combination of affordability,
              strength, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Most Affordable Option</h3>
              <p className="text-gray-600 leading-relaxed">
                Chain link is consistently the lowest-cost fencing option per linear foot. It delivers
                solid performance at a fraction of the cost of wood, vinyl, or aluminum.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extremely Durable</h3>
              <p className="text-gray-600 leading-relaxed">
                Galvanized steel wire does not rot, splinter, or warp. A properly installed chain link
                fence with commercial-grade posts can last 20–30 years with minimal maintenance.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center w-full h-full">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">See-Through Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike solid fencing, chain link allows clear sightlines through the fence — making it
                  ideal for security monitoring, sports court visibility, and open-feeling yard enclosures.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Galvanized chain link requires virtually no routine maintenance. No painting, no staining,
                no sealing. Inspect annually and tighten any loose tension wire — that is it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-content image */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/shop-chain-link-galvanized.jpg"
              alt="Galvanized chain link fence installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Materials & Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Options & Specifications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chain Link Fence Options
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link fencing is not one-size-fits-all. The right configuration for your project
              depends on the application, required height, and security level. Here is a breakdown
              of the key choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Galvanized */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Galvanized Chain Link</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Galvanized chain link is the standard, workhorse option. The steel wire is coated with
                zinc through a hot-dip galvanizing process, giving it a bright silver appearance and
                strong corrosion resistance. It is the most economical option and performs well in the
                vast majority of residential and commercial applications. Galvanized chain link handles
                Georgia&apos;s humidity and weather without issue for decades when properly installed.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Color: Silver / metallic gray</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Most economical option</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Strong corrosion resistance from zinc coating</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: residential yards, commercial perimeters, construction sites</li>
              </ul>
            </div>

            {/* Vinyl Coated */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vinyl-Coated Chain Link</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vinyl-coated chain link starts with a galvanized wire core and adds a layer of PVC
                coating over the outside. This provides additional corrosion protection and a cleaner,
                more finished appearance. Black vinyl-coated chain link is particularly popular for
                residential backyards where the homeowner wants a fence that blends into the landscape
                rather than catches the eye. Also available in dark green and brown to complement
                natural settings.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Colors: Black, Dark Green, Brown</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Maximum corrosion resistance</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Cleaner, more finished look</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: residential backyards, tennis courts, sports facilities</li>
              </ul>
            </div>
          </div>

          {/* Gauge & Height Guide */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wire Gauge Guide</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wire gauge determines the thickness and strength of the chain link mesh. Lower gauge
              numbers mean heavier, thicker wire. Choosing the right gauge is important — too light
              and the fence will not hold up to heavy use, too heavy and you are paying for strength
              you do not need.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-4 font-semibold">Gauge</th>
                    <th className="text-left p-4 font-semibold">Wire Diameter</th>
                    <th className="text-left p-4 font-semibold">Recommended Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200">11.5 ga</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">0.080&quot;</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">Light residential — basic yard enclosures, temporary fencing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200">11 ga</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">0.091&quot;</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">Standard residential — backyard, dog runs, garden enclosures</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold text-brand-green font-bold border-b border-gray-200">9 ga</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">0.148&quot;</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200"><strong>Commercial standard</strong> — parking lots, schools, commercial perimeters, kennels, sports courts</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200">6 ga</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">0.192&quot;</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">Heavy commercial / security — industrial sites, detention, high-security perimeters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Height Guide */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Height Selection Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-900">3ft / 4ft</p>
                <p className="text-gray-600 text-sm mt-1">Garden borders, decorative divisions, small pet containment. Low-visibility boundary marker.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-900">5ft</p>
                <p className="text-gray-600 text-sm mt-1">Residential yard enclosure for most dogs and children. Common in older residential neighborhoods.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-900 text-brand-green">6ft — Most Common</p>
                <p className="text-gray-600 text-sm mt-1">Standard residential security height. Required for most commercial perimeters and zoning codes.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-900">8ft</p>
                <p className="text-gray-600 text-sm mt-1">Commercial and industrial security. Equipment yards, storage facilities, schools.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-900">10ft / 12ft</p>
                <p className="text-gray-600 text-sm mt-1">High-security perimeters, detention facilities, industrial compounds. Often combined with barbed wire.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <p className="font-bold text-gray-900">Custom Heights</p>
                <p className="text-gray-600 text-sm mt-1">Non-standard heights available by special order. Call (404) 314-4419 to discuss your project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get a Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Getting Started</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get a Chain Link Fence Quote
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide written quotes for all chain link fencing projects — no online checkout
              required. Here is how the process works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measure Your Project</h3>
              <p className="text-gray-700 leading-relaxed">
                Walk the perimeter you want to enclose and measure the total linear footage. Note the
                desired fence height, any gate openings (walk gates or drive gates), and your zip code
                for shipping. For commercial projects, a site plan or survey is helpful but not required
                to get a preliminary quote.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call or Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Reach us by phone at <a href="tel:+14043144419" className="text-brand-green font-semibold hover:underline">(404) 314-4419</a> or
                use our <Link href="/contact/" className="text-brand-green font-semibold hover:underline">online contact form</Link>.
                Tell us your linear footage, desired height, gauge (or application — we can recommend
                the right gauge), and whether you want galvanized or vinyl-coated. We will follow up
                promptly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Your Written Quote</h3>
              <p className="text-gray-700 leading-relaxed">
                We will provide a written quote itemizing all materials, hardware, and shipping costs.
                For Georgia customers, installation pricing is available separately. No surprise charges
                or hidden fees — you will know exactly what you are paying before ordering.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Contact us today — we typically respond same business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14043144419"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Call (404) 314-4419
              </a>
              <Link
                href="/contact/"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Request a Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Applications</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where Chain Link Fencing Is Used
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chain link is one of the most versatile fencing materials available. It is used in
              virtually every category of fencing application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Residential Yards</h3>
              <p className="text-gray-700">
                A 5ft or 6ft galvanized chain link fence is a cost-effective way to define and secure
                a residential yard. Black vinyl-coated chain link is increasingly popular for homeowners
                who want a low-profile fence that does not visually dominate the yard.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Properties</h3>
              <p className="text-gray-700">
                9-gauge galvanized chain link is the commercial industry standard for parking lots,
                business perimeters, and access control fencing. Heavy-duty posts and commercial
                framework ensure the fence holds up to years of heavy-use environments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dog Kennels &amp; Animal Enclosures</h3>
              <p className="text-gray-700">
                Chain link is the standard material for professional dog kennels, animal shelters,
                and livestock containment. We recommend 9-gauge minimum for large or high-energy dogs,
                and 6-gauge for commercial kennel operations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Courts</h3>
              <p className="text-gray-700">
                Tennis courts, basketball courts, baseball backstops, and batting cages all use chain
                link as the standard enclosure material. Vinyl-coated black or green chain link is the
                preferred choice for tennis facilities and reduces visual distraction for players.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security Perimeters</h3>
              <p className="text-gray-700">
                8ft and 10ft chain link fencing with barbed wire or razor wire extensions is used for
                industrial facility perimeters, equipment yards, government facilities, and anywhere
                heightened security is required. Chain link allows security cameras clear sightlines.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Construction Site Fencing</h3>
              <p className="text-gray-700">
                Temporary and permanent chain link fencing is standard on construction sites for
                securing the perimeter, limiting public access, and complying with OSHA requirements.
                Call us for construction-site fencing pricing and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chain Link vs Other Materials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Chain Link vs. Other Fencing Materials</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every fencing material has its strengths. Chain link excels when cost-per-foot, durability,
            and security sightlines are the primary priorities. Here is how it compares to other
            common fencing options.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-center p-4 font-semibold">Chain Link</th>
                  <th className="text-center p-4 font-semibold">Wood</th>
                  <th className="text-center p-4 font-semibold">Vinyl</th>
                  <th className="text-center p-4 font-semibold">Aluminum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Material Cost</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Lowest</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Low–Med</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Medium</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Medium–High</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Maintenance Required</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Very Low</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">High</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Very Low</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Very Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Privacy</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-200">None</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Full</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Full</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Open style</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Security Visibility</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Excellent</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-200">None</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-200">None</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Good</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Commercial Use</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Excellent</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-200">Limited</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Moderate</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Excellent</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Curb Appeal</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-200">Functional</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">High</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">High</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">High</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mt-4">
            Bottom line: chain link wins on cost and commercial versatility. If privacy or curb appeal
            are priorities, vinyl or aluminum may be the better fit. Not sure? Call us — we install
            all of these materials and can help you choose.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions — Chain Link Fencing</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact Fence Workshop for a written chain link fence quote. We supply residential and
            commercial projects. Ships nationwide, installs in Georgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14043144419"
              className="inline-block bg-white text-brand-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Call (404) 314-4419
            </a>
            <Link
              href="/contact/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/40 transition-colors text-center"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

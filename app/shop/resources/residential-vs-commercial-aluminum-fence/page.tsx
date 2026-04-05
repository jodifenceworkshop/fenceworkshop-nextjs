import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential vs Commercial Aluminum Fence: Which Grade Do You Need? | Fence Workshop',
  description: 'Aluminum fence grades explained — compare residential grade vs commercial grade specifications, wall thickness, post sizes, and when each grade is appropriate.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between residential and commercial grade aluminum fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Residential grade aluminum fencing uses lighter-weight extrusions — typically 5/8" or 3/4" square pickets, 2" square posts, and thinner wall thickness — designed for homeowner applications where cost, aesthetics, and ease of installation matter most. Commercial grade uses heavier extrusions — 1" or larger square pickets, 2.5" to 3" square posts, and thicker wall thickness — designed for higher security, higher-traffic, or specification-driven projects like schools, government buildings, industrial properties, and large commercial sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is residential grade aluminum fence strong enough for my yard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — for standard residential applications including backyards, pool enclosures, front yards, and pet containment, residential grade aluminum fence is more than strong enough. It resists impact, wind, and normal use. Commercial grade is only necessary when you need to meet specific commercial specs, higher security requirements, or extreme wind load ratings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sell commercial grade aluminum fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our online catalog is all residential grade aluminum fencing, because that covers 95% of the projects our customers need. If you need commercial grade — for a school, municipal project, HOA spec, industrial site, or high-security application — we can custom-quote commercial grade panels, posts, and gates and ship them nationwide. Contact us for a custom commercial quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which grade do I need for a pool fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool code compliance is about fence height, picket spacing, and rail geometry — not grade. Residential grade aluminum fence meets pool code as long as you choose a compliant style and height. See our Pool Code Aluminum Fence Guide for compliant style/height combinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which grade do I need for a commercial property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the application. Many small commercial properties — offices, apartment complexes, retail — use residential grade aluminum fence without issue. True commercial grade is typically specified for schools, government buildings, detention facilities, industrial sites, and any project with a written spec calling for commercial or industrial grade. If you have a spec sheet, send it to us and we will quote the exact grade called for.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Residential vs Commercial Aluminum Fence: Which Grade Do You Need?',
  description: 'Compare residential and commercial grade aluminum fence specifications, applications, and when each grade is appropriate.',
  author: {
    '@type': 'Organization',
    name: 'Fence Workshop',
    url: 'https://www.fenceworkshop.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fence Workshop',
    url: 'https://www.fenceworkshop.com',
  },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.fenceworkshop.com/shop/resources/residential-vs-commercial-aluminum-fence/',
  },
}

const comparisonRows = [
  { spec: 'Picket size', residential: '5/8" or 3/4" square', commercial: '1" square or larger' },
  { spec: 'Picket wall thickness', residential: '~0.055"–0.062"', commercial: '~0.070"–0.125"' },
  { spec: 'Rail size', residential: '1" × 1-3/4" U-channel', commercial: '1-1/4" × 2" or heavier extrusion' },
  { spec: 'Post size', residential: '2" × 2" square', commercial: '2-1/2" × 2-1/2" or 3" × 3" square' },
  { spec: 'Post wall thickness', residential: '~0.080"–0.125"', commercial: '~0.125"–0.188"' },
  { spec: 'Typical panel width', residential: '6 ft', commercial: '6 ft or 8 ft' },
  { spec: 'Typical applications', residential: 'Backyards, pools, pets, front yards, light commercial', commercial: 'Schools, government, industrial, high-security, spec jobs' },
  { spec: 'Finish', residential: 'TGIC powder coat', commercial: 'TGIC powder coat (often thicker mil build)' },
]

export default function ResidentialVsCommercialFencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-300">Residential vs Commercial Grade</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Residential vs Commercial Aluminum Fence: Which Grade Do You Need?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Aluminum fence comes in different grades — residential, commercial, and sometimes
            industrial. Here&apos;s how the grades actually differ, which one fits your project,
            and how to order what you need.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-brand-orange rounded-r-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Residential grade</strong> uses 5/8&quot; or 3/4&quot; square pickets and 2&quot;
              square posts — perfect for homes, pools, and pet yards.{' '}
              <strong>Commercial grade</strong> uses 1&quot; or larger pickets and 2-1/2&quot; or 3&quot;
              posts — specified for schools, government buildings, industrial sites, and
              high-security projects. Our online catalog is all residential grade because that&apos;s
              what 95% of projects need. For commercial grade, we custom-quote and ship nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Grade Comparison at a Glance</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The main differences between residential and commercial grade aluminum fence are
            extrusion size and wall thickness. These numbers are typical industry ranges —
            exact specs vary by manufacturer and product line.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Specification</th>
                  <th className="text-left p-4 font-semibold">Residential Grade</th>
                  <th className="text-left p-4 font-semibold">Commercial Grade</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.spec} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200 whitespace-nowrap">{row.spec}</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">{row.residential}</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Our Catalog is Residential */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Online Catalog Is Residential Grade</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Every aluminum fence panel, gate, and post on our online store is residential grade.
            That&apos;s a deliberate choice: the vast majority of aluminum fence projects —
            backyards, pool enclosures, front yards, decorative perimeters, pet containment,
            rental properties, small commercial sites — are well served by residential grade.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Residential grade aluminum fence is:
          </p>
          <ul className="list-disc list-outside ml-6 text-lg text-gray-700 space-y-2 mb-4">
            <li><strong>More affordable</strong> — lighter extrusions cost less to manufacture and ship.</li>
            <li><strong>Easier to install</strong> — lighter panels and posts are easier to handle solo or with a helper.</li>
            <li><strong>Plenty strong</strong> for normal residential and light-commercial use.</li>
            <li><strong>Faster to ship</strong> — we stock residential panels in all our popular styles and heights.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            For homeowners, contractors doing residential installs, property managers,
            and small commercial projects, residential grade is the right answer.{' '}
            <Link href="/shop/aluminum-fencing/" className="text-brand-orange font-semibold hover:underline">
              Shop residential aluminum fence panels →
            </Link>
          </p>
        </div>
      </section>

      {/* When You Need Commercial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When You Actually Need Commercial Grade</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You need commercial grade aluminum fence if any of these apply to your project:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Written Spec Calls for It</h3>
              <p className="text-gray-700">
                Architects, engineers, and municipalities often specify commercial or industrial
                grade by name. If your plans call for it, you have to provide it.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Schools &amp; Government Buildings</h3>
              <p className="text-gray-700">
                Public-sector projects almost always require commercial grade for durability,
                vandal resistance, and code compliance.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Industrial &amp; Utility Sites</h3>
              <p className="text-gray-700">
                Substations, warehouses, distribution centers, and industrial facilities need
                the heavier extrusions and wall thickness of commercial grade.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">High-Security Applications</h3>
              <p className="text-gray-700">
                Detention, secure storage, and anti-climb perimeters benefit from commercial
                grade&apos;s thicker pickets and larger posts.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Extreme Wind Loads</h3>
              <p className="text-gray-700">
                Coastal or high-wind regions may require commercial grade post sizes and
                spacing to meet local wind load ratings.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Large HOA or Master-Plan Communities</h3>
              <p className="text-gray-700">
                Some HOAs and master-planned communities specify commercial grade for their
                perimeter and common-area fencing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Commercial Quote CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Need Commercial Grade? We Custom-Quote &amp; Ship Nationwide.</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              We source commercial and industrial grade aluminum fence, posts, and gates in
              any style and height you need. Send us your spec sheet, drawings, or a description
              of your project and we&apos;ll put together a custom quote — shipped directly to
              your jobsite anywhere in the continental U.S.
            </p>
            <ul className="list-disc list-outside ml-6 text-gray-200 space-y-2 mb-8">
              <li>Commercial and industrial grade panels, posts, and gates</li>
              <li>Custom colors, heights, and widths</li>
              <li>Nationwide freight shipping</li>
              <li>Quote turnaround in 1–2 business days</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Request a Commercial Quote
              </Link>
              <a
                href="tel:+14043144419"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call (404) 314-4419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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

      {/* Footer */}
      <footer className="bg-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
                <li><Link href="/shop/fence-posts/" className="hover:underline">Fence Posts</Link></li>
                <li><Link href="/shop/accessories/" className="hover:underline">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/residential-vs-commercial-aluminum-fence/" className="hover:underline">Residential vs Commercial</Link></li>
                <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
                <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
                <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">Installation Guide</Link></li>
                <li><Link href="/shop/resources/aluminum-vs-steel-fencing/" className="hover:underline">Aluminum vs Steel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us/" className="hover:underline">About Fence Workshop</Link></li>
                <li><Link href="/contact/" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p>1522 Huber St NW</p>
              <p>Atlanta, GA 30318</p>
              <p className="mt-2">(404) 314-4419</p>
            </div>
          </div>
          <div className="border-t border-orange-400 pt-8">
            <p className="md:text-right">&copy; 2026 Fence Workshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Code Aluminum Fence: Which Styles & Heights Qualify? | Fence Workshop',
  description: 'Aluminum pool fence guide — which fence styles and heights meet typical pool code requirements including the 45-inch rail spacing "no climbable footholds" rule.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the typical pool fence code requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most jurisdictions base their pool barrier codes on the International Residential Code (IRC) Appendix G or BOCA. Typical requirements include: minimum 48-inch fence height, maximum 4-inch gap between pickets, maximum 4-inch clearance under the fence, no climbable horizontal rails or footholds within the lower 45 inches of the fence, self-closing and self-latching gates with the latch positioned at least 54 inches from the ground on the pool side. Always verify your local code — requirements vary by state, county, and municipality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "no climbable footholds" mean for a pool fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool codes restrict horizontal rails from being placed where a child could use them as a foothold to climb the fence. The standard rule is that horizontal rails must be spaced at least 45 inches apart, measured from the top of one rail to the top of the next. This means typical 2-rail fence panels only qualify for pool code when they are tall enough to keep the rails that far apart — which is why most pool-code-compliant panels are 5ft or 6ft tall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which aluminum fence styles meet pool code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pool-code-compliant styles include Athens and Atlanta in 6ft height, Brookhaven and Buford in 5ft or 6ft, Candler and Chamblee in 5ft or 6ft, Dawson and Dunwoody in 6ft, and Savannah in 4ft or 5ft. These combinations maintain the required 45-inch minimum between horizontal rails.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a special gate for a pool fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pool enclosure gates must be self-closing, self-latching, and the latch must typically be mounted at least 54 inches from the ground on the pool side. Our walk gate kits include self-closing spring hinges, but you will need to upgrade the standard gravity latch to a MagnaLatch — a key-lockable magnetic latch specifically designed for pool code compliance. We carry the D&D Series 3 MagnaLatch in our accessories section.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does aluminum fencing meet pool code in my state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aluminum fencing is used for pool enclosures in every US state, but specific requirements vary by local jurisdiction. Most states follow the IRC Appendix G baseline but may add stricter requirements. Always check with your local building department or pool inspector before installing. Fence Workshop can help you identify compliant styles — call (404) 314-4419 for guidance.',
      },
    },
  ],
}

const compliantStyles = [
  { style: 'Athens', heights: '6ft', note: 'Spear-top, residential grade' },
  { style: 'Atlanta', heights: '6ft', note: 'Spear-top, commercial grade' },
  { style: 'Brookhaven', heights: '5ft, 6ft', note: 'Flat-top, residential grade' },
  { style: 'Buford', heights: '5ft, 6ft', note: 'Flat-top, commercial grade' },
  { style: 'Candler', heights: '5ft, 6ft', note: 'Staggered-top, residential grade' },
  { style: 'Chamblee', heights: '5ft, 6ft', note: 'Staggered-top, commercial grade' },
  { style: 'Dawson', heights: '6ft', note: 'Spear-top with finials' },
  { style: 'Dunwoody', heights: '6ft', note: 'Staggered spear-top' },
  { style: 'Savannah', heights: '4ft, 5ft', note: '3-rail design maintains 45" spacing at 4ft+' },
]

export default function PoolCodeFencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-300">Pool Code Aluminum Fence</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Pool Code Aluminum Fence: Which Styles &amp; Heights Qualify?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Not every aluminum fence panel meets pool code. The 45-inch rail spacing rule
            disqualifies most 3ft and 4ft panels. Here&apos;s exactly which styles and heights
            from our catalog satisfy typical pool barrier requirements.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-brand-orange rounded-r-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Most pool codes require a minimum 48&quot; fence height, max 4&quot; gap between pickets,
              and <strong>no climbable horizontal rails within the lower 45 inches</strong> of the fence.
              That last rule is what disqualifies most short aluminum panels.
              For our catalog, pool-code-compliant combinations include <strong>Athens and Atlanta in 6ft</strong>,
              <strong> Brookhaven and Buford in 5ft or 6ft</strong>, <strong>Candler and Chamblee in 5ft or 6ft</strong>,
              <strong> Dawson and Dunwoody in 6ft</strong>, and <strong>Savannah in 4ft or 5ft</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Pool Fence Code Requirements</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most US jurisdictions base pool barrier codes on the International Residential Code (IRC)
            Appendix G or BOCA model code. While specifics vary by state and municipality, the baseline
            requirements are consistent:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Minimum Height: 48 inches</h3>
              <p className="text-gray-700 text-sm">Fence must be at least 4ft tall measured from the outside (non-pool side).</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Max 4&quot; Picket Gap</h3>
              <p className="text-gray-700 text-sm">Vertical spacing between pickets cannot exceed 4 inches so a child cannot pass through.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Max 4&quot; Ground Clearance</h3>
              <p className="text-gray-700 text-sm">The bottom of the fence cannot be more than 4 inches from the ground.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">45&quot; Rail Spacing (No Footholds)</h3>
              <p className="text-gray-700 text-sm">Horizontal rails must be at least 45 inches apart so children cannot climb.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Self-Closing Gate</h3>
              <p className="text-gray-700 text-sm">Gate must automatically close behind anyone passing through.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Self-Latching, 54&quot; Latch Height</h3>
              <p className="text-gray-700 text-sm">Latch must engage automatically and sit at least 54 inches from the ground on the pool side.</p>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">Always verify your local code.</p>
            <p className="text-gray-700">
              These are the typical baseline requirements. Some states and counties add stricter rules
              (additional height, tempered materials, alarmed gates, etc.). Check with your local building
              department or pool inspector before ordering. Call us at (404) 314-4419 and we&apos;ll help you
              identify a compliant combination.
            </p>
          </div>
        </div>
      </section>

      {/* The 45-inch Rule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the 45-Inch Rail Rule</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The &ldquo;no climbable footholds&rdquo; requirement is the single rule that most commonly disqualifies
            an aluminum fence from pool code. Here&apos;s how it works:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Standard aluminum fence panels have two horizontal rails — one near the top and one near the
            bottom — with vertical pickets between them. Pool code requires that these two rails be at
            least <strong>45 inches apart</strong>, measured from the top of one rail to the top of the other.
            If they&apos;re closer than 45 inches, a child could potentially use the lower rail as a foothold
            to climb over.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            On a 3ft panel, the rails are typically about 28 inches apart — too close. On a 4ft panel,
            rails are usually 38–40 inches apart — still not enough. It&apos;s only at 5ft and 6ft panel
            heights (or on specific 3-rail designs like our Savannah at 4ft+) that most aluminum panels
            achieve the required 45-inch spacing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is why our pool-code-compliant catalog is dominated by 5ft and 6ft panels — it&apos;s a
            geometry requirement, not a quality issue with shorter panels.
          </p>
        </div>
      </section>

      {/* Compliant Styles Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pool-Code-Compliant Aluminum Fence Styles</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            These styles and height combinations from our catalog meet the 45-inch rail spacing requirement
            and satisfy typical pool barrier codes:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Style</th>
                  <th className="text-left p-4 font-semibold">Compliant Heights</th>
                  <th className="text-left p-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {compliantStyles.map((row, i) => (
                  <tr key={row.style} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200">{row.style}</td>
                    <td className="p-4 text-brand-green font-semibold border-b border-gray-200">{row.heights}</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mt-4">
            Note: This list reflects standard catalog configurations. Custom orders can be engineered to
            meet pool code in other styles — call (404) 314-4419 for custom pricing.
          </p>
        </div>
      </section>

      {/* Gate Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pool-Code-Compliant Gate Hardware</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The fence panels are only half of the equation. Your pool gate must also meet code, which
            means self-closing hinges, a self-latching mechanism, and a latch mounted at least 54 inches
            from the ground on the pool side.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Every walk gate kit we sell includes self-closing spring hinges as standard. However, the
            included gravity latch is <strong>not</strong> a pool-code latch. For pool enclosures, you&apos;ll need
            to upgrade to a MagnaLatch — a key-lockable magnetic latch engineered specifically for pool
            barrier compliance. The D&amp;D Series 3 MagnaLatch is the industry standard and is available
            in our accessories section.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            <p className="font-semibold text-gray-900 mb-2">Pool Gate Shopping List:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold">→</span>
                Walk gate kit in a pool-code-compliant style &amp; height (5ft or 6ft)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold">→</span>
                D&amp;D Series 3 MagnaLatch (replaces the included gravity latch)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold">→</span>
                (Optional) Keyed deadbolt if your local code requires additional locking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing a Pool-Code Fence?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We&apos;ve installed pool fences across Georgia for 15+ years. Call us and we&apos;ll help you
            pick the right style, height, and gate hardware for your local code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14043144419"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Call (404) 314-4419
            </a>
            <Link
              href="/shop/aluminum-fencing/"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Shop Aluminum Fence Panels
            </Link>
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
              <h3 className="font-bold text-lg mb-4">Installation</h3>
              <ul className="space-y-2">
                <li><Link href="/installation/georgia/commercial-fence-installation/" className="hover:underline">Fence Installation in Georgia</Link></li>
                <li><Link href="/installation/georgia/atlanta-fence-installation/" className="hover:underline">Atlanta Fence Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/aluminum-fencing/" className="hover:underline">Aluminum Fencing</Link></li>
                <li><Link href="/shop/driveway-gates/" className="hover:underline">Driveway Gates</Link></li>
                <li><Link href="/shop/walk-gates/" className="hover:underline">Walk Gates</Link></li>
                <li><Link href="/shop/accessories/" className="hover:underline">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">Installation Guide</Link></li>
                <li><Link href="/shop/resources/aluminum-vs-steel-fencing/" className="hover:underline">Aluminum vs Steel</Link></li>
                <li><Link href="/shop/resources/pool-code-aluminum-fence/" className="hover:underline">Pool Code Fence Guide</Link></li>
                <li><Link href="/shop/resources/pet-fence/" className="hover:underline">Pet &amp; Puppy Fence Guide</Link></li>
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

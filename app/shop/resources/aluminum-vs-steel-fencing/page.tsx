import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminum vs Steel Fence: Which Is Better? | Expert Comparison | Fence Workshop',
  description: 'Aluminum vs steel (wrought iron) fencing — cost, durability, maintenance, and security compared by professional fence installers. Find out which fence is right for your property.',
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is aluminum fencing as strong as steel fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — steel is stronger than aluminum in raw tensile strength. However, for residential applications like property boundaries, pool enclosures, and decorative fencing, aluminum is more than strong enough. Steel is the better choice for high-security commercial applications where impact resistance is critical."
      }
    },
    {
      "@type": "Question",
      "name": "Does aluminum fencing rust?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Aluminum does not rust. It naturally forms an oxide layer that protects it from corrosion, making it ideal for humid climates, coastal properties, and pool areas. Steel fencing will rust over time if its protective coating is scratched or wears down."
      }
    },
    {
      "@type": "Question",
      "name": "How much does aluminum fencing cost compared to steel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aluminum fencing typically costs $20–$35 per linear foot installed, while steel (ornamental iron) fencing runs $28–$45+ per linear foot installed. When you factor in long-term maintenance costs — steel needs repainting and rust treatment every few years — aluminum is significantly cheaper over a 20-year lifespan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I install aluminum fencing myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Aluminum fence panels are lightweight (typically 15–20 lbs per panel) and use modular bracket systems that don't require welding. Most homeowners with basic tools can install a residential aluminum fence in a weekend. Steel fencing is much heavier and often requires professional installation."
      }
    },
    {
      "@type": "Question",
      "name": "Which lasts longer — aluminum or steel fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both can last 30+ years, but aluminum requires virtually no maintenance to get there. Steel fencing needs regular inspections, rust treatment, and repainting to maintain its lifespan. A neglected steel fence can fail in 15–20 years due to rust, while a neglected aluminum fence will still look and perform well."
      }
    },
    {
      "@type": "Question",
      "name": "Is aluminum or steel fencing better for pool areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aluminum is the clear winner for pool enclosures. Pool chemicals, splashing water, and humid conditions accelerate rust on steel fencing. Aluminum is completely corrosion-resistant and available with self-closing gate hardware that meets pool code requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between steel fencing and wrought iron fencing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern 'wrought iron' fencing is almost always mild steel that is welded and powder-coated to look like traditional wrought iron. True wrought iron — hand-forged from iron with very low carbon content — is rarely manufactured today and is extremely expensive. When people compare aluminum to wrought iron, they are usually comparing aluminum to ornamental steel."
      }
    }
  ]
}

const comparisonData = [
  { category: 'Cost (per linear foot)', aluminum: '$20–$35 installed', steel: '$28–$45+ installed', winner: 'aluminum' },
  { category: '20-Year Total Cost', aluminum: 'Minimal — no maintenance costs', steel: 'Add $3–$8/ft for repainting & rust repair', winner: 'aluminum' },
  { category: 'Rust Resistance', aluminum: 'Cannot rust — ever', steel: 'Will rust if coating is compromised', winner: 'aluminum' },
  { category: 'Strength', aluminum: 'Good for residential use', steel: 'Superior — welded construction', winner: 'steel' },
  { category: 'Security Rating', aluminum: 'Moderate — deterrent level', steel: 'High — commercial grade available', winner: 'steel' },
  { category: 'Weight (per panel)', aluminum: '15–20 lbs', steel: '40–60 lbs', winner: 'aluminum' },
  { category: 'DIY Installation', aluminum: 'Easy — modular brackets, no welding', steel: 'Difficult — heavy, often requires welding', winner: 'aluminum' },
  { category: 'Maintenance', aluminum: 'Hose off occasionally', steel: 'Inspect, sand, repaint every 3–5 years', winner: 'aluminum' },
  { category: 'Color Options', aluminum: '10+ standard colors', steel: '2–4 standard colors', winner: 'aluminum' },
  { category: 'Style Variety', aluminum: 'Wide range — flat top, spear, puppy picket', steel: 'Classic ornamental styles', winner: 'tie' },
  { category: 'Lifespan (maintained)', aluminum: '30+ years', steel: '30+ years', winner: 'tie' },
  { category: 'Lifespan (neglected)', aluminum: '25+ years', steel: '15–20 years', winner: 'aluminum' },
  { category: 'Best For', aluminum: 'Residential, pools, DIY', steel: 'Commercial security, high-traffic', winner: 'tie' },
]

export default function AluminumVsSteelFencingPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero / Page Header */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">›</span>
            <Link href="/shop/resources/aluminum-vs-steel-fencing/" className="hover:text-brand-orange">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">Aluminum vs Steel Fencing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Aluminum vs Steel Fence: Which Is Better?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            An honest, side-by-side comparison from a team that installs and sells both.
            We&apos;ve built thousands of aluminum and steel fences across Georgia — here&apos;s what
            we&apos;ve learned about how each material actually performs in the real world.
          </p>
          <p className="text-sm text-gray-400 italic">
            Updated March 2026 &middot; Written by professional fence installers with 15+ years of experience
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-brand-orange rounded-r-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The Short Answer</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>For most homeowners, aluminum is the better choice.</strong> It costs less upfront,
              requires virtually zero maintenance, won&apos;t rust, and is easy to install yourself. Steel
              (ornamental iron) is stronger and more secure, making it the better option for commercial
              properties, high-security applications, and areas with heavy physical impact. If you&apos;re
              fencing a yard, pool, or residential property — aluminum wins on value, longevity, and
              ease of ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-gray-900 mb-3">In This Guide:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a href="#comparison-table" className="text-brand-orange hover:underline">→ Side-by-Side Comparison Table</a>
            <a href="#wrought-iron" className="text-brand-orange hover:underline">→ Steel vs Wrought Iron: What&apos;s the Difference?</a>
            <a href="#durability" className="text-brand-orange hover:underline">→ Durability & Rust Resistance</a>
            <a href="#cost" className="text-brand-orange hover:underline">→ Cost Comparison (Short & Long Term)</a>
            <a href="#strength" className="text-brand-orange hover:underline">→ Strength & Security</a>
            <a href="#installation" className="text-brand-orange hover:underline">→ Installation Difficulty</a>
            <a href="#maintenance" className="text-brand-orange hover:underline">→ Maintenance Requirements</a>
            <a href="#best-uses" className="text-brand-orange hover:underline">→ Best Uses for Each Material</a>
            <a href="#verdict" className="text-brand-orange hover:underline">→ Our Verdict</a>
            <a href="#faq" className="text-brand-orange hover:underline">→ FAQ</a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Aluminum vs Steel Fence: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Aluminum</th>
                  <th className="text-left p-4 font-semibold">Steel / Wrought Iron</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-900 border-b border-gray-200">{row.category}</td>
                    <td className={`p-4 border-b border-gray-200 ${row.winner === 'aluminum' ? 'text-brand-green font-semibold' : 'text-gray-700'}`}>
                      {row.winner === 'aluminum' && <span className="mr-1">&#10003;</span>}
                      {row.aluminum}
                    </td>
                    <td className={`p-4 border-b border-gray-200 ${row.winner === 'steel' ? 'text-brand-green font-semibold' : 'text-gray-700'}`}>
                      {row.winner === 'steel' && <span className="mr-1">&#10003;</span>}
                      {row.steel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wrought Iron Clarification */}
      <section id="wrought-iron" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            &ldquo;Wrought Iron&rdquo; vs Steel: A Common Misconception
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you&apos;re searching for &ldquo;aluminum vs wrought iron fencing,&rdquo; here&apos;s something most
            websites won&apos;t tell you: <strong>true wrought iron fencing is almost never sold today.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Traditional wrought iron was hand-forged from iron with very low carbon content. It was beautiful,
            incredibly durable, and extremely expensive. The wrought iron you see on historic properties in
            Savannah or Charleston was built to last centuries — and it has.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            What&apos;s sold as &ldquo;wrought iron&rdquo; today is actually <strong>ornamental steel</strong> — mild
            steel that is welded into fence panels and powder-coated to mimic the look of traditional ironwork.
            It&apos;s a fine product, but it&apos;s not the same material. When we compare aluminum to
            &ldquo;steel&rdquo; in this guide, we&apos;re talking about this modern ornamental steel — which is
            what 99% of buyers are actually choosing between.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            <p className="font-semibold text-gray-900 mb-2">Why this matters:</p>
            <p className="text-gray-700">
              Some companies market ornamental steel as &ldquo;wrought iron&rdquo; to justify higher prices.
              Understanding that you&apos;re comparing aluminum to powder-coated steel — not hand-forged
              iron — helps you make a more informed decision and avoid overpaying.
            </p>
          </div>
        </div>
      </section>

      {/* Durability */}
      <section id="durability" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Durability & Rust Resistance</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is where aluminum has its biggest advantage — and it&apos;s not close.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aluminum: Rust-Proof</h3>
              <p className="text-gray-700 mb-3">
                Aluminum cannot rust. Period. It naturally forms a thin oxide layer on its surface that
                acts as a permanent barrier against corrosion. This is why aluminum is the go-to material
                for marine applications, aircraft, and outdoor furniture.
              </p>
              <p className="text-gray-700">
                For fencing, this means your aluminum fence will look the same in year 20 as it did on
                installation day — without a single coat of paint or protective treatment.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Steel: Rust-Vulnerable</h3>
              <p className="text-gray-700 mb-3">
                Steel rusts. Modern ornamental steel fencing uses powder coating to delay this process,
                but any scratch, chip, or wear point becomes an entry point for moisture. Once rust starts,
                it spreads — and it doesn&apos;t stop on its own.
              </p>
              <p className="text-gray-700">
                We&apos;ve removed steel fences that were only 12–15 years old because the rust had
                compromised the structure. The owner thought the powder coating would last forever.
                It doesn&apos;t.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Installer Insight
            </p>
            <p className="text-gray-700">
              &ldquo;We install both aluminum and steel, and we always ask customers the same question:
              do you want to repaint this fence in 5 years? If the answer is no, we steer them toward
              aluminum. In Georgia&apos;s humidity, steel coating breaks down faster than most people expect.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section id="cost" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Comparison: Upfront and Long-Term</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Aluminum wins on cost at every stage — purchase, installation, and especially maintenance.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Upfront Cost Per Linear Foot</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Aluminum Fence</p>
              <p className="text-4xl font-bold text-gray-900">$20–$35</p>
              <p className="text-gray-600 mt-1">per linear foot, installed</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Steel / Ornamental Iron</p>
              <p className="text-4xl font-bold text-gray-900">$28–$45+</p>
              <p className="text-gray-600 mt-1">per linear foot, installed</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Cost: Maintenance Over 20 Years</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The real cost difference shows up over time. A 200-foot aluminum fence installed at $30/ft
            costs <strong>$6,000 — and that&apos;s essentially your total cost for 20+ years.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            That same 200-foot run in steel at $38/ft costs $7,600 upfront. Add professional repainting
            every 5 years at $3–$5 per foot, and you&apos;re looking at <strong>$9,000–$11,600 over 20 years</strong> — nearly
            double the aluminum cost.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-3">20-Year Cost for 200 Linear Feet:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Aluminum: ~$6,000</p>
                <p className="text-sm text-gray-600">$6,000 install + $0 maintenance</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Steel: ~$9,000–$11,600</p>
                <p className="text-sm text-gray-600">$7,600 install + $1,400–$4,000 maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength */}
      <section id="strength" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strength & Security</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is where steel earns its place. If security is your primary concern, steel is the stronger material.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Steel fence panels are welded — the pickets are permanently fused to the rails, creating a rigid,
            unitized structure. This makes them extremely difficult to bend, break, or force apart. For
            commercial properties, warehouses, parking garages, and anywhere physical security is paramount,
            steel is the right call.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Aluminum fence panels use a bracket or channel system (not welding), and the material itself is
            softer. A determined person could bend residential-grade aluminum pickets. For property boundaries,
            pool enclosures, and decorative fencing, aluminum is plenty strong — but it&apos;s not a security barrier.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">When to choose steel for strength:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold mt-0.5">→</span>
                Commercial properties requiring perimeter security
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold mt-0.5">→</span>
                High-traffic areas where impact damage is likely
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold mt-0.5">→</span>
                Government or institutional facilities with security mandates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange font-bold mt-0.5">→</span>
                Areas prone to vandalism or forced entry attempts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation: DIY vs Professional</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you&apos;re planning to install the fence yourself, aluminum is the only realistic option
            for most homeowners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aluminum Installation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Panels weigh 15–20 lbs — one person can carry them
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Modular bracket system — no welding required
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic tools: post hole digger, level, drill
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Most homeowners finish in a weekend
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/shop/resources/how-to-install-aluminum-fence/" className="text-brand-orange font-semibold hover:underline">
                  Read our step-by-step aluminum installation guide →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Steel Installation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Panels weigh 40–60 lbs — two-person job minimum
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Often requires welding for secure connections
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Specialized tools and skills needed
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Professional installation strongly recommended
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/contact/" className="text-brand-orange font-semibold hover:underline">
                  Need steel fence installation in Georgia? Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section id="maintenance" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aluminum Maintenance</h3>
              <p className="text-gray-700 mb-3">Essentially nothing. Here&apos;s the full list:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Rinse with a garden hose once or twice a year
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Wipe stubborn spots with mild soap and water
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  That&apos;s it. No painting. No rust treatment. No sealing.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Steel Maintenance</h3>
              <p className="text-gray-700 mb-3">Ongoing and unavoidable:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Inspect for rust spots and coating damage annually
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Sand and treat rust spots immediately when found
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Repaint or re-coat the entire fence every 3–5 years
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Replace sections if rust damage becomes structural
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Uses */}
      <section id="best-uses" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Choose Aluminum vs Steel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-orange mb-4">Choose Aluminum When:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  Fencing a residential yard or property boundary
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  Enclosing a pool (aluminum is the industry standard)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  You want a DIY-friendly installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  You live in a humid, coastal, or high-rain area
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  You want zero ongoing maintenance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">→</span>
                  Budget is a factor (both upfront and long-term)
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Steel When:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  Security is your primary requirement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  Fencing a commercial or industrial property
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  The fence will be subject to physical impacts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  You need to meet specific security specifications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  You have the budget for ongoing maintenance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">→</span>
                  Maximum impact resistance is non-negotiable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Verdict */}
      <section id="verdict" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Verdict</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We install both aluminum and steel fences professionally, and we sell aluminum fencing
            online to DIYers and contractors nationwide. So we have no reason to push one over the
            other — we just want you to pick the right material for your project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>For 8 out of 10 residential projects, aluminum is the better choice.</strong> It
            costs less, lasts just as long, looks great, and asks nothing of you after installation
            day. The only scenario where steel clearly wins is when you need serious physical security —
            commercial perimeters, government facilities, or high-risk areas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you&apos;re on the fence (pun intended), call us. We&apos;ll give you honest advice
            based on your specific situation — not a sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop/#products"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Shop Aluminum Fencing
            </Link>
            <Link
              href="/installation/georgia/commercial-fence-installation/"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
            >
              Commercial Steel Installation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
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

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/shop/resources/how-to-install-aluminum-fence/"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">How to Install Aluminum Fence Panels</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide with video from professional installers</p>
            </Link>
            <Link
              href="/shop/#products"
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">Shop Aluminum Fencing & Gates</h3>
              <p className="text-gray-600 text-sm">American-made aluminum fencing shipped nationwide</p>
            </Link>
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
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:underline">Installation Guide</Link></li>
                <li><Link href="/shop/resources/aluminum-vs-steel-fencing/" className="hover:underline">Aluminum vs Steel</Link></li>
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

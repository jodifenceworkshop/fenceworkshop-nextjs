import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vinyl Fencing — Privacy, Picket & Post-and-Rail | Fence Workshop',
  description: 'Shop vinyl fencing from Fence Workshop. PVC privacy fence, picket fence, post-and-rail, and split-rail styles in white, tan, and gray. Ships nationwide. Call (404) 314-4419 for a quote.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does vinyl fencing last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality vinyl fencing typically lasts 20–30 years with minimal maintenance. Unlike wood, vinyl will not rot, warp, splinter, or be damaged by insects. The color is molded throughout the material rather than painted on the surface, so it will not peel or fade significantly over its lifespan. Most vinyl fence manufacturers back their products with a lifetime limited warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does vinyl fencing require painting or staining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. One of the biggest advantages of vinyl fencing is that it never needs painting, staining, or sealing. The color runs all the way through the PVC material, not just on the surface. To keep it looking fresh, an occasional rinse with a garden hose or a wipe-down with mild soap and water is all that is needed. This makes vinyl significantly less expensive to maintain than wood over its lifetime.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors is vinyl fencing available in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common vinyl fence colors are white, tan (sometimes called almond or beige), and gray. White is by far the most popular choice for privacy and picket styles. Tan blends well with natural landscapes and earthtone home exteriors. Gray is a newer option that pairs well with modern and contemporary architecture. We carry all three color options — call (404) 314-4419 or request a quote online for current availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a vinyl privacy fence and a semi-privacy fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full privacy vinyl fence uses solid panels with no gaps between the pickets, giving you complete visual privacy from neighbors and passersby. A semi-privacy fence has small gaps or a lattice top section, allowing some airflow and light while still significantly blocking the view. Full privacy panels are most common for backyard enclosures, pool surrounds, and property boundaries. Semi-privacy is popular where you want privacy without the solid-wall look.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can vinyl fencing be used around a pool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, vinyl fencing is a popular choice for pool enclosures. It is resistant to moisture, chlorine splash, and UV exposure, making it well-suited for the poolside environment. For pool barrier code compliance, the fence must typically be at least 48 inches tall with no climbable footholds — a 4ft or 5ft vinyl privacy fence generally meets this requirement, but always verify your local code with your building department. Call Fence Workshop at (404) 314-4419 for guidance on pool-compliant vinyl fence options.',
      },
    },
  ],
}

export default function VinylFencingPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vinyl-fencing.jpg"
            alt="Vinyl fencing installed on residential property"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-orange font-semibold uppercase tracking-wide mb-3 text-sm">
              Vinyl Fencing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Vinyl Fencing: Privacy, Picket &amp; Post-and-Rail
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-brand-orange mb-5 leading-snug">
              The Look of Wood — Without the Maintenance
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Fence Workshop supplies vinyl fencing (PVC fence) in privacy, semi-privacy, picket,
              post-and-rail, and split-rail styles. Ships nationwide. Installation available throughout
              Georgia. No painting, no staining, no rotting — just a beautiful fence that lasts
              20–30 years. Contact us for a written quote.
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
        </div>
      </section>

      {/* Why Vinyl Fencing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Benefits</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vinyl Fencing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Vinyl fencing — also called PVC fencing — delivers the classic look of a painted wood
              fence without the ongoing maintenance costs. Here is why homeowners and property managers
              across the country choose vinyl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Never paint, stain, or seal your fence again. Vinyl holds its color for decades — just
                rinse with a hose once a year and you are done.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">20–30 Year Lifespan</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality vinyl fencing outlasts wood by a decade or more. It will not rot, warp, splinter,
                crack, or be damaged by termites or moisture.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Classic Curb Appeal</h3>
              <p className="text-gray-600 leading-relaxed">
                White vinyl picket fences and privacy panels look clean and classic for decades. The color
                is molded through the material — it will not peel or fade like painted wood.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                Most vinyl fence manufacturers back their product with a lifetime limited warranty against
                manufacturing defects — something wood simply cannot offer.
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
              src="/images/shop-vinyl-fencing-hero.jpg"
              alt="White vinyl privacy fencing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Styles & Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold uppercase tracking-wide mb-2">Styles & Options</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vinyl Fence Styles We Supply
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We carry vinyl fencing in a full range of styles to suit residential yards, pools,
              gardens, and decorative borders. All available in white, tan (almond), and gray.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Privacy */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Privacy Fence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Solid vinyl privacy panels with no visible gaps between pickets. Available in 4ft, 5ft,
                and 6ft heights. The most popular choice for backyard enclosures, pool surrounds, and
                property line fencing where complete visual privacy is the goal. The tongue-and-groove
                picket design locks tightly together and will not gap or shift over time.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Available heights: 4ft, 5ft, 6ft</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Colors: White, Tan, Gray</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: backyards, pools, property boundaries</li>
              </ul>
            </div>

            {/* Semi-Privacy */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Semi-Privacy Fence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semi-privacy vinyl panels feature small gaps between pickets or a lattice top section
                that allows airflow and light to pass through while still significantly blocking the view.
                Popular in areas with HOA restrictions that limit fully solid fencing, or where a slightly
                lighter, airier look is preferred over a solid wall. Often used in side yards and garden
                spaces.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Available heights: 4ft, 5ft, 6ft</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Colors: White, Tan, Gray</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: side yards, gardens, HOA-compliant properties</li>
              </ul>
            </div>

            {/* Picket */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vinyl Picket Fence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The classic American picket fence — now in maintenance-free vinyl PVC. White vinyl
                picket fencing is one of the most recognizable fence styles and remains a top choice
                for front yards, garden borders, and decorative property lines. Available with flat-top
                or dog-ear picket tops, in 3ft and 4ft heights. Open-style design does not block the
                view but clearly marks the boundary of your property.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Available heights: 3ft, 4ft</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Colors: White, Tan</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: front yards, gardens, decorative borders</li>
              </ul>
            </div>

            {/* Post-and-Rail / Split-Rail */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Post-and-Rail / Split-Rail</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vinyl post-and-rail and split-rail fencing mimics the rustic look of traditional wood
                ranch or farm fencing without any of the wood maintenance. Available in 2-rail and 3-rail
                configurations. Popular for large rural properties, horse pastures, landscaping accents,
                and properties where a natural open fence line is desired. The wide, routed posts accept
                round or square rail inserts that lock securely in place.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> 2-rail and 3-rail options</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Colors: White, Tan</li>
                <li className="flex items-center gap-2"><span className="text-brand-green font-bold">✓</span> Best for: rural properties, landscaping, horse pastures</li>
              </ul>
            </div>
          </div>

          {/* Colors callout */}
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-300 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-900">White</p>
                  <p className="text-gray-600 text-sm">The most popular vinyl fence color. Clean, bright, and classic. Works with virtually every home style and exterior color.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 border-2 border-amber-200 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-900">Tan / Almond</p>
                  <p className="text-gray-600 text-sm">A warm neutral that blends naturally into landscaping and earthtone home exteriors. Less stark than white in wooded or natural settings.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-300 border-2 border-gray-400 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-900">Gray</p>
                  <p className="text-gray-600 text-sm">A modern, contemporary option that pairs well with gray or charcoal home exteriors and newer construction. Growing in popularity.</p>
                </div>
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
              How to Get a Vinyl Fence Quote
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide written quotes for vinyl fencing — no online checkout required. Here is the
              simple three-step process.
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
                Walk your property line and measure the total linear footage you need to fence. Note any
                gates, corners, or terrain changes. A rough sketch with measurements is all we need — it
                does not have to be precise to the inch. If you have a survey plat, that works too.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call or Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Reach out by phone at <a href="tel:+14043144419" className="text-brand-green font-semibold hover:underline">(404) 314-4419</a> or
                use our <Link href="/contact/" className="text-brand-green font-semibold hover:underline">online contact form</Link>.
                Tell us the style, color, height, and linear footage you are looking for, along with your
                zip code for shipping. Our team will follow up quickly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Your Written Quote</h3>
              <p className="text-gray-700 leading-relaxed">
                We will prepare a written quote that itemizes materials, shipping, and any applicable
                installation pricing if you are located in Georgia. You will know exactly what you are
                paying before you commit to anything. No surprise charges, no bait-and-switch pricing.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Ready to get started? Contact us today — we typically respond same business day.
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
              Where Vinyl Fencing Works Best
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Backyard Privacy</h3>
              <p className="text-gray-700">
                A 6ft white vinyl privacy fence is the gold standard for backyard privacy. Solid panels
                block sightlines completely. No painting required for the life of the fence.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pool Enclosures</h3>
              <p className="text-gray-700">
                Vinyl is moisture-resistant and chlorine-tolerant, making it an excellent material choice
                around pools. 4ft and 5ft privacy panels typically satisfy pool barrier code requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Front Yard Picket</h3>
              <p className="text-gray-700">
                Classic white vinyl picket fencing for front yards and garden borders. Looks freshly
                painted every year — without ever touching a paint brush.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dog Runs & Pet Yards</h3>
              <p className="text-gray-700">
                A 4ft or 5ft vinyl privacy fence keeps most dogs contained in the yard. The smooth
                surface offers no footholds for climbing, and there are no exposed nails or rough edges.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">HOA Communities</h3>
              <p className="text-gray-700">
                Many HOA communities specifically require white vinyl fencing to maintain consistent
                aesthetics across the neighborhood. Our panels meet common HOA style specifications.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rural Properties</h3>
              <p className="text-gray-700">
                Vinyl post-and-rail and split-rail styles are popular for large rural lots, horse properties,
                and agricultural land where the goal is a clean boundary marker without a maintenance burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vinyl vs Wood callout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Vinyl vs. Wood Fencing: The Real Cost Comparison</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Wood privacy fencing typically has a lower upfront material cost than vinyl, but the total
            cost of ownership over 20 years tells a different story. A wood fence requires staining or
            painting every 3–5 years, periodic board replacement as panels rot, and ongoing inspection
            for termite or moisture damage. A vinyl fence requires none of that — just an occasional rinse.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When you factor in the labor and materials for 4–6 repaint/restain cycles over the fence&apos;s
            lifetime, the total cost of maintaining a wood fence often exceeds the premium you pay upfront
            for vinyl. And at the end of its lifespan, a vinyl fence still looks presentable — a wood
            fence typically does not.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-center p-4 font-semibold">Vinyl (PVC)</th>
                  <th className="text-center p-4 font-semibold">Wood</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Typical Lifespan</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">20–30 years</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">10–15 years</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Painting / Staining Required</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Never</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Every 3–5 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Rot / Insect Damage</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Not possible</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Common over time</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Warranty</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Lifetime limited</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">None</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-200">Annual Maintenance</td>
                  <td className="p-4 text-center text-brand-green font-semibold border-b border-gray-200">Rinse with hose</td>
                  <td className="p-4 text-center text-gray-600 border-b border-gray-200">Inspect, sand, repaint</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions — Vinyl Fencing</h2>
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
            Contact Fence Workshop for a written vinyl fence quote. We ship nationwide and install
            throughout Georgia. Same-day response on most inquiries.
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

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Install Aluminum Fence Panels | Step-by-Step Guide | Fence Workshop',
  description: 'Learn how to install aluminum fence panels with this step-by-step guide from professional installers. Covers planning, post installation, panel mounting, and gate hanging.',
}

const steps = [
  {
    number: 1,
    title: 'Pre-Plan Your Fence Layout',
    content: `Every great aluminum fence project starts with a solid plan. Before ordering materials, walk your property line and determine exactly where the fence will run. Identify corners, grade changes, gates, and any obstacles like trees or utility boxes. Sketch a rough layout with measurements — this will determine how many panels, posts, and gates you need.`,
    tips: [
      'Check local building codes and HOA rules before ordering',
      'Call 811 to mark underground utilities before digging',
      'Account for grade changes — most aluminum panels can rack up to a few inches per panel',
    ],
  },
  {
    number: 2,
    title: 'Order Your Materials',
    content: `With your layout and measurements in hand, order the right components. A complete aluminum fence system includes more than just panels and posts — make sure you have everything before installation day.`,
    tips: [
      'Posts: line posts, corner posts, end posts, and gate posts (gate posts are larger)',
      'Panels with horizontal rails in your chosen style and height',
      'Hinges (typically two per gate) and latches',
      'Post caps — flat or ball style',
      'Deck mounts if installing on concrete or hard surfaces',
      'Drop rods for double-swing driveway gates',
      'Touch-up paint for any field cuts or scratches',
    ],
  },
  {
    number: 3,
    title: 'Inventory Everything on Delivery',
    content: `When your materials arrive, do a complete inventory before you start. Lay everything out and verify counts against your order. Check for shipping damage — it's much easier to resolve missing or damaged items before installation begins than after you're halfway through the project.`,
    tips: [
      'Count every panel, post, and hardware bag',
      'Inspect for dents, scratches, or bent pickets',
      'Report any issues to your supplier within 48 hours of delivery',
    ],
  },
  {
    number: 4,
    title: 'Stage Your Materials',
    content: `Lay out your materials along the fence line in roughly the order you plan to install them. This saves time and keeps the job organized. Use wooden stakes and string line to mark your exact fence path — this is your guide for post placement and ensures everything runs straight.`,
    tips: [
      'Place panels along the fence line where they will be installed',
      'Set posts next to their planned hole locations',
      'A taut string line is the most important tool for a straight fence',
    ],
  },
  {
    number: 5,
    title: 'Install Fence Posts',
    content: `Post installation is the most critical step — everything else depends on your posts being plumb, properly spaced, and secure. Dig post holes to the depth required by your local code (typically 1/3 of the total post length). Set posts in concrete, check plumb on two sides, and brace until the concrete sets. For hard surfaces like concrete patios or pool decks, use surface-mount anchor plates instead of digging.`,
    tips: [
      'Measure post spacing to match your panel width exactly',
      'Use a level on every post — check two adjacent sides',
      'Let concrete cure for at least 24 hours before hanging panels',
      'Install post caps after panels are mounted to avoid knocking them off',
    ],
  },
  {
    number: 6,
    title: 'Mount Fence Panels',
    content: `Once posts are set and cured, fence panels go up next. Most aluminum fence panels attach to posts using brackets or mounting channels — slide the panel rails into the post brackets and secure with the provided screws or fasteners. Work from one end of the fence line to the other, checking that each panel is level as you go.`,
    tips: [
      'Have a helper hold the panel while you fasten — aluminum panels are light but awkward alone',
      'Check level on every panel, not just the first one',
      'On sloped ground, rack panels by adjusting the angle within the brackets',
      'Use touch-up paint on any field cuts or drill holes to prevent oxidation',
    ],
  },
  {
    number: 7,
    title: 'Hang Gates Last',
    content: `Gates are always the final step. Hang gate panels on their hinges, adjust for proper swing clearance, and install latches. Self-closing hinges are required for pool areas in most jurisdictions. For driveway gates, install the drop rod on the stationary leaf first, then adjust the active gate for smooth operation.`,
    tips: [
      'Maintain 1–2 inches of clearance under the gate for swing',
      'Self-closing hinges are code-required for pool enclosures',
      'Test the latch from both sides before considering the job done',
      'For automated driveway gates, consult an electrician for the operator installation',
    ],
  },
]

const relatedGuides = [
  {
    title: 'How to Install a Walk Gate',
    href: '/shop/resources/how-to-install-walk-gate/',
    description: 'Detailed guide for hanging pedestrian gates with self-closing hardware.',
    comingSoon: true,
  },
  {
    title: 'How to Set Fence Posts',
    href: '/shop/resources/how-to-set-fence-posts/',
    description: 'Deep dive into post hole depth, concrete mix, bracing, and surface mounting.',
    comingSoon: true,
  },
  {
    title: 'Fence Post Layout & Spacing',
    href: '/shop/resources/fence-post-layout-spacing/',
    description: 'How to measure and mark post locations for a straight, even fence line.',
    comingSoon: true,
  },
  {
    title: 'Aluminum vs Steel Fencing',
    href: '/shop/resources/aluminum-vs-steel-fencing/',
    description: 'Compare materials, durability, cost, and maintenance to choose the right fence.',
    comingSoon: true,
  },
]

export default function HowToInstallAluminumFencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero / Page Header */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">›</span>
            <Link href="/shop/resources/how-to-install-aluminum-fence/" className="hover:text-brand-orange">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">Installation Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            How to Install Aluminum Fence Panels
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A step-by-step guide from professional fence installers with 15+ years of experience.
            Whether you&apos;re a homeowner tackling a weekend project or a contractor new to aluminum,
            this guide covers everything from planning to the final gate hang.
          </p>
        </div>
      </section>

      {/* Video Placeholder + Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aluminum Fence Installation Video */}
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              src="https://www.youtube.com/embed/MRj1qi1H8Wk?start=5"
              title="How to Install Aluminum Fence Panels — Fence Workshop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Installing an aluminum fence is one of the most approachable DIY fencing projects. The panels are
              lightweight, the hardware is straightforward, and with the right preparation, most homeowners can
              complete a standard residential fence in a weekend. Below, we break down the process into seven
              steps — the same sequence our professional crews follow on every job.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-0.5">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 ml-14">
                  {step.content}
                </p>
                <div className="ml-14 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pro Tips
                  </p>
                  <ul className="space-y-1.5">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Fence Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Shop American-made aluminum fence panels, posts, gates, and hardware — all selected
              and vetted by professional installers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop/#products"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
              >
                Shop Aluminum Fencing
              </Link>
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

      {/* Related Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Installation Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedGuides.map((guide) => (
              <div
                key={guide.title}
                className={`bg-white p-6 rounded-lg border border-gray-200 ${
                  guide.comingSoon ? 'opacity-75' : 'hover:border-brand-orange hover:shadow-md transition-all'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {guide.title}
                  {guide.comingSoon && (
                    <span className="ml-2 text-xs font-medium text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
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

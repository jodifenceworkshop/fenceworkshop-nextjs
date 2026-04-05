import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { getProductsByCategory, getProductUrl, formatPrice } from '@/lib/shopify'
import type { Metadata } from 'next'

// Category configuration
type CategoryConfig = {
  title: string
  description: string
  heading: string
  intro: string
  features: { label: string; detail: string }[]
  sections: { heading: string; body: string }[]
  faqs: { q: string; a: string }[]
}

const categories: Record<string, CategoryConfig> = {
  'driveway-gates': {
    title: 'Aluminum Driveway Gates | Double Swing Gate Kits | Fence Workshop',
    description: 'Shop American-made aluminum double driveway gates. Complete gate kits with panels, hinges, and latch hardware. Multiple styles, heights, and widths available.',
    heading: 'Aluminum Driveway Gates',
    intro: 'Our double-swing driveway gate kits include everything you need — gate panels, hinges, latch, and drop rod. American-made from 6063-T5 aluminum with TGIC powder coating for lasting durability.',
    features: [
      { label: 'Complete Kit', detail: 'Gate panels, hinges, latch, and drop rod included — no hunting for parts' },
      { label: 'American Made', detail: 'Manufactured in the USA from 6063-T5 structural aluminum' },
      { label: 'TGIC Powder Coat', detail: 'Industrial-grade finish resists fading, chipping, and corrosion' },
      { label: 'Multiple Widths', detail: 'Available in 8ft, 10ft, 12ft, 14ft, and 16ft total openings' },
    ],
    sections: [
      {
        heading: 'What\'s Included in a Driveway Gate Kit?',
        body: 'Every Fence Workshop driveway gate kit ships as a complete package. You receive two swing gate panels (sized to your opening width), two gate posts, a pair of heavy-duty self-closing hinges, a center gravity latch, and a drop rod for securing one panel in place. All hardware and posts are color-matched to your gate panels. Simply set the posts, hang the panels, and your driveway entrance is complete.',
      },
      {
        heading: 'Choosing the Right Driveway Gate Size',
        body: 'Driveway gates are measured by the total opening width — the clear distance between your two gate posts. Our most popular sizes are 10ft and 12ft openings, which accommodate standard residential driveways. For wider driveways or RV access, 14ft and 16ft options are available. Gate height matches your fence panel height (3ft, 4ft, or 5ft), creating a seamless look across your property line. Need a custom size? We build custom driveway gates for an additional charge — call (404) 314-4419 for custom pricing. If you\'re unsure which size fits your driveway, our team of professional installers can help.',
      },
      {
        heading: 'Aluminum vs. Iron Driveway Gates',
        body: 'Traditional wrought iron gates look beautiful on day one, but they require ongoing maintenance — sanding, priming, and repainting every few years to prevent rust. Our aluminum driveway gates deliver the same classic look with none of the upkeep. The 6063-T5 aluminum alloy is naturally rust-proof, and our TGIC polyester powder coating provides superior UV and weather resistance compared to standard paint. The result is a gate that looks new for decades without a single coat of paint.',
      },
    ],
    faqs: [
      { q: 'How wide should a driveway gate be?', a: 'Most residential driveways need a 10ft or 12ft total opening. Measure the clear distance between where your posts will be set. For RV or boat access, choose a 14ft or 16ft opening.' },
      { q: 'Can I order a custom-size driveway gate?', a: 'Yes. We build custom driveway gates in any size for an additional charge. Call (404) 314-4419 for custom pricing.' },
      { q: 'Do driveway gate kits include posts?', a: 'Yes. Every driveway gate kit includes two gate posts along with the gate panels, hinges, latch, and drop rod — everything you need for a complete installation.' },
      { q: 'Can aluminum driveway gates be automated?', a: 'Yes. When ordering, select the "Automation" option to get gate panels built with an oversized bottom rail designed to accept gate operator arms. This ensures a clean, factory-engineered mounting point for your automatic opener. The lightweight aluminum also puts less strain on motors compared to heavy iron or steel gates.' },
      { q: 'What maintenance do aluminum driveway gates need?', a: 'Virtually none. The TGIC powder-coated finish won\'t rust, fade, or peel. An occasional rinse with a garden hose is all that\'s needed to keep your gate looking new.' },
      { q: 'How are driveway gate kits shipped?', a: 'Gates ship nationwide via freight carrier directly to your address. Panels are carefully packaged to prevent damage in transit. Most orders ship within 5–7 business days.' },
    ],
  },
  'walk-gates': {
    title: 'Aluminum Walk Gates | Pedestrian Gate Kits | Fence Workshop',
    description: 'Shop American-made aluminum walk gates for pedestrian entry. Complete kits with gate panel, self-closing hinges, and latch. Multiple styles and sizes.',
    heading: 'Aluminum Walk Gates',
    intro: 'Pedestrian walk gate kits complete with gate panel, self-closing hinges, and gravity latch. Available in multiple styles and sizes to match your fence panels.',
    features: [
      { label: 'Self-Closing Hinges', detail: 'Spring-loaded hinges automatically close the gate behind you' },
      { label: 'Gravity Latch', detail: 'Included latch engages automatically when the gate swings shut' },
      { label: 'Style Matched', detail: 'Every walk gate matches our fence panel designs for a seamless look' },
      { label: 'Pool Code Ready', detail: 'Self-closing, self-latching design meets most local pool fence codes' },
    ],
    sections: [
      {
        heading: 'What\'s Included in a Walk Gate Kit?',
        body: 'Each walk gate kit includes a single swing gate panel, two gate posts, a pair of self-closing spring hinges, and a gravity latch. The self-closing hinges ensure the gate always returns to the closed position — a critical safety feature for pool enclosures and yards with children or pets. The gravity latch engages automatically when the gate swings shut, so you never have to worry about forgetting to latch it. All hardware and posts are color-matched to your gate panel.',
      },
      {
        heading: 'Walk Gate Sizes and How to Measure',
        body: 'Walk gates are available in standard widths of 3ft, 4ft, and 5ft. Each gate is built 1 inch narrower than its nominal width to allow exactly 1 inch of total clearance between the gate posts for hinge and latch hardware. For example, order a 4ft-wide gate and the actual gate panel measures 47 inches, designed to fit a 48-inch rough opening between posts. Height options match our fence panels at 3ft, 4ft, and 5ft. For most pedestrian entries, a 4ft-wide gate provides comfortable access. If you need to move lawn equipment or wheelbarrows through the gate, consider a 5ft-wide panel. Need a custom size? We build custom walk gates for an additional charge — call (404) 314-4419 for custom pricing.',
      },
      {
        heading: 'Pool Fence Gate Requirements',
        body: 'Most local building codes require pool enclosure gates to be self-closing and self-latching with the latch positioned at least 54 inches from the ground on the pool side. Our walk gate kits include self-closing hinges, but for pool code compliance you\'ll need to upgrade to a MagnaLatch — a key-lockable, magnetic gate latch specifically designed to meet pool barrier codes. We carry the D&D Series 3 MagnaLatch in our accessories section. See our pool code aluminum fence guide for the full list of styles and heights that meet typical pool barrier requirements, including the 45-inch rail spacing rule. Always check your local code requirements before installation, and feel free to call us at (404) 314-4419 if you need help with pool fence compliance.',
      },
    ],
    faqs: [
      { q: 'Are walk gates self-closing?', a: 'Yes. Every walk gate kit includes spring-loaded self-closing hinges that automatically return the gate to the closed position.' },
      { q: 'Do walk gates meet pool code requirements?', a: 'Walk gate kits include self-closing hinges, which is one requirement. For full pool code compliance, you\'ll also need a MagnaLatch — a key-lockable magnetic latch that mounts at least 54 inches from the ground. We carry the D&D Series 3 MagnaLatch in our accessories section.' },
      { q: 'Can I match my walk gate to my fence panels?', a: 'Absolutely. Every fence style we carry has a matching walk gate in the same design, height options, and color choices.' },
      { q: 'What width walk gate should I choose?', a: 'A 4ft gate works well for standard pedestrian access. Choose 5ft if you need to move lawn equipment, strollers, or wheelchairs through the opening. Keep in mind that gates are built 1 inch narrower than the nominal width — a 4ft gate actually measures 47 inches to fit a 48-inch rough opening between posts.' },
      { q: 'Can I order a custom-size walk gate?', a: 'Yes. We build custom walk gates in any size for an additional charge. Call (404) 314-4419 for custom pricing.' },
      { q: 'Do walk gate kits include posts?', a: 'Yes. Every walk gate kit includes two gate posts along with the gate panel, self-closing hinges, and gravity latch — everything you need for installation.' },
    ],
  },
  'aluminum-fencing': {
    title: 'Aluminum Fence Panels | Residential & Commercial Fencing | Fence Workshop',
    description: 'Shop American-made aluminum fence panels in multiple styles and heights. Professional-grade 6063-T5 aluminum with TGIC powder coating. Ships nationwide.',
    heading: 'Aluminum Fence Panels',
    intro: 'Professional-grade aluminum fence panels manufactured from 6063-T5 aluminum with TGIC polyester powder coating. Choose from over a dozen styles in 3ft, 4ft, and 5ft heights.',
    features: [
      { label: '6063-T5 Aluminum', detail: 'Structural-grade alloy that won\'t rust, rot, or warp — ever' },
      { label: 'TGIC Powder Coating', detail: 'Industrial finish rated for UV resistance, corrosion, and impact' },
      { label: 'Multiple Styles', detail: 'Flat-top, spear-top, and staggered designs for every aesthetic' },
      { label: 'Standard 6ft Sections', detail: 'Each panel spans 6 feet between posts for efficient coverage' },
    ],
    sections: [
      {
        heading: 'Why Choose Aluminum Fencing?',
        body: 'Aluminum fencing gives you the elegant look of traditional wrought iron without any of the maintenance. Unlike iron or steel, aluminum doesn\'t rust — period. There\'s no sanding, priming, or repainting. Our 6063-T5 aluminum alloy provides excellent structural strength while remaining lightweight enough for easy installation. The TGIC polyester powder coating adds an additional layer of protection against UV fading, scratching, and environmental exposure, keeping your fence looking factory-new for decades.',
      },
      {
        heading: 'Residential vs. Commercial Grade Aluminum Fence',
        body: 'We carry aluminum fence panels in both residential and commercial grades. Residential-grade panels use 5/8-inch pickets and 1-inch rails — ideal for property boundaries, garden enclosures, and decorative applications. Commercial-grade panels feature thicker 3/4-inch pickets and 1.5-inch rails for added strength and security, making them suitable for pool enclosures, HOA communities, and commercial properties. Both grades are available in multiple styles and heights.',
      },
      {
        heading: 'Choosing the Right Fence Height',
        body: 'Our aluminum fence panels are available in three standard heights: 3ft, 4ft, and 5ft. A 3ft fence works well for garden borders and decorative property lines. The 4ft height is our most popular — it defines your property while maintaining an open, welcoming feel. Choose 5ft for added privacy and security, pool enclosures (check local code for minimum height requirements), or anywhere you need a more substantial barrier. All heights use standard 6ft-wide sections, and the panels can easily be cut down on-site with a standard hacksaw or miter saw for custom widths — ideal for finishing out a run, fitting tight spaces, or adjusting around obstacles.',
      },
      {
        heading: 'Aluminum Fence Styles Explained',
        body: 'Our fence panels come in three main design categories. Flat-top styles have level picket tops for a clean, modern look — popular in contemporary homes and commercial settings. Spear-top (or pointed-top) styles feature traditional finial points for a classic wrought-iron appearance and added security. Staggered-top designs alternate picket heights for a distinctive, elegant profile. Within each category, you\'ll find variations in picket spacing, rail design, and decorative elements to match your property\'s architecture. Shopping for a specific use case? See our pool code aluminum fence guide for pool barrier compliance, or our pet fence guide for styles with tighter picket spacing to contain small dogs, puppies, and cats.',
      },
    ],
    faqs: [
      { q: 'How long do aluminum fence panels last?', a: 'With virtually zero maintenance, aluminum fence panels typically last 30+ years. The aluminum won\'t rust and the TGIC powder coating resists fading and peeling far longer than paint.' },
      { q: 'How wide is each fence panel?', a: 'Each panel spans 6 feet between posts. This is the standard width used across the aluminum fencing industry and makes layout and installation straightforward. Panels can easily be cut down on-site with a hacksaw or miter saw for custom widths.' },
      { q: 'Can aluminum fence panels be cut to a custom width?', a: 'Yes. Our 6ft panels can be cut down on-site using a standard hacksaw or miter saw. This is useful for finishing the end of a run, fitting between tight obstacles, or adjusting around existing landscaping.' },
      { q: 'Can aluminum fencing be installed on a slope?', a: 'Yes. Aluminum fence panels can be "racked" (angled) to follow the slope of your yard. Most of our panels rack up to a certain degree without modification. For steep slopes, stair-stepping panels is another common approach.' },
      { q: 'Is aluminum fencing strong enough for security?', a: 'Commercial-grade aluminum panels with 3/4-inch pickets provide excellent security. The aluminum alloy is strong enough that pickets cannot be easily bent or broken. Spear-top styles add additional deterrence.' },
      { q: 'What colors are available?', a: 'Our aluminum fence panels are available in Black, Bronze, and White. All colors use the same TGIC powder coating process for consistent durability.' },
    ],
  },
  'fence-posts': {
    title: 'Aluminum Fence Posts | Line, Corner & Gate Posts | Fence Workshop',
    description: 'Shop aluminum fence posts — line posts, corner posts, end posts, T-posts, and gate posts. Color-matched to your fence panels. Ships nationwide.',
    heading: 'Aluminum Fence Posts',
    intro: 'Color-matched aluminum fence posts available in every post type — line, corner, end, T-post, and blank. Gate posts are also available for walk gate and driveway gate installations.',
    features: [
      { label: 'Color Matched', detail: 'Posts powder-coated to match your fence panels in Black, Bronze, or White' },
      { label: 'Every Post Type', detail: 'Line, corner, end, T-post, blank, and gate posts all available' },
      { label: 'Pre-Routed Options', detail: 'Posts come with pre-punched holes for fast, accurate panel mounting' },
      { label: 'Heavy-Duty Gate Posts', detail: 'Thicker-walled gate posts engineered to support walk and driveway gates' },
    ],
    sections: [
      {
        heading: 'Types of Aluminum Fence Posts',
        body: 'Choosing the right post type is essential for a professional-looking fence installation. Line posts are used between panels along straight runs. End posts terminate a fence run at the end of a line. Corner posts connect two panels at a 90-degree angle. T-posts (or tee posts) connect three panels in a T-shaped junction. Blank posts have no pre-routed holes and are used for custom applications. Gate posts are built with thicker walls and reinforced construction to handle the weight and stress of a swinging gate.',
      },
      {
        heading: 'How to Determine Which Posts You Need',
        body: 'Start by sketching your fence layout. Count the number of straight runs, corners, ends, and gate openings. Each straight run needs line posts spaced every 6 feet (matching your panel width). Each corner gets a corner post. Each fence termination point gets an end post. Each gate needs two gate posts — one for hinges, one for the latch. Add one post to your count as a spare, and you have your shopping list. If you need help planning your layout, our team of professional fence installers can walk you through it — call (404) 314-4419.',
      },
      {
        heading: 'Setting Fence Posts: Concrete vs. Deck Mounts',
        body: 'The most common installation method is setting posts in concrete footings. Dig a hole approximately 3 times the post width and one-third the total post length deep (plus 6 inches for gravel drainage). Set the post plumb, fill with concrete, and allow it to cure before attaching panels. For installations on existing concrete pads, decks, or other hard surfaces, use our deck-mount bases — they bolt directly to the surface and accept standard fence posts without any digging.',
      },
    ],
    faqs: [
      { q: 'What\'s the difference between a line post and an end post?', a: 'A line post has pre-routed holes on two opposite sides for connecting panels in a straight run. An end post has holes on only one side because it terminates the fence line.' },
      { q: 'How deep should fence posts be set?', a: 'A general rule is to bury one-third of the total post length. For a typical 7ft post (supporting a 4ft fence), dig a 30-inch hole with 6 inches of gravel at the bottom for drainage.' },
      { q: 'Do I need special posts for gates?', a: 'Yes. Gate posts have thicker walls and are engineered to handle the weight and repeated stress of a swinging gate. Using standard line posts for gates can result in sagging and misalignment over time.' },
      { q: 'Are posts color-matched to fence panels?', a: 'Yes. All of our posts are powder-coated using the same TGIC process as our panels, ensuring a perfect color match in Black, Bronze, and White.' },
      { q: 'How many posts do I need?', a: 'For straight runs, you need one post every 6 feet (one per panel) plus one additional post at the end. Add corner posts, end posts, and two gate posts per gate opening. Call us for a free layout consultation.' },
    ],
  },
  'accessories': {
    title: 'Fence Hardware & Accessories | Hinges, Latches & More | Fence Workshop',
    description: 'Shop aluminum fence accessories — gate hinges, latches, drop rods, post caps, deck mounts, decorative finials, and more. Everything you need to complete your fence project.',
    heading: 'Fence Hardware & Accessories',
    intro: 'Everything you need to complete your fence installation — gate latches, self-closing hinges, drop rods, post caps, deck mounts, and decorative accessories.',
    features: [
      { label: 'Gate Hardware', detail: 'Self-closing hinges, gravity latches, magna-latches, and drop rods' },
      { label: 'Post Accessories', detail: 'Post caps, deck-mount bases, and wall-mount brackets' },
      { label: 'Mounting Hardware', detail: 'Self-tapping screws and fasteners designed for aluminum fence' },
      { label: 'Professional Grade', detail: 'Same commercial-quality hardware used by professional installers' },
    ],
    sections: [
      {
        heading: 'Gate Hardware: Hinges, Latches, and Drop Rods',
        body: 'Gate hardware is what makes your gate function properly and securely. Self-closing hinges use an internal spring mechanism to automatically return the gate to the closed position — essential for pool code compliance and convenient for everyday use. Gravity latches engage when the gate swings shut, providing secure closure without manual latching. For driveway gates, a drop rod secures one gate panel to the ground while the latch secures the other. Magna-latches provide enhanced security with a magnetic, key-lockable latch system.',
      },
      {
        heading: 'Post Caps and Decorative Finials',
        body: 'Post caps serve both a functional and decorative purpose. They cover the open top of your fence posts to prevent water infiltration, debris accumulation, and insect nesting. Beyond protection, post caps add a finished, polished appearance to your fence. Choose from flat caps for a clean modern look or decorative finial-style caps for a more traditional appearance. All of our post caps are designed to friction-fit onto standard aluminum fence posts for tool-free installation.',
      },
      {
        heading: 'Deck Mounts and Wall Mounts',
        body: 'Deck-mount bases allow you to install fence posts on existing hard surfaces — concrete patios, wooden decks, brick walls, and more — without digging post holes. The base plate bolts to the surface, and the post slides into the mount. Wall-mount brackets serve a similar purpose for attaching fence panels directly to an existing wall or structure. Both mounting options are ideal for rooftop installations, pool deck enclosures, and any location where traditional in-ground post setting isn\'t possible.',
      },
    ],
    faqs: [
      { q: 'What hinges do I need for a walk gate?', a: 'Walk gates use self-closing spring hinges that automatically return the gate to the closed position. Each walk gate kit includes a pair, but replacements are available individually.' },
      { q: 'What\'s the difference between a gravity latch and a magna-latch?', a: 'A gravity latch uses its own weight to drop into the locked position when the gate closes — simple and reliable. A magna-latch uses a powerful magnet for positive closure and includes a key lock for added security.' },
      { q: 'Do I need a drop rod for a driveway gate?', a: 'Yes. On a double-swing driveway gate, the drop rod secures one panel (the "stationary" side) to the ground. The other panel latches to it. Driveway gate kits include a drop rod.' },
      { q: 'Can I mount fence posts on a concrete slab?', a: 'Yes — use our deck-mount bases. They bolt directly to concrete, wood, or composite surfaces and accept standard fence posts. No digging required.' },
      { q: 'What screws should I use for aluminum fence?', a: 'Use our self-tapping post screws, which are specifically designed for aluminum fence installation. They create their own pilot hole and provide a secure hold without cracking or splitting the aluminum.' },
    ],
  },
}

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const cat = categories[category]
  if (!cat) return { title: 'Shop | Fence Workshop' }
  return { title: cat.title, description: cat.description }
}

export const revalidate = 60

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const cat = categories[category]

  if (!cat) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="h-20" />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/shop/" className="text-brand-orange hover:underline">Back to Shop</Link>
        </div>
      </main>
    )
  }

  const products = await getProductsByCategory(category)

  // FAQ structured data for Google rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cat.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Category Header */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-300">{cat.heading}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {cat.heading}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {cat.intro}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">No products found in this category yet.</p>
              <Link href="/shop/" className="text-brand-orange hover:underline mt-2 inline-block">Back to Shop</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const image = product.images.edges[0]?.node
                const url = getProductUrl(product)
                const minPrice = product.priceRange.minVariantPrice
                const maxPrice = product.priceRange.maxVariantPrice
                const samePrice = minPrice.amount === maxPrice.amount

                return (
                  <Link
                    key={product.id}
                    href={url}
                    className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square relative bg-gray-100">
                      {image && (
                        <Image
                          src={image.url}
                          alt={image.altText || product.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="text-sm font-semibold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                        {product.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-gray-700">
                        {samePrice
                          ? formatPrice(minPrice)
                          : `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cat.features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/10 mb-4">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-600">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cat.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            {cat.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                <dt className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</dt>
                <dd className="text-gray-700 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Help With Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of professional fence installers has been helping homeowners and contractors across the country since 2008. We can help you choose the right products, plan your layout, and answer any installation questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14043144419"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (404) 314-4419
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get A Free Quote
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
              </ul>
            </div>
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

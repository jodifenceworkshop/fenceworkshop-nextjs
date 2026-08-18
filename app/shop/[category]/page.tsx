import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProductsByCategory, getProductUrl, formatPrice } from '@/lib/shopify'
import type { Metadata } from 'next'

// Category configuration
type CategoryConfig = {
  title: string
  description: string
  heading: string
  intro: string
  features: { label: string; detail: string }[]
  sections: { heading: string; body: React.ReactNode }[]
  faqs: { q: string; a: React.ReactNode; aSchema?: string }[]
}

const categories: Record<string, CategoryConfig> = {
  'driveway-gates': {
    title: 'Aluminum Driveway Gate Kits | Wrought Iron Style Gates | Ships Nationwide',
    description: 'Shop aluminum driveway gate kits — wrought iron style double-swing entry gates in black and custom sizes. American-made, ships nationwide. Gate kits start at $985.16.',
    heading: 'Aluminum Driveway Gates for Sale',
    intro: 'Shop aluminum driveway gate kits for sale at wholesale pricing — double-swing entry gates in black and custom sizes, American-made from 6063-T5 aluminum with TGIC powder coating. Standard sizes ship within 5–7 business days.',
    features: [
      { label: 'Complete Kit', detail: 'Gate panels, hinges, latch, and drop rod included — no hunting for parts' },
      { label: 'Black & Custom Sizes', detail: 'Black aluminum driveway gates in stock; custom sizes built to order' },
      { label: 'TGIC Powder Coat', detail: 'Industrial-grade finish resists fading, chipping, and corrosion' },
      { label: 'Multiple Widths', detail: 'Standard 8ft–16ft openings; custom widths available' },
    ],
    sections: [
      {
        heading: 'What\'s Included in a Driveway Gate Kit?',
        body: <>Every driveway gate kit ships as a complete package — two double-swing gate panels sized to your opening width, two gate posts, a pair of heavy-duty self-closing hinges, a center gravity latch, and a drop rod for securing one panel in place. All hardware and posts are color-matched to your gate panels. Pair your gate with our <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link> for a complete, matched entry system.</>,
      },
      {
        heading: 'Standard Sizes, 16ft Gates & Custom Aluminum Driveway Gates',
        body: 'Driveway gates are measured by the total opening width — the clear distance between your two gate posts. Standard sizes run from 8ft to 16ft total openings. Our 10ft and 12ft gates fit most residential driveways; 14ft and 16ft aluminum driveway gates accommodate RV access, boat storage, and wider commercial entries. Need something outside standard sizing? We build custom aluminum driveway gates in any width — call (404) 314-4419 for custom pricing and lead times.',
      },
      {
        heading: 'Black Aluminum Driveway Gates',
        body: <>Black aluminum driveway gates are our most popular option — the finish delivers a classic wrought-iron look that works with virtually any home style, fence design, or landscape. Black is available across all standard sizes and most custom sizes, and holds up far better than painted iron over time. Available in both standard and automation-ready configurations. We also carry <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">matching black aluminum fence panels</Link> so your full entry system looks cohesive.</>,
      },
      {
        heading: 'Aluminum vs. Iron Driveway Gates',
        body: 'Traditional wrought iron gates look beautiful on day one, but they require ongoing maintenance — sanding, priming, and repainting every few years to prevent rust. Our aluminum entry gates deliver the same classic look with none of the upkeep. The 6063-T5 aluminum alloy is naturally rust-proof, and our TGIC polyester powder coating provides superior UV and weather resistance compared to standard paint. The result is a gate that looks new for decades without a single coat of paint.',
      },
    ],
    faqs: [
      { q: 'How much do aluminum driveway gates cost?', a: 'Aluminum driveway gate kits start at $985.16 for standard sizes in black. Larger openings, custom sizes, and automation-ready configurations are priced higher. Call (404) 314-4419 or shop above for current pricing on specific sizes and styles.' },
      { q: 'Do you sell black aluminum driveway gates?', a: 'Yes — black aluminum driveway gates are our most popular color and are available in all standard widths from 8ft to 16ft. Black is available in both standard and automation-ready configurations and ships within 5–7 business days for standard sizes.' },
      { q: 'Do you sell custom aluminum driveway gates?', a: 'Yes. We build custom aluminum driveway gates in any size — including widths beyond our standard 16ft maximum. Custom gates are fabricated to your exact opening width and height. Call (404) 314-4419 for custom sizing, pricing, and lead times.' },
      { q: 'Do you sell 16ft aluminum driveway gates?', a: 'Yes. Our 16ft aluminum driveway gate kits are a standard size — no custom order required. They\'re a popular choice for RV access, boat storage, and wide residential or commercial entries. Shop the full selection above.' },
      { q: 'How wide should a driveway gate be?', a: 'Most residential driveways need a 10ft or 12ft total opening. Measure the clear distance between where your posts will be set. For RV, boat, or commercial vehicle access, choose a 14ft or 16ft opening.' },
      { q: 'Do driveway gate kits include posts?', a: 'Yes. Every driveway gate kit includes two gate posts along with the gate panels, hinges, latch, and drop rod — everything you need for a complete installation.' },
      { q: 'Can aluminum driveway gates be automated?', a: 'Yes. When ordering, select the "Automation" option to get gate panels built with an oversized bottom rail designed to accept gate operator arms. This ensures a clean, factory-engineered mounting point for your automatic opener. The lightweight aluminum also puts less strain on motors compared to heavy iron or steel gates.' },
      { q: 'What maintenance do aluminum driveway gates need?', a: 'Virtually none. The TGIC powder-coated finish won\'t rust, fade, or peel. An occasional rinse with a garden hose is all that\'s needed to keep your gate looking new.' },
      { q: 'Do you sell wrought iron driveway gates?', a: 'We don\'t sell traditional wrought iron driveway gates — but our black aluminum driveway gate kits deliver the same classic wrought iron look without the rust or repainting. Aluminum is naturally rust-free, and the TGIC powder coating outlasts painted iron by decades. If you\'ve been searching for wrought iron gates or rod iron gates for sale, black aluminum is the alternative most homeowners and landscapers choose today. Gate kits start at $985.16 and ship within 5–7 business days for standard sizes.' },
    ],
  },
  'walk-gates': {
    title: 'Aluminum Walk Gate Kits | Self-Closing Pool Fence Gates | Ships Nationwide',
    description: 'Shop aluminum walk gate kits — self-closing pool fence gates and pedestrian gate kits with gate panel, posts, hinges, and latch. American-made, ships nationwide.',
    heading: 'Aluminum Walk Gates for Sale',
    intro: 'Self-closing aluminum walk gate kits with gate panel, gate posts, spring hinges, and gravity latch. Pool fence gates available with MagnaLatch upgrade for full pool barrier code compliance. Multiple styles and sizes to match your fence panels.',
    features: [
      { label: 'Self-Closing Hinges', detail: 'Spring-loaded hinges automatically return the gate to the closed position' },
      { label: 'Self-Latching Design', detail: 'Gravity latch engages automatically when the gate swings shut' },
      { label: 'Pool Code Ready', detail: 'Add MagnaLatch upgrade for full pool barrier code compliance' },
      { label: 'Style Matched', detail: 'Every walk gate matches our fence panel designs for a seamless look' },
    ],
    sections: [
      {
        heading: 'What\'s Included in a Walk Gate Kit?',
        body: <>Each walk gate kit includes a single swing gate panel, two gate posts, a pair of self-closing spring hinges, and a gravity latch. The self-closing hinges ensure the gate always returns to the closed position — a critical safety feature for pool enclosures and yards with children or pets. The gravity latch engages automatically when the gate swings shut, so you never have to worry about forgetting to latch it. All hardware and posts are color-matched to your gate panel. For pool code compliance, add the <Link href="/shop/accessories/" className="text-brand-orange hover:underline">D&amp;D Series 3 MagnaLatch from our accessories section</Link> — a magnetic, key-lockable latch specifically designed to meet pool barrier requirements.</>,
      },
      {
        heading: 'Self-Closing Pool Fence Gates',
        body: <>Pool gates have stricter requirements than standard pedestrian gates — they must be self-closing, self-latching, and have the latch positioned so it cannot be reached by a small child. Our walk gate kits are self-closing by default. For full pool barrier compliance, upgrade to the <Link href="/shop/accessories/" className="text-brand-orange hover:underline">D&amp;D Series 3 MagnaLatch</Link> — a magnetic gate latch with a key lock that mounts at the top of the gate, well above a child&apos;s reach. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for the full list of compliant fence styles, rail heights, and picket spacing requirements. Always verify specific height and latch placement requirements with your local building department before installation.</>,
      },
      {
        heading: 'Walk Gate Sizes and How to Measure',
        body: <>Walk gates are available in standard widths of 3ft, 4ft, and 5ft. Each gate is built 1 inch narrower than its nominal width to allow exactly 1 inch of total clearance between the gate posts for hinge and latch hardware. For example, order a 4ft-wide gate and the actual gate panel measures 47 inches, designed to fit a 48-inch rough opening between posts. Height options match our fence panels at 3ft, 4ft, and 5ft. For most pedestrian entries, a 4ft-wide gate provides comfortable access. If you need to move lawn equipment or wheelbarrows through the gate, consider a 5ft-wide panel. Pair your walk gate with matching <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link> for a complete, cohesive system. Need a custom size? We build custom walk gates for an additional charge — call (404) 314-4419 for custom pricing.</>,
      },
    ],
    faqs: [
      {
        q: 'Do you sell self-closing pool gates?',
        aSchema: 'Yes. Our walk gate kits include self-closing spring hinges that automatically close the gate. For full pool barrier code compliance, add the D&D Series 3 MagnaLatch — a magnetic, key-lockable latch designed to meet pool code height and security requirements. See our pool code aluminum fence guide for compliant styles and heights.',
        a: <>Yes. Our walk gate kits include self-closing spring hinges that automatically close the gate. For full pool barrier code compliance, add the <Link href="/shop/accessories/" className="text-brand-orange hover:underline">D&amp;D Series 3 MagnaLatch</Link> — a magnetic, key-lockable latch designed to meet pool code height and security requirements. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for compliant styles and heights.</>,
      },
      {
        q: 'What is a self-latching pool gate?',
        a: 'A self-latching gate uses a latch that engages automatically when the gate swings shut — no manual latching required. Pool codes require self-latching gates to prevent unsupervised pool access. Our walk gates include a gravity latch, which is self-latching. For full pool code compliance, upgrade to a MagnaLatch for key-lockable security and code-compliant latch placement at the top of the gate.',
      },
      { q: 'Are walk gates self-closing?', a: 'Yes. Every walk gate kit includes spring-loaded self-closing hinges that automatically return the gate to the closed position.' },
      {
        q: 'Do walk gates meet pool code requirements?',
        aSchema: "Walk gate kits include self-closing hinges, which satisfies one pool code requirement. For full compliance, you'll also need a MagnaLatch — a key-lockable magnetic latch that mounts at least 54 inches from the ground on the pool side. Always verify specific requirements with your local building department.",
        a: <>Walk gate kits include self-closing hinges, which satisfies one pool code requirement. For full compliance, you&apos;ll also need a <Link href="/shop/accessories/" className="text-brand-orange hover:underline">MagnaLatch</Link> — a key-lockable magnetic latch that mounts at least 54 inches from the ground on the pool side. Always verify specific requirements with your local building department.</>,
      },
      { q: 'Can I match my walk gate to my fence panels?', a: 'Absolutely. Every fence style we carry has a matching walk gate in the same design, height options, and color choices.' },
      { q: 'What width walk gate should I choose?', a: 'A 4ft gate works well for standard pedestrian access. Choose 5ft if you need to move lawn equipment, strollers, or wheelchairs through the opening. Keep in mind that gates are built 1 inch narrower than the nominal width — a 4ft gate actually measures 47 inches to fit a 48-inch rough opening between posts.' },
      { q: 'Can I order a custom-size walk gate?', a: 'Yes. We build custom walk gates in any size for an additional charge. Call (404) 314-4419 for custom pricing.' },
      { q: 'Do walk gate kits include posts?', a: 'Yes. Every walk gate kit includes two gate posts along with the gate panel, self-closing hinges, and gravity latch — everything you need for installation.' },
      { q: 'Do you sell wrought iron walk gates or iron gates?', a: 'We don\'t sell traditional wrought iron walk gates — but our black aluminum walk gate kits deliver the same classic iron gate look with no rust and no repainting. If you\'ve been searching for iron gates near me and can\'t find the right style locally, we ship aluminum walk gate kits nationwide. Black aluminum gates have replaced wrought iron as the standard for residential and commercial pedestrian entries.' },
    ],
  },
  'aluminum-fencing': {
    title: 'Buy Aluminum Fence Panels | Wholesale Pricing | Ships Nationwide',
    description: 'Residential aluminum fence panels for sale at wholesale pricing. American-made 6063-T5 aluminum in black, bronze, and white. Multiple styles and heights. Ships nationwide.',
    heading: 'Aluminum Fencing & Fence Panels',
    intro: 'Shop residential aluminum fence panels for sale at wholesale pricing. American-made from 6063-T5 aluminum with TGIC polyester powder coating — available in black, bronze, and white in over a dozen styles and three heights.',
    features: [
      { label: '6063-T5 Aluminum', detail: 'Structural-grade alloy that won\'t rust, rot, or warp — ever' },
      { label: 'TGIC Powder Coating', detail: 'Industrial finish rated for UV resistance, corrosion, and impact' },
      { label: 'Multiple Styles', detail: 'Flat-top, spear-top, and staggered designs for every aesthetic' },
      { label: 'Standard 6ft Sections', detail: 'Each panel spans 6 feet between posts for efficient coverage' },
    ],
    sections: [
      {
        heading: 'Why Choose Aluminum Fencing?',
        body: <>Aluminum fencing gives you the elegant look of traditional wrought iron without any of the maintenance. Unlike iron or steel, aluminum doesn&apos;t rust — period. There&apos;s no sanding, priming, or repainting. Our 6063-T5 aluminum alloy provides excellent structural strength while remaining lightweight enough for easy installation. The TGIC polyester powder coating adds an additional layer of protection against UV fading, scratching, and environmental exposure, keeping your fence looking factory-new for decades. Not sure whether aluminum or steel is right for your project? See our <Link href="/shop/resources/aluminum-vs-steel-fencing/" className="text-brand-orange hover:underline">aluminum vs. steel fencing comparison</Link> for a full breakdown.</>,
      },
      {
        heading: 'Residential vs. Commercial Grade Aluminum Fence',
        body: <>We carry aluminum fence panels in both residential and commercial grades. Residential-grade panels use 5/8-inch pickets and 1-inch rails — ideal for property boundaries, garden enclosures, and decorative applications. Commercial-grade panels feature thicker 3/4-inch pickets and 1.5-inch rails for added strength and security, making them suitable for pool enclosures, HOA communities, and commercial properties. Both grades are available in multiple styles and heights. Need help choosing? Read our <Link href="/shop/resources/residential-vs-commercial-aluminum-fence/" className="text-brand-orange hover:underline">residential vs. commercial aluminum fence guide</Link>.</>,
      },
      {
        heading: 'Choosing the Right Fence Height',
        body: 'Our aluminum fence panels are available in three standard heights: 3ft, 4ft, and 5ft. A 3ft fence works well for garden borders and decorative property lines. The 4ft height is our most popular — it defines your property while maintaining an open, welcoming feel. Choose 5ft for added privacy and security, pool enclosures (check local code for minimum height requirements), or anywhere you need a more substantial barrier. All heights use standard 6ft-wide sections, and the panels can easily be cut down on-site with a standard hacksaw or miter saw for custom widths — ideal for finishing out a run, fitting tight spaces, or adjusting around obstacles.',
      },
      {
        heading: 'Aluminum Fence Styles Explained',
        body: <>Our fence panels come in three main design categories. Flat-top styles have level picket tops for a clean, modern look — popular in contemporary homes and commercial settings. Spear-top (or pointed-top) styles feature traditional finial points for a classic wrought-iron appearance and added security. Staggered-top designs alternate picket heights for a distinctive, elegant profile. Within each category, you&apos;ll find variations in picket spacing, rail design, and decorative elements to match your property&apos;s architecture. Shopping for a specific use case? See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for pool barrier compliance, or our <Link href="/shop/resources/pet-fence/" className="text-brand-orange hover:underline">pet fence guide</Link> for styles with tighter picket spacing to contain small dogs, puppies, and cats.</>,
      },
    ],
    faqs: [
      { q: 'How much do aluminum fence panels cost?', aSchema: 'Aluminum fence panels start at $80.35 per panel for quick-ship styles — smooth-top 2-rail and smooth-top 3-rail designs in black at 4ft and 5ft heights. More complex designs including spear-top, puppy picket, and double picket styles are made to order and ship within 2 weeks. Bronze or white aluminum and custom sizes typically take 3 weeks. Commercial-grade aluminum fencing ships in 2–3 weeks. Aluminum fence kits (panels, posts, walk gate, and hardware) start at $2,693.59.', a: <>Aluminum fence panels start at $80.35 per panel for our quick-ship styles — smooth-top 2-rail and smooth-top 3-rail designs in black at 4ft and 5ft heights. These are our most popular and most affordable options, and they ship the fastest. More complex designs — including spear-top, puppy picket, and double picket styles — are made to order and priced higher to reflect the additional fabrication; most ship within 2 weeks. Bronze or white aluminum and custom sizes typically take 3 weeks. Commercial-grade aluminum fencing ships in 2–3 weeks. If you want everything for your project in one order, our <Link href="/shop/fence-kits/" className="text-brand-orange hover:underline">aluminum fence kits</Link> start at $2,693.59 and include panels, <Link href="/shop/fence-posts/" className="text-brand-orange hover:underline">posts</Link>, a <Link href="/shop/walk-gates/" className="text-brand-orange hover:underline">walk gate</Link>, and <Link href="/shop/accessories/" className="text-brand-orange hover:underline">hardware accessories</Link> — everything sized for your total footage.</> },
      { q: 'How long do aluminum fence panels last?', a: 'With virtually zero maintenance, aluminum fence panels typically last 30+ years. The aluminum won\'t rust and the TGIC powder coating resists fading and peeling far longer than paint.' },
      { q: 'How wide is each fence panel?', a: 'Each panel spans 6 feet between posts. This is the standard width used across the aluminum fencing industry and makes layout and installation straightforward. Panels can easily be cut down on-site with a hacksaw or miter saw for custom widths.' },
      { q: 'Can aluminum fence panels be cut to a custom width?', a: 'Yes. Our 6ft panels can be cut down on-site using a standard hacksaw or miter saw. This is useful for finishing the end of a run, fitting between tight obstacles, or adjusting around existing landscaping.' },
      { q: 'Can aluminum fencing be installed on a slope?', a: 'Yes. Aluminum fence panels can be "racked" (angled) to follow the slope of your yard. Most of our panels rack up to a certain degree without modification. For steep slopes, stair-stepping panels is another common approach.' },
      { q: 'Is aluminum fencing strong enough for security?', a: 'Commercial-grade aluminum panels with 3/4-inch pickets provide excellent security. The aluminum alloy is strong enough that pickets cannot be easily bent or broken. Spear-top styles add additional deterrence.' },
      { q: 'What colors are available?', a: 'Our aluminum fence panels are available in three colors: Black, Bronze, and White. Black aluminum fence panels are our most popular — they deliver a classic wrought-iron look that suits virtually any home or landscape. Bronze aluminum fence panels offer a warm, traditional appearance. White aluminum fence panels are a clean, bright option popular for pool enclosures and coastal properties. All three colors use the same TGIC powder coating process for consistent, long-lasting durability.' },
      { q: 'Do you sell wrought iron fence panels?', a: 'We don\'t sell traditional wrought iron fence panels — but our black aluminum fence panels deliver the same classic wrought iron look without any maintenance. Wrought iron fence panels require periodic painting and rust treatment; aluminum is rust-free and holds its powder-coat finish for decades. If you\'ve been searching for wrought iron fence panels or iron fence panels for sale, our aluminum panels are the modern industry-standard alternative. Panels start at $80.35 and ship nationwide.' },
    ],
  },
  'fence-posts': {
    title: 'Aluminum Fence Posts for Sale | Line, Corner & Gate Posts | Ships Nationwide',
    description: 'Buy aluminum fence posts online — line posts, corner posts, end posts, T-posts, and gate posts. Color-matched to your fence panels in black, bronze, and white. Ships nationwide.',
    heading: 'Aluminum Fence Posts for Sale',
    intro: 'Color-matched aluminum fence posts available in every post type — line, corner, end, T-post, and blank. Gate posts available for walk gate and driveway gate installations. All posts powder-coated to match your fence panels in black, bronze, and white.',
    features: [
      { label: 'Color Matched', detail: 'Posts powder-coated to match your fence panels in Black, Bronze, or White' },
      { label: 'Every Post Type', detail: 'Line, corner, end, T-post, blank, and gate posts all available' },
      { label: 'Pre-Routed Options', detail: 'Posts come with pre-punched holes for fast, accurate panel mounting' },
      { label: 'Heavy-Duty Gate Posts', detail: 'Thicker-walled gate posts engineered to support walk and driveway gates' },
    ],
    sections: [
      {
        heading: 'Types of Aluminum Fence Posts',
        body: <>Choosing the right post type is essential for a professional-looking fence installation. Line posts are used between <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link> along straight runs. End posts terminate a fence run at the end of a line. Corner posts connect two panels at a 90-degree angle. T-posts (or tee posts) connect three panels in a T-shaped junction. Blank posts have no pre-routed holes and are used for custom applications. Gate posts are built with thicker walls and reinforced construction to handle the weight and stress of a swinging gate — required for both <Link href="/shop/walk-gates/" className="text-brand-orange hover:underline">walk gates</Link> and <Link href="/shop/driveway-gates/" className="text-brand-orange hover:underline">driveway gates</Link>.</>,
      },
      {
        heading: 'How to Determine Which Posts You Need',
        body: <>Start by sketching your fence layout. Count the number of straight runs, corners, ends, and gate openings. Each straight run needs line posts spaced every 6 feet (matching your panel width). Each corner gets a corner post. Each fence termination point gets an end post. Each gate needs two gate posts — one for hinges, one for the latch. Add one post to your count as a spare, and you have your shopping list. If you want everything sized and packaged together, our <Link href="/shop/fence-kits/" className="text-brand-orange hover:underline">aluminum fence kits</Link> include the right posts for your total footage. If you need help planning your layout, our team of professional fence installers can walk you through it — call (404) 314-4419.</>,
      },
      {
        heading: 'Setting Fence Posts: Concrete vs. Deck Mounts',
        body: <>The most common installation method is setting posts in concrete footings. Dig a hole approximately 3 times the post width and one-third the total post length deep (plus 6 inches for gravel drainage). Set the post plumb, fill with concrete, and allow it to cure before attaching panels. For installations on existing concrete pads, decks, or other hard surfaces, use our <Link href="/shop/accessories/" className="text-brand-orange hover:underline">deck-mount bases from our accessories section</Link> — they bolt directly to the surface and accept standard fence posts without any digging.</>,
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
    title: 'Gate Hinges, Gate Latches & Fence Hardware | Ships Nationwide',
    description: 'Shop gate hinges, gate latches, gate locks, MagnaLatch pool gate latches, drop rods, post caps, and fence post brackets. Professional-grade aluminum fence hardware, ships nationwide.',
    heading: 'Gate Hinges, Gate Latches & Fence Hardware',
    intro: 'Professional-grade gate hinges, gate latches, gate locks, drop rods, post caps, fence post brackets, and mounting hardware for aluminum fence. Everything you need to complete your installation — the same hardware our installation crews use every day.',
    features: [
      { label: 'Gate Hinges', detail: 'Self-closing spring hinges and heavy-duty options for walk and driveway gates' },
      { label: 'Gate Latches & Locks', detail: 'Gravity latches, MagnaLatch pool gate latches, and key-lockable gate locks' },
      { label: 'Post Caps & Brackets', detail: 'Post caps, fence post brackets, deck-mount bases, and wall-mount brackets' },
      { label: 'Professional Grade', detail: 'Same commercial-quality hardware used by professional fence installers' },
    ],
    sections: [
      {
        heading: 'Gate Hinges & Self-Closing Hinges',
        body: <>Gate hinges are what control how your gate swings and whether it closes on its own. Self-closing gate hinges use an internal spring mechanism to automatically return the gate to the closed position — essential for pool code compliance and convenient for everyday use. Heavy duty gate hinges are available for larger panels, heavier gates, and high-traffic applications where standard hinges would wear prematurely. A gate closer is built into the hinge on self-closing models — there&apos;s no separate closer mechanism to install or adjust. Gate hinges are included in our <Link href="/shop/walk-gates/" className="text-brand-orange hover:underline">walk gate kits</Link> and <Link href="/shop/driveway-gates/" className="text-brand-orange hover:underline">driveway gate kits</Link> — order replacements or heavy-duty upgrades here.</>,
      },
      {
        heading: 'Gate Latches, Gate Locks & MagnaLatch',
        body: <>Gate latch hardware comes in several types, each suited to different uses. A gravity latch is the simplest — it drops into the locked position automatically when the gate closes, no manual latching required, and lifts to open. An outdoor gate lock adds key-lockable security over the standard latch function, keeping the gate closed from both sides. For pool enclosures, the MagnaLatch is the professional standard — it&apos;s a magnetic gate latch with a powerful positive-closure magnet and a key lock that positions at the top of the gate, well above a child&apos;s reach, to meet pool barrier code requirements. The D&amp;D Series 3 MagnaLatch is what our installation crews specify for every pool fence gate. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for full compliance requirements.</>,
      },
      {
        heading: 'Post Caps, Fence Post Brackets & Deck Mounts',
        body: <>Post caps cover the open top of your <Link href="/shop/fence-posts/" className="text-brand-orange hover:underline">aluminum fence posts</Link> to prevent water infiltration and add a finished look — choose flat caps for a clean modern appearance or finial-style caps for a traditional profile. Fence post brackets and deck-mount bases let you install posts on existing hard surfaces — concrete patios, wooden decks, and brick walls — without digging post holes. The base plate bolts to the surface, and the post slides into the bracket. Wall-mount brackets attach fence panels directly to an existing structure. These mounting options are ideal for pool deck enclosures, rooftop installations, and anywhere in-ground post setting isn&apos;t possible.</>,
      },
    ],
    faqs: [
      {
        q: 'What is a MagnaLatch and do you carry it?',
        a: 'Yes. The MagnaLatch (made by D&D Technologies) is a magnetic gate latch with a key lock designed specifically for pool barrier code compliance. Its powerful magnet ensures positive closure every time the gate swings shut, and the latch mounts at the top of the gate — well above a child\'s reach — to meet pool code height requirements. We carry the D&D Series 3 MagnaLatch.',
      },
      {
        q: 'What are the different types of gate latches?',
        a: 'The three main gate latch types are: (1) Gravity latch — drops automatically when the gate closes, lifts to open, no key required. Good for everyday pedestrian gates. (2) Outdoor gate lock — adds key-lockable security to the standard latch function. (3) Magnetic gate latch (MagnaLatch) — uses a magnet for positive closure plus a key lock that positions at the top of the gate for pool code compliance. Choose based on your security needs and whether the gate is part of a pool enclosure.',
      },
      {
        q: 'Do you sell pool gate latches?',
        aSchema: 'Yes. We carry the D&D Series 3 MagnaLatch — the professional standard for pool gate latches. It\'s a magnetic, self-latching gate lock that mounts at the top of the gate to meet pool barrier code height requirements. See our pool code aluminum fence guide for full compliance details.',
        a: <>Yes. We carry the D&amp;D Series 3 MagnaLatch — the professional standard for pool gate latches. It&apos;s a magnetic, self-latching gate lock that mounts at the top of the gate to meet pool barrier code height requirements. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for full compliance details.</>,
      },
      { q: 'Do you sell heavy duty gate hinges?', a: 'Yes. We carry heavy duty gate hinges for larger panels and high-traffic applications. Standard self-closing hinges are included in our walk gate and driveway gate kits — heavy-duty replacements and upgrades are available individually.' },
      { q: 'What hinges do I need for a walk gate?', a: 'Walk gates use self-closing spring hinges that automatically return the gate to the closed position. Each walk gate kit includes a pair. Replacements and heavy-duty upgrades are available individually in our accessories section.' },
      { q: 'Do I need a drop rod for a driveway gate?', a: 'Yes. On a double-swing driveway gate, the drop rod secures one panel (the "stationary" side) to the ground. The other panel latches to it. Drop rods are included in driveway gate kits but are also available individually.' },
      { q: 'Can I mount fence posts on a concrete slab?', a: 'Yes — use our fence post brackets or deck-mount bases. They bolt directly to concrete, wood, or composite surfaces and accept standard fence posts. No digging required.' },
      { q: 'What screws should I use for aluminum fence?', a: 'Use our self-tapping post screws, specifically designed for aluminum fence installation. They create their own pilot hole and provide a secure hold without cracking or splitting the aluminum.' },
    ],
  },
  'fence-kits': {
    title: 'DIY Aluminum Fence Kits | Pool Fence Kits | Ships Nationwide',
    description: 'Shop DIY aluminum fence kits — complete kits with panels, posts, walk gate, and hardware sized to your total footage. Pool fence kits available. Kits start at $2,693.59. Ships nationwide.',
    heading: 'DIY Aluminum Fence Kits',
    intro: 'Complete DIY aluminum fence kits with panels, posts, walk gate, and all hardware — everything sized for your total footage in one order. Available in all styles, heights, and colors. Pool fence kits available. Kits start at $2,693.59.',
    features: [
      { label: 'Everything Included', detail: 'Panels, posts, walk gate, and hardware — nothing to hunt for separately' },
      { label: 'Sized to Your Footage', detail: 'Kit quantities calculated for your exact total linear footage' },
      { label: 'Pool Fence Ready', detail: 'Pool code compliant styles available with MagnaLatch upgrade' },
      { label: 'Quick Ship Available', detail: 'Black aluminum fence kits in popular styles ship within days' },
    ],
    sections: [
      {
        heading: "What's Included in an Aluminum Fence Kit?",
        body: <>An aluminum fence kit bundles everything you need into one order — <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link>, <Link href="/shop/fence-posts/" className="text-brand-orange hover:underline">fence posts</Link> (line, corner, end, and gate posts), a <Link href="/shop/walk-gates/" className="text-brand-orange hover:underline">walk gate kit</Link> with self-closing hinges and latch, and all <Link href="/shop/accessories/" className="text-brand-orange hover:underline">hardware and accessories</Link> needed for a complete installation. Every component is color-matched and sized to your total linear footage. Kits are available in all the same styles, heights, and colors as our individual panels — black aluminum fence kits are the most popular and ship the fastest.</>,
      },
      {
        heading: 'Fence Kit vs. Buying Parts Separately',
        body: 'A fence kit is the right choice if you want everything in one order without calculating individual part quantities. We size the kit to your total footage — you tell us how many linear feet you\'re fencing and we put together the right number of panels, posts, and hardware pieces. If your project has a lot of custom angles, obstacles, or partial panels, buying components individually gives you more flexibility. Either way, you\'re getting the same professional-grade materials at the same wholesale pricing.',
      },
      {
        heading: 'Aluminum Pool Fence Kits',
        body: <>Pool fence kits include everything in a standard fence kit plus the hardware needed for pool barrier code compliance — a self-closing walk gate with <Link href="/shop/accessories/" className="text-brand-orange hover:underline">MagnaLatch pool gate latch</Link>, compliant picket spacing, and the appropriate fence height for your local code. Pool barrier requirements vary by municipality, so always verify your local code before ordering. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for the full list of compliant styles and heights, or call us at (404) 314-4419 and we&apos;ll help you build the right kit for your pool enclosure.</>,
      },
    ],
    faqs: [
      { q: 'How much does a DIY aluminum fence kit cost?', a: 'DIY aluminum fence kits start at $2,693.59 for our most popular styles in black. Pricing varies based on total footage, fence style, height, and color. Call (404) 314-4419 for a custom kit quote sized to your exact footage.' },
      {
        q: "What's included in an aluminum fence kit?",
        aSchema: 'Every aluminum fence kit includes fence panels, posts (line, corner, end, and gate posts), a walk gate with self-closing hinges and latch, and all installation hardware. All components are color-matched and sized for your total linear footage.',
        a: <>Every aluminum fence kit includes <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">fence panels</Link>, <Link href="/shop/fence-posts/" className="text-brand-orange hover:underline">posts</Link> (line, corner, end, and gate posts), a <Link href="/shop/walk-gates/" className="text-brand-orange hover:underline">walk gate</Link> with self-closing hinges and latch, and all installation hardware. All components are color-matched and sized for your total linear footage.</>,
      },
      {
        q: 'Do you sell aluminum pool fence kits?',
        aSchema: "Yes. Pool fence kits include panels, posts, a walk gate, and pool code compliant hardware including a MagnaLatch pool gate latch. See our pool code aluminum fence guide for compliant styles and heights, or call (404) 314-4419 to build the right kit for your pool enclosure.",
        a: <>Yes. Pool fence kits include panels, posts, a walk gate, and pool code compliant hardware including a <Link href="/shop/accessories/" className="text-brand-orange hover:underline">MagnaLatch pool gate latch</Link>. See our <Link href="/shop/resources/pool-code-aluminum-fence/" className="text-brand-orange hover:underline">pool code aluminum fence guide</Link> for compliant styles and heights, or call (404) 314-4419 to build the right kit for your pool enclosure.</>,
      },
      { q: "What's the difference between a fence kit and buying parts separately?", a: "A fence kit is the easiest option — we calculate all the quantities for your footage and ship everything together. Buying parts separately gives more flexibility for projects with custom angles, partial panels, or unusual layouts. Both options use the same materials at the same wholesale pricing." },
      { q: 'Can I get a custom fence kit sized to my footage?', a: "Yes. Call (404) 314-4419 and we'll build a custom kit for any footage, fence style, height, and color. We can accommodate projects with multiple sections, corners, and gate openings." },
      { q: 'Do fence kits include a gate?', a: 'Yes. Every fence kit includes a walk gate with self-closing hinges and gravity latch. If you also need a driveway gate, those are available separately in our driveway gates section.' },
    ],
  },
  'chain-link-fencing': {
    title: 'Black Chain Link Fence for Sale | Vinyl Coated & Galvanized | Ships Nationwide',
    description: 'Shop black chain link fence and galvanized chain link fencing. Vinyl coated black chain link and galvanized options available. Contact us for pricing and availability. Ships nationwide.',
    heading: 'Black Chain Link Fence & Galvanized Chain Link',
    intro: 'Black vinyl coated chain link fence and galvanized chain link fencing in multiple gauges and heights. Pricing and availability by quote — call (404) 314-4419 or contact us below for a custom package sized to your project.',
    features: [
      { label: 'Black Vinyl Coated', detail: 'Black chain link fence with vinyl coating for a modern, polished look' },
      { label: 'Galvanized Options', detail: 'Traditional galvanized chain link in standard gauges and heights' },
      { label: 'Multiple Heights', detail: 'Available in 3ft, 4ft, 5ft, 6ft, and commercial heights' },
      { label: 'Ships Nationwide', detail: 'Delivered to your door via freight carrier' },
    ],
    sections: [
      {
        heading: 'Black Chain Link Fence',
        body: 'Black chain link fence has overtaken traditional galvanized as the most popular chain link option — the black vinyl coating gives it a clean, modern look that pairs well with contemporary home styles, black aluminum fencing, and commercial properties where appearance matters. The vinyl coating also adds a layer of corrosion resistance on top of the galvanized steel core, giving black chain link better long-term durability than bare galvanized in harsh weather conditions. Available in residential gauges (11.5 and 11 gauge) and commercial gauges (9 gauge), in heights from 3ft to 12ft. Contact us at (404) 314-4419 for pricing on black chain link fence rolls, posts, and complete installation packages.',
      },
      {
        heading: 'Vinyl Coated Chain Link vs. Galvanized Chain Link',
        body: 'Galvanized chain link is the traditional standard — a steel wire mesh with a zinc coating that resists rust and corrosion. It\'s the most economical chain link option and holds up well in most climates. Vinyl coated chain link adds a layer of PVC over the galvanized wire for additional corrosion resistance and a color finish. Black is by far the most popular vinyl coated color, followed by green (common in sports facilities) and brown. If you\'re choosing between the two, galvanized is the value option; vinyl coated black chain link is the upgrade for curb appeal and longevity.',
      },
      {
        heading: 'Chain Link Fence Cost',
        body: <>Chain link fence cost varies by gauge (wire thickness), height, total footage, and whether you choose galvanized or vinyl coated. Heavier gauge wire (lower number) and taller heights cost more. Black vinyl coated chain link runs higher than galvanized due to the additional coating process. For a project quote that covers fence fabric, posts, top rail, tension wire, and all hardware, call us at (404) 314-4419. If you&apos;re primarily focused on cost and aesthetics for a residential boundary fence, our <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link> are competitively priced, available online with immediate pricing, and require zero maintenance.</>,
      },
    ],
    faqs: [
      { q: 'Do you sell black chain link fence?', a: 'Yes. We carry black vinyl coated chain link fence in residential and commercial gauges, in heights from 3ft to 12ft. Black chain link is priced by quote — call (404) 314-4419 for pricing on rolls, posts, and complete packages.' },
      { q: 'What\'s the difference between vinyl coated and galvanized chain link?', a: 'Galvanized chain link has a zinc coating for rust resistance — it\'s the standard, economical option. Vinyl coated chain link adds a layer of PVC over the galvanized wire for added corrosion resistance and a color finish. Black vinyl coated is the most popular choice for its appearance and longevity.' },
      { q: 'How much does black chain link fence cost?', a: 'Black chain link fence cost depends on gauge, height, and total footage. It runs higher than galvanized due to the vinyl coating process. Call (404) 314-4419 for a quote sized to your specific project dimensions.' },
      { q: 'What gauges of chain link do you carry?', a: 'We carry residential gauge (11.5 and 11 gauge) and commercial grade (9 gauge) chain link in both galvanized and black vinyl coated. Heavier gauge (lower number) means thicker, stronger wire.' },
      { q: 'Do you sell chain link fence by the roll?', a: 'Yes. Chain link fence fabric is available by the roll in standard 50ft lengths. Posts, top rail, tension wire, and hardware are also available separately. Contact us for current pricing and availability.' },
    ],
  },
  'vinyl-fencing': {
    title: 'Vinyl Fence for Sale | White Vinyl Fence & Privacy Fence | Ships Nationwide',
    description: 'Shop vinyl fence panels — white vinyl fence, vinyl privacy fence, and vinyl picket fence in multiple styles and colors. Contact us for pricing and availability. Ships nationwide.',
    heading: 'Vinyl Fence for Sale',
    intro: 'White vinyl fence, vinyl privacy fence, and vinyl picket fence in multiple styles and colors. Pricing and availability by quote — call (404) 314-4419 or contact us below and we\'ll build the right package for your project.',
    features: [
      { label: 'Low Maintenance', detail: 'Vinyl fencing never needs painting, staining, or sealing' },
      { label: 'Multiple Styles', detail: 'Privacy, picket, post-and-rail, and semi-privacy styles available' },
      { label: 'White & Color Options', detail: 'Classic white vinyl fence plus tan, gray, and woodgrain finishes' },
      { label: 'Ships Nationwide', detail: 'Delivered to your door via freight carrier' },
    ],
    sections: [
      {
        heading: 'Vinyl Privacy Fence',
        body: <>Vinyl privacy fence panels feature tongue-and-groove or lap-board construction that creates a solid wall with no gaps — ideal for backyard privacy, pool enclosures, and properties bordering busy streets or neighbors. Standard privacy fence heights run 4ft, 6ft, and 8ft. White is the most popular color, but privacy fence is also available in tan, gray, and woodgrain finishes. For a complete vinyl privacy fence package including panels, posts, and gate, contact us at (404) 314-4419 for a quote. If privacy isn&apos;t your primary requirement, our <Link href="/shop/aluminum-fencing/" className="text-brand-orange hover:underline">aluminum fence panels</Link> are available online with immediate pricing and ship within days.</>,
      },
      {
        heading: 'White Vinyl Fence & Color Options',
        body: 'White vinyl fence is by far the most popular color — it delivers a classic, clean look that holds up better than painted wood without any maintenance. Unlike paint, the color is molded throughout the vinyl material, so it won\'t chip, peel, or fade. Beyond white, vinyl fencing is available in tan, gray, and woodgrain finishes that mimic the appearance of natural wood. Color availability varies by style — contact us to confirm options for the specific fence style you\'re considering.',
      },
      {
        heading: 'Vinyl Picket Fence & Panel Styles',
        body: 'Vinyl picket fence delivers the classic American front-yard look — individual vertical pickets with gaps between them, typically in white, for front yards, garden borders, and decorative property lines. Standard picket heights run 2ft, 3ft, and 4ft. Beyond picket, vinyl fencing comes in privacy (solid), semi-privacy (small gaps), shadowbox (alternating boards), and post-and-rail styles. Each style suits different applications — call (404) 314-4419 and we\'ll help you match the right style to your project.',
      },
    ],
    faqs: [
      { q: 'Do you sell vinyl fencing?', a: 'Yes. We carry vinyl privacy fence, vinyl picket fence, and post-and-rail styles in white and other colors. Vinyl fencing is available by quote — call (404) 314-4419 or use the contact form for pricing and availability on your specific project.' },
      { q: 'How much does vinyl fencing cost?', a: 'Vinyl fencing pricing depends on the style, height, total footage, and color. Call (404) 314-4419 for a quote sized to your project. If you\'re looking for online pricing with immediate checkout, our aluminum fence panels start at $80.35 and are available to order directly in our shop.' },
      { q: 'What vinyl fence styles do you carry?', a: 'We carry vinyl privacy fence, vinyl picket fence, semi-privacy, shadowbox, and post-and-rail styles. White is available across all styles; tan, gray, and woodgrain finishes are available on select styles. Call (404) 314-4419 to confirm availability for your specific style and color.' },
      { q: 'Is vinyl fencing low maintenance?', a: 'Yes. Vinyl fencing never needs painting, staining, or sealing. The color is molded throughout the material so it won\'t chip or peel. An occasional rinse with a garden hose is all that\'s needed to keep it looking clean.' },
      { q: 'How long does vinyl fencing last?', a: 'Quality vinyl fencing typically lasts 20–30 years with minimal maintenance. It won\'t rot, warp, or be damaged by insects the way wood can.' },
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
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `https://fenceworkshop.com/shop/${category}/` },
  }
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
        text: faq.aSchema ?? (typeof faq.a === 'string' ? faq.a : ''),
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Shop', item: 'https://fenceworkshop.com/shop/' },
      { '@type': 'ListItem', position: 2, name: cat.heading, item: `https://fenceworkshop.com/shop/${category}/` },
    ],
  }

  const itemListSchema = products.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: cat.heading,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.title,
      url: `https://fenceworkshop.com${getProductUrl(product)}`,
    })),
  } : null

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
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

      {/* Automation Upsell — Driveway Gates only */}
      {category === 'driveway-gates' && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Looking to Automate?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Standard driveway gate panels are not built for automation. To automate your gate, you&apos;ll need the <strong>Automation Prep Upgrade</strong> — it replaces the standard bottom rail with a reinforced version engineered to accept gate operator arms. Already have an operator or plan to source your own? The Prep Upgrade is all you need. Want a complete automated solution? Add the <strong>LiftMaster LA400DC package</strong> and you&apos;ll have everything required to open your gate with the click of a button.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/shop/accessories/driveway-gate-automation-prep-upgrade/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    Automation Prep Upgrade
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Reinforces your gate panels with an oversized bottom rail engineered to accept gate operator arms. Required for any automated gate — order with your gate for a clean, factory-ready mounting point. Bring your own operator, or add the LiftMaster package below.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View Automation Prep Upgrade →</span>
              </Link>

              <Link
                href="/shop/accessories/liftmaster-la400dc-dual-swing-basic-automation-package/"
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    LiftMaster LA400DC Automation Package
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  Complete dual swing gate automation package from LiftMaster — one of the most trusted names in gate operators. Add this alongside the Automation Prep Upgrade and you&apos;ll have everything needed for a fully automated driveway gate, straight from us.
                </p>
                <span className="mt-4 text-brand-orange font-semibold text-sm group-hover:underline">View LiftMaster Package →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Looking for Something Else? — Aluminum Fencing only */}
      {category === 'aluminum-fencing' && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Looking for Something Else?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  href: '/shop/walk-gates/',
                  img: '/images/shop-walk-gates.jpg',
                  alt: 'Aluminum walk gate kit',
                  title: 'Walk Gates',
                  desc: 'Pedestrian gate kits with self-closing hinges and gravity latch. Pool code ready.',
                  cta: 'Shop Walk Gates →',
                },
                {
                  href: '/shop/driveway-gates/',
                  img: '/images/shop-driveway-gates.jpg',
                  alt: 'Aluminum double driveway gate kit',
                  title: 'Driveway Gates',
                  desc: 'Double-swing driveway gate kits with panels, hinges, latch, and drop rod included.',
                  cta: 'Shop Driveway Gates →',
                },
                {
                  href: '/shop/fence-kits/',
                  img: '/images/shop-fence-kits.jpg',
                  alt: 'All-inclusive aluminum fence kit',
                  title: 'Fence Kits',
                  desc: 'All-inclusive kits with panels, posts, and hardware sized for your total footage.',
                  cta: 'Shop Fence Kits →',
                },
                {
                  href: '/shop/accessories/',
                  img: '/images/shop-accessories.jpg',
                  alt: 'Aluminum fence wall mount accessories',
                  title: 'Hardware & Accessories',
                  desc: 'Hinges, latches, post caps, deck mounts, and everything else to complete your project.',
                  cta: 'Shop Accessories →',
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-brand-orange hover:shadow-md transition-all"
                >
                  <div className="aspect-[4/3] relative bg-white">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                    <span className="mt-4 inline-block text-brand-orange font-semibold text-sm group-hover:underline">{card.cta}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Our team of professional fence installers has been helping homeowners and contractors across the country since 2008. We can help you choose the right products, plan your layout, and answer any installation questions. Browse our full <Link href="/shop/" className="text-brand-orange hover:underline">online fence shop</Link> to see everything we carry.
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

      <Footer />
    </main>
  )
}

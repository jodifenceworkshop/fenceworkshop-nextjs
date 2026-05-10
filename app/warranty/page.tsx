import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty Information | Fence Workshop',
  description: 'Warranty information for aluminum fence panels, gates, and accessories purchased from Fence Workshop.',
}

export default function WarrantyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Warranty Information</h1>
          <p className="text-gray-400 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>Manufacturer Warranty</h2>
          <p>
            All aluminum fence panels, posts, and gates sold by Fence Workshop are covered by the
            original manufacturer&apos;s limited warranty. Warranty terms vary by manufacturer and
            product line. In general, manufacturer warranties cover defects in raw materials and
            workmanship under normal use and installation conditions.
          </p>
          <p>
            For specific warranty documentation on a product you have purchased, please{' '}
            <Link href="/contact/">contact us</Link> with your order information and we will provide
            the applicable warranty documentation.
          </p>

          <h2>What Is Typically Covered</h2>
          <ul>
            <li>Structural defects in aluminum extrusions and castings</li>
            <li>Manufacturing defects in welds, joints, and hardware</li>
            <li>Defects in materials present at the time of manufacture</li>
          </ul>

          <h2>What Is Not Covered</h2>
          <p>
            Manufacturer warranties do not cover damage or deterioration resulting from conditions
            outside the manufacturer&apos;s control, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Paint and coating degradation</strong> caused by environmental exposure —
              including salt air, acid rain, industrial pollutants, or harsh chemical contact
            </li>
            <li>
              <strong>Fading or color change</strong> due to prolonged UV exposure, which is a
              characteristic of all outdoor powder coat finishes over time
            </li>
            <li>Damage from improper installation not performed per manufacturer specifications</li>
            <li>Damage from impact, vandalism, accidents, or acts of nature</li>
            <li>Normal wear consistent with outdoor use and weather exposure</li>
            <li>Modifications made to the product after purchase</li>
          </ul>

          <h2>Powder Coat Finish</h2>
          <p>
            Our aluminum fencing uses a high-quality powder coat finish applied over a zinc phosphate
            primer. Powder coat is the industry standard for outdoor aluminum fencing and provides
            excellent durability. However, like all outdoor finishes, it is subject to gradual
            weathering over time. Fading, chalking, or minor color variation after years of UV and
            weather exposure is a characteristic of the finish — not a material defect — and is not
            covered under warranty.
          </p>
          <p>
            To extend the life of your finish, avoid contact with harsh chemicals, pool chemicals,
            fertilizers, and pressure washing directly at close range.
          </p>

          <h2>Installation</h2>
          <p>
            Warranty coverage applies only to products installed in accordance with manufacturer
            installation guidelines. Products installed incorrectly — including improper post depth,
            incorrect concrete mix, or failure to use required hardware — may void warranty coverage.
            If Fence Workshop installed your fence, our installation work is covered separately under
            our workmanship guarantee. Contact us for details.
          </p>

          <h2>Making a Warranty Claim</h2>
          <p>
            To submit a warranty claim, contact us with the following:
          </p>
          <ul>
            <li>Your order number or proof of purchase</li>
            <li>Description of the issue</li>
            <li>Photos of the affected area</li>
          </ul>
          <p>
            We will review your claim and coordinate with the manufacturer on your behalf. Reach us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a> or{' '}
            <a href="tel:+14043144419">(404) 314-4419</a>.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}

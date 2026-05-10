import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Fence Workshop',
  description: 'Terms and conditions for purchasing products and services from Fence Workshop.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="text-gray-400 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>Acceptance of Terms</h2>
          <p>
            By using fenceworkshop.com or placing an order with Fence Workshop, you agree to these
            Terms &amp; Conditions. If you do not agree, please do not use this site or place an order.
          </p>

          <h2>Products and Pricing</h2>
          <p>
            All prices are listed in U.S. dollars. Fence Workshop reserves the right to correct pricing
            errors and to update product pricing without notice. If a pricing error affects your order,
            we will contact you before processing.
          </p>
          <p>
            Product images are representative. Actual product dimensions, finish appearance, and color
            may vary slightly from what is shown on screen due to monitor calibration and lighting
            conditions in photography.
          </p>

          <h2>Orders and Payment</h2>
          <p>
            Orders are processed through Shopify&apos;s secure checkout. Fence Workshop does not store
            payment card information. Accepted payment methods are displayed at checkout. Submission of
            an order constitutes an offer to purchase; your order is confirmed when you receive an
            order confirmation email.
          </p>
          <p>
            For commercial or large-volume orders requiring a custom quote, payment terms will be
            specified in your quote documentation.
          </p>

          <h2>Shipping</h2>
          <p>
            Products ship via freight carrier to addresses in the contiguous United States. Estimated
            delivery is 7–10 business days from the date of shipment. Fence Workshop is not responsible
            for delays caused by the freight carrier, weather events, or circumstances outside our control.
          </p>
          <p>
            You are responsible for ensuring someone is available to receive the freight delivery and
            for inspecting the shipment upon arrival. Any visible freight damage must be noted on the
            delivery receipt at the time of delivery. Failure to note damage at delivery may affect
            your ability to file a freight damage claim.
          </p>

          <h2>Returns and Cancellations</h2>
          <p>
            <strong>Standard in-stock products</strong> may be returned within 10 days of delivery,
            provided the items have not been installed and are in new, original condition. To initiate
            a return, contact us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a> before shipping
            anything back.
          </p>
          <p>
            Returns are subject to a <strong>20% restocking fee</strong>. Return freight costs are
            the responsibility of the customer. We recommend using a trackable freight service, as
            Fence Workshop is not responsible for items lost or damaged in return transit.
          </p>
          <p>
            <strong>Custom and configured products</strong> — including any item ordered in a specific
            height, color, gate configuration, or custom size — are <strong>final sale and non-returnable</strong>.
            Please review your order carefully before submitting. If you have questions about a product
            before ordering, <Link href="/contact/">contact us</Link> and we&apos;ll help you confirm
            the right specifications.
          </p>
          <p>
            Cancellation requests must be submitted by contacting us as soon as possible. Whether a
            cancellation can be accommodated depends on the order status and product type. Contact us
            at <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a> and we will
            do our best to assist.
          </p>

          <h2>Installation Services</h2>
          <p>
            Fence installation services are provided in the Metro Atlanta and greater Georgia area.
            Installation quotes are valid for 30 days from the date issued. Scheduling is subject to
            availability. Fence Workshop is not responsible for delays caused by permitting requirements,
            weather, or site conditions outside our control.
          </p>
          <p>
            It is the customer&apos;s responsibility to identify and mark underground utilities before
            installation begins. Fence Workshop is not liable for damage to unmarked underground utilities.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Fence Workshop&apos;s liability for any
            claim arising from a product or service purchase is limited to the amount paid for that
            product or service. Fence Workshop is not liable for indirect, incidental, or consequential
            damages.
          </p>

          <h2>Warranty</h2>
          <p>
            Product warranty information is described on our <Link href="/warranty/">Warranty page</Link>.
            Installation workmanship is separately guaranteed — contact us for details.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Georgia, without regard to conflict
            of law principles. Any disputes shall be resolved in the courts of Fulton County, Georgia.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            Fence Workshop reserves the right to update these Terms at any time. The date at the top
            of this page reflects when they were last revised. Continued use of the site after updates
            constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Reach us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a>
            <br />
            Fence Workshop &bull; 1522 Huber St NW, Atlanta, GA 30318 &bull; (404) 314-4419
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}

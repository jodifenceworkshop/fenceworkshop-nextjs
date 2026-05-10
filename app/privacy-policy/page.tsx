import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fence Workshop',
  description: 'Privacy Policy for Fence Workshop — how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />

      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>Who We Are</h2>
          <p>
            Fence Workshop is a fence installation company and online retailer based in Atlanta, Georgia.
            Our website is <strong>fenceworkshop.com</strong>. You can reach us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a> or{' '}
            <a href="tel:+14043144419">(404) 314-4419</a>.
          </p>

          <h2>Information We Collect</h2>
          <h3>Contact and Quote Forms</h3>
          <p>
            When you submit a quote request or contact form, we collect your name, email address, phone
            number, and any project details you provide. This information is used solely to respond to
            your inquiry and provide you with a quote.
          </p>
          <h3>Checkout and Orders</h3>
          <p>
            When you place an order through our online store, payment and billing information is processed
            securely by Shopify. Fence Workshop does not store your credit card or payment details.
            Shopify&apos;s privacy practices are described at{' '}
            <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              shopify.com/legal/privacy
            </a>.
          </p>
          <h3>Analytics</h3>
          <p>
            We use Google Analytics to understand how visitors use our site. This collects anonymized
            data such as pages visited, time on site, and general location (city/region level). No
            personally identifiable information is shared with Google Analytics.
          </p>
          <h3>Cookies</h3>
          <p>
            Our site uses cookies to maintain your shopping cart session. No tracking cookies are set
            for advertising purposes without your consent.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your quote requests and inquiries</li>
            <li>To fulfill and ship your orders</li>
            <li>To send you a confirmation email when you submit a contact form</li>
            <li>To improve our website and understand customer needs</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing
            purposes.
          </p>

          <h2>Email Communications</h2>
          <p>
            If you submit a quote request, you will receive a single confirmation email. We may follow
            up regarding your inquiry. You will not be added to a marketing list without your explicit
            consent.
          </p>

          <h2>Data Retention</h2>
          <p>
            Contact form submissions are retained in our email system for as long as necessary to
            manage your inquiry or order. You may request deletion of your data at any time by
            contacting us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a>.
          </p>

          <h2>Third-Party Services</h2>
          <p>Our website uses the following third-party services:</p>
          <ul>
            <li><strong>Shopify</strong> — ecommerce platform and payment processing</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
            <li><strong>Vercel</strong> — website hosting</li>
            <li><strong>Google Analytics</strong> — anonymized site analytics</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal
            information we hold about you. To make a request, contact us at{' '}
            <a href="mailto:atlanta@fenceworkshop.com">atlanta@fenceworkshop.com</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The date at the top of this page
            reflects when it was last revised. Continued use of our website after any changes
            constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy? Reach us at:{' '}
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

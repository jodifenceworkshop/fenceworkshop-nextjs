import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminum Fence Resources & Buying Guides | Fence Workshop',
  description: 'Guides for buying, specifying, and installing aluminum fence — pool code requirements, residential vs commercial grades, DIY installation, pet fence, and material comparisons.',
  alternates: { canonical: 'https://fenceworkshop.com/shop/resources/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fenceworkshop.com/' },
    { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://fenceworkshop.com/shop/' },
    { '@type': 'ListItem', position: 3, name: 'Resources', item: 'https://fenceworkshop.com/shop/resources/' },
  ],
}

const resources = [
  {
    title: 'Pool Fence Requirements',
    subtitle: 'Aluminum Pool Fence 4ft, 5ft & 6ft',
    description: 'Complete guide to aluminum pool fence requirements — minimum heights, picket spacing, the 45-inch rail rule, self-closing gate requirements, and which fence styles meet typical pool barrier codes.',
    href: '/shop/resources/pool-code-aluminum-fence/',
    tag: 'Pool & Safety',
  },
  {
    title: 'Dog Fence & Pet Fence Guide',
    subtitle: 'Aluminum Fence for Dogs & Small Pets',
    description: 'Which aluminum fence styles have tight enough picket spacing to keep small dogs, puppies, and cats safely contained — with height recommendations by dog size.',
    href: '/shop/resources/pet-fence/',
    tag: 'Pet Fence',
  },
  {
    title: 'Residential vs Commercial Aluminum Fence',
    subtitle: 'Which Grade Do You Need?',
    description: 'Compare residential and commercial grade aluminum fence panels by picket size, wall thickness, post size, and application — so you buy the right spec the first time.',
    href: '/shop/resources/residential-vs-commercial-aluminum-fence/',
    tag: 'Buying Guide',
  },
  {
    title: 'How to Install Aluminum Fence',
    subtitle: 'Step-by-Step DIY Installation Guide',
    description: 'Step-by-step installation guide from professional fence installers — layout planning, post setting, panel mounting, and gate hanging with tips from the field.',
    href: '/shop/resources/how-to-install-aluminum-fence/',
    tag: 'Installation',
  },
  {
    title: 'Aluminum vs Steel Fence',
    subtitle: 'Aluminum vs Wrought Iron — Which Is Best?',
    description: 'Cost, durability, maintenance, and security compared side by side by professional fence installers. Find out which material is right for your property and budget.',
    href: '/shop/resources/aluminum-vs-steel-fencing/',
    tag: 'Comparison',
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="h-20" />

      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-white transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-gray-200">Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fence Buying Guides & Resources</h1>
          <p className="text-lg text-gray-300 max-w-2xl">Everything you need to spec, buy, and install aluminum fencing — pool code requirements, grade comparisons, DIY installation, and more.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-orange hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-semibold text-brand-orange uppercase tracking-wide mb-3">{r.tag}</span>
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">{r.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{r.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.description}</p>
                <span className="text-brand-orange font-semibold text-sm">Read Guide &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">Ready to order?</p>
            <p className="text-gray-600">Shop aluminum fence panels, gates, posts, and accessories — ships nationwide.</p>
          </div>
          <Link href="/shop/" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">
            Browse the Shop
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

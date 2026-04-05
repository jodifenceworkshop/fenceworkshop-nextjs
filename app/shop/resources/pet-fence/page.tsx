import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pet & Puppy Fence: Best Aluminum Fence Styles for Dogs | Fence Workshop',
  description: 'Aluminum pet fence guide — which fence styles have the tight picket spacing needed to keep small dogs, puppies, cats, and other pets safely contained.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a puppy picket fence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A puppy picket fence (also called a pet fence or puppy panel) has tighter-than-standard vertical spacing between pickets to prevent small dogs, puppies, and cats from slipping through. Standard aluminum fence panels have roughly 4-inch picket spacing, while puppy picket panels reduce that to about 1-1/2 to 2 inches — small enough to contain even toy breeds and young puppies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which aluminum fence styles are best for dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pet-friendly aluminum fence styles include Athens, Avalon, Berkley, Buford, Chamblee, Cobb, Dublin, and Dunwoody. These styles either use tighter picket spacing by design or offer a puppy picket variant that adds shorter secondary pickets between the main pickets to close the gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How tall should a fence be for dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fence height depends on your dog\'s breed and jumping ability. For small dogs and most medium breeds, a 4ft fence is typically sufficient. For large breeds, athletic dogs, or known jumpers, a 5ft or 6ft fence is recommended. Athletic breeds like German Shepherds, Huskies, and Malinois can clear a 4ft fence easily — plan for 5ft minimum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a puppy fit through a standard 4-inch picket gap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Small breed puppies and adult toy breeds can easily squeeze through a 4-inch gap. Chihuahuas, Yorkies, Dachshunds, Pomeranians, and similar breeds need the tighter picket spacing of a puppy picket or pet fence. Cats can also slip through standard pickets, so pet picket panels are a good choice for multi-pet households.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is aluminum fencing safe for pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Aluminum fencing is one of the safest materials for containing pets. It has no splinters like wood, no sharp wire ends like chain-link, and no toxic chemical treatments. The powder-coated finish is pet-safe, and the smooth pickets cannot be chewed or damaged by most dogs. There are no points, barbs, or hazards at dog level.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pet & Puppy Aluminum Fence: Best Styles for Dogs',
  description: 'Guide to aluminum fence styles with tight picket spacing designed to keep puppies and small pets safely contained.',
  author: {
    '@type': 'Organization',
    name: 'Fence Workshop',
    url: 'https://www.fenceworkshop.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fence Workshop',
    url: 'https://www.fenceworkshop.com',
  },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.fenceworkshop.com/shop/resources/pet-fence/',
  },
}

const petStyles = [
  { style: 'Athens', note: 'Spear-top with double picket — tight spacing from top to bottom' },
  { style: 'Avalon', note: 'Spear-top with puppy picket — tight spacing only along the bottom' },
  { style: 'Berkley', note: 'Classic residential style with puppy picket option' },
  { style: 'Buford', note: 'Smooth/flat-top with double picket — tight spacing from top to bottom' },
  { style: 'Chamblee', note: 'Smooth/flat-top with double picket — tight spacing from top to bottom' },
  { style: 'Cobb', note: 'Smooth/flat-top with puppy picket — tight spacing only along the bottom' },
  { style: 'Dublin', note: 'Staggered spear-top with puppy picket variant' },
  { style: 'Dunwoody', note: 'Staggered spear-top, residential grade, with double picket from top to bottom' },
]

export default function PetFencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/shop/" className="hover:text-brand-orange">Shop</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-300">Pet &amp; Puppy Fence Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Pet &amp; Puppy Fence: Best Aluminum Styles for Dogs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Small dogs, puppies, and cats can slip right through a standard 4-inch picket gap.
            These aluminum fence styles have the tighter picket spacing needed to keep pets
            safely contained.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-brand-orange rounded-r-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Standard aluminum fence panels have about 4&quot; between pickets — wide enough
              for puppies, toy breeds, and cats to squeeze through. Puppy picket (or pet picket)
              panels close that gap to roughly 1-1/2 to 2 inches by adding a second set of
              shorter pickets between the main pickets. Our pet-friendly styles include
              <strong> Athens, Avalon, Berkley, Buford, Chamblee, Cobb, Dublin, and Dunwoody.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What is a puppy picket */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes a Fence &ldquo;Pet Friendly&rdquo;?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A standard aluminum fence panel has vertical pickets spaced roughly 4 inches apart.
            That&apos;s narrow enough to keep children and larger dogs contained, but small dogs,
            puppies, and cats can easily fit through — especially along the bottom of the fence
            where the gap is most accessible. There are two ways to solve this:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A <strong>puppy picket fence</strong> (also called a pet picket) adds a second row of
            shorter vertical pickets between the main pickets, but <em>only along the bottom section</em>
            of the panel. This tightens the spacing to about 1-1/2 to 2 inches right where pets try to
            slip through, while keeping the standard aluminum-fence look above dog-eye level.
            Styles like <strong>Avalon</strong> and <strong>Cobb</strong> use this configuration.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A <strong>double picket fence</strong> runs the extra pickets the full height of the panel,
            from top to bottom, creating tight spacing throughout. This gives maximum security and a
            denser visual look. Styles like <strong>Athens</strong>, <strong>Buford</strong>,
            <strong> Chamblee</strong>, and <strong>Dunwoody</strong> use double picket construction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Both configurations result in roughly 1-1/2 to 2 inches between pickets — small enough
            to contain even toy breeds, puppies, and kittens.
          </p>
        </div>
      </section>

      {/* Pet-Friendly Styles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pet-Friendly Aluminum Fence Styles</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            These styles from our catalog are available with pet-safe picket spacing — either
            built in or as a puppy picket variant:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold">Style</th>
                  <th className="text-left p-4 font-semibold">Pet Fence Details</th>
                </tr>
              </thead>
              <tbody>
                {petStyles.map((row, i) => (
                  <tr key={row.style} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-200 whitespace-nowrap">{row.style}</td>
                    <td className="p-4 text-gray-700 border-b border-gray-200">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Choosing Height */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Height for Your Dog</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picket spacing keeps small pets from squeezing through — fence height keeps athletic
            dogs from jumping over. Match your height to your dog&apos;s size and jumping ability:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">3ft Fence</h3>
              <p className="text-gray-700 text-sm">Toy breeds, senior dogs, small dogs that don&apos;t jump. Not suitable for active dogs.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">4ft Fence</h3>
              <p className="text-gray-700 text-sm">Most small and medium breeds. Our most popular height for household dogs.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">5ft+ Fence</h3>
              <p className="text-gray-700 text-sm">Large, athletic, or working breeds — German Shepherds, Huskies, Malinois, etc.</p>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
            <p className="font-semibold text-gray-900 mb-2">Not sure? Go taller.</p>
            <p className="text-gray-700">
              Dogs are better jumpers than most owners realize. If your dog is athletic, young,
              or has a habit of jumping on things, size up to a 5ft fence. It&apos;s a lot cheaper
              than replacing a fence a year later because your dog keeps clearing it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Aluminum for Pets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Aluminum Is the Best Pet Fence Material</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Chew Damage</h3>
              <p className="text-gray-700 mb-6">
                Unlike wood fencing, aluminum can&apos;t be chewed or scratched through by dogs.
                The smooth powder-coated surface offers nothing for teeth to grip, so even
                persistent chewers can&apos;t damage the fence.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Sharp Edges</h3>
              <p className="text-gray-700">
                Chain-link fencing has sharp wire ends that can cut pets. Aluminum pickets
                are smooth and rounded, with no wire barbs or exposed metal ends at dog level.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Toxic Finish</h3>
              <p className="text-gray-700 mb-6">
                Our TGIC powder coating is non-toxic and pet-safe. There are no chemical
                treatments, preservatives, or toxic coatings that could harm pets who
                lick or chew on the fence.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visibility &amp; Airflow</h3>
              <p className="text-gray-700">
                Open picket designs let dogs see and hear their surroundings, reducing
                anxiety and boredom compared to solid privacy fences. Airflow also keeps
                the yard cooler in summer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fence Your Yard for Your Pet?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Call us and we&apos;ll help you pick the right style, height, and picket configuration
            for your dog. We&apos;ve been fencing pet yards in Georgia for 15+ years.
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

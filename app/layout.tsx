import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'

export const metadata: Metadata = {
  title: 'Fence Installation Georgia | Metro Atlanta Fencing | Fence Workshop',
  description: 'Professional fence installation in Metro Atlanta & Georgia, plus aluminum fencing and gates shipped nationwide. Licensed & insured. 15+ years experience.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W5TTRBNQ');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5TTRBNQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LocalBusinessSchema />
        <CartProvider>
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

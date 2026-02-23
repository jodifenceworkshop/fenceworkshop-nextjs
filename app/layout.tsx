import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fence Installation Georgia | Metro Atlanta Fencing | Fence Workshop',
  description: 'Professional fence installation in Metro Atlanta & Georgia, plus quality aluminum and vinyl fencing shipped nationwide. Licensed & insured. 20+ years experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

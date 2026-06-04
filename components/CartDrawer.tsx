'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { getProductUrl } from '@/lib/shopify'

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount))
}

export default function CartDrawer() {
  const { cart, cartOpen, closeCart, updateQuantity, removeItem, loading } = useCart()

  const lines = cart?.lines.edges.map((e) => e.node) ?? []

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Your Cart
            {(cart?.totalQuantity ?? 0) > 0 && (
              <span className="ml-2 text-base font-normal text-gray-500">
                ({cart?.totalQuantity} {cart?.totalQuantity === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-16 h-16 text-gray-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500 mb-6">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => {
                const { merchandise } = line
                const image = merchandise.product.images.edges[0]?.node
                const productUrl = getProductUrl({
                  handle: merchandise.product.handle,
                  productType: merchandise.product.productType,
                })
                // Filter out "Default Title" for products with no options
                const options = merchandise.selectedOptions.filter(
                  (o) => o.value !== 'Default Title'
                )
                const lineTotal = parseFloat(merchandise.price.amount) * line.quantity

                return (
                  <li key={line.id} className="flex gap-4">
                    {/* Image */}
                    <Link href={productUrl} onClick={closeCart} className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                        {image ? (
                          <Image
                            src={image.url}
                            alt={image.altText || merchandise.product.title}
                            fill
                            className="object-contain p-1"
                            sizes="80px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={productUrl}
                        onClick={closeCart}
                        className="text-sm font-semibold text-gray-900 hover:text-brand-orange transition-colors leading-snug line-clamp-2"
                      >
                        {merchandise.product.title}
                      </Link>
                      {options.length > 0 && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {options.map((o) => o.value).join(' · ')}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() =>
                              line.quantity > 1
                                ? updateQuantity(line.id, line.quantity - 1)
                                : removeItem(line.id)
                            }
                            disabled={loading}
                            className="px-2 py-1 text-gray-500 hover:text-gray-900 disabled:opacity-40 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2rem] text-center">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                            disabled={loading}
                            className="px-2 py-1 text-gray-500 hover:text-gray-900 disabled:opacity-40 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Line price */}
                        <p className="text-sm font-semibold text-gray-900">
                          {formatPrice(lineTotal.toString(), merchandise.price.currencyCode)}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(line.id)}
                      disabled={loading}
                      className="flex-shrink-0 text-gray-300 hover:text-red-400 disabled:opacity-40 transition-colors self-start mt-0.5"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && cart && (
          <div className="border-t border-gray-200 px-6 py-6 space-y-4">
            <div className="flex justify-between text-base font-semibold text-gray-900">
              <span>Subtotal</span>
              <span>
                {formatPrice(
                  cart.cost.totalAmount.amount,
                  cart.cost.totalAmount.currencyCode
                )}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <a
              href={`${cart.checkoutUrl}${cart.checkoutUrl.includes('?') ? '&' : '?'}return_to=${encodeURIComponent('https://fenceworkshop.com/shop/')}`}
              className="block w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 rounded-lg text-center transition-colors text-lg"
            >
              Checkout
            </a>
            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

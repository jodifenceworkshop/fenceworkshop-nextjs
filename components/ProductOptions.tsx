'use client'

import { useState, useMemo } from 'react'
import type { ShopifyVariant, ShopifyPrice } from '@/lib/shopify'

interface ProductOptionsProps {
  options: { name: string; values: string[] }[]
  variants: ShopifyVariant[]
}

function formatPrice(price: ShopifyPrice): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currencyCode,
  }).format(parseFloat(price.amount))
}

export default function ProductOptions({ options, variants }: ProductOptionsProps) {
  // Initialize selected options with the first value of each option
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    for (const opt of options) {
      initial[opt.name] = opt.values[0]
    }
    return initial
  })
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)

  // Find the variant matching current selections
  const selectedVariant = useMemo(() => {
    return variants.find((v) =>
      v.selectedOptions.every(
        (so) => selectedOptions[so.name] === so.value
      )
    ) ?? null
  }, [selectedOptions, variants])

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }))
  }

  const handleAddToCart = async () => {
    if (!selectedVariant || !selectedVariant.availableForSale) return

    setAdding(true)
    try {
      const { createCheckout } = await import('@/lib/shopify')
      const checkout = await createCheckout([
        { variantId: selectedVariant.id, quantity },
      ])
      window.location.href = checkout.webUrl
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Something went wrong. Please try again or call us at (404) 314-4419.')
    } finally {
      setAdding(false)
    }
  }

  // Skip rendering if only one variant with "Default Title"
  const hasOptions = !(variants.length === 1 && variants[0].title === 'Default Title')

  return (
    <div>
      {/* Option Selectors */}
      {hasOptions && options.map((opt) => (
        <div key={opt.name} className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            {opt.name}
          </label>
          <select
            value={selectedOptions[opt.name] || ''}
            onChange={(e) => handleOptionChange(opt.name, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
          >
            {opt.values.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* Selected Variant Price */}
      {selectedVariant && (
        <div className="mb-6 mt-2">
          <p className="text-2xl font-semibold text-gray-900">
            {formatPrice(selectedVariant.price)}
          </p>
          {selectedVariant.compareAtPrice &&
            parseFloat(selectedVariant.compareAtPrice.amount) > parseFloat(selectedVariant.price.amount) && (
              <p className="text-sm text-gray-500 line-through mt-1">
                {formatPrice(selectedVariant.compareAtPrice)}
              </p>
            )}
        </div>
      )}

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Decrease quantity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span className="px-4 py-3 text-gray-900 font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Increase quantity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!selectedVariant?.availableForSale || adding}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
            selectedVariant?.availableForSale
              ? 'bg-brand-orange hover:bg-brand-orange-dark'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          {adding
            ? 'Redirecting to Checkout…'
            : !selectedVariant
              ? 'Select Options'
              : !selectedVariant.availableForSale
                ? 'Out of Stock'
                : 'Buy Now'}
        </button>
      </div>

      {!selectedVariant && hasOptions && (
        <p className="text-sm text-gray-500">
          Please select all options above to see pricing and availability.
        </p>
      )}
    </div>
  )
}

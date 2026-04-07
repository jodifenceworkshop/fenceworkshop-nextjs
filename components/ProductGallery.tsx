'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { ShopifyImage } from '@/lib/shopify'

interface ProductGalleryProps {
  images: ShopifyImage[]
  productTitle: string
}

export default function ProductGallery({ images, productTitle }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen, prev, next])

  if (images.length === 0) return null

  return (
    <>
      {/* Main Image */}
      <div
        className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 mb-4 cursor-zoom-in"
        onClick={() => openLightbox(activeIndex)}
      >
        <Image
          src={images[activeIndex].url}
          alt={images[activeIndex].altText || productTitle}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Click to enlarge hint */}
        <div className="absolute bottom-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded flex items-center gap-1 pointer-events-none">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Click to enlarge
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.slice(0, 8).map((img, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); openLightbox(i) }}
              className={`aspect-square relative rounded-md overflow-hidden bg-gray-100 border-2 transition-colors ${
                activeIndex === i ? 'border-brand-orange' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image
                src={img.url}
                alt={img.altText || productTitle}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 25vw, 12vw"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <Image
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].altText || productTitle}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {images.length > 1 && (
              <p className="text-center text-gray-400 text-sm mt-3">
                {lightboxIndex + 1} / {images.length}
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}

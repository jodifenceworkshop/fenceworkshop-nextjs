'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import {
  createCart,
  addCartLines,
  updateCartLines,
  removeCartLines,
  getCart,
  type Cart,
} from '@/lib/cart'

type CartContextType = {
  cart: Cart | null
  cartOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (variantId: string, quantity: number) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  itemCount: number
  loading: boolean
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // Restore cart from localStorage on first render
  useEffect(() => {
    const savedId = localStorage.getItem('shopify_cart_id')
    if (!savedId) return
    getCart(savedId).then((c) => {
      if (c) {
        setCart(c)
      } else {
        localStorage.removeItem('shopify_cart_id')
      }
    })
  }, [])

  const addToCart = useCallback(async (variantId: string, quantity: number) => {
    setLoading(true)
    try {
      let updated: Cart
      if (cart?.id) {
        updated = await addCartLines(cart.id, [{ merchandiseId: variantId, quantity }])
      } else {
        updated = await createCart([{ merchandiseId: variantId, quantity }])
        localStorage.setItem('shopify_cart_id', updated.id)
      }
      setCart(updated)
      setCartOpen(true)
    } catch (err) {
      console.error('addToCart error:', err)
      alert('Something went wrong adding to cart. Please try again or call (404) 314-4419.')
    } finally {
      setLoading(false)
    }
  }, [cart])

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cart?.id) return
    setLoading(true)
    try {
      const updated = await updateCartLines(cart.id, [{ id: lineId, quantity }])
      setCart(updated)
    } catch (err) {
      console.error('updateQuantity error:', err)
    } finally {
      setLoading(false)
    }
  }, [cart])

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart?.id) return
    setLoading(true)
    try {
      const updated = await removeCartLines(cart.id, [lineId])
      setCart(updated)
    } catch (err) {
      console.error('removeItem error:', err)
    } finally {
      setLoading(false)
    }
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        addToCart,
        updateQuantity,
        removeItem,
        itemCount: cart?.totalQuantity ?? 0,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

// Client-side Shopify Cart API
// Uses NEXT_PUBLIC_ token so it can run in the browser

const domain =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'fenceworkshop-com-shop.myshopify.com'
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || ''
const endpoint = `https://${domain}/api/2024-10/graphql.json`

// ── Types ──────────────────────────────────────────────────────────

export type CartLineItem = {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: { amount: string; currencyCode: string }
    product: {
      title: string
      handle: string
      productType: string
      images: { edges: { node: { url: string; altText: string | null } }[] }
    }
    selectedOptions: { name: string; value: string }[]
  }
}

export type Cart = {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    totalAmount: { amount: string; currencyCode: string }
  }
  lines: { edges: { node: CartLineItem }[] }
}

// ── Internal fetch ─────────────────────────────────────────────────

async function cartFetch<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  })
  const json = await res.json()
  if (json.errors) throw new Error(json.errors.map((e: { message: string }) => e.message).join('\n'))
  return json.data
}

// ── Cart fragment ──────────────────────────────────────────────────

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount { amount currencyCode }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price { amount currencyCode }
              selectedOptions { name value }
              product {
                title
                handle
                productType
                images(first: 1) {
                  edges { node { url altText } }
                }
              }
            }
          }
        }
      }
    }
  }
`

// ── Mutations & queries ────────────────────────────────────────────

export async function createCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const data = await cartFetch<{ cartCreate: { cart: Cart } }>(`
    ${CART_FRAGMENT}
    mutation CartCreate($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart { ...CartFields }
      }
    }
  `, { lines })
  return data.cartCreate.cart
}

export async function addCartLines(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const data = await cartFetch<{ cartLinesAdd: { cart: Cart } }>(`
    ${CART_FRAGMENT}
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
      }
    }
  `, { cartId, lines })
  return data.cartLinesAdd.cart
}

export async function updateCartLines(
  cartId: string,
  lines: { id: string; quantity: number }[]
): Promise<Cart> {
  const data = await cartFetch<{ cartLinesUpdate: { cart: Cart } }>(`
    ${CART_FRAGMENT}
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
      }
    }
  `, { cartId, lines })
  return data.cartLinesUpdate.cart
}

export async function removeCartLines(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const data = await cartFetch<{ cartLinesRemove: { cart: Cart } }>(`
    ${CART_FRAGMENT}
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ...CartFields }
      }
    }
  `, { cartId, lineIds })
  return data.cartLinesRemove.cart
}

export async function getCart(cartId: string): Promise<Cart | null> {
  try {
    const data = await cartFetch<{ cart: Cart | null }>(`
      ${CART_FRAGMENT}
      query GetCart($cartId: ID!) {
        cart(id: $cartId) { ...CartFields }
      }
    `, { cartId })
    return data.cart
  } catch {
    return null
  }
}

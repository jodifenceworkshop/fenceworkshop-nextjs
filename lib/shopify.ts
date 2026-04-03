const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'fenceworkshop-com-shop.myshopify.com'
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!

const endpoint = `https://${domain}/api/2024-10/graphql.json`

type ShopifyResponse<T> = {
  data: T
  errors?: { message: string }[]
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!storefrontAccessToken) {
    console.error('Missing SHOPIFY_STOREFRONT_ACCESS_TOKEN')
    return {} as T
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    })

    const json: ShopifyResponse<T> = await res.json()

    if (json.errors) {
      console.error('Shopify API errors:', json.errors)
      return {} as T
    }

    return json.data
  } catch (error) {
    console.error('Shopify fetch failed:', error)
    return {} as T
  }
}

// ── Types ─────────────────────────────────────────────────────────

export type ShopifyImage = {
  url: string
  altText: string | null
  width: number
  height: number
}

export type ShopifyPrice = {
  amount: string
  currencyCode: string
}

export type ShopifyVariant = {
  id: string
  title: string
  availableForSale: boolean
  price: ShopifyPrice
  compareAtPrice: ShopifyPrice | null
  selectedOptions: { name: string; value: string }[]
  image: ShopifyImage | null
}

export type ShopifyProduct = {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  productType: string
  tags: string[]
  vendor: string
  images: { edges: { node: ShopifyImage }[] }
  variants: { edges: { node: ShopifyVariant }[] }
  priceRange: {
    minVariantPrice: ShopifyPrice
    maxVariantPrice: ShopifyPrice
  }
  options: { name: string; values: string[] }[]
}

export type ShopifyCollection = {
  id: string
  handle: string
  title: string
  description: string
  products: { edges: { node: ShopifyProduct }[] }
}

// ── Fragments ─────────────────────────────────────────────────────

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    vendor
    options {
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 20) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`

// ── Queries ───────────────────────────────────────────────────────

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(`
    ${PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        ...ProductFields
      }
    }
  `, { handle })

  return data?.product ?? null
}

export async function getProducts(first = 50, query?: string): Promise<ShopifyProduct[]> {
  const { products } = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(`
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!, $query: String) {
      products(first: $first, query: $query) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  `, { first, query })

  return products?.edges?.map((e) => e.node) ?? []
}

export async function getProductsByType(productType: string): Promise<ShopifyProduct[]> {
  return getProducts(50, `product_type:"${productType}"`)
}

export async function getProductsByTag(tag: string): Promise<ShopifyProduct[]> {
  return getProducts(50, `tag:"${tag}"`)
}

export async function getAllProductHandles(): Promise<{ handle: string; productType: string }[]> {
  const { products } = await shopifyFetch<{
    products: { edges: { node: { handle: string; productType: string } }[] }
  }>(`
    query GetAllHandles {
      products(first: 250) {
        edges {
          node {
            handle
            productType
          }
        }
      }
    }
  `)

  return products?.edges?.map((e) => e.node) ?? []
}

// ── Cart / Checkout ───────────────────────────────────────────────

export async function createCheckout(
  lineItems: { variantId: string; quantity: number }[]
): Promise<{ id: string; webUrl: string }> {
  const { checkoutCreate } = await shopifyFetch<{
    checkoutCreate: {
      checkout: { id: string; webUrl: string }
      checkoutUserErrors: { message: string }[]
    }
  }>(`
    mutation CheckoutCreate($lineItems: [CheckoutLineItemInput!]!) {
      checkoutCreate(input: { lineItems: $lineItems }) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
        }
      }
    }
  `, { lineItems })

  if (checkoutCreate.checkoutUserErrors.length > 0) {
    throw new Error(checkoutCreate.checkoutUserErrors.map((e) => e.message).join('\n'))
  }

  return checkoutCreate.checkout
}

// ── Helpers ───────────────────────────────────────────────────────

export function formatPrice(price: ShopifyPrice): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currencyCode,
  }).format(parseFloat(price.amount))
}

// Map product types to URL category slugs
const TYPE_TO_CATEGORY: Record<string, string> = {
  'Driveway Gate': 'driveway-gates',
  'Walk Gate': 'walk-gates',
  'Fence Panel': 'aluminum-fencing',
  'Fence Post': 'fence-posts',
  'Gate Post': 'fence-posts',
  'Accessory': 'accessories',
}

export function getProductUrl(product: { handle: string; productType: string }): string {
  const category = TYPE_TO_CATEGORY[product.productType] || 'accessories'
  return `/shop/${category}/${product.handle}/`
}

// Reverse: category slug to product type query
const CATEGORY_TO_TYPES: Record<string, string[]> = {
  'driveway-gates': ['Driveway Gate'],
  'walk-gates': ['Walk Gate'],
  'aluminum-fencing': ['Fence Panel'],
  'fence-posts': ['Fence Post', 'Gate Post'],
  'accessories': ['Accessory'],
}

export async function getProductsByCategory(categorySlug: string): Promise<ShopifyProduct[]> {
  const types = CATEGORY_TO_TYPES[categorySlug]
  if (!types) return []

  const allProducts: ShopifyProduct[] = []
  for (const type of types) {
    const products = await getProductsByType(type)
    allProducts.push(...products)
  }

  return allProducts
}

import { NextResponse } from 'next/server'

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '(not set)'
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '(not set)'

  // Test the actual API call
  let apiResult = 'not tested'
  try {
    const res = await fetch(`https://${domain}/api/2024-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query: '{ shop { name } }' }),
    })
    const json = await res.json()
    apiResult = JSON.stringify(json)
  } catch (e) {
    apiResult = `fetch error: ${e}`
  }

  return NextResponse.json({
    domain,
    tokenLength: token.length,
    tokenFirst4: token.slice(0, 4),
    tokenLast4: token.slice(-4),
    apiResult,
  })
}

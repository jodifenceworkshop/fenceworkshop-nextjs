/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fenceworkshop.com', 'cdn.shopify.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fenceworkshop.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  async redirects() {
    return [
      // ── Old WooCommerce /product/ URLs → new /shop/ URLs ──
      // Driveway Gates
      { source: '/product/athens-double-driveway-gate', destination: '/shop/driveway-gates/athens-double-driveway-gate/', permanent: true },
      { source: '/product/atlanta-double-driveway-gate', destination: '/shop/driveway-gates/atlanta-double-driveway-gate/', permanent: true },
      { source: '/product/avalon-double-driveway-gate', destination: '/shop/driveway-gates/avalon-double-driveway-gate/', permanent: true },
      { source: '/product/berkley-double-driveway-gate', destination: '/shop/driveway-gates/berkley-double-driveway-gate/', permanent: true },
      { source: '/product/brookhaven-double-driveway-gate', destination: '/shop/driveway-gates/brookhaven-double-driveway-gate/', permanent: true },
      { source: '/product/buford-double-driveway-gate', destination: '/shop/driveway-gates/buford-double-driveway-gate/', permanent: true },
      { source: '/product/candler-double-driveway-gate', destination: '/shop/driveway-gates/candler-double-gate/', permanent: true },
      { source: '/product/chamblee-double-driveway-gate', destination: '/shop/driveway-gates/chamblee-double-driveway-gate/', permanent: true },
      { source: '/product/cobb-double-driveway-gate', destination: '/shop/driveway-gates/cobb-double-gate/', permanent: true },
      { source: '/product/dawson-double-driveway-gate', destination: '/shop/driveway-gates/dawson-double-driveway-gate/', permanent: true },
      { source: '/product/dublin-double-driveway-gate', destination: '/shop/driveway-gates/dublin-double-driveway-gate/', permanent: true },
      { source: '/product/dunwoody-double-driveway-gate', destination: '/shop/driveway-gates/dunwoody-double-driveway-gate/', permanent: true },
      { source: '/product/savannah-double-driveway-gate', destination: '/shop/driveway-gates/savannah-double-driveway-gate/', permanent: true },
      { source: '/product/sharpsburg-double-driveway-gate', destination: '/shop/driveway-gates/sharpsburg-double-driveway-gate/', permanent: true },
      { source: '/product/ellijay-double-driveway-gate', destination: '/shop/driveway-gates/ellijay-double-driveway-gate/', permanent: true },
      { source: '/product/emory-double-driveway-gate', destination: '/shop/driveway-gates/emory-double-driveway-gate/', permanent: true },

      // Walk Gates
      { source: '/product/athens-walk-gate', destination: '/shop/walk-gates/athens-walk-gate/', permanent: true },
      { source: '/product/atlanta-walk-gate', destination: '/shop/walk-gates/atlanta-walk-gate/', permanent: true },
      { source: '/product/avalon-walk-gate', destination: '/shop/walk-gates/avalon-walk-gate/', permanent: true },
      { source: '/product/berkley-walk-gate', destination: '/shop/walk-gates/berkley-walk-gate/', permanent: true },
      { source: '/product/brookhaven-walk-gate', destination: '/shop/walk-gates/brookhaven-walk-gate/', permanent: true },
      { source: '/product/buford-walk-gate', destination: '/shop/walk-gates/buford-walk-gate/', permanent: true },
      { source: '/product/candler-walk-gate', destination: '/shop/walk-gates/candler-walk-gate/', permanent: true },
      { source: '/product/chamblee-walk-gate', destination: '/shop/walk-gates/chamblee-walk-gate/', permanent: true },
      { source: '/product/cobb-walk-gate', destination: '/shop/walk-gates/cobb-walk-gate/', permanent: true },
      { source: '/product/dawson-walk-gate', destination: '/shop/walk-gates/dawson-walk-gate/', permanent: true },
      { source: '/product/dublin-walk-gate', destination: '/shop/walk-gates/dublin-walk-gate/', permanent: true },
      { source: '/product/dunwoody-walk-gate', destination: '/shop/walk-gates/dunwoody-walk-gate/', permanent: true },
      { source: '/product/savannah-walk-gate', destination: '/shop/walk-gates/savannah-walk-gate/', permanent: true },
      { source: '/product/sharpsburg-walk-gate', destination: '/shop/walk-gates/sharpsburg-walk-gate/', permanent: true },
      { source: '/product/ellijay-walk-gate', destination: '/shop/walk-gates/ellijay-walk-gate/', permanent: true },
      { source: '/product/emory-walk-gate', destination: '/shop/walk-gates/emory-walk-gate/', permanent: true },

      // Fence Panels
      { source: '/product/athens-panel', destination: '/shop/aluminum-fencing/athens-fence-panel/', permanent: true },
      { source: '/product/atlanta-panel', destination: '/shop/aluminum-fencing/atlanta-fence-panel/', permanent: true },
      { source: '/product/avalon-panel', destination: '/shop/aluminum-fencing/avalon-fence-panel/', permanent: true },
      { source: '/product/berkley-panel', destination: '/shop/aluminum-fencing/berkley-fence-panel/', permanent: true },
      { source: '/product/brookhaven-panel', destination: '/shop/aluminum-fencing/brookhaven-fence-panel/', permanent: true },
      { source: '/product/buford-panel', destination: '/shop/aluminum-fencing/buford-fence-panel/', permanent: true },
      { source: '/product/candler-panel', destination: '/shop/aluminum-fencing/candler-fence-panel/', permanent: true },
      { source: '/product/chamblee-panel', destination: '/shop/aluminum-fencing/chamblee-fence-panel/', permanent: true },
      { source: '/product/cobb-panel', destination: '/shop/aluminum-fencing/cobb-fence-panel/', permanent: true },
      { source: '/product/dawson-panel', destination: '/shop/aluminum-fencing/dawson-fence-panel/', permanent: true },
      { source: '/product/dublin-panel', destination: '/shop/aluminum-fencing/dublin-fence-panel/', permanent: true },
      { source: '/product/dunwoody-panel', destination: '/shop/aluminum-fencing/dunwoody-fence-panel/', permanent: true },
      { source: '/product/savannah-panel', destination: '/shop/aluminum-fencing/savannah-fence-panel/', permanent: true },
      { source: '/product/sharpsburg-panel', destination: '/shop/aluminum-fencing/sharpsburg-fence-panel/', permanent: true },

      // Fence Posts
      { source: '/product/athens-fence-posts', destination: '/shop/fence-posts/athens-fence-posts/', permanent: true },
      { source: '/product/atlanta-fence-posts', destination: '/shop/fence-posts/atlanta-fence-posts/', permanent: true },
      { source: '/product/avalon-fence-posts', destination: '/shop/fence-posts/avalon-fence-posts/', permanent: true },
      { source: '/product/berkley-fence-posts', destination: '/shop/fence-posts/berkley-fence-posts/', permanent: true },
      { source: '/product/brookhaven-fence-posts', destination: '/shop/fence-posts/brookhaven-fence-posts/', permanent: true },
      { source: '/product/buford-fence-posts', destination: '/shop/fence-posts/buford-fence-posts/', permanent: true },
      { source: '/product/candler-fence-posts', destination: '/shop/fence-posts/candler-fence-posts/', permanent: true },
      { source: '/product/chamblee-fence-posts', destination: '/shop/fence-posts/chamblee-fence-posts/', permanent: true },
      { source: '/product/cobb-fence-posts', destination: '/shop/fence-posts/cobb-fence-posts/', permanent: true },
      { source: '/product/dawson-fence-posts', destination: '/shop/fence-posts/dawson-fence-posts/', permanent: true },
      { source: '/product/dublin-fence-posts', destination: '/shop/fence-posts/dublin-fence-posts/', permanent: true },
      { source: '/product/dunwoody-fence-posts', destination: '/shop/fence-posts/dunwoody-fence-posts/', permanent: true },
      { source: '/product/savannah-fence-posts', destination: '/shop/fence-posts/savannah-fence-posts/', permanent: true },
      { source: '/product/sharpsburg-fence-posts', destination: '/shop/fence-posts/sharpsburg-fence-posts/', permanent: true },

      // Accessories
      { source: '/product/aluminum-post-cap', destination: '/shop/accessories/aluminum-post-cap/', permanent: true },
      { source: '/product/gate-gravity-latch', destination: '/shop/accessories/gate-gravity-latch/', permanent: true },
      { source: '/product/post-deck-mount', destination: '/shop/accessories/post-deck-mount/', permanent: true },
      { source: '/product/safetech-3-5-adjustable-tension-gate-hinge-set', destination: '/shop/accessories/safetech-3-5-adjustable-tension-gate-hinge-set/', permanent: true },
      { source: '/product/self-tapping-post-screws', destination: '/shop/accessories/self-tapping-post-screws/', permanent: true },
      { source: '/product/standard-drop-rod', destination: '/shop/accessories/standard-drop-rod/', permanent: true },
      { source: '/product/wall-mounts', destination: '/shop/accessories/wall-mounts/', permanent: true },
      { source: '/product/dd-series-3-top-pull-20-5-magnalatch-gate-latch', destination: '/shop/accessories/d-d-series-3-top-pull-20-5-magnalatch-gate-latch/', permanent: true },

      // Old WooCommerce category pages
      { source: '/fence-supplies/:path*', destination: '/shop/', permanent: true },
      { source: '/product-category/:path*', destination: '/shop/', permanent: true },

      // Catch-all: any remaining /product/ URLs → shop
      { source: '/product/:slug', destination: '/shop/', permanent: false },
    ]
  },
}

module.exports = nextConfig

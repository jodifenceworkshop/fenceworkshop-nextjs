export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Fence Workshop",
    "image": "https://fenceworkshop.com/images/logo.png",
    "@id": "https://fenceworkshop.com",
    "url": "https://fenceworkshop.com",
    "telephone": "(404) 314-4419",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1522 Huber St NW",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30318",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7919,
      "longitude": -84.4276
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "City",
        "name": "Atlanta"
      },
      {
        "@type": "City",
        "name": "Marietta"
      },
      {
        "@type": "City",
        "name": "Alpharetta"
      }
    ],
    "serviceType": [
      "Fence Installation",
      "Commercial Fence Installation",
      "Residential Fence Installation",
      "Aluminum Fencing",
      "Chain Link Fencing",
      "Security Gates",
      "Vinyl Fencing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

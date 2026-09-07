import { site } from "@/lib/data/site";

/** Renders structured data. `<` is escaped so a stray tag in the data cannot break out of the script. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${site.url}#organization`,
  name: site.fullName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: site.heroImage,
  priceRange: "$$",
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot no 30, Nirmal Bag Block C, Pashulok",
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
  sameAs: [site.instagram, site.facebook],
};

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${site.url}${crumb.path}`,
  })),
});

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { retreats } from "@/lib/data/retreats";

export const metadata: Metadata = {
  title: "Ongoing Retreats & Partner Listings",
  description: "Current retreat experiences associated with Mysticism Yoga, with dates and bookings handled through our listed retreat partners.",
  alternates: { canonical: "/yoga-retreats" },
};

const partnered = retreats.filter((retreat) => retreat.bookingUrl);

export default function YogaRetreatsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Ongoing retreats", path: "/yoga-retreats" }])} />

      <PageIntro
        eyebrow="Ongoing retreats"
        title="A retreat for the season you are in."
        text="These retreats are also listed with our booking partners. Browse them here, or open a listing to see live dates and availability."
        crumbs={[{ label: "Retreats", href: "/retreats" }]}
      />

      <section className="retreat-catalog page-width section-pad">
        <div className="catalog-intro">
          <p className="kicker">Find your way in</p>
          <h2>From a weekend reset to a deeper immersion.</h2>
        </div>

        <div className="catalog-list">
          {partnered.map((retreat, index) => (
            <article key={retreat.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3><Link href={`/retreats/${retreat.slug}`}>{retreat.title}</Link></h3>
                <p>{retreat.duration} — {retreat.location}</p>
              </div>
              <strong>{retreat.price}</strong>
              <Link className="text-link" href={retreat.bookingUrl!} target="_blank" rel="noreferrer noopener">Partner listing <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>

        <div className="offering-footer">
          <p>Booking through a partner is optional — the same retreats can be arranged directly with us, usually with more flexibility on dates and room type.</p>
          <Link className="button button-solid" href="/booking">Book direct <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}

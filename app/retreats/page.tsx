import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { RetreatBrowser } from "@/components/retreat-browser";
import { Reveal } from "@/components/reveal";
import { retreats } from "@/lib/data/retreats";

export const metadata: Metadata = {
  title: "Yoga Retreats in Rishikesh & the Himalaya",
  description: "Two nights to a full week. Browse yoga, Ayurveda, detox, and nature retreats with Mysticism Yoga in Rishikesh and the Himalayan foothills.",
  alternates: { canonical: "/retreats" },
};

export default function RetreatsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Retreats", path: "/retreats" }])} />

      <section className="light-hero page-width">
        <p className="kicker">Come as you are</p>
        <h1>Retreats shaped around your return.</h1>
        <p>There is no one right way to begin. Filter by focus and length, or tell us what you are looking for and we will help you find something honest and possible.</p>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <RetreatBrowser retreats={retreats} />
      </section>

      <section className="statement-band statement-forest">
        <Reveal className="page-width">
          <p className="kicker light">Not sure which one</p>
          <h2>Then start with a conversation, not a booking.</h2>
          <div className="button-row" style={{ marginTop: 34 }}>
            <Link className="button button-light" href="/booking">Make an enquiry <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost-light" href="/schedule">See a typical day</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

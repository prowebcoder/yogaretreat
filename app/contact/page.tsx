import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site, whatsappLink } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Mysticism Yoga, Rishikesh",
  description: "Call, email, or WhatsApp Mysticism Yoga and Wellness Centre in Pashulok, Rishikesh — or come and see us in person.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=14&output=embed`;

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <PageIntro
        eyebrow="Come say hello"
        title="Let’s talk about your journey."
        text="Whether you are curious about yoga, holistic healing, or visiting us in Rishikesh, we would love to hear from you."
      />

      <section className="contact-layout page-width section-pad">
        <div>
          <p className="kicker">{site.fullName}</p>
          <h2>Better yet, see us in person.</h2>
          <p>{site.address}</p>
          <a className="contact-link" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="contact-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a className="contact-link" href={whatsappLink()} target="_blank" rel="noreferrer noopener">Message on WhatsApp</a>
          <p className="muted" style={{ marginTop: 26, fontSize: "var(--step-small)" }}>{site.openingHours}</p>
        </div>
        <div className="contact-panel">
          <p className="kicker light">Reach out directly</p>
          <h3>Tell us what brings you here.</h3>
          <div className="button-row">
            <Link className="button button-light" href="/booking">Send an enquiry <span aria-hidden="true">↗</span></Link>
            <a className="button button-ghost-light" href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">Finding us</p>
            <h2>Pashulok, Rishikesh.</h2>
          </div>
          <Link className="text-link" href="/plan-your-visit">Travel details <span aria-hidden="true">→</span></Link>
        </Reveal>

        <div className="contact-cards" style={{ marginTop: 0 }}>
          <div className="contact-card"><h3>Nearest airport</h3><p>Dehradun (DED) — 20 km, about 40 minutes by road.</p></div>
          <div className="contact-card"><h3>Nearest station</h3><p>Haridwar Junction — 45 minutes. Rishikesh station is closer but quieter.</p></div>
          <div className="contact-card"><h3>From Delhi</h3><p>About 6 hours by road, or a 1-hour flight to Dehradun.</p></div>
          <div className="contact-card"><h3>Pick-up</h3><p>Send flight details when you enquire and we will arrange a driver. <Link href="/booking">Ask us</Link>.</p></div>
        </div>

        <div className="map-frame">
          <iframe src={mapSrc} title={`Map showing ${site.fullName} in Rishikesh`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </section>
    </main>
  );
}

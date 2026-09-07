import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { media } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Where You Stay",
  description: "Rooms, sattvic meals, and the grounds at Mysticism Yoga and Wellness Centre in Pashulok, Rishikesh. Single and twin-share options arranged personally.",
  alternates: { canonical: "/accommodation" },
};

const details = [
  { title: "Rooms", detail: "Single and twin-share rooms, simply furnished, with hot water and a place to sit quietly. Ask about a private room when you enquire." },
  { title: "Food", detail: "Three sattvic vegetarian meals a day, cooked fresh and seasonally. Vegan, gluten-free, and Ayurvedically prescribed diets all catered for." },
  { title: "The grounds", detail: "A practice hall, treatment rooms, and shaded outdoor space in Pashulok — the quieter side of Rishikesh, away from the busiest ghats." },
  { title: "House rules", detail: "The centre is alcohol-free, smoke-free, and vegetarian. Mornings start early, and the place goes properly quiet after nine." },
];

export default function AccommodationPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Where you stay", path: "/accommodation" }])} />

      <PageIntro
        eyebrow="Stay with us"
        title="Let the place hold some of the weight."
        text="A retreat is also the space around the practice: time to arrive, rest, and be looked after. Talk to us about your stay in Rishikesh."
        image={media[5]}
      />

      <section className="statement-band statement-forest">
        <div className="page-width">
          <p className="kicker light">Rishikesh / Uttarakhand</p>
          <h2>Arrive slowly.<br />Stay present.</h2>
        </div>
      </section>

      <section className="page-width section-pad">
        <Reveal className="section-head">
          <div>
            <p className="kicker">What to expect</p>
            <h2>Simple, clean,<br /><em>and quiet.</em></h2>
          </div>
          <Link className="text-link" href="/schedule">A typical day <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="module-grid">
          {details.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="copy-split page-width" style={{ paddingBottom: "var(--section)" }}>
        <div>
          <p className="kicker">Plan your stay</p>
          <h2>Details, personally arranged.</h2>
        </div>
        <div>
          <p>Accommodation options and availability are best confirmed directly with the centre so we can understand what you need for your visit — including arriving early, staying on, or travelling with family.</p>
          <div className="button-row" style={{ marginTop: 26 }}>
            <Link className="button button-solid" href="/booking">Ask about rooms <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost" href="/plan-your-visit">Plan your visit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

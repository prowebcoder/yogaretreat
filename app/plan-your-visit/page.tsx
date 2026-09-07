import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { faqGroups } from "@/lib/data/faq";
import { media, site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Plan Your Visit to Rishikesh",
  description: "How to reach Mysticism Yoga in Rishikesh: airports, trains, visas, the best time of year to come, and what to pack for a yoga retreat in India.",
  alternates: { canonical: "/plan-your-visit" },
};

const routes = [
  { title: "By air", detail: "Dehradun (Jolly Grant, DED) is 20 km away — about 40 minutes by road. Daily connections from Delhi, Mumbai, and Bengaluru.", note: "Best option" },
  { title: "From Delhi", detail: "Roughly 6 hours by car, or a 1-hour flight to Dehradun. The overnight train to Haridwar is a comfortable third option.", note: "Most common" },
  { title: "By train", detail: "Haridwar Junction is the nearest major station, 45 minutes away. Rishikesh station takes fewer services but is closer.", note: "Scenic" },
  { title: "Pick-up", detail: "Send your flight or train details when you enquire and we will arrange a driver to meet you. Ask before booking a taxi on arrival.", note: "We arrange it" },
];

const seasons = [
  { months: "October – March", weather: "8–25°C, clear", verdict: "The classic window. Cold mornings, bright days, busiest months." },
  { months: "April – June", weather: "20–38°C, dry heat", verdict: "Early practice, long restful afternoons. Excellent for detox and Ayurveda." },
  { months: "July – September", weather: "22–32°C, monsoon", verdict: "Green, quiet, and cheaper. Bring waterproofs and leave slack in travel days." },
];

const packing = [
  "Three sets of loose practice clothes — comfort over compression",
  "One warm layer for mornings from October onward",
  "Clothes covering shoulders and knees for temples and the ghats",
  "Slip-on shoes: you will remove them at every doorway",
  "Refillable water bottle and a headtorch for evening walks",
  "Old clothes and an old towel for Ayurvedic oil treatments",
  "Type C / D plug adaptor and small-denomination cash",
];

export default function PlanYourVisitPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Plan your visit", path: "/plan-your-visit" }])} />

      <PageIntro
        eyebrow="Plan your visit"
        title="Getting here is the first part of the retreat."
        text="Everything practical in one place: how to reach Pashulok, when to come, what a visa involves, and what is actually worth packing."
        image={media[2]}
      />

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">Getting here</p>
            <h2>Four ways in.</h2>
          </div>
        </Reveal>
        <div className="contact-cards" style={{ marginTop: 0 }}>
          {routes.map((route, index) => (
            <Reveal className="contact-card" key={route.title} delay={index * 70}>
              <p className="kicker">{route.note}</p>
              <h3>{route.title}</h3>
              <p>{route.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 26, fontSize: "var(--step-small)" }}>Our address: {site.address}</p>
      </section>

      <section className="statement-band statement-sand">
        <div className="page-width">
          <p className="kicker">When to come</p>
          <h2>The season changes the retreat more than the retreat does.</h2>
        </div>
      </section>

      <section className="page-width section-pad">
        <div className="table-scroll">
          <table className="timetable">
            <thead>
              <tr><th scope="col">Months</th><th scope="col">Weather</th><th scope="col">What it is like</th></tr>
            </thead>
            <tbody>
              {seasons.map((season) => (
                <tr key={season.months}>
                  <th scope="row">{season.months}</th>
                  <td>{season.weather}</td>
                  <td>{season.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="detail-grid" style={{ marginTop: 80 }}>
          <div>
            <p className="kicker">What to bring</p>
            <h2>Pack light.<br />You will wear four things.</h2>
          </div>
          <div>
            <ul className="plain-list">{packing.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="text-link" href="/journal/what-to-pack-for-a-yoga-retreat" style={{ marginTop: 30 }}>The longer packing list <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="before-booking">
        <div className="page-width before-booking-grid">
          <div>
            <p className="kicker">Practicalities</p>
            <h2>Visas, food,<br /><em>and house rules.</em></h2>
          </div>
          <div>
            <FaqAccordion items={[...faqGroups[3].items, ...faqGroups[2].items]} openFirst />
          </div>
        </div>
      </section>

      <section className="simple-contact">
        <Reveal className="page-width simple-contact-grid">
          <div>
            <p className="kicker light">Still working it out</p>
            <h2>Send us your dates.</h2>
          </div>
          <div>
            <p>Tell us when you can travel and we will tell you honestly what those weeks are like here — including if we think another month would suit you better.</p>
            <Link className="button button-light" href="/booking">Make an enquiry <span aria-hidden="true">↗</span></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

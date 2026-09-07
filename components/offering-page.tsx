import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import type { Offering } from "@/lib/data/offerings";
import { site, whatsappLink } from "@/lib/data/site";

const bookingQuestions = [
  { question: "How do I choose a session?", answer: "Share your goals, preferred dates, and anything relevant about your health in the enquiry form. The team will guide you toward the right option rather than selling you the longest one." },
  { question: "Are the listed rates current?", answer: "Rates are shown from the centre's own price list and should be confirmed directly before booking. Longer programmes are often quoted as a package." },
  { question: "How do I reserve?", answer: "Use the enquiry form, WhatsApp, or call the centre. Online payment is not configured yet, so everything is confirmed in conversation first." },
  { question: "Can I combine this with a retreat?", answer: "Yes — most therapies slot into the retreat day around the class times, so you never have to choose between the two." },
];

export function OfferingPage({ offering }: { offering: Offering }) {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: offering.eyebrow, path: `/${offering.slug}` }])} />

      <section className="offering-hero">
        <div className="offering-hero-image"><Image src={offering.image} alt={offering.title} fill priority sizes="100vw" /></div>
        <div className="page-width offering-hero-copy">
          <p className="kicker light">{offering.eyebrow} / Mysticism Yoga</p>
          <h1>{offering.title}</h1>
          <p>{offering.intro}</p>
          <div className="button-row">
            <Link className="button button-light" href="/booking">Enquire about this <span aria-hidden="true">↗</span></Link>
            <a className="button button-ghost-light" href={whatsappLink(`Hello, I would like to know more about ${offering.eyebrow}.`)} target="_blank" rel="noreferrer noopener">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="quick-facts page-width">
        <div><span>Focus</span><strong>{offering.eyebrow}</strong></div>
        <div><span>Options</span><strong>{offering.items.length} experiences</strong></div>
        <div><span>Location</span><strong>Rishikesh, India</strong></div>
        <div><span>Booking</span><strong>Personal enquiry</strong></div>
      </section>

      <section className="experience-layout page-width section-pad">
        <article>
          <Reveal>
            <p className="kicker">Overview</p>
            <h2>A thoughtful way to begin.</h2>
            <p className="experience-lead">Explore the sessions, treatments, and courses available through Mysticism Yoga. Every visit begins with a personal conversation so the pace and format can meet your needs — and so nothing is booked that you do not need.</p>
          </Reveal>

          <Reveal className="offering-heading">
            <p className="kicker">Treatments, courses, and sessions</p>
            <h2>Choose the pace<br /><em>that meets you.</em></h2>
          </Reveal>

          <div className="offering-list">
            {offering.items.map((item, index) => (
              <article key={item.name}>
                <span className="offering-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
                {item.price && <strong>{item.price}</strong>}
              </article>
            ))}
          </div>

          <div className="offering-footer">
            <p>Prices are indicative and confirmed at the time of booking. Treatments are chosen after a consultation, not from a menu — tell us what you are dealing with and we will suggest the appropriate course.</p>
            <Link className="button button-solid" href="/booking">Enquire <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <aside className="enquiry-card">
          <p className="kicker light">Start here</p>
          <h3>Find the right experience for you.</h3>
          <p>Tell us what you are looking for and our team can confirm availability, pricing, and the next step.</p>
          <Link className="button button-light" href="/booking">Send an enquiry <span aria-hidden="true">↗</span></Link>
          <a className="button button-ghost-light" href={whatsappLink()} target="_blank" rel="noreferrer noopener">WhatsApp <span aria-hidden="true">↗</span></a>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </aside>
      </section>

      <section className="before-booking">
        <div className="page-width before-booking-grid">
          <div>
            <p className="kicker">Before you book</p>
            <h2>Clear details.<br /><em>Personal guidance.</em></h2>
          </div>
          <div><FaqAccordion items={bookingQuestions} openFirst /></div>
        </div>
      </section>
    </main>
  );
}

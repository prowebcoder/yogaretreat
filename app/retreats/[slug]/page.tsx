import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RetreatCard } from "@/components/retreat-card";
import { getRetreat, retreats } from "@/lib/data/retreats";
import { site, whatsappLink } from "@/lib/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return retreats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) return { title: "Retreat not found" };
  return {
    title: retreat.title,
    description: retreat.summary,
    alternates: { canonical: `/retreats/${retreat.slug}` },
    openGraph: { title: retreat.title, description: retreat.summary, images: [retreat.image] },
  };
}

const bookingQuestions = [
  { question: "How do I reserve a place?", answer: "Use the enquiry form, message us on WhatsApp, or call the centre. Our team confirms dates, pricing, and availability personally before anything is committed." },
  { question: "Can the experience be personalised?", answer: "Yes. Begin with your intentions, dates, and any health requirements, and we will shape the schedule around them rather than fitting you into a fixed one." },
  { question: "Is online payment available?", answer: "Not yet. Payment is arranged directly with the centre after we have confirmed the details with you." },
  { question: "What if I am travelling alone?", answer: "Most guests do. Groups are small, meals are shared, and single or twin-share rooms are both available." },
];

export default async function RetreatDetail({ params }: Props) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) notFound();

  const others = retreats.filter((item) => item.slug !== retreat.slug).slice(0, 3);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: retreat.title,
          description: retreat.summary,
          image: retreat.image,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: { "@type": "Place", name: site.fullName, address: site.address },
          organizer: { "@type": "Organization", name: site.fullName, url: site.url },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Retreats", path: "/retreats" }, { name: retreat.title, path: `/retreats/${retreat.slug}` }])} />

      <section className="experience-hero">
        <Image src={retreat.image} alt={retreat.title} fill priority sizes="100vw" />
        <div className="experience-hero-shade" />
        <div className="page-width experience-hero-copy">
          <p className="kicker light">{retreat.focus} retreat / {retreat.location}</p>
          <h1>{retreat.title}</h1>
          <p>{retreat.summary}</p>
          <div className="button-row">
            <Link className="button button-light" href="/booking">Reserve your place <span aria-hidden="true">↗</span></Link>
            <a className="button button-ghost-light" href={whatsappLink(`Hello, I am interested in the ${retreat.title}.`)} target="_blank" rel="noreferrer noopener">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="quick-facts page-width">
        <div><span>Duration</span><strong>{retreat.duration}</strong></div>
        <div><span>Level</span><strong>{retreat.level}</strong></div>
        <div><span>From</span><strong>{retreat.price}</strong></div>
        <div><span>Availability</span><strong>{retreat.status}</strong></div>
      </section>

      <section className="experience-layout page-width section-pad">
        <article>
          <Reveal>
            <p className="kicker">Retreat overview</p>
            <h2>A practice shaped around your return.</h2>
            <p className="experience-lead">
              Our experienced instructors guide you through ancient yoga techniques and holistic healing practices that support the mind, body, and spirit. Days are structured but never crowded — there is always more rest in them than people expect.
            </p>
          </Reveal>

          <h3 className="subheading">What to expect</h3>
          <ul className="plain-list">{retreat.highlights.map((item) => <li key={item}>{item}</li>)}</ul>

          <h3 className="subheading">What is included</h3>
          <ul className="plain-list">{retreat.includes.map((item) => <li key={item}>{item}</li>)}</ul>

          <h3 className="subheading">A day on this retreat</h3>
          <div className="rhythm-list">
            {retreat.rhythm.map((slot) => (
              <div className="rhythm-row" key={slot.time}>
                <time>{slot.time}</time>
                <div>
                  <strong>{slot.title}</strong>
                  <p>{slot.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="detail-note">
            <p className="kicker">Good to know</p>
            <p>{retreat.priceNote} Dates, accommodation, and availability are arranged with you directly so everything is clear before you reserve.</p>
          </div>
        </article>

        <aside className="enquiry-card">
          <p className="kicker light">Your seat is waiting</p>
          <h3>Begin with a conversation.</h3>
          <p>Share your preferred dates and what you are looking for. We will reply with the right next step, usually within a working day.</p>
          <Link className="button button-light" href="/booking">Start an enquiry <span aria-hidden="true">↗</span></Link>
          {retreat.bookingUrl && (
            <a className="button button-ghost-light" href={retreat.bookingUrl} target="_blank" rel="noreferrer noopener">Book via partner <span aria-hidden="true">↗</span></a>
          )}
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </aside>
      </section>

      <section className="before-booking">
        <div className="page-width before-booking-grid">
          <div>
            <p className="kicker">Plan your retreat</p>
            <h2>Nothing hidden.<br /><em>Everything considered.</em></h2>
          </div>
          <div><FaqAccordion items={bookingQuestions} openFirst /></div>
        </div>
      </section>

      <section className="page-width section-pad">
        <div className="section-head">
          <div>
            <p className="kicker">Also worth considering</p>
            <h2>Other ways to spend the time.</h2>
          </div>
          <Link className="text-link" href="/retreats">All retreats <span aria-hidden="true">→</span></Link>
        </div>
        <div className="retreat-grid">
          {others.map((item) => <RetreatCard retreat={item} key={item.slug} />)}
        </div>
      </section>
    </main>
  );
}

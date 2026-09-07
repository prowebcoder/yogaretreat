import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Yoga at Mysticism — Hatha, Vinyasa, Pranayama & Yin",
  description: "How and what we teach: hatha, vinyasa, yin, pranayama, and yoga nidra, taught in small groups for the bodies actually in the room.",
  alternates: { canonical: "/yoga" },
};

const styles = [
  { title: "Hatha", detail: "The foundation. Postures held long enough to notice what they are doing, with time to set them up properly." },
  { title: "Vinyasa", detail: "Movement linked to breath. Warmer and more continuous, still taught with attention to alignment." },
  { title: "Yin & restorative", detail: "Long, supported holds for connective tissue and the nervous system. Usually where the week's tiredness surfaces." },
  { title: "Pranayama", detail: "Breath practices taught in sequence, with the contraindications explained rather than skipped." },
  { title: "Yoga nidra", detail: "Guided conscious rest. Twenty minutes that most people find harder to skip than the asana." },
  { title: "Philosophy", detail: "Where these practices came from and what they were meant to do — read closely, not recited." },
];

export default function YogaPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Yoga", path: "/yoga" }])} />

      <PageIntro
        eyebrow="The practice"
        title="Ancient wisdom, made personal."
        text="At Mysticism Yoga, yoga is a living practice: a way to listen more closely to the body, steady the mind, and move through life with greater presence."
      />

      <section className="statement-band">
        <div className="page-width">
          <p className="kicker light">A grounded approach</p>
          <h2>Find the breath beneath the busy.</h2>
        </div>
      </section>

      <section className="page-width section-pad">
        <Reveal className="section-head">
          <div>
            <p className="kicker">What we teach</p>
            <h2>Six threads of<br /><em>one practice.</em></h2>
          </div>
          <Link className="text-link" href="/schedule">See the timetable <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="module-grid">
          {styles.map((style) => (
            <article key={style.title}>
              <h4>{style.title}</h4>
              <p>{style.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="copy-split page-width" style={{ paddingBottom: "var(--section)" }}>
        <div>
          <p className="kicker">Practice with us</p>
          <h2>Guidance that leaves room for you.</h2>
        </div>
        <div>
          <p>Our experienced instructors guide you through ancient yoga techniques in a supportive, human way. Whether you are beginning or deepening an existing practice, your journey can begin with a simple conversation.</p>
          <div className="button-row" style={{ marginTop: 26 }}>
            <Link className="button button-solid" href="/booking">Ask about practice <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost" href="/teacher-training">Teacher training</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

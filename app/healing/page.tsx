import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { navGroups } from "@/lib/data/nav";

export const metadata: Metadata = {
  title: "Holistic Healing — Ayurveda, Naturopathy, Sound & Energy Work",
  description: "Ayurveda, naturopathy, sound healing, meditation, breathwork, and pranic healing at Mysticism Yoga and Wellness Centre in Rishikesh.",
  alternates: { canonical: "/healing" },
};

const wellnessLinks = navGroups.find((group) => group.label === "Wellness")!.links;

export default function HealingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Holistic healing", path: "/healing" }])} />

      <PageIntro
        eyebrow="Holistic healing"
        title="A softer way back to yourself."
        text="We focus on holistic healing practices that rejuvenate the mind, body, and spirit, creating space for inner peace through yoga."
      />

      <section className="statement-band statement-sand">
        <div className="page-width">
          <p className="kicker">Mind / body / spirit</p>
          <h2>Nothing to prove.<br />Nowhere else to be.</h2>
        </div>
      </section>

      <section className="page-width section-pad">
        <Reveal className="section-head">
          <div>
            <p className="kicker">The disciplines</p>
            <h2>Six practices,<br /><em>one approach.</em></h2>
          </div>
          <Link className="text-link" href="/booking">Ask which suits you <span aria-hidden="true">→</span></Link>
        </Reveal>

        <div className="offering-list">
          {wellnessLinks.map((link, index) => (
            <article key={link.href}>
              <span className="offering-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3><Link href={link.href}>{link.label}</Link></h3>
                <p>{link.detail}</p>
              </div>
              <strong><Link href={link.href}>View <span aria-hidden="true">↗</span></Link></strong>
            </article>
          ))}
        </div>
      </section>

      <section className="copy-split page-width" style={{ paddingBottom: "var(--section)" }}>
        <div>
          <p className="kicker">Come as you are</p>
          <h2>Healing begins with attention.</h2>
        </div>
        <div>
          <p>Explore an approach to wellness that respects the whole person. Nothing is prescribed from a menu — we talk first, then suggest the practices and pace that fit your visit.</p>
          <Link className="text-link" href="/booking">Begin a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}

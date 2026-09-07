import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { stats } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Mysticism Yoga & Wellness Centre",
  description: "Founded in 2024 and guided by Yogi Rahul, Mysticism Yoga blends traditional yogic practice with Ayurveda, naturopathy, sound healing, and meditation in Rishikesh.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Taught plainly", detail: "No mystique for its own sake. If we ask you to do something, you will be told what it is for." },
  { title: "Small by design", detail: "Groups stay small enough that you are taught by name, and adjustments are made for your body." },
  { title: "Whole-person care", detail: "Yoga, Ayurveda, naturopathy, sound, and breath are treated as one approach rather than a menu." },
  { title: "Honest guidance", detail: "If a shorter stay or a different month would serve you better, we will say so before you book." },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <PageIntro
        eyebrow="About Mysticism"
        title="A place for inner peace in Rishikesh."
        text="Mysticism Yoga and Wellness Centre invites you to explore ancient yoga techniques and holistic healing practices in a warm, considered environment."
      />

      <section className="stat-strip">
        <div className="page-width stat-grid">
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <Reveal as="section" className="about-band page-width section-pad">
        <p className="kicker">Our roots</p>
        <h2>Rejuvenate the mind.<br />Restore the body.<br /><em>Listen inward.</em></h2>
        <p className="about-copy">Founded in 2024, Mysticism Yoga and Wellness Centre was born from a passion for yoga and a desire to share its transformative power. Guided by Yogi Rahul, the centre blends traditional yogic practices with natural healing sciences.</p>
      </Reveal>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">What we hold to</p>
            <h2>Four things we<br /><em>will not trade.</em></h2>
          </div>
          <Link className="text-link" href="/teachers">Meet the teachers <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="module-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h4>{value.title}</h4>
              <p>{value.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-strip">
        <Reveal className="page-width">
          <p className="kicker light">Our vision</p>
          <h2>A supportive space for joy, peace, transformation, and self-discovery.</h2>
          <p>Alongside yoga, the centre integrates Ayurveda, naturopathy, sound healing, meditation, breathwork, and energy work.</p>
          <div className="button-row" style={{ marginTop: 34 }}>
            <Link className="button button-light" href="/retreats">Explore retreats <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost-light" href="/healing">Holistic healing</Link>
          </div>
        </Reveal>
      </section>

      <Testimonials />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { trainings } from "@/lib/data/trainings";
import { whatsappLink } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Rishikesh — 100, 200 & 300 Hour",
  description: "Residential yoga teacher training in Rishikesh: 100-hour immersion, 200-hour foundation, and 300-hour advanced courses with Mysticism Yoga.",
  alternates: { canonical: "/teacher-training" },
};

const trainingFaqs = [
  { question: "Do I need to be advanced to join the 200-hour?", answer: "No. You need a regular practice — roughly six months — and the willingness to work. Flexibility is not a prerequisite; curiosity is." },
  { question: "Is the certification recognised?", answer: "Ask us directly about current registration status before you enrol. We would rather answer that honestly than let a badge on a website do it." },
  { question: "What is a training day like?", answer: "Two practice sessions, two or three theory sessions, and a genuinely quiet afternoon. Expect around eight structured hours, six days a week, with one day off." },
  { question: "Can I take the 300-hour if I trained elsewhere?", answer: "Yes. A 200-hour certificate from any school is accepted. Send us your certificate when you enquire." },
  { question: "What if I cannot commit to the full course?", answer: "The 100-hour immersion covers the same foundations in two weeks and can be credited toward a 200-hour course later." },
];

export default function TeacherTrainingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Teacher training", path: "/teacher-training" }])} />

      <section className="light-hero page-width">
        <p className="kicker">Teacher training</p>
        <h1>Learn it properly.<br />Then teach it plainly.</h1>
        <p>Residential teacher training in Rishikesh, taught in small groups. You leave able to hold a room, explain what you are asking for, and keep your own practice alive once the course ends.</p>
        <div className="button-row" style={{ marginTop: 32 }}>
          <Link className="button button-solid" href="/booking">Enquire about dates <span aria-hidden="true">↗</span></Link>
          <a className="button button-ghost" href={whatsappLink("Hello, I would like information about your teacher training courses.")} target="_blank" rel="noreferrer noopener">Ask on WhatsApp</a>
        </div>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <div className="training-grid">
          {trainings.map((training, index) => (
            <Reveal className="training-card" key={training.slug} delay={index * 90}>
              <p className="kicker">{training.hours}</p>
              <h3>{training.title}</h3>
              <p>{training.intro}</p>
              <div className="training-meta">
                <span>Duration <b>{training.duration}</b></span>
                <span>Level <b>{training.level.split(" — ")[0]}</b></span>
                <span>Investment <b>{training.price}</b></span>
              </div>
              <Link className="text-link" href={`#${training.slug}`}>See the curriculum <span aria-hidden="true">→</span></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement-band statement-sand">
        <div className="page-width">
          <p className="kicker">How we teach</p>
          <h2>Small groups. Real feedback.<br />No performance.</h2>
        </div>
      </section>

      {trainings.map((training) => (
        <section className="page-width section-pad" id={training.slug} key={training.slug}>
          <Reveal className="offering-heading">
            <div>
              <p className="kicker">{training.hours}</p>
              <p className="muted" style={{ fontSize: "var(--step-small)" }}>{training.duration}</p>
            </div>
            <div>
              <h2>{training.title}</h2>
              <p className="lead" style={{ marginTop: 22 }}>{training.intro}</p>
            </div>
          </Reveal>

          <div className="module-grid">
            {training.modules.map((module) => (
              <article key={module.title}>
                <h4>{module.title}</h4>
                <p>{module.detail}</p>
              </article>
            ))}
          </div>

          <div className="detail-grid" style={{ marginTop: 60 }}>
            <div>
              <h3 className="subheading" style={{ marginTop: 0 }}>What is included</h3>
              <ul className="plain-list">{training.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3 className="subheading" style={{ marginTop: 0 }}>Who it suits</h3>
              <p className="muted">{training.suitedTo}</p>
              <p className="muted">{training.priceNote}</p>
              <Link className="button button-solid" href="/booking" style={{ marginTop: 12 }}>Enquire about the {training.hours} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      ))}

      <section className="before-booking">
        <div className="page-width before-booking-grid">
          <div>
            <p className="kicker">Before you enrol</p>
            <h2>Straight answers.<br /><em>No pressure.</em></h2>
          </div>
          <div><FaqAccordion items={trainingFaqs} openFirst /></div>
        </div>
      </section>
    </main>
  );
}

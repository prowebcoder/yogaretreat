import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { teachers } from "@/lib/data/teachers";

export const metadata: Metadata = {
  title: "Our Teachers",
  description: "Meet the teachers and practitioners at Mysticism Yoga and Wellness Centre in Rishikesh — yoga, Ayurveda, sound healing, and meditation.",
  alternates: { canonical: "/teachers" },
};

const initials = (name: string) =>
  name.replace(/^Placeholder — /, "").split(" ").slice(0, 2).map((word) => word[0]).join("").toUpperCase();

export default function TeachersPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Teachers", path: "/teachers" }])} />

      <PageIntro
        eyebrow="The people"
        title="Who you will practise with."
        text="Small groups mean you are taught by name, not by numbers. These are the people who will guide your days here."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <div className="teacher-grid">
          {teachers.map((teacher, index) => (
            <Reveal className="teacher-card" key={teacher.name} delay={index * 80}>
              <span className="teacher-mark" aria-hidden="true">{initials(teacher.name)}</span>
              <div>
                <h3>{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
              </div>
              <p>{teacher.bio}</p>
              <div className="tag-row">
                {teacher.credentials.map((credential) => <span className="tag" key={credential}>{credential}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="testimonial-note">Profiles marked &ldquo;Placeholder&rdquo; are drafts. Replace the names, biographies, and credentials with the real team before publishing.</p>
      </section>

      <section className="story-strip">
        <Reveal className="page-width">
          <p className="kicker light">How we teach</p>
          <h2>Nobody here will ask you to look like the photograph.</h2>
          <p>Classes are taught for the bodies actually in the room. If a posture is not right for yours, you will be given something that is — and told why.</p>
          <div className="button-row" style={{ marginTop: 32 }}>
            <Link className="button button-light" href="/schedule">See a typical day <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost-light" href="/teacher-training">Train with us</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

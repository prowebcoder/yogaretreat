import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { dailyRhythm, scheduleNotes, weeklyClasses } from "@/lib/data/schedule";

export const metadata: Metadata = {
  title: "A Day at the Centre — Daily Rhythm & Class Timetable",
  description: "The daily rhythm of a retreat at Mysticism Yoga in Rishikesh, plus the weekly drop-in class timetable and what to expect from each session.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "A day here", path: "/schedule" }])} />

      <section className="light-hero page-width">
        <p className="kicker">A day here</p>
        <h1>Structured enough to hold you. Loose enough to breathe.</h1>
        <p>This is the shape of a typical retreat day. Everything on it is an invitation — skipping a session to sleep, walk, or sit by the river is a valid choice, not a failure.</p>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <div className="timeline">
          {dailyRhythm.map((slot, index) => (
            <Reveal className="timeline-row" data-kind={slot.kind} key={slot.time} delay={Math.min(index, 6) * 60}>
              <time>{slot.time}</time>
              <div>
                <h3>{slot.title}</h3>
                <p>{slot.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement-band statement-forest">
        <div className="page-width">
          <p className="kicker light">The middle of the day</p>
          <h2>The rest is not the gap between sessions. It is part of the practice.</h2>
        </div>
      </section>

      <section className="page-width section-pad">
        <Reveal className="section-head">
          <div>
            <p className="kicker">Weekly classes</p>
            <h2>Drop-in timetable.</h2>
          </div>
          <Link className="text-link" href="/booking">Reserve a place <span aria-hidden="true">→</span></Link>
        </Reveal>

        <div className="table-scroll">
          <table className="timetable">
            <caption className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Weekly class timetable</caption>
            <thead>
              <tr><th scope="col">Day</th><th scope="col">Morning — 07:30</th><th scope="col">Evening — 17:30</th></tr>
            </thead>
            <tbody>
              {weeklyClasses.map((row) => (
                <tr key={row.day}>
                  <th scope="row">{row.day}</th>
                  <td>{row.morning}</td>
                  <td>{row.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="plain-list" style={{ marginTop: 48, maxWidth: "68ch" }}>
          {scheduleNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </section>

      <section className="simple-contact">
        <Reveal className="page-width simple-contact-grid">
          <div>
            <p className="kicker light">Want to see it for yourself</p>
            <h2>Come for a morning first.</h2>
          </div>
          <div>
            <p>You do not have to commit to a week. Join a single class, sit in on a meditation, and decide from there.</p>
            <div className="button-row">
              <Link className="button button-light" href="/booking">Book a class <span aria-hidden="true">↗</span></Link>
              <Link className="button button-ghost-light" href="/retreats">See the retreats</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

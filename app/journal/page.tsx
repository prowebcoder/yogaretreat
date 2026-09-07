import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { journal, formatDate } from "@/lib/data/journal";

export const metadata: Metadata = {
  title: "Journal — Notes on Practice, Ayurveda & Rishikesh",
  description: "Practical writing from Mysticism Yoga: when to visit Rishikesh, what to pack for a retreat, preparing for an Ayurvedic consultation, and keeping a practice at home.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }])} />

      <section className="light-hero page-width">
        <p className="kicker">Journal</p>
        <h1>Notes from the centre.</h1>
        <p>Practical writing rather than inspiration: how to prepare, when to come, and what tends to happen after you leave.</p>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <div className="post-grid">
          {journal.map((post, index) => (
            <Reveal className="post-card" href={`/journal/${post.slug}`} key={post.slug} delay={index * 80}>
              <div className="post-card-media">
                <Image src={post.image} alt="" fill sizes="(max-width: 860px) 100vw, 33vw" priority={index < 2} />
              </div>
              <div className="post-card-body">
                <p className="post-card-meta"><span>{post.category}</span><span>{post.readingTime}</span></p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="text-link">{formatDate(post.date)} <span aria-hidden="true">→</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

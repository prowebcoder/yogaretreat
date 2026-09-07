import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { allFaqs, faqGroups } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Booking, practice, food, accommodation, visas, and travel — the questions guests ask before a yoga retreat at Mysticism Yoga in Rishikesh.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />

      <PageIntro
        eyebrow="Questions"
        title="A little clarity before you arrive."
        text="Have a question that is not answered here? Our team is happy to help personally — ask us anything, including the awkward ones."
      />

      <section className="faq-list page-width">
        {faqGroups.map((group) => (
          <div className="faq-group" key={group.title}>
            <h2>{group.title}</h2>
            <FaqAccordion items={group.items} />
          </div>
        ))}

        <div className="detail-note" style={{ marginTop: 64 }}>
          <p className="kicker">Still unsure</p>
          <p>Write to us with the specific thing you are worried about. We would rather answer it now than have you arrive uncertain. <Link className="contact-link" style={{ display: "inline" }} href="/booking">Ask a question</Link>.</p>
        </div>
      </section>
    </main>
  );
}

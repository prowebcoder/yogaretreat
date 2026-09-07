import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { site, whatsappLink } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Enquire & Book",
  description: "Send an enquiry to Mysticism Yoga in Rishikesh. Tell us your dates and what you are looking for, and we will reply personally with the right next step.",
  alternates: { canonical: "/booking" },
  robots: { index: true, follow: true },
};

export default function BookingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Booking", path: "/booking" }])} />

      <PageIntro
        eyebrow="Your next step"
        title="Let’s make a plan."
        text="Share a little about what you are looking for. We will respond personally with the right next step, dates, and details — usually within one working day."
      />

      <section className="booking-layout page-width">
        <div className="booking-aside">
          <p className="kicker">A considered beginning</p>
          <p>Every journey starts with a conversation. We do not take payment online yet; our team confirms your experience and availability with you first, so nothing is booked that you do not need.</p>
          <p className="booking-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a><br />
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </p>
          <a className="button button-ghost" href={whatsappLink()} target="_blank" rel="noreferrer noopener">Message on WhatsApp <span aria-hidden="true">↗</span></a>
          <p className="form-note" style={{ marginTop: 26 }}>{site.openingHours}</p>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}

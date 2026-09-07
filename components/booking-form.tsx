"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { offerings } from "@/lib/data/offerings";
import { retreats } from "@/lib/data/retreats";
import { trainings } from "@/lib/data/trainings";
import { whatsappLink } from "@/lib/data/site";

const programGroups = [
  { label: "Retreats", options: retreats.map((retreat) => retreat.title) },
  { label: "Teacher training", options: trainings.map((training) => training.title) },
  { label: "Therapies & courses", options: offerings.map((offering) => offering.title.replace(/\.$/, "")) },
  { label: "Something else", options: ["Not sure yet — please advise", "Group or private booking", "Drop-in classes"] },
];

const today = new Date().toISOString().slice(0, 10);

export function BookingForm({ preselect }: { preselect?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();

    if (!name || !email || !phone) { setError("Please add your name, email, and phone number so we can reach you."); return; }
    if (!email.includes("@")) { setError("That email address does not look right — please check it."); return; }
    if (!form.get("consent")) { setError("Please confirm we may contact you about your enquiry."); return; }

    setError("");
    setSending(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "enquiry", ...Object.fromEntries(form.entries()) }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("We could not send that just now. Please email or WhatsApp us instead — the details are on the left.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="booking-success">
        <p className="kicker light">Enquiry received</p>
        <h2>Your journey has begun.</h2>
        <p>Thank you for reaching out. Our team will be in touch at the email or phone number you shared to talk through dates, availability, and the right next step. We usually reply within one working day.</p>
        <div className="button-row">
          <a className="button button-light" href={whatsappLink("Hello, I have just sent an enquiry through the website.")} target="_blank" rel="noreferrer noopener">Continue on WhatsApp <span aria-hidden="true">↗</span></a>
          <Link className="button button-ghost-light" href="/plan-your-visit">Plan your visit <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <label>
        Which experience interests you?
        <select name="program" defaultValue={preselect ?? retreats[0].title}>
          {programGroups.map((group) => (
            <optgroup label={group.label} key={group.label}>
              {group.options.map((option) => <option key={option}>{option}</option>)}
            </optgroup>
          ))}
        </select>
      </label>

      <div className="form-row">
        <label>Your name<input name="name" placeholder="Your full name" autoComplete="name" required /></label>
        <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
      </div>

      <div className="form-row">
        <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+91" autoComplete="tel" required /></label>
        <label>
          Guests
          <select name="guests" defaultValue="1 guest">
            <option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option>
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>Preferred arrival<input name="arrival" type="date" min={today} /></label>
        <label>
          How long?
          <select name="stay" defaultValue="Not decided yet">
            <option>Not decided yet</option><option>1-3 nights</option><option>4-7 nights</option><option>1-2 weeks</option><option>A month or more</option>
          </select>
        </label>
      </div>

      <label>
        Have you practised before?
        <select name="experience" defaultValue="Some experience">
          <option>Completely new to yoga</option><option>Some experience</option><option>Regular practitioner</option><option>Teacher or trainee</option>
        </select>
      </label>

      <label>Anything you would like us to know?<textarea name="message" rows={4} placeholder="Your questions, intentions, dietary needs, injuries, or requirements" /></label>

      <label className="form-consent">
        <input type="checkbox" name="consent" value="yes" />
        <span>Yes, you may contact me by email, phone, or WhatsApp about this enquiry.</span>
      </label>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="button-row">
        <button className="button button-solid form-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span></button>
        <a className="button button-ghost" href={whatsappLink()} target="_blank" rel="noreferrer noopener">Or message on WhatsApp</a>
      </div>
      <p className="form-note">Dates, pricing, and availability are confirmed personally by our team. We do not share your details with anyone.</p>
    </form>
  );
}

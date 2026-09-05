"use client";

import { FormEvent, useState } from "react";
import { retreats } from "@/lib/data/retreats";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("phone")) {
      setError("Please add your name, email, and phone number so we can reach you.");
      return;
    }
    setError("");
    setSubmitted(true);
  }
  if (submitted) return <div className="booking-success"><p className="kicker">Enquiry received</p><h2>Your journey has begun.</h2><p>Thank you for reaching out. Our team will be in touch at the email or phone number you shared to talk through dates and availability.</p></div>;
  return <form className="booking-form" onSubmit={submit} noValidate><label>Which experience interests you?<select name="retreat" defaultValue={retreats[0].title}>{retreats.map((retreat) => <option key={retreat.slug}>{retreat.title}</option>)}</select></label><div className="form-row"><label>Your name<input name="name" placeholder="Your full name" /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" /></label></div><div className="form-row"><label>Phone number<input name="phone" type="tel" placeholder="+91" /></label><label>Guests<select name="guests" defaultValue="1"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option></select></label></div><label>Preferred dates<input name="dates" placeholder="Tell us what works for you" /></label><label>Anything you would like us to know?<textarea name="message" rows={4} placeholder="Your questions, intentions, or requirements" /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button form-submit" type="submit">Send enquiry <span>↗</span></button><p className="form-note">Dates, pricing, and availability are confirmed personally by our team.</p></form>;
}
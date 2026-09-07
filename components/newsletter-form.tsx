"use client";

import { useState, type FormEvent } from "react";

/**
 * Collects an email for the retreat mailing list. There is no mailing provider
 * connected yet — the address is posted to /api/enquiry, which currently only
 * logs it on the server. Wire it to your provider before promising a newsletter.
 */
export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    if (!email.includes("@")) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "newsletter", email }),
      });
      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") return <p className="newsletter"><span>Thank you — we will write occasionally, and never share your address.</span></p>;

  return (
    <form className="newsletter" onSubmit={submit} noValidate>
      <div className="newsletter-fields">
        <label htmlFor="newsletter-email" className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Email address</label>
        <input id="newsletter-email" name="email" type="email" placeholder="Your email address" autoComplete="email" />
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "…" : "Join"}</button>
      </div>
      <p>{status === "error" ? "That address did not look right — please try again." : "Retreat dates and occasional notes on practice. No more than monthly."}</p>
    </form>
  );
}

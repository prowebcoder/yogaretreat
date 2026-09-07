/**
 * Receives booking enquiries and newsletter sign-ups from the site.
 *
 * NOTE: nothing is delivered anywhere yet — submissions are validated and
 * written to the server log only. Before launch, forward `payload` to an inbox
 * or CRM (Resend, SendGrid, Zoho, a Google Sheet, whatever the centre uses) and
 * return an error if that delivery fails, so the form never claims success
 * falsely.
 */

const MAX_FIELD = 2000;

const clean = (value: unknown) => (typeof value === "string" ? value.trim().slice(0, MAX_FIELD) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const kind = clean(body.kind) === "newsletter" ? "newsletter" : "enquiry";
  const email = clean(body.email);

  if (!email.includes("@") || email.length < 5) {
    return Response.json({ error: "A valid email address is required." }, { status: 400 });
  }

  if (kind === "enquiry" && (!clean(body.name) || !clean(body.phone))) {
    return Response.json({ error: "Name and phone number are required." }, { status: 400 });
  }

  const payload = {
    kind,
    email,
    name: clean(body.name),
    phone: clean(body.phone),
    program: clean(body.program),
    guests: clean(body.guests),
    arrival: clean(body.arrival),
    stay: clean(body.stay),
    experience: clean(body.experience),
    message: clean(body.message),
    receivedAt: new Date().toISOString(),
  };

  console.info("[enquiry]", payload);

  return Response.json({ ok: true });
}

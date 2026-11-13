import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiries";

interface ContactPayload {
  kind?: "contact" | "booking";
  reference?: string;
  details?: Record<string, unknown>;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const saved = await saveInquiry({
    kind: body.kind === "booking" ? "booking" : "contact",
    reference: body.reference,
    name,
    email,
    phone: body.phone,
    subject,
    message,
    details: body.details,
  });
  if (!saved) {
    return NextResponse.json({ error: "We couldn't send your message. Please call our office." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

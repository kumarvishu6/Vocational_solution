import { after, NextResponse } from "next/server";
import { sendInquiryEmails } from "@/lib/email";
import { saveInquiry, type InquiryInput } from "@/lib/inquiries";

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

  const inquiry: InquiryInput = {
    kind: body.kind === "booking" ? "booking" : "contact",
    reference: body.reference,
    name,
    email,
    phone: body.phone,
    subject,
    message,
    details: body.details,
  };
  if (!(await saveInquiry(inquiry))) {
    return NextResponse.json({ error: "We couldn't send your message. Please call our office." }, { status: 502 });
  }
  after(() => sendInquiryEmails(inquiry, new URL(request.url).origin));

  return NextResponse.json({ ok: true });
}

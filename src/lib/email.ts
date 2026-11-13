import { company } from "@/data/vc";
import type { InquiryInput } from "@/lib/inquiries";

/**
 * Inquiry emails sent through Resend. Off until RESEND_API_KEY and EMAIL_FROM are set,
 * so the site keeps working (inquiries still land in the admin inbox) before email is configured.
 */
const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM;
const alertTo = process.env.ALERT_EMAIL_TO || company.email;

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const kindLabel = { contact: "message", booking: "booking request", order: "order" } as const;

async function send(email: { to: string; subject: string; html: string; text: string; replyTo?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [email.to], subject: email.subject, html: email.html, text: email.text, reply_to: email.replyTo }),
  });
  if (!res.ok) console.error("[email] send failed:", res.status, await res.text());
}

function layout(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#10192f">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:6px;overflow:hidden">
<tr><td style="background:#002642;padding:20px 24px;border-bottom:3px solid #d0a944">
<p style="margin:0;color:#e2c67f;font-size:11px;letter-spacing:3px;text-transform:uppercase">${esc(company.legalName)}</p>
<p style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:bold">${esc(title)}</p></td></tr>
<tr><td style="padding:24px">${body}</td></tr>
<tr><td style="padding:16px 24px;background:#f4f6f9;font-size:12px;color:#5a6b80">${esc(company.phone)} · ${esc(company.email)}</td></tr>
</table></td></tr></table></body></html>`;
}

function rows(pairs: [string, unknown][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">${pairs
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5a6b80;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0;white-space:pre-line">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;
}

type OrderItem = { name: string; qty: number; price: number };

function summary(inquiry: InquiryInput): [string, unknown][] {
  const d = inquiry.details ?? {};
  const pairs: [string, unknown][] = [
    ["Reference", inquiry.reference],
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Subject", inquiry.subject],
  ];
  if (inquiry.kind === "booking") {
    pairs.push(["Consultation", d.consultation], ["Requested", `${d.date ?? ""} at ${d.time ?? ""}`]);
  }
  if (inquiry.kind === "order") {
    const items = (d.items as OrderItem[] | undefined) ?? [];
    pairs.push(
      ["Items", items.map((i) => `${i.name} × ${i.qty} — $${(i.price * i.qty).toLocaleString("en-US")}`).join("\n")],
      ["Total", `$${Number(d.total ?? 0).toLocaleString("en-US")}`]
    );
  }
  pairs.push(["Message", inquiry.message]);
  return pairs;
}

/** Alerts the office and confirms receipt to the visitor. Never throws. */
export async function sendInquiryEmails(inquiry: InquiryInput, siteUrl: string) {
  if (!apiKey || !from) return;
  const label = kindLabel[inquiry.kind];
  const details = summary(inquiry);

  try {
    await send({
      to: alertTo,
      replyTo: inquiry.email,
      subject: `New ${label} from ${inquiry.name}${inquiry.reference ? ` (${inquiry.reference})` : ""}`,
      html: layout(
        `New ${label}`,
        `${rows(details)}<p style="margin:24px 0 0"><a href="${esc(siteUrl)}/admin/inbox" style="display:inline-block;background:#002642;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:4px;font-size:14px;font-weight:bold">Open the inbox</a></p><p style="margin:16px 0 0;font-size:13px;color:#5a6b80">Reply to this email to answer ${esc(inquiry.name)} directly.</p>`
      ),
      text: `New ${label}\n\n${details.map(([k, v]) => (v ? `${k}: ${v}` : "")).filter(Boolean).join("\n")}\n\nInbox: ${siteUrl}/admin/inbox`,
    });

    const thanks =
      inquiry.kind === "order"
        ? "Thank you for your order. Our office will email you a secure payment link and confirm the next steps."
        : inquiry.kind === "booking"
          ? "Thank you for your booking request. Our office will confirm your appointment by email."
          : "Thank you for contacting Vocational Concepts. We have received your message and will be in touch as soon as possible.";

    await send({
      to: inquiry.email,
      replyTo: company.email,
      subject: `We received your ${label}${inquiry.reference ? ` (${inquiry.reference})` : ""}`,
      html: layout(
        `Thank you, ${inquiry.name.split(" ")[0]}`,
        `<p style="margin:0 0 20px;font-size:15px;line-height:1.6">${esc(thanks)}</p>${rows(details.filter(([k]) => k !== "Email"))}<p style="margin:20px 0 0;font-size:14px;line-height:1.6">Questions in the meantime? Call ${esc(company.phone)} or reply to this email.</p>`
      ),
      text: `${thanks}\n\nQuestions? Call ${company.phone} or reply to this email.`,
    });
  } catch (err) {
    console.error("[email] error:", err);
  }
}

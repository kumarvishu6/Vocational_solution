import { createPublicClient } from "@/lib/supabase/public";
import { supabaseConfigured } from "@/lib/supabase/env";

export type InquiryInput = {
  kind: "contact" | "booking" | "order";
  reference?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  details?: Record<string, unknown>;
};

const clip = (v: string | undefined, max: number) => (v ? v.slice(0, max) : null);

/** Saves a website inquiry for the admin inbox. Returns false if it could not be stored. */
export async function saveInquiry(input: InquiryInput): Promise<boolean> {
  if (!supabaseConfigured) {
    console.log("[inquiry] database not configured:", input);
    return true;
  }
  const { error } = await createPublicClient()
    .from("inquiries")
    .insert({
      kind: input.kind,
      reference: clip(input.reference, 40),
      name: clip(input.name, 200),
      email: clip(input.email, 200),
      phone: clip(input.phone, 60),
      subject: clip(input.subject, 200),
      message: clip(input.message, 5000),
      details: input.details ?? {},
    });
  if (error) console.error("[inquiry] save failed:", error.message);
  return !error;
}

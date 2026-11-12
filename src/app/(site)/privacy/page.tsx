import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { company } from "@/data/vc";

export const metadata: Metadata = { title: `Privacy Policy | ${company.name}` };

// Draft wording for the client's review before launch.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`How ${company.legalName} handles the information you share through this website.`}
      sections={[
        {
          heading: "Information we collect",
          body: "When you send a message, request an appointment, or request a service, we collect the details you provide, such as your name, email address, phone number, and a description of your matter.",
        },
        {
          heading: "How we use it",
          body: "We use your information only to respond to your inquiry, schedule appointments, provide the services you request, and send related invoices or payment links. We do not sell or rent your information.",
        },
        {
          heading: "Confidentiality",
          body: "Inquiries are held in confidence whether or not the firm is retained. Case-related records are handled according to professional and legal obligations.",
        },
        {
          heading: "Payments",
          body: "Card payments are processed on our payment provider's secure hosted page. Card details are never entered into or stored on this website.",
        },
        {
          heading: "Contact",
          body: `Questions about this policy can be sent to ${company.email} or ${company.mailing.join(", ")}.`,
        },
      ]}
    />
  );
}

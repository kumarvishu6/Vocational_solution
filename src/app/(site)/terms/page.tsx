import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { company } from "@/data/vc";

export const metadata: Metadata = { title: `Terms & Conditions | ${company.name}` };

// Draft wording for the client's review before launch.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`The terms that apply when you use this website or purchase services from ${company.legalName}.`}
      sections={[
        {
          heading: "Information only",
          body: "Content on this website is general information about our services. It is not legal advice and does not create a client relationship until an engagement is confirmed by our office.",
        },
        {
          heading: "Appointments",
          body: "Appointment requests made online are confirmed by our office. A requested time is not reserved until you receive confirmation.",
        },
        {
          heading: "Fees and payment",
          body: "Published fees apply to the services listed. Retainers and hourly services are billed as described in your engagement or retainer agreement.",
        },
        {
          heading: "Contact",
          body: `For questions about these terms, contact ${company.email} or call ${company.phone}.`,
        },
      ]}
    />
  );
}

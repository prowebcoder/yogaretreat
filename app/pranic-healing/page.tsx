import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Pranic Healing Sessions & Certification",
  description: "Pranic healing sessions, progressive healing programmes, foundation and advanced courses, and practitioner certification in Rishikesh.",
  alternates: { canonical: "/pranic-healing" },
};

export default function PranicHealingPage() { return <OfferingPage offering={getOffering("pranic-healing")!} />; }

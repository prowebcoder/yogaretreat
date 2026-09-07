import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Naturopathy Treatments in Rishikesh",
  description: "Hydrotherapy, mud therapy, steam and sauna, therapeutic massage, and full-day naturopathy programmes at Mysticism Yoga and Wellness Centre.",
  alternates: { canonical: "/naturopathy-treatments" },
};

export default function NaturopathyPage() { return <OfferingPage offering={getOffering("naturopathy-treatments")!} />; }

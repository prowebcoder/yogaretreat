import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Healing Therapies — Massage, Reflexology & Panchakarma",
  description: "Aromatherapy and deep tissue massage, Shirodhara, reflexology, Panchakarma detox, Reiki, and yoga therapy in Rishikesh.",
  alternates: { canonical: "/healing-therapies" },
};

export default function HealingTherapiesPage() { return <OfferingPage offering={getOffering("healing-therapies")!} />; }

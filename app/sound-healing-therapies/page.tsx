import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Sound Healing Therapies & Sound Baths",
  description: "One-to-one sound healing, group sound baths, Himalayan singing bowls, and trauma-informed vibrational therapy in Rishikesh.",
  alternates: { canonical: "/sound-healing-therapies" },
};

export default function SoundHealingTherapiesPage() { return <OfferingPage offering={getOffering("sound-healing-therapies")!} />; }

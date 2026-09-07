import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Meditation & Breathwork Courses in Rishikesh",
  description: "Mindfulness sessions, meditation programmes, mantra integration, retreats, and meditation teacher training at Mysticism Yoga.",
  alternates: { canonical: "/meditation-and-breathwork" },
};

export default function MeditationPage() { return <OfferingPage offering={getOffering("meditation-and-breathwork")!} />; }

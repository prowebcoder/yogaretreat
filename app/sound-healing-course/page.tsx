import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Sound Healing Courses & Certification in Rishikesh",
  description: "Professional sound healing certification, Tibetan bowl teacher training, and intensive sound therapy workshops at Mysticism Yoga.",
  alternates: { canonical: "/sound-healing-course" },
};

export default function SoundHealingCoursePage() { return <OfferingPage offering={getOffering("sound-healing-course")!} />; }

import type { Metadata } from "next";
import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";

export const metadata: Metadata = {
  title: "Ayurveda & Detox Therapies in Rishikesh",
  description: "Abhyanga, Shirodhara, Basti, Nasya, Udvartana, and full detox programmes with consultation and personalised herbal treatment at Mysticism Yoga.",
  alternates: { canonical: "/ayurveda-therapies" },
};

export default function AyurvedaPage() { return <OfferingPage offering={getOffering("ayurveda-therapies")!} />; }

import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function AyurvedaPage() { return <OfferingPage offering={getOffering("ayurveda-therapies")!} />; }
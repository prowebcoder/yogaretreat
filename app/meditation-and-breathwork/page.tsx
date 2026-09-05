import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function MeditationPage() { return <OfferingPage offering={getOffering("meditation-and-breathwork")!} />; }
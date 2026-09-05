import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function PranicHealingPage() { return <OfferingPage offering={getOffering("pranic-healing")!} />; }
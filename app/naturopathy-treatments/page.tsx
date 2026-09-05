import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function NaturopathyPage() { return <OfferingPage offering={getOffering("naturopathy-treatments")!} />; }
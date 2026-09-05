import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function HealingTherapiesPage() { return <OfferingPage offering={getOffering("healing-therapies")!} />; }
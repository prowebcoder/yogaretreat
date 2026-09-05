import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function SoundTherapiesPage() { return <OfferingPage offering={getOffering("sound-healing-therapies")!} />; }
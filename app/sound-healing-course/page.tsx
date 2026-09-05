import { OfferingPage } from "@/components/offering-page";
import { getOffering } from "@/lib/data/offerings";
export default function SoundCoursePage() { return <OfferingPage offering={getOffering("sound-healing-course")!} />; }
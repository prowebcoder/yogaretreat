import { PageIntro } from "@/components/page-intro";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { media } from "@/lib/data/site";

export default function GalleryPage() { return <main><PageIntro eyebrow="A glimpse of the place" title="Small moments of stillness." text="Move through the spaces, landscapes, and practices that shape a visit to Mysticism Yoga. Select any image to linger a little longer." /><section className="gallery-page page-width section-pad"><div className="gallery-lead"><div><p className="kicker">The invitation</p><h2>There is more to a retreat than the schedule.</h2></div><p>It is the light, the pauses, the conversations, and the way a place lets you return to what matters.</p></div><GalleryLightbox items={media} /></section></main>; }
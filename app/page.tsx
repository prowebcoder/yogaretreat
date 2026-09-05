import Image from "next/image";
import Link from "next/link";
import { media, site } from "@/lib/data/site";

export default function Home() {
  return <main>
    <section className="hero">
      {site.heroVideo ? <video className="hero-image hero-video" autoPlay muted loop playsInline poster={site.heroImage}><source src={site.heroVideo} type="video/mp4" /></video> : <Image src={site.heroImage} alt="Mysticism Yoga and Wellness Centre in Rishikesh" fill priority sizes="100vw" className="hero-image" />}
      <div className="hero-wash" />
      <div className="hero-content page-width"><p className="kicker light">Mysticism Yoga / Rishikesh</p><h1>Return to<br /><em>yourself.</em></h1><p className="hero-copy">Ancient yoga, holistic healing, and a quieter way to spend time in the Yoga Capital of the World.</p><Link className="button button-light" href="/retreats">Explore retreats <span>↗</span></Link></div>
      <div className="hero-meta page-width"><span>Pashulok, Rishikesh</span><span>Yoga / Wellness</span><span>Personal enquiries</span></div>
    </section>
    <section className="simple-intro page-width"><div><p className="kicker">A place to soften</p><h2>A grounded approach to yoga, healing, and mindful living.</h2></div><div><p>At Mysticism Yoga and Wellness Centre, we focus on holistic practices that rejuvenate the mind, body, and spirit.</p><Link className="text-link" href="/about">Our story <span>→</span></Link></div></section>
    <section className="simple-choices page-width"><div className="simple-section-head"><div><p className="kicker">Start here</p><h2>Choose your way in.</h2></div><Link className="text-link" href="/booking">Ask a question <span>→</span></Link></div><div className="simple-choice-grid"><Link href="/retreats" className="simple-choice simple-choice-retreat"><span>01 / Retreats</span><h3>Step away from the noise.</h3><p>Explore yoga and wellness retreats connected with Mysticism Yoga.</p><b>↗</b></Link><Link href="/healing" className="simple-choice simple-choice-healing"><span>02 / Wellness</span><h3>Find the practice that fits.</h3><p>Discover Ayurveda, meditation, sound healing, naturopathy, and more.</p><b>↗</b></Link><Link href="/accommodation" className="simple-choice simple-choice-stay"><span>03 / Stay</span><h3>Take your time in Rishikesh.</h3><p>Begin with a conversation about your visit and what you need.</p><b>↗</b></Link></div></section>
    <section className="simple-practice"><div className="page-width simple-practice-grid"><div><p className="kicker light">The Mysticism approach</p><h2>Ancient practice.<br /><em>A more present life.</em></h2></div><div><p>Guided by Yogi Rahul, the centre brings together traditional yogic practices and natural healing sciences in Rishikesh.</p><Link className="text-link light" href="/yoga">Explore yoga <span>→</span></Link></div></div></section>
    <section className="simple-gallery page-width"><div className="simple-section-head"><div><p className="kicker">A glimpse of the place</p><h2>Small moments of stillness.</h2></div><Link className="text-link" href="/gallery">View gallery <span>→</span></Link></div><div className="simple-gallery-grid">{media.slice(0, 3).map((item) => <Link href="/gallery" key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{item.label} ↗</span></Link>)}</div></section>
    <section className="simple-contact"><div className="page-width simple-contact-grid"><div><p className="kicker light">Make your way here</p><h2>Rishikesh is waiting.</h2></div><div><p>Plot no 30, Nirmal Bag Block C, Pashulok, Rishikesh, Uttarakhand 249204, India.</p><a className="text-link light" href={`mailto:${site.email}`}>Begin a conversation <span>→</span></a></div></div></section>
  </main>;
}

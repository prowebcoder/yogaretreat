import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { RetreatCard } from "@/components/retreat-card";
import { Testimonials } from "@/components/testimonials";
import { journal, formatDate } from "@/lib/data/journal";
import { navGroups } from "@/lib/data/nav";
import { featuredRetreats } from "@/lib/data/retreats";
import { dailyRhythm } from "@/lib/data/schedule";
import { media, site, stats, whatsappLink } from "@/lib/data/site";

const wellnessLinks = navGroups.find((group) => group.label === "Wellness")!.links;
const rhythmPreview = dailyRhythm.filter((slot) => ["06:30", "07:30", "10:30", "16:30"].includes(slot.time));

export default function Home() {
  return (
    <main>
      <section className="hero">
        {site.heroVideo ? (
          <video className="hero-image hero-video" autoPlay muted loop playsInline poster={site.heroImage}>
            <source src={site.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image src={site.heroImage} alt="Mysticism Yoga and Wellness Centre in Rishikesh" fill priority sizes="100vw" className="hero-image" />
        )}
        <div className="hero-wash" />
        <div className="hero-content page-width">
          <p className="kicker light">Mysticism Yoga / Rishikesh, India</p>
          <h1>Return to<br /><em>yourself.</em></h1>
          <p className="hero-copy">Ancient yoga, holistic healing, and a quieter way to spend time in the Yoga Capital of the World.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/retreats">Explore retreats <span aria-hidden="true">↗</span></Link>
            <a className="button button-ghost-light" href={whatsappLink()} target="_blank" rel="noreferrer noopener">Ask a question</a>
          </div>
        </div>
        <div className="hero-meta page-width">
          <span>Pashulok, Rishikesh</span>
          <span>Yoga / Ayurveda / Sound</span>
          <span>2 nights to 300 hours</span>
        </div>
      </section>

      <section className="stat-strip">
        <div className="page-width stat-grid">
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <Reveal as="section" className="simple-intro page-width">
        <div>
          <p className="kicker">A place to soften</p>
          <h2>A grounded approach to yoga, healing, and mindful living.</h2>
        </div>
        <div>
          <p>At Mysticism Yoga and Wellness Centre, we focus on holistic practices that rejuvenate the mind, body, and spirit — taught plainly, at a pace that suits the person in front of us.</p>
          <Link className="text-link" href="/about">Our story <span aria-hidden="true">→</span></Link>
        </div>
      </Reveal>

      <section className="simple-choices page-width">
        <Reveal className="simple-section-head">
          <div>
            <p className="kicker">Start here</p>
            <h2>Choose your way in.</h2>
          </div>
          <Link className="text-link" href="/booking">Ask a question <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="simple-choice-grid">
          <Reveal className="simple-choice simple-choice-retreat" href="/retreats">
            <span>01 / Retreats</span>
            <h3>Step away from the noise.</h3>
            <p>Two nights to a full week of yoga and wellness, in Rishikesh and the foothills.</p>
            <b aria-hidden="true">↗</b>
          </Reveal>
          <Reveal className="simple-choice simple-choice-healing" href="/healing" delay={90}>
            <span>02 / Wellness</span>
            <h3>Find the practice that fits.</h3>
            <p>Ayurveda, meditation, sound healing, naturopathy, and energy work.</p>
            <b aria-hidden="true">↗</b>
          </Reveal>
          <Reveal className="simple-choice simple-choice-stay" href="/teacher-training" delay={180}>
            <span>03 / Training</span>
            <h3>Go deeper, or teach.</h3>
            <p>100, 200, and 300-hour residential teacher training in Rishikesh.</p>
            <b aria-hidden="true">↗</b>
          </Reveal>
        </div>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">Upcoming</p>
            <h2>Retreats worth<br /><em>the journey.</em></h2>
          </div>
          <Link className="text-link" href="/retreats">All retreats <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="retreat-grid">
          {featuredRetreats.map((retreat, index) => (
            <Reveal key={retreat.slug} delay={index * 90}><RetreatCard retreat={retreat} /></Reveal>
          ))}
        </div>
      </section>

      <section className="simple-practice">
        <Reveal className="page-width simple-practice-grid">
          <div>
            <p className="kicker light">The Mysticism approach</p>
            <h2>Ancient practice.<br /><em>A more present life.</em></h2>
          </div>
          <div>
            <p>Guided by Yogi Rahul, the centre brings together traditional yogic practices and natural healing sciences in Rishikesh — without ceremony, and without asking you to be anyone other than who you are.</p>
            <Link className="text-link light" href="/yoga">Explore yoga <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
      </section>

      <section className="page-width section-pad">
        <Reveal className="section-head">
          <div>
            <p className="kicker">A day here</p>
            <h2>The shape of an<br /><em>unhurried day.</em></h2>
          </div>
          <Link className="text-link" href="/schedule">Full timetable <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="rhythm-list">
          {rhythmPreview.map((slot, index) => (
            <Reveal className="rhythm-row" key={slot.time} delay={index * 70}>
              <time>{slot.time}</time>
              <div>
                <strong>{slot.title}</strong>
                <p>{slot.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">Holistic healing</p>
            <h2>Six ways to be<br /><em>looked after.</em></h2>
          </div>
          <Link className="text-link" href="/healing">About our approach <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="offering-list">
          {wellnessLinks.map((link, index) => (
            <article key={link.href}>
              <span className="offering-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3><Link href={link.href}>{link.label}</Link></h3>
                <p>{link.detail}</p>
              </div>
              <strong><Link href={link.href}>View <span aria-hidden="true">↗</span></Link></strong>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="simple-gallery page-width">
        <Reveal className="simple-section-head">
          <div>
            <p className="kicker">A glimpse of the place</p>
            <h2>Small moments of stillness.</h2>
          </div>
          <Link className="text-link" href="/gallery">View gallery <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="simple-gallery-grid">
          {media.slice(0, 3).map((item) => (
            <Link href="/gallery" key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 860px) 100vw, 33vw" />
              <span>{item.label} <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-width" style={{ paddingBottom: "var(--section)" }}>
        <Reveal className="section-head">
          <div>
            <p className="kicker">From the journal</p>
            <h2>Notes before<br /><em>you arrive.</em></h2>
          </div>
          <Link className="text-link" href="/journal">Read the journal <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="post-grid">
          {journal.slice(0, 3).map((post, index) => (
            <Reveal className="post-card" href={`/journal/${post.slug}`} key={post.slug} delay={index * 90}>
              <div className="post-card-media">
                <Image src={post.image} alt="" fill sizes="(max-width: 860px) 100vw, 33vw" />
              </div>
              <div className="post-card-body">
                <p className="post-card-meta"><span>{post.category}</span><span>{formatDate(post.date)}</span></p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="simple-contact">
        <Reveal className="page-width simple-contact-grid">
          <div>
            <p className="kicker light">Make your way here</p>
            <h2>Rishikesh is waiting.</h2>
          </div>
          <div>
            <p>{site.address}</p>
            <div className="button-row">
              <Link className="button button-light" href="/booking">Begin a conversation <span aria-hidden="true">↗</span></Link>
              <Link className="button button-ghost-light" href="/plan-your-visit">Plan your visit</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

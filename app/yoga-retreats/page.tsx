import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

const retreatLinks = [
  ["5-Day Yoga Retreat in Dharamshala", "5 days / 4 nights", "From US$740", "https://bookretreats.com/r/5-day-yoga-retreat-in-dharamshala-india"],
  ["3-Day Stillness: Ayurveda, Sunrise & the Sacred Ganga", "3 days / 2 nights", "From US$465", "https://bookretreats.com/r/3-day-stillness-ayurveda-sunrise-the-sacred-ganga-in-india"],
  ["7-Day Detox Retreat: Naturopathy & Ayurveda", "7 days / 6 nights", "From US$1,100", "https://bookretreats.com/r/7-day-detox-retreat-plan-combining-naturopathy-ayurveda-india"],
  ["2-Day Yoga Retreat with Ayurvedic Therapy", "2 days / 1 night", "From US$250", "https://bookretreats.com/r/2-day-yoga-retreat-with-ayurvedic-therapy-in-rishikesh-india"],
  ["7-Day Yoga Retreat in Rishikesh", "7 days / 6 nights", "From US$999", "https://bookretreats.com/r/7-day-yoga-retreat-in-rishikesh-uttarakhand-india"],
  ["3-Day Kunjapuri Sunrise & Sunset Retreat", "3 days / 2 nights", "From US$210", "https://bookretreats.com/r/3-day-a-kunjapuri-sunrise-sunset-yoga-retreat-in-india"],
] as const;

export default function YogaRetreatsPage() { return <main><PageIntro eyebrow="Ongoing retreats" title="A retreat for the season you are in." text="Explore the current retreat experiences associated with Mysticism Yoga. Details, dates, and bookings are handled through the listed retreat partners." /><section className="retreat-catalog page-width section-pad"><div className="catalog-intro"><p className="kicker">Find your way in</p><h2>From a weekend reset to a deeper immersion.</h2></div><div className="catalog-list">{retreatLinks.map(([title, duration, price, href], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{duration}</p></div><strong>{price}</strong><Link className="text-link" href={href} target="_blank" rel="noreferrer">View details <span>↗</span></Link></article>)}</div></section></main>; }
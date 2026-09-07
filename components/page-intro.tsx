import Image from "next/image";
import Link from "next/link";
import { media, type MediaItem } from "@/lib/data/site";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: MediaItem | { src: string; alt: string };
  crumbs?: { label: string; href: string }[];
};

export function PageIntro({ eyebrow, title, text, image, crumbs }: PageIntroProps) {
  const key = eyebrow.toLowerCase();
  const fallback = key.includes("healing") ? media[3] : key.includes("stay") ? media[1] : media[0];
  const picture = image ?? fallback;

  return (
    <section className="page-intro page-width">
      <div className="page-intro-copy">
        {crumbs && crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((crumb) => <span key={crumb.href}>/ <Link href={crumb.href}>{crumb.label}</Link></span>)}
          </nav>
        )}
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-text">{text}</p>
      </div>
      <div className="page-intro-image">
        <Image src={picture.src} alt={picture.alt} fill sizes="(max-width: 860px) 100vw, 42vw" priority />
      </div>
    </section>
  );
}

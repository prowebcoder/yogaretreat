import Image from "next/image";
import { media } from "@/lib/data/site";

type PageIntroProps = { eyebrow: string; title: string; text: string };

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  const image = eyebrow.toLowerCase().includes("healing") ? media[3] : eyebrow.toLowerCase().includes("stay") ? media[1] : media[0];
  return <section className="page-intro page-width"><div className="page-intro-copy"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p className="page-intro-text">{text}</p></div><div className="page-intro-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 42vw" priority /></div></section>;
}
import Image from "next/image";
import Link from "next/link";
import type { Retreat } from "@/lib/data/retreats";

export function RetreatCard({ retreat, priority = false }: { retreat: Retreat; priority?: boolean }) {
  return (
    <Link className="retreat-card" href={`/retreats/${retreat.slug}`}>
      <div className="retreat-card-media">
        <Image src={retreat.image} alt={retreat.title} fill sizes="(max-width: 860px) 100vw, (max-width: 1220px) 50vw, 33vw" priority={priority} />
        <span className="retreat-tag">{retreat.focus}</span>
      </div>
      <div className="retreat-card-body">
        <p className="retreat-card-meta"><span>{retreat.duration}</span><span>{retreat.level}</span></p>
        <h3>{retreat.title}</h3>
        <p>{retreat.summary}</p>
        <div className="retreat-card-foot">
          <span className="retreat-card-price">{retreat.price}</span>
          <span className="retreat-card-cta">View <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </Link>
  );
}

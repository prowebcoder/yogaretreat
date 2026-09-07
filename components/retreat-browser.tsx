"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RetreatCard } from "@/components/retreat-card";
import type { Retreat } from "@/lib/data/retreats";

type Length = "Any length" | "Up to 3 nights" | "4 nights or more";

const lengths: Length[] = ["Any length", "Up to 3 nights", "4 nights or more"];

export function RetreatBrowser({ retreats }: { retreats: Retreat[] }) {
  const focuses = useMemo(() => ["All", ...Array.from(new Set(retreats.map((retreat) => retreat.focus)))], [retreats]);
  const [focus, setFocus] = useState("All");
  const [length, setLength] = useState<Length>("Any length");

  const visible = retreats.filter((retreat) => {
    if (focus !== "All" && retreat.focus !== focus) return false;
    if (length === "Up to 3 nights") return retreat.nights > 0 && retreat.nights <= 3;
    if (length === "4 nights or more") return retreat.nights >= 4;
    return true;
  });

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter retreats by focus">
        {focuses.map((option) => (
          <button type="button" key={option} className={focus === option ? "filter-active" : ""} onClick={() => setFocus(option)} aria-pressed={focus === option}>
            {option}
          </button>
        ))}
      </div>
      <div className="filter-bar" role="group" aria-label="Filter retreats by length">
        {lengths.map((option) => (
          <button type="button" key={option} className={length === option ? "filter-active" : ""} onClick={() => setLength(option)} aria-pressed={length === option}>
            {option}
          </button>
        ))}
        <span className="filter-count" aria-live="polite">{visible.length} of {retreats.length} retreats</span>
      </div>

      {visible.length === 0 ? (
        <p className="empty-state">Nothing matches that combination yet. Try a different length, or <Link className="contact-link" style={{ display: "inline" }} href="/booking">ask us to build something</Link>.</p>
      ) : (
        <div className="retreat-grid">
          {visible.map((retreat, index) => <RetreatCard retreat={retreat} key={retreat.slug} priority={index < 3} />)}
        </div>
      )}
    </>
  );
}

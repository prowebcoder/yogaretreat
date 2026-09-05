"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { MediaItem } from "@/lib/data/site";

type GalleryLightboxProps = { items: readonly MediaItem[] };

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filteredItems = category === "All" ? items : items.filter((item) => item.category === category);
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  function close() { setActiveIndex(null); }
  function move(direction: number) { if (activeIndex === null) return; setActiveIndex((activeIndex + direction + filteredItems.length) % filteredItems.length); }

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  });

  return <>
    <div className="gallery-filters" aria-label="Gallery categories">{categories.map((itemCategory) => <button type="button" className={category === itemCategory ? "filter-active" : ""} onClick={() => { setCategory(itemCategory); setActiveIndex(null); }} key={itemCategory}>{itemCategory}</button>)}</div>
    <div className="gallery-wall">{filteredItems.map((item, index) => <button className="gallery-card" type="button" onClick={() => setActiveIndex(index)} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="gallery-card-shade" /><span className="gallery-card-label"><small>{item.category}</small>{item.label}<b>+</b></span></button>)}</div>
    {activeItem && activeIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${activeItem.label} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}><div className="lightbox-toolbar"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}</span><button type="button" onClick={close} aria-label="Close image viewer">Close <b>×</b></button></div><div className="lightbox-image"><Image src={activeItem.src} alt={activeItem.alt} fill sizes="100vw" priority /></div><div className="lightbox-caption"><div><p className="kicker light">{activeItem.category}</p><h2>{activeItem.label}</h2><p>{activeItem.alt}</p></div><div className="lightbox-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous image">←</button><button type="button" onClick={() => move(1)} aria-label="Next image">→</button></div></div></div>}
  </>;
}
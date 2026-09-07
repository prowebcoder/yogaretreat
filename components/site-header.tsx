"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navGroups } from "@/lib/data/nav";
import { site, whatsappLink } from "@/lib/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScroll = useRef(0);

  // Solidify the bar past the fold, and slide it away when scrolling down.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setStuck(y > 40);
      setHidden(y > 320 && y > lastScroll.current);
      lastScroll.current = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation — adjusted during render rather than in an effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenGroup(null);
    setDrawerOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenGroup(null);
      setDrawerOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const headerClass = ["site-header", stuck && "is-stuck", hidden && !drawerOpen && !openGroup && "is-hidden", drawerOpen && "is-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} onMouseLeave={() => setOpenGroup(null)}>
      <div className="page-width site-header-inner">
        <Link className="brand" href="/" aria-label={`${site.fullName} home`}>
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>Mysticism<small>Yoga &amp; Wellness</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navGroups.map((group) => (
            <div
              className={`nav-item${openGroup === group.label ? " is-open" : ""}`}
              key={group.label}
              onMouseEnter={() => setOpenGroup(group.label)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openGroup === group.label}
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
              >
                {group.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1 3.5 5 7l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {openGroup === group.label && (
                <div className="mega">
                  <p className="mega-blurb">{group.blurb}</p>
                  <div className="mega-links">
                    {group.links.map((link) => (
                      <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                        <strong>{link.label}</strong>
                        {link.detail && <span>{link.detail}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button-ghost" href={whatsappLink()} target="_blank" rel="noreferrer noopener">WhatsApp</a>
          <Link className="header-book" href="/booking">Book now <span aria-hidden="true">↗</span></Link>
        </div>

        <button type="button" className="nav-toggle" aria-expanded={drawerOpen} aria-controls="mobile-drawer" onClick={() => setDrawerOpen(!drawerOpen)}>
          <span className="nav-toggle-bars" aria-hidden="true"><i /><i /><i /></span>
          {drawerOpen ? "Close" : "Menu"}
        </button>
      </div>

      {drawerOpen && (
        <div className="drawer" id="mobile-drawer">
          {navGroups.map((group) => (
            <div className="drawer-group" key={group.label}>
              <p>{group.label}</p>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>
              ))}
            </div>
          ))}
          <div className="drawer-foot">
            <Link className="button button-light" href="/booking">Make an enquiry <span aria-hidden="true">↗</span></Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">WhatsApp {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      )}
    </header>
  );
}

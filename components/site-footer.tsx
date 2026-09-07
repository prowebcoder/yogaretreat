import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { footerColumns } from "@/lib/data/nav";
import { site } from "@/lib/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>Mysticism<small>Yoga &amp; Wellness</small></span>
          </Link>
          <p className="footer-statement">Ancient practice.<br />A more present life.</p>
          <div style={{ marginTop: 30 }}><NewsletterForm /></div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="kicker light">{column.title}</p>
            {column.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </div>
        ))}

        <div>
          <p className="kicker light">Find us</p>
          <p className="footer-address">{site.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <p className="footer-address">{site.openingHours}</p>
          <div className="footer-social">
            <a href={site.instagram} target="_blank" rel="noreferrer noopener">Instagram</a>
            <span aria-hidden="true">/</span>
            <a href={site.facebook} target="_blank" rel="noreferrer noopener">Facebook</a>
          </div>
        </div>
      </div>

      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} {site.fullName}</span>
        <span><Link href="/plan-your-visit">Plan your visit</Link> / <Link href="/faq">FAQ</Link> / <Link href="/contact">Contact</Link></span>
      </div>
    </footer>
  );
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { JsonLd, organizationSchema } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/data/site";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", axes: ["SOFT", "WONK"], variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mysticism Yoga | Yoga & Holistic Healing Retreats in Rishikesh",
    template: "%s | Mysticism Yoga",
  },
  description:
    "Yoga retreats, Ayurveda, naturopathy, sound healing, and teacher training at Mysticism Yoga and Wellness Centre in Rishikesh, India.",
  keywords: ["yoga retreat Rishikesh", "Ayurveda Rishikesh", "yoga teacher training India", "sound healing course", "naturopathy retreat", "meditation retreat India"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: "en_IN",
    url: site.url,
    title: "Mysticism Yoga | Yoga & Holistic Healing Retreats in Rishikesh",
    description: "Ancient yoga, holistic healing, and a quieter way to spend time in the Yoga Capital of the World.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#22372c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        <span id="main" tabIndex={-1} />
        {children}
        <SiteFooter />
        <WhatsappFab />
      </body>
    </html>
  );
}

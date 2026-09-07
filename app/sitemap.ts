import type { MetadataRoute } from "next";
import { journal } from "@/lib/data/journal";
import { offerings } from "@/lib/data/offerings";
import { retreats } from "@/lib/data/retreats";
import { site } from "@/lib/data/site";

const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/retreats", priority: 0.9, changeFrequency: "weekly" },
  { path: "/teacher-training", priority: 0.9, changeFrequency: "monthly" },
  { path: "/booking", priority: 0.8, changeFrequency: "monthly" },
  { path: "/healing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/yoga", priority: 0.7, changeFrequency: "monthly" },
  { path: "/schedule", priority: 0.7, changeFrequency: "monthly" },
  { path: "/plan-your-visit", priority: 0.7, changeFrequency: "monthly" },
  { path: "/accommodation", priority: 0.6, changeFrequency: "monthly" },
  { path: "/teachers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
  { path: "/journal", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/yoga-retreats", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPaths.map((entry) => ({ url: `${site.url}${entry.path}`, lastModified, changeFrequency: entry.changeFrequency, priority: entry.priority })),
    ...offerings.map((offering) => ({ url: `${site.url}/${offering.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...retreats.map((retreat) => ({ url: `${site.url}/retreats/${retreat.slug}`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...journal.map((post) => ({ url: `${site.url}/journal/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}

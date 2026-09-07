import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img1.wsimg.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  /** Legacy URLs kept alive as permanent redirects so they do not compete as duplicate content. */
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/photo-gallery", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;

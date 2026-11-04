import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original site had a separate /sales page. Sales now live on the home
  // page, so old links and bookmarks land on that section.
  async redirects() {
    return [
      {
        source: "/sales",
        destination: "/#sales",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

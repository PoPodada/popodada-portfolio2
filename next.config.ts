import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	/* config options here */
	images: {
		domains: ["github.com"],
		unoptimized: true,
	},
};

export default nextConfig;

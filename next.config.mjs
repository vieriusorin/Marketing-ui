/** @type {import('next').NextConfig} */
const nextConfig = {
	hostname: ["localhost"],
	port: 3001,
	images: {
		domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
	},
};

export default nextConfig;

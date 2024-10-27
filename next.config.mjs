/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.istockphoto.com", "picsum.photos"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "media.istockphoto.com",
    //     port: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "source.unsplash.com/random",
    //     port: "",
    //   },
    // ],
  },
};

export default nextConfig;

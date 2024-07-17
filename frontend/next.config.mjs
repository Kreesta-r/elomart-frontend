/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: "https",
            hostname: "img.freepik.com",
        }
      ], // Add your desired domains here
    },
  };
  
  export default nextConfig;
  
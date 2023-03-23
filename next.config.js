/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/tpc-course-planner" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;

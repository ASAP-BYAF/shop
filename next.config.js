/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? { properties: ["^data-testid$"] }
        : false,
  },
  // // async rewrites() {
  // //   return [
  // //     {
  // //       source: `${process.env.NEXT_PUBLIC_API_BASEPATH}/:match*`,
  // //       destination: `${process.env.API_BASE_URL}/:match*`,
  // //     },
  // //   ];
  // },
};

module.exports = nextConfig;

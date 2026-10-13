// URLs from the previous version of the site that Google still has indexed
// (several rank for "towing Townsville" / "tow truck Townsville"). Permanent
// redirects pass their ranking signals to the closest current page instead of
// serving 404s. Trailing-slash variants are normalised by Next before these run.
const legacyRedirects = [
  ['/long-distance-towing', '/services/interstate-and-long-distance-towing'],
  ['/vehicle-recovery', '/services/4wd-and-off-road-recovery'],
  ['/winching-and-recovery', '/services/4wd-and-off-road-recovery'],
  ['/towing-cost-in-townsville', '/blog/tow-truck-cost-townsville-2026'],
  ['/prepare-car-for-rainy-season-townsville', '/blog/broken-down-in-townsville-causes-and-recovery'],
  ['/emergency-towing-service', '/services/24-7-emergency-towing'],
  ['/emergency-towing', '/services/24-7-emergency-towing'],
  ['/jump-start-assistance', '/services/jump-start'],
  ['/fuel-delivery', '/services/fuel-delivery'],
  ['/flat-tire-assistance', '/services/tyre-change-roadside-assist'],
  ['/flat-tyre-assistance', '/services/tyre-change-roadside-assist'],
  ['/vehicle-transport', '/services/tilt-tray-towing'],
  ['/flatbed-towing', '/services/flatbed-towing'],
  ['/tilt-tray-towing', '/services/tilt-tray-towing'],
  ['/about-us', '/about'],
  ['/contact-us', '/contact'],
  ['/tow-truck-townsville', '/'],
  ['/towing-townsville', '/'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    typedRoutes: false,
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;

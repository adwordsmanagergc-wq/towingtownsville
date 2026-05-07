/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://townsvilletowingcompare.com.au',
  generateRobotsTxt: false, // we ship our own /robots.txt route
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/sitemap.xml', '/robots.txt'],
};

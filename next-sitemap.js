/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://azblumberglaw.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/not-found', '/404', '/cases/**', '/testimonials/**'],
    outDir: 'out',
  }
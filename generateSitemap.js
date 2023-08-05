// generateSitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const { createGzip } = require('zlib');

// Define your website URL
const baseUrl = 'https://blucevalleytech.github.io/BVTS/';

// Define your routes (pages to include in the sitemap)
const routes = [
  '/',
  // Add more routes here
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });
  const pipeline = stream.pipe(createGzip());

  routes.forEach(route => {
    stream.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  stream.end();

  const sitemap = await streamToPromise(pipeline);
  fs.writeFileSync('public/sitemap.xml.gz', sitemap);

  console.log('Sitemap generated successfully!');
}

generateSitemap();
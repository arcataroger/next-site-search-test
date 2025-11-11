import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0;
export const dynamic = 'force-dynamic';

/**
 * Serves sitemap.xml; includes "unlisted" only for DatoCmsSearchBotCustomSuffix.
 * Always fresh: disables caching and uses current datetime.
 */
export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const ua = req.headers.get('user-agent') ?? ''
  const includeUnlisted = ua.includes('DatoCmsSearchBotCustomSuffix')

  const xml = generateSitemap(includeUnlisted)

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Disable all caching
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
}

/**
 * Builds XML sitemap dynamically.
 */
const generateSitemap = (includeUnlisted: boolean): string => {
  const base = 'https://next-site-search-test-git-s-66b95c-roger-tuan-datocmss-projects.vercel.app'
  const lastmod = new Date().toISOString() // current timestamp

  const urls = [
    { loc: `${base}/`, priority: '1.00' },
    { loc: `${base}/apple`, priority: '0.80' },
    { loc: `${base}/orange`, priority: '0.80' },
    { loc: `${base}/unlisted`, priority: '0.80' },
  ]

  if (includeUnlisted) {
    urls.push({ loc: `${base}/secret`, priority: '0.80' })
  }

  const urlEntries = urls
    .map(
      ({ loc, priority }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`
}
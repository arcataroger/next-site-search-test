import { NextRequest, NextResponse } from 'next/server'

/**
 * Serves sitemap.xml; includes "unlisted" only for DatoCmsSearchBotCustomSuffix.
 */
export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const ua = req.headers.get('user-agent') ?? ''
  const includeUnlisted = ua.includes('DatoCmsSearchBotCustomSuffix')

  const xml = generateSitemap(includeUnlisted)

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

/**
 * Builds XML sitemap dynamically.
 */
const generateSitemap = (includeUnlisted: boolean): string => {
  const base = 'https://next-site-search-test-git-sitemapuseragent-roger-tuan-datocmss-projects.vercel.app'
  const lastmod = '2025-11-10T23:16:52+00:00'

  const urls = [
    { loc: `${base}/`, priority: '1.00' },
    { loc: `${base}/apple`, priority: '0.80' },
    { loc: `${base}/orange`, priority: '0.80' },
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
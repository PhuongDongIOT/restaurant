import { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://banhcuonanhvu.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Fetch động các item nếu có
    const blogs = await fetch(`${baseUrl}/api/blogs`).then(res => res.json()); // giả sử bạn có API này
    const products = await fetch(`${baseUrl}/api/products`).then(res => res.json());

    const staticRoutes = ['', '/categories', '/faq', '/order', '/profile'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes
            .map(route => `<url><loc>${baseUrl}${route}</loc></url>`)
            .join('')}
    ${blogs
            .map((blog: any) => `<url><loc>${baseUrl}/blogs/${blog.slug}</loc></url>`)
            .join('')}
    ${products
            .map((product: any) => `<url><loc>${baseUrl}/product/${product.slug}</loc></url>`)
            .join('')}
  </urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
}

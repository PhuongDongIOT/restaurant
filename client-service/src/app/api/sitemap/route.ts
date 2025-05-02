// src/app/api/sitemap/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://banhcuonanhvu.com';

    // Giả lập dữ liệu, bạn có thể fetch từ DB hoặc API thật
    const blogs = [{ slug: 'huong-vi-truyen-thong' }];
    const products = [{ slug: 'banh-cuon-nhan-thit' }];

    const staticRoutes = ['', '/categories', '/faq', '/order', '/profile'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes
            .map(route => `<url><loc>${baseUrl}${route}</loc></url>`)
            .join('')}
    ${blogs
            .map(blog => `<url><loc>${baseUrl}/blogs/${blog.slug}</loc></url>`)
            .join('')}
    ${products
            .map(product => `<url><loc>${baseUrl}/product/${product.slug}</loc></url>`)
            .join('')}
  </urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

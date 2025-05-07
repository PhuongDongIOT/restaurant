'use client'

import * as React from "react";
import { Shell } from "@/components/atoms/shell"
import HeroBlogCard from "@/components/organims/hero-blog-card";
import ArticleContent from "@/components/molecules/article-content";
import TableOfContents from "@/components/organims/table-of-contents";
// import { Metadata } from "next";

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     // const blog = await getBlogBySlug(params.slug);

//     return {
//         title: 'blog.title' + ' - Blog Bánh cuốn Anh Vũ',
//         description: 'Bài viết về bánh cuốn và văn hóa ẩm thực Việt.',
//         openGraph: {
//             title: 'blog.title',
//             description: 'blog.excerpt',
//             url: `https://banhcuonanhvu.com/blog/${params.slug}`,
//             siteName: 'Bánh cuốn Anh Vũ',
//             images: [
//                 {
//                     url: 'https://banhcuonanhvu.com/og-default.png',
//                     width: 1200,
//                     height: 630,
//                     alt: 'blog.title',
//                 },
//             ],
//             locale: 'vi_VN',
//             type: 'article',
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: 'blog.title',
//             description: 'blog.excerpt',
//             images: ['https://banhcuonanhvu.com/og-default.png'],
//         },
//     };
// }

const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";
const itemBlog = {
    "image": image,
    "category": "Artificial Intelligence",
    "title": "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    "date": "Oct 19",
    "readTime": "10 min"
}

const textBlogDetail = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi molestiae aspernatur magni laudantium tempora assumenda sunt nulla enim modi, pariatur iusto hic et porro at, est rerum. Sint, numquam?"
}

export default function IndexPage() {

    return (
        <Shell className="mx-auto w-full max-w-6xl gap-4">
            <HeroBlogCard {...itemBlog} />
            <div className="grid grid-cols-3 gap-2">
                <div className="mx-auto col-span-2 flex flex-col gap-2">
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                </div>
                <div>
                    <TableOfContents />
                </div>
            </div>
        </Shell>
    )
}

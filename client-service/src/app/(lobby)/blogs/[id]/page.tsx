import * as React from "react";
import { Shell } from "@/components/atoms/shell"
import HeroBlogCard from "@/components/organims/hero-blog-card";
import ArticleContent from "@/components/molecules/article-content";
import TableOfContents from "@/components/organims/table-of-contents";


const image = "https://awsbutket2468.s3.ap-northeast-1.amazonaws.com/baby%20tree_%2006-03-2025%20at%2002-06-39.jpeg";

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

export default async function IndexPage() {

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

import * as React from "react";
// import { LobbySkeleton } from "../../_components/lobby-skeleton";
import Gallery from "../../_components/gallary";
import HeroGeometric from "@/components/molecules/hero-geometric";
import PostCard from "@/components/organims/post-card";
import { ContentSection } from "@/components/organims/content-section";
import { Shell } from "@/components/atoms/shell"
import PostVerticalCard from "@/components/organims/post-vertical-card";
import NewsSection from "../_components/news-section";
import NewsShowcase from "../_components/news-showcase";
import SpotlightNews from "../_components/spotlight-news";

const image = "https://awsbutket2468.s3.ap-northeast-1.amazonaws.com/baby%20tree_%2006-03-2025%20at%2002-06-39.jpeg";

const postCard = {
    "imageUrl": image,
    "category": "MUA BĐS",
    "date": "18/02/2025 16:01",
    "author": "Nguyễn Nam",
    "title": "Để Không Bị Hớ Khi Mua Đất Nền, Nhà Đầu Tư Đừng Bỏ Qua Các Bước Này",
    "description": "Hiểu và xác định được giá trị lô đất là một trong những yếu tố hạn chế tối đa rủi ro nhà đầu tư phải đối mặt khi đầu tư đất nền...",
    "tags": ["Bất động sản Hà Nội", "đất nền", "Thị trường đất nền"],
    "blogUrl": "/bai-viet/khong-bi-ho-mua-dat-nen"
}

export default async function IndexPage() {

    return (
        <>
            <div className="shadow-lg">
                <HeroGeometric />
            </div>
            <section className=" my-10 md:my-14">
                <Gallery />
            </section>
            <Shell className="mx-auto max-w-6xl gap-0">
                <ContentSection
                    title="Post"
                    description="Explore posts from around the world"
                    href="/locations"
                    linkText="View all posts"
                    // className="mt-10 md:mt-14"
                    asChild
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                        </div>
                        <div className="flex flex-col gap-4">

                            <NewsSection />
                            <NewsShowcase />
                            <SpotlightNews />
                        </div>
                    </div>
                </ContentSection>
                <ContentSection
                    title="Post"
                    description="Explore posts from around the world"
                    href="/locations"
                    linkText="View all posts"
                    className="pt-14 md:pt-10"
                    asChild
                >
                    <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </ContentSection>
            </Shell>

        </>
    )
}

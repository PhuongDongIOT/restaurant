import * as React from "react";
// import { LobbySkeleton } from "../../_components/lobby-skeleton";
import Gallery from "../_components/gallery";
import HeroGeometric from "@/components/molecules/hero-geometric";
import PostCard from "@/components/organims/post-card";
import { ContentSection } from "@/components/organims/content-section";
import { Shell } from "@/components/atoms/shell"
import PostVerticalCard from "@/components/organims/post-vertical-card";
import NewsSection from "../_components/news-section";
import NewsShowcase from "../_components/news-showcase";
import SpotlightNews from "../_components/spotlight-news";
import { SearchParams } from "nuqs";
import { searchParamsCache, serialize } from "@/lib/customs/searchparams";
import { blogService } from "@/lib/services/blog.service";

const image = "https://awsbutket2468.s3.ap-northeast-1.amazonaws.com/baby%20tree_%2006-03-2025%20at%2002-06-39.jpeg";

type pageProps = {
    searchParams: Promise<SearchParams>;
};
export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;
    // Allow nested RSCs to access the search params (in a type-safe way)
    searchParamsCache.parse(searchParams);

    // This key is used for invoke suspense if any of the search params changed (used for filters).
    const key = serialize({ ...searchParams });

    const page = searchParamsCache.get('page');
    const search = searchParamsCache.get('q');
    const pageLimit = searchParamsCache.get('limit');

    const filters = {
        page,
        limit: pageLimit,
        ...(search && { search }),
    };

    const { data: { posts: blogs } } = await blogService.filters({
        queryParams: filters
    });


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
                    title="Bài đăng"
                    description="Khám phá các bài đăng từ khắp nơi trên thế giới"
                    href="/locations"
                    linkText="Tất cả"
                    // className="mt-10 md:mt-14"
                    asChild
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            {blogs.map((item) => {
                                return <PostVerticalCard {...item} />
                            })}
                        </div>
                        <div className="flex flex-col gap-4">

                            <NewsSection />
                            <NewsShowcase />
                            <SpotlightNews />
                        </div>
                    </div>
                </ContentSection>
                <ContentSection
                    title="Bài đăng"
                    description="Khám phá các bài đăng từ khắp nơi trên thế giới"
                    href="/locations"
                    linkText="Tất cả"
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

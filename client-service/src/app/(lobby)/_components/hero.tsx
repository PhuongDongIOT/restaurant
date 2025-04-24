"use client";

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { ICategoryBanner } from "@/lib/schemas/category.schema";
import HouseCard from "./house-card";

export interface GalleryProps {
    title?: string;
    description?: string;
    items?: ICategoryBanner[];
}

const Hero = ({
    title = "Nghiên cứu điển hình",
    description = "Khám phá cách các công ty và nhà phát triển hàng đầu đang tận dụng công nghệ web hiện đại để xây dựng trải nghiệm kỹ thuật số đặc biệt.",
    items = [],
}: GalleryProps) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="w-full">
            <div className="w-full">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 w-full rounded-none">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.category_id}
                                className="basis-1/1 max-h-[32rem] w-full pl-0"
                            >
                                <div className="group w-full">
                                    <div className="group relative h-full min-h-[18rem] w-full max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9] ">
                                        {
                                            item.images.length === 1 ? (
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.category_name}
                                                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : <HouseCard />

                                        }

                                        {/* <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" /> */}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export { Hero };

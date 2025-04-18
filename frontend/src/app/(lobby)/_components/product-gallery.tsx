"use client";

import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { IProduct } from "@/lib/schemas/product.schema";

export type ProductGalleryProps = {
    title: string;
    description: string;
    products: IProduct[];
}
export function ProductGallery({
    title,
    description,
    products,
}: ProductGalleryProps) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    // const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            // setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="w-full">
            <div className="flex w-full items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl">
                <div className="mb-4 w-full flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl line-clamp-1">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground line-clamp-2">{description}</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
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
                    <CarouselContent className="ml-0">
                        {products.map((product) => (
                            <CarouselItem
                                key={product.id}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                            >
                                <Link href={`/product/${product.id}`} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[18rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] ">
                                        <img
                                            src={product.image}
                                            alt={product.product_name}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start text-black dark:text-white font-bold gap-2">
                                            <div className="relative">
                                                <div className="absolute w-full h-full bg-amber-50 rounded-md opacity-75"></div>
                                                <div className="relative z-1">
                                                    <div className="pt-4 text-2xl font-medium md:pt-4 lg:pt-4 line-clamp-2">
                                                        {product.product_name}
                                                    </div>
                                                    <div className="text-xs line-clamp-2">
                                                        {product.description}
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        Read more{" "}
                                                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
};

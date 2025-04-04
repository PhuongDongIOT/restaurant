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

export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface GalleryProps {
    title?: string;
    description?: string;
    items?: GalleryItem[];
}

const images = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const data = [
    {
        id: "shadcn-ui",
        title: "shadcn/ui: Building a Modern Component Library",
        description:
            "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
        href: "/product/xxx",
        image:
            images,
    },
    {
        id: "tailwind",
        title: "Tailwind CSS: The Utility-First Revolution",
        description:
            "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
        href: "/product/xxx",
        image: images,
    },
    {
        id: "astro",
        title: "Astro: The All-in-One Web Framework",
        description:
            "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
        href: "/product/xxx",
        image: images,
    },
    {
        id: "react",
        title: "React: Pioneering Component-Based UI",
        description:
            "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
        href: "/product/xxx",
        image: images,
    },
    {
        id: "nextjs",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "/product/xxx",
        image: images,
    },
    {
        id: "next",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "/product/xxx",
        image: images,
    },
    {
        id: "ne",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "/product/xxx",
        image: images,
    },
];

const Gallery = ({
    title = "Món Thượng hạng",
    description = "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
    items = data,
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
        <section className="py-8">
            <div className="container mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl">
                <div className="mb-4 flex items-end justify-between md:mb-14 lg:mb-16">
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
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                            >
                                <Link href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[18rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white font-bold md:p-8 gap-2">
                                            <div className="pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4 line-clamp-2">
                                                {item.title}
                                            </div>
                                            <div className="line-clamp-2">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Read more{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
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

export { Gallery };

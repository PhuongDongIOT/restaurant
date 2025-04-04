"use client";

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

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
        href: "https://ui.shadcn.com",
        image:
            images,
    },
    {
        id: "tailwind",
        title: "Tailwind CSS: The Utility-First Revolution",
        description:
            "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
        href: "https://tailwindcss.com",
        image: images,
    },
    {
        id: "astro",
        title: "Astro: The All-in-One Web Framework",
        description:
            "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
        href: "https://astro.build",
        image: images,
    },
    {
        id: "react",
        title: "React: Pioneering Component-Based UI",
        description:
            "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
        href: "https://react.dev",
        image: images,
    },
    {
        id: "nextjs",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "https://nextjs.org",
        image: images,
    },
    {
        id: "next",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "https://nextjs.org",
        image: images,
    },
    {
        id: "ne",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "https://nextjs.org",
        image: images,
    },
];

const Hero = ({
    title = "Case Studies",
    description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
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
                                key={item.id}
                                className="basis-1/1 max-h-[32rem] w-full pl-0"
                            >
                                <a href={item.href} className="group w-full">
                                    <div className="group relative h-full min-h-[18rem] w-full max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9] ">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export { Hero };

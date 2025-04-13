"use client";

import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import ReactPlayer from 'react-player/lazy'

const images = [
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
];

const PropertyGallery = () => {
    const [source, setSource] = useState<string>("")
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-full">
                {source ? <Image
                    src="https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png"
                    alt="Main Property"
                    width={800}
                    height={600}
                    className="m-auto w-auto max-h-[30em] rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                /> :
                    <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                        // controls
                        playing
                        muted
                        playbackRate={1.0}
                        onPause={() => console.log("Video paused")}
                        onPlay={() => console.log("Video playing")}
                        onEnded={() => console.log("Video ended")}
                        className="m-auto w-100% min-h-[35em] rounded-lg transition-transform duration-500 ease-in-out hover:scale-105" />
                }
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-xl backdrop-blur-md bg-opacity-70">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="flex gap-2">
                    <CarouselContent className="flex gap-2">
                        {images.map((img, index) => (
                            <CarouselItem key={index} onClick={() => setSource(img)} className="pl-1 md:basis-1/4 lg:basis-1/6 transition-all duration-300 ease-in-out transform hover:scale-110">
                                <Image
                                    src={img}
                                    alt={`Property ${index + 1}`}
                                    width={96}
                                    height={64}
                                    className="rounded-md shadow-md"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default PropertyGallery;

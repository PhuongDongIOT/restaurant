"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type PostVerticalCardProps = {
    imageUrl: string;
    category: string;
    date: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    blogUrl: string;
};

export default function PostVerticalCard({
    imageUrl,
    category,
    date,
    author,
    title,
    description,
    tags,
    blogUrl,
}: PostVerticalCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
        >
            <Card className="rounded-xl border-none overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative">
                            <Image
                                src={imageUrl}
                                alt={title}
                                width={600}
                                height={300}
                                className="w-full h-36 rounded-md object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
                                {category}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">{date} • {author}</p>
                            <Link href={blogUrl}>
                                <h3 className="text-lg font-semibold mt-1 text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                                    {title}
                                </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-300"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        <Link href={blogUrl}>
                            <Button className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 transition-all">
                                Đọc thêm
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

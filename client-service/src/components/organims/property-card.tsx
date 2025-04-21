"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type PropertyCardProps = {
  image: string;
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  size: number;
  popular?: boolean;
};

export default function PropertyCard({ image, price, title, location, beds, baths, size, popular }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full max-w-80 rounded-xl overflow-hidden transition-all duration-300"
    >
      <Card className="bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <Image
            src={image}
            alt="Property Image"
            width={320}
            height={200}
            className="w-full h-40 object-cover"
          />
          {popular && (
            <Badge className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 text-xs shadow-md">
              POPULAR
            </Badge>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-end"> 
              <p className="text-xl font-bold text-blue-600">${price}</p>
              <span className="text-gray-500 text-sm">/month</span>
            </div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={22} />
            </motion.div>
          </div>
          <h3 className="text-md font-bold mt-1">{title}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
          <div className="flex items-center justify-between mt-3 text-gray-600 text-[0.7em]">
            <span>🛏 {beds} Beds</span>
            {/* <span>🛁 {baths} Bathrooms</span> */}
            <span>📏 {size} m²</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

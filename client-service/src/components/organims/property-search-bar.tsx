"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type PropertySearchBarProps = {
    tabs: string[];
    defaultTab?: string;
    defaultLocation?: string;
};

export function PropertySearchBar({
    tabs,
    defaultTab = "Rent",
    defaultLocation = "Barcelona, Spain",
}: PropertySearchBarProps) {
    const [selectedTab, setSelectedTab] = useState(defaultTab);
    const [location, setLocation] = useState(defaultLocation);
    const [moveInDate, setMoveInDate] = useState("");

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-xl border border-gray-200 relative z-10">
            {/* Tabs */}
            <div className="space-x-4 border-b pb-3 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={cn(
                            "relative px-4 py-2 font-medium text-gray-500 transition-all",
                            selectedTab === tab ? "text-purple-700 font-bold" : "hover:text-gray-700"
                        )}
                    >
                        {tab}
                        {selectedTab === tab && (
                            <motion.div
                                layoutId="tab-indicator"
                                className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-2xl shadow-lg">
                <div className="relative flex items-center justify-center py-2 rounded-md gap-4 w-full">
                    <div className="flex items-center border border-input flex-1 rounded-lg shadow-md focus:ring-2 focus:ring-red-500">
                        <Search className="text-gray-300" size={24} />
                        <Input
                            type="text"
                            placeholder="Tìm kiếm trên toàn quốc..."
                            className="pl-2 border-none text-black placeholder-gray-500"
                        />
                    </div>
                    <Button className="min-w-32 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all">Tìm kiếm</Button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <Select>
                        <SelectTrigger className=" text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#6C1212]">
                            <SelectValue placeholder="Loại hình dự án" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black shadow-md rounded-lg">
                            <SelectItem value="option1">Căn hộ</SelectItem>
                            <SelectItem value="option2">Nhà phố</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className=" text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#6C1212]">
                            <SelectValue placeholder="Mức giá" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black shadow-md rounded-lg">
                            <SelectItem value="option1">Dưới 1 tỷ</SelectItem>
                            <SelectItem value="option2">1 - 3 tỷ</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className=" text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#6C1212]">
                            <SelectValue placeholder="Trạng thái" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black shadow-md rounded-lg">
                            <SelectItem value="option1">Đang mở bán</SelectItem>
                            <SelectItem value="option2">Đã hoàn thành</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";

// Định nghĩa kiểu dữ liệu cho props
type SearchFilterProps = {
    options: { name: string; icon: React.ReactNode }[];
    placeholder?: string;
    defaultSelected?: string;
    onFilterChange?: (selected: string) => void;
};

export function SearchFilter({
    options,
    placeholder = "Search...",
    defaultSelected,
    onFilterChange,
}: SearchFilterProps) {
    const [selected, setSelected] = useState(defaultSelected || options[0]?.name);

    const handleSelect = (name: string) => {
        setSelected(name);
        onFilterChange && onFilterChange(name);
    };

    return (
        <div className="gap-4 flex flex-col md:flex-row justify-between items-center rounded-xl bg-white ">
            <div className="flex space-x-2 bg-gray-100 p-1 ">
                {options.map((option) => (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={option.name}>
                        <Button
                            variant={selected === option.name ? "default" : "outline"}
                            className="flex items-center space-x-1 px-4 py-2 transition-all"
                            onClick={() => handleSelect(option.name)}
                        >
                            {option.icon}
                            <span>{option.name}</span>
                        </Button>
                    </motion.div>
                ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center border rounded-lg px-3 py-1 bg-gray-100 w-60">
                <Search size={16} className="text-gray-400" />
                <Input type="text" placeholder={placeholder} className="bg-transparent outline-none text-sm ml-2 border-0" />
            </motion.div>
        </div>
    );
}

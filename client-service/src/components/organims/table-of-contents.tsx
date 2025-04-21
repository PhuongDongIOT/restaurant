"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

const TableOfContents = () => {
  const items = [
    "Exploring Generative AI in Content Creation",
    "Steering Clear of Common AI Writing Pitfalls",
    "Understanding ChatGPT Capabilities - Define Your Style",
    "Understand Your Readers",
    "Creating Quality AI-powered Blogs that Stand Out",
    "Conclusion: Embracing AI in Blog Creation",
    "Afterword: The AI Behind This Article",
  ];

  const [selected, setSelected] = useState(0);

  return (
    <Card className="p-4 border-none shadow-none bg-white max-w-md">
      <h2 className="text-lg font-semibold mb-4">In this article</h2>
      <ul className="space-y-2 relative">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onClick={() => setSelected(index)}
          >
            {selected === index && (
              <motion.div
                layoutId="highlight"
                className="absolute left-0 top-0 h-full w-full bg-purple-100 rounded-md"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            <span
              className={`relative z-10 border-l-4 pl-3 transition-all ${
                selected === index
                  ? "border-purple-600 text-purple-700 font-semibold"
                  : "border-gray-300 text-gray-800 hover:text-purple-600 hover:border-purple-400"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TableOfContents;

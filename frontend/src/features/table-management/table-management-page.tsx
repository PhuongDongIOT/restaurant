"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const initialTables = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Bàn ${i + 1}`,
    status: ["available", "occupied", "reserved"][Math.floor(Math.random() * 3)],
}));

const statusColors: Record<string, string> = {
    available: "bg-green-500",
    occupied: "bg-red-500",
    reserved: "bg-yellow-500",
};

export default function TableManagementPage() {
    const [tables, setTables] = useState(initialTables);

    const updateStatus = (id: number, newStatus: string) => {
        setTables((prevTables) =>
            prevTables.map((table) =>
                table.id === id ? { ...table, status: newStatus } : table
            )
        );
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {tables.map((table) => (
                    <motion.div
                        key={table.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-center">{table.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <Badge className={`px-3 py-1 text-white ${statusColors[table.status]}`}>
                                    {table.status === "available" ? "Trống" : table.status === "occupied" ? "Có Khách" : "Đã Đặt"}
                                </Badge>
                                <Select onValueChange={(value) => updateStatus(table.id, value)} defaultValue={table.status}>
                                    <SelectTrigger className="w-full mt-2">
                                        <SelectValue placeholder="Chọn trạng thái" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="available">Trống</SelectItem>
                                        <SelectItem value="occupied">Có Khách</SelectItem>
                                        <SelectItem value="reserved">Đã Đặt</SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

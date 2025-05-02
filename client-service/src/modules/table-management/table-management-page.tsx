"use client";

import { useEffect, useState } from "react";
import QRCode from 'qrcode';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const initialTables = Array.from({ length: 1 }, (_, i) => ({
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
    const tables = initialTables;
    const [base64, setBase64] = useState('');

    useEffect(() => {
        const GenerateQRCode = (url: string) => {
            QRCode.toDataURL(url, {
                width: 800,
                margin: 2,
                color: {
                    dark: '#335383FF',
                    light: '#EEEEEEFF'
                }
            }, (err, url) => {
                setBase64(url)
            })
        }

        GenerateQRCode('1')
    }, [])

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
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 },
                            }}>
                            <Card className="shadow-lg gap-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center text-center gap-8">
                                        Lorem ipsum
                                        {/* {table.name} */}
                                    </CardTitle>
                                    <hr />
                                </CardHeader>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    {base64 && <a href={base64} className="text-md font-bold" download="qrcode.png">
                                        <div className="relative w-40 h-40">
                                            <Image src={base64} height={400} width={400} alt="" className="object-cover" />
                                            <div className="absolute bottom-[-1.2em] w-full flex justify-center">
                                                <Badge className={`px-3 py-1 text-white ${statusColors[table.status]}`}>
                                                    {table.status === "available" ? "Trống" : table.status === "occupied" ? "Có Khách" : "Đã Đặt"}
                                                </Badge>
                                            </div>
                                        </div>
                                    </a>}
                                </div>
                                <CardContent className="mt-4 flex flex-col items-center">
                                    <div className="px-4 py-1 font-semibold rounded-md bg-amber-300">
                                        Thực đơn
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

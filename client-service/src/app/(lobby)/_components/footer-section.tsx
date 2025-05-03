"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

export default function FooterSection() {
    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300 z-50">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Luôn kết nối</h2>
                        <p className="mb-6 text-muted-foreground">
                            Tham gia bản tin của chúng tôi để nhận thông tin cập nhật mới nhất và các ưu đãi độc quyền.
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pr-12 backdrop-blur-sm"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <a href="#" className="block transition-colors hover:text-primary">
                                Trang chủ
                            </a>
                            <a href="#" className="block transition-colors hover:text-primary">
                                Về chúng tôi
                            </a>
                            <a href="#" className="block transition-colors hover:text-primary">
                                Dịch vụ
                            </a>
                            <a href="#" className="block transition-colors hover:text-primary">
                                Danh sách sản phẩm
                            </a>
                            <a href="#" className="block transition-colors hover:text-primary">
                                Liên hệ
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Liên hệ với chúng tôi</h3>
                        <address className="space-y-2 text-sm not-italic">
                            <p>123 Xxxx xxxx</p>
                            <p>Xxxx City, Xx xxxx</p>
                            <p>Xxxx: (xxx) xxx-xxxx</p>
                            <p>Email: xxxx@example.com</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">Theo dõi chúng tôi</h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Facebook className="h-4 w-4" />
                                            <span className="sr-only">Facebook</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Twitter className="h-4 w-4" />
                                            <span className="sr-only">Twitter</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi on Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Instagram className="h-4 w-4" />
                                            <span className="sr-only">Instagram</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi on Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with us on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            {/* <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={setIsDarkMode}
                            /> */}
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode" className="sr-only">
                                Toggle dark mode
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Dev Coffee. All rights reserved.
                    </p>
                    <nav className="flex gap-4 text-sm">
                        <a href="#" className="transition-colors hover:text-primary">
                            Chính sách bảo mật
                        </a>
                        <a href="#" className="transition-colors hover:text-primary">
                            Điều khoản dịch vụ
                        </a>
                        <a href="#" className="transition-colors hover:text-primary">
                            Cài đặt cookie  
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

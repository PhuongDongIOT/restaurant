'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IProduct } from '@/lib/schemas/product.schema';
import { ICategory } from '@/lib/schemas/category.schema';
import { useProductOverView } from '@/modules/products/hook/use-product-reducer';
import { SidebarComponent } from '@/modules/categorys-blogs/components/sidebar-component';
import { ProductCard } from '@/modules/products/components/product-card';

type CategoryProductProps = {
    products: IProduct[];
    categories: ICategory[];
}
export default function CategoryProduct({ products, categories }: CategoryProductProps) {
    const { openModalProductOverview } = useProductOverView();
    return (
        <SidebarProvider className='flex'>
            <SidebarComponent categories={categories} />
            <SidebarInset>
                <div className=''>
                    <div className='h-full px-2 py-6 lg:px-8'>
                        <Tabs defaultValue='food' className='h-full space-y-6'>
                            <div className='space-between flex items-center'>
                                <TabsList>
                                    <SidebarTrigger className='px-4 py-2 bg-primary text-white rounded-md'>
                                        Mở Sidebar
                                    </SidebarTrigger>
                                    <TabsTrigger value='food' className='relative'>
                                        Món ăn
                                    </TabsTrigger>
                                    <TabsTrigger value='water'>Nước</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent
                                value='food'
                                className='border-none p-0 outline-none'
                            >
                                <ScrollArea>
                                    <div className='flex items-center justify-between'>
                                        <div className='space-y-1'>
                                            <h2 className='text-2xl font-semibold tracking-tight'>
                                                Danh mục sản phẩm
                                            </h2>
                                            <p className='text-sm text-muted-foreground'>
                                                Lựa chọn hàng đầu dành cho bạn. Cập nhật hàng ngày.
                                            </p>
                                        </div>
                                    </div>
                                    <Separator className='my-4' />
                                    <div className='relative'>
                                        <ScrollArea>
                                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                                                {products.map((product) => (
                                                    <ProductCard
                                                        key={product.product_name}
                                                        product={product}
                                                        className='w-[250px]'
                                                        aspectRatio='portrait'
                                                        width={250}
                                                        height={330}
                                                        openModalProductOverview={openModalProductOverview}
                                                    />
                                                ))}
                                            </div>
                                            <ScrollBar orientation='horizontal' />
                                        </ScrollArea>
                                    </div>
                                    <div className='mt-6 space-y-1'>
                                        <h2 className='text-2xl font-semibold tracking-tight'>
                                            Dành cho bạn
                                        </h2>
                                        <p className='text-sm text-muted-foreground'>
                                            Dành cho cá nhân của bạn. Cập nhật hàng ngày
                                        </p>
                                    </div>
                                    <Separator className='my-4' />
                                    <div className='relative'>
                                        <ScrollArea>
                                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                                                {products.map((product) => (
                                                    <ProductCard
                                                        key={product.product_name}
                                                        product={product}
                                                        className='w-[150px]'
                                                        aspectRatio='square'
                                                        width={150}
                                                        height={150}
                                                        openModalProductOverview={openModalProductOverview}
                                                    />
                                                ))}
                                            </div>
                                            <ScrollBar orientation='horizontal' />
                                        </ScrollArea>
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                            <TabsContent
                                value='water'
                                className='border-none p-0 outline-none'
                            >
                                <ScrollArea>
                                    <div className='flex items-center justify-between'>
                                        <div className='space-y-1'>
                                            <h2 className='text-2xl font-semibold tracking-tight'>
                                                Danh mục sản phẩm
                                            </h2>
                                            <p className='text-sm text-muted-foreground'>
                                                Lựa chọn hàng đầu dành cho bạn. Cập nhật hàng ngày.
                                            </p>
                                        </div>
                                    </div>
                                    <Separator className='my-4' />
                                    <div className='relative'>
                                        <ScrollArea>
                                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                                                {products.map((product) => (
                                                    <ProductCard
                                                        key={product.product_name}
                                                        product={product}
                                                        className='w-[250px]'
                                                        aspectRatio='portrait'
                                                        width={250}
                                                        height={330}
                                                    />
                                                ))}
                                            </div>
                                            <ScrollBar orientation='horizontal' />
                                        </ScrollArea>
                                    </div>
                                    <div className='mt-6 space-y-1'>
                                        <h2 className='text-2xl font-semibold tracking-tight'>
                                            Dành cho bạn
                                        </h2>
                                        <p className='text-sm text-muted-foreground'>
                                            Dành cho cá nhân của bạn. Cập nhật hàng ngày
                                        </p>
                                    </div>
                                    <Separator className='my-4' />
                                    <div className='relative'>
                                        <ScrollArea>
                                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                                                {products.map((product) => (
                                                    <ProductCard
                                                        key={product.product_name}
                                                        product={product}
                                                        className='w-[150px]'
                                                        aspectRatio='square'
                                                        width={150}
                                                        height={150}
                                                    />
                                                ))}
                                            </div>
                                            <ScrollBar orientation='horizontal' />
                                        </ScrollArea>
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

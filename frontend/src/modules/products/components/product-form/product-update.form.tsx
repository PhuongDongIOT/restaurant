'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FileUploader } from '@/components/molecules/file-uploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { IProduct, ProductSchema } from '@/lib/schemas/product.schema';
import { productService } from '@/lib/services/product.service';

export default function ProductUpdateForm({
    product,
    pageTitle
}: {
    product: IProduct;
    pageTitle: string;
}) {

    const form = useForm<IProduct>({
        resolver: zodResolver(ProductSchema),
        values: {...product, image: []},
    });

    async function onSubmit(values: IProduct) {
        values.image = values.image[0];
        const formData = new FormData();
        for (const key of Object.keys(values) as (keyof typeof values)[]) {
            formData.append(key, values[key]);
        }
    }

    function onChangeImage(values: any) {
        form.setValue('image', values)
    }

    return (
        <Card className='mx-auto w-full'>
            <CardHeader>
                <CardTitle className='text-left text-2xl font-bold'>
                    {pageTitle}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='image'
                            render={({ field }) => (
                                <div className='space-y-6'>
                                    <FormItem className='w-full'>
                                        <FormLabel>Images</FormLabel>
                                        <FormControl>
                                            <FileUploader
                                                value={field.value}
                                                onValueChange={onChangeImage}
                                                maxFiles={4}
                                                maxSize={4 * 1024 * 1024}
                                            // disabled={loading}
                                            // progresses={progresses}
                                            // pass the onUpload function here for direct upload
                                            // onUpload={uploadFiles}
                                            // disabled={isUploading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </div>
                            )}
                        />

                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                            <FormField
                                control={form.control}
                                name='product_name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter product name' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='category_id'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            onValueChange={(value) => field.onChange(value)}
                                            value={field.value[field.value.length - 1]}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='Select categories' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value='beauty'>Beauty Products</SelectItem>
                                                <SelectItem value='electronics'>Electronics</SelectItem>
                                                <SelectItem value='clothing'>Clothing</SelectItem>
                                                <SelectItem value='home'>Home & Garden</SelectItem>
                                                <SelectItem value='sports'>
                                                    Sports & Outdoors
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='price'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                step='0.01'
                                                placeholder='Enter price'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='stock'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Stock</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                step='0.01'
                                                placeholder='Enter stock'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Enter product description'
                                            className='resize-none'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-blue-600" type='submit'>Add Product</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

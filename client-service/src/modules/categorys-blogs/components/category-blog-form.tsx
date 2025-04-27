'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { IInsertCategoryBlog, InsertCategoryBlogSchema } from '@/lib/schemas/category-blog.schema';
import { categoryBlogService } from '@/lib/services/category-blog.sevice';
import { defaultValuesCategoryBlog } from '@/lib/initials/category-blog.init';

export default function CategoryBlogCreateForm({
    initialData = defaultValuesCategoryBlog,
    pageTitle
}: {
    initialData?: IInsertCategoryBlog;
    pageTitle: string;
}) {

    const form = useForm<IInsertCategoryBlog>({
        resolver: zodResolver(InsertCategoryBlogSchema),
        values: initialData,
    });

    async function onSubmit(values: IInsertCategoryBlog) {
        await categoryBlogService.create(values);
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
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên danh mục</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Nhập tên danh mục...' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-blue-600" type='submit'>Tạo danh mục</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

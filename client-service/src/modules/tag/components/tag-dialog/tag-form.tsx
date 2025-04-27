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
import { Textarea } from '@/components/ui/textarea';
import { categoryService } from '@/lib/services/category.service';
import { defaultValuesCategory } from '@/lib/initials/category.init';
import { IInsertCategory, InsertCategorySchema } from '@/lib/schemas/category.schema';

export default function TagCreateForm({
    initialData = defaultValuesCategory,
    pageTitle
}: {
    initialData?: IInsertCategory;
    pageTitle: string;
}) {

    const form = useForm<IInsertCategory>({
        resolver: zodResolver(InsertCategorySchema),
        values: initialData,
    });

    async function onSubmit(values: IInsertCategory) {
        const formData = new FormData();
        for (const key of Object.keys(values) as (keyof typeof values)[]) {
            formData.append(key, values[key]);
        }
        const api = await categoryService.create(values);
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
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <FormField
                                control={form.control}
                                name='category'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter category name' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='category_image'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Image</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter category image' {...field} />
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
                        <Button className="w-full bg-blue-600" type='submit'>Add Category</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

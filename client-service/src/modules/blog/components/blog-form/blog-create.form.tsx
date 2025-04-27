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
import { convertToFormData } from '@/lib/customs/convertToFormData';
import { pictureService } from '@/lib/services/picture.service';
import { IInsertBlog, InsertBlogSchema } from '@/lib/schemas/blog.schema';
import { defaultValuesBlog } from '@/lib/initials/blog.init';
import { blogService } from '@/lib/services/blog.service';
import Editor, { EditorContentChanged } from '../editor';
import { useState } from 'react';

type BlogCreateFormProps = {
  initialData?: IInsertBlog;
  pageTitle: string;
}
export default function BlogCreateForm({
  initialData = defaultValuesBlog,
  pageTitle
}: BlogCreateFormProps) {

  const form = useForm<IInsertBlog>({
    resolver: zodResolver(InsertBlogSchema),
    values: initialData,
  });  
  const [html, setHtml] = useState("");

  async function onSubmit(values: IInsertBlog) {
    const form = convertToFormData({ image: values.image[0] });
    const { data: picture } = await pictureService.upload(form);
    values.image = picture.url;

    const formData = convertToFormData(values);
    const api = await blogService.create(formData);
  }

  function onChangeImage(values: any) {
    form.setValue('image', values)
  }

  function onChangeDescription(evt: EditorContentChanged) {
    form.setValue('description', evt.html)
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
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiêu đề</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter product name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={"1"}
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
            </div>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>

                  <Editor onChange={onChangeDescription} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-12 w-full bg-blue-600" type='submit'>Add Product</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

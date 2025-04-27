import { z } from 'zod';

export const CategoryBlogSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export type ICategoryBlog = z.infer<typeof CategoryBlogSchema>;

export const InsertCategoryBlogSchema = z.object({
    name: z.string(),
});

export type IInsertCategoryBlog = z.infer<typeof InsertCategoryBlogSchema>;

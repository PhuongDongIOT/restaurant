import { z } from 'zod';
import { CategorySchema } from './category.schema';
import { CommentSchema } from './comment.schema';

export const BlogSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string().url().optional(),
});

export type IBlog = z.infer<typeof BlogSchema>;

export const BlogResponseSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string().url().optional(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    category: CategorySchema,
    comments: z.array(CommentSchema),
});

export type IBlogResponse = z.infer<typeof BlogResponseSchema>;

export const InsertBlogSchema = z.object({
    title: z.string(),
    category: z.number(),
    description: z.string(),
    image: z.any().optional(),
});

export type IInsertBlog = z.infer<typeof InsertBlogSchema>;

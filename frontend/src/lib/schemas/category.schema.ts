import { z } from 'zod';

export const CategorySchema = z.object({
    category: z.string(),
    category_image: z.string(),
    id: z.number(),
});

export type ICategory = z.infer<typeof CategorySchema>;

export const InsertCategorySchema = z.object({
    category: z.string(),
    category_image: z.string(),
    description: z.string(),
});

export type IInsertCategory = z.infer<typeof InsertCategorySchema>;

export const CategoryBannerSchema = z.object({
    category_id: z.string(),
    category_name: z.string(),
    discount_percentage: z.string(),
    images: z.array(z.string()),
});

export type ICategoryBanner = z.infer<typeof CategoryBannerSchema>;

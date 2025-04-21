import { z } from 'zod';

// Pagination schema
export const PaginationSchema = z.object({
    skip: z.number(),
    limit: z.number(),
    total: z.number(),
});

// Type inference from schema
export type IPagination = z.infer<typeof PaginationSchema>;

export type IPaginationSchema<T> = {
    pagination: IPagination;
    data: T;
};

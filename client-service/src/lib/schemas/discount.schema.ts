import { z } from 'zod';

export const DiscountSchema = z.object({
    amount: z.number(),
    percentage: z.number(),
});

export type IDiscount = z.infer<typeof DiscountSchema>;

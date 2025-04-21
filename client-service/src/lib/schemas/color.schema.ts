import { z } from 'zod';

export const ColorSchema = z.object({
    name: z.string(),
    code: z.string(),
});

export type IColor = z.infer<typeof ColorSchema>;

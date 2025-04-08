import { z } from 'zod';

export const ApiOptionsSchema = z.object({
    locale: z.string().optional(),
    headers: z.custom<HeadersInit>().optional(),
    replaceHeaders: z.custom<HeadersInit>().optional(),
    queryParams: z.record(z.any()).optional(),
});

export type IApiOptions = z.infer<typeof ApiOptionsSchema>;

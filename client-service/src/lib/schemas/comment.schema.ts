import { z } from 'zod';

export const CommentSchema = z.object({
    id: z.number(),
    body: z.string(),
});

export type IComment = z.infer<typeof CommentSchema>;

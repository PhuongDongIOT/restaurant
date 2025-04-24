import { z } from "zod";

const PictureSchema = z.object({
    content_type: z.string(),
    created_on: z.string(),
    height: z.number(),
    id: z.number(),
    name: z.string(),
    size: z.string(),
    updated_on: z.string(),
    url: z.string(),
    width: z.number(),
});

export type IPicture = z.infer<typeof PictureSchema>;

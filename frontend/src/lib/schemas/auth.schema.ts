import { z } from "zod";
import { UserSchema } from "./user.schema";

export const AuthSchema = z.object({
    users: UserSchema,
    token: z.string()
});

export type IAuth = z.infer<typeof AuthSchema>;

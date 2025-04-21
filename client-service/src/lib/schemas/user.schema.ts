import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  blocked: z.any(),
});

export type IUser = z.infer<typeof UserSchema>;

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().regex(/^\d{9,11}$/, "Phone number must be 9-11 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export type IRegisterUser = z.infer<typeof RegisterSchema>;

export const SignInSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

export type ISignInUser = z.infer<typeof SignInSchema>;
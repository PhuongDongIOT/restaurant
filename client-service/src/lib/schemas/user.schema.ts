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
    name: z.string().min(1, "Tên là bắt buộc"),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^\d{9,11}$/, "Số điện thoại phải có 9-11 chữ số"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export type IRegisterUser = z.infer<typeof RegisterSchema>;

export const SignInSchema = z
  .object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  });

export type ISignInUser = z.infer<typeof SignInSchema>;
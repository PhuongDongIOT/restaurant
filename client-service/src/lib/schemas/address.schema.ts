import { z } from "zod";

export const addressSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  name: z.string(),
  house_name: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  phone: z.string(),
  pin: z.string(),
  default: z.boolean(),
});

export type IAddress = z.infer<typeof addressSchema>;

export const CreateAddressSchema = z.object({
  city: z.string(),
  house_name: z.string().min(1, "House name is required"),
  name: z.string(),
  phone: z.string(),
  pin: z.string(),
  state: z.string(),
  street: z.string(),
});

export type ICreateAddressDto = z.infer<typeof CreateAddressSchema>;
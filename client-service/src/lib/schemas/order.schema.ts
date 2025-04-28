import { z } from "zod";

const ProductOrderSchema = z.object({
    product_name: z.string(),
    image: z.string().url(),
    quantity: z.number().int().positive(),
    amount: z.number().int().positive(),
});

const OrderSchema = z.object({
    order_id: z.number().int(),
    address: z.string(),
    phone: z.string().optional(),
    products: z.array(ProductOrderSchema),
    total_amount: z.number().int().positive(),
    coupon_used: z.string().optional(),
    order_status: z.enum(['PENDING', 'SHIPPED', 'DELIVERED', 'COMPLETED', 'CANCELLED', 'RETURNED']),
    payment_status: z.enum(['NOT PAID', 'PAID']),
});

export type IOrder = z.infer<typeof OrderSchema>;
export type IProductOrder = z.infer<typeof ProductOrderSchema>;

const OrderItemSchema = z.object({
    id: z.number(),
    name: z.string(),
    address: z.string(),
    payment_method: z.string(),
    total: z.number(),
});

const OrderTypeSchema = z.object({
    Pending: z.array(OrderItemSchema).nullable(),
    Shipped: z.array(OrderItemSchema).nullable(),
    Delivered: z.array(OrderItemSchema).nullable(),
    Canceled: z.array(OrderItemSchema).nullable(),
    Returned: z.array(OrderItemSchema).nullable(),
});

export type IOrderItem = z.infer<typeof OrderItemSchema>;
export type IOrderType = z.infer<typeof OrderTypeSchema>;

export const CreateOrderSchema = z.object({
    address_id: z.string().min(1, { message: "Vui lòng chọn đỉa chỉ" }),
    coupon_id: z.number().optional(),
    payment_id: z.number().optional(),
    user_id: z.number().min(1, { message: "Vui lòng đăng nhập" }),
});

export type ICreateOrder = z.infer<typeof CreateOrderSchema>;

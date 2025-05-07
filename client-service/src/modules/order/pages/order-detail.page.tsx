'use client'

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { RootState } from '@/lib/store';
import { SelectDelivery } from '@/modules/delivery/components/select-delivery';
import { Input } from '@/components/ui/input';
import { OptionPayment } from '@/modules/categorys/payment/components/option-payment';
import { AddressOrder } from '../components/address-order';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup } from '@/components/ui/radio-group';
import { CreateOrderSchema, ICreateOrder } from '@/lib/schemas/order.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValuesOrder } from '@/lib/initials/order.init';
import { Button } from '@/components/ui/button';
import { removeAll } from '@/lib/features/carts/carts.slice';
import { orderUserService } from '@/lib/services/order.service';
import OrderItem from "../components/order-item";
import { useForm } from "react-hook-form";

export default function OrderDetailPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { cart, totalPrice } = useAppSelector(
        (state: RootState) => state.carts
    );
    const { user } = useAppSelector(
        (state: RootState) => state.auths
    );

    const form = useForm<ICreateOrder>({
        resolver: zodResolver(CreateOrderSchema),
        values: { ...defaultValuesOrder, user_id: user?.id ?? 0 },
    });

    const handleCheckout = async (values: ICreateOrder) => {
        try {
            await orderUserService.checkout(values);
            dispatch(removeAll());

            setTimeout(() => {
                router.push("/order/success")
            }, 500)
        } catch (error) {
            console.log(error);
        }
    }

    async function onSubmit(values: ICreateOrder) {
        await handleCheckout(values);
    }


    return (
        <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                        <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                                Giỏ hàng
                            </h2>
                            <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                                {cart?.totalQuantities} Sản phẩm
                            </h2>
                        </div>
                        <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                            <div className="col-span-12 md:col-span-7">
                                <p className="font-normal text-lg leading-8 text-gray-400">
                                    Chi tiết sản phẩm
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-5">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-3">
                                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                                            Số lượng
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                                            Tổng cộng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            cart?.items.map((product, index) => {
                                return (
                                    <OrderItem key={index} product={product}/>
                                )
                            })
                        }

                        <div className="flex items-center justify-end mt-8">
                            <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                                Thêm mã khyến mãi
                                <svg
                                    className="transition-all duration-500 group-hover:translate-x-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <path
                                        d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                        stroke="#4F46E5"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                            Tóm tắt đơn hàng
                        </h2>
                        <div className="mt-8">
                            <div className="flex items-center justify-between pb-6">
                                <p className="font-normal text-lg leading-8 text-black">{cart?.totalQuantities} Sản phẩm</p>
                                <p className="font-medium text-lg leading-8 text-black">{totalPrice} VND</p>
                            </div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className='flex flex-col gap-1 mt-2'>
                                        <FormField
                                            control={form.control}
                                            name="address_id"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel>Thông báo cho tôi...</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={`${field.value}`}
                                                            className="flex flex-col space-y-1"
                                                        >
                                                            <AddressOrder id={`${user?.id}`} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 mt-2'>
                                        <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                                            Phương thức thanh toán
                                        </label>
                                        <OptionPayment />
                                    </div>
                                    <label className="flex items-center mt-1 mb-1.5 text-gray-600 text-sm font-medium">
                                        Vận chuyển
                                    </label>
                                    <div className="flex pb-6">
                                        <div className="relative w-full">
                                            <SelectDelivery />
                                        </div>
                                    </div>
                                    <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                                        Mã khuyến mại
                                    </label>
                                    <div className="flex pb-4 w-full">
                                        <div className="relative w-full ">
                                            <Input type="code" placeholder="Code" />
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b border-gray-200">
                                        <Button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                                            Đồng ý
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between py-8">
                                        <p className="font-medium text-xl leading-8 text-black">
                                            Tổng cộng
                                        </p>
                                        <p className="font-semibold text-xl leading-8 text-indigo-600">
                                            ${totalPrice}
                                        </p>
                                    </div>
                                    <Button type="submit" className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                                        Thanh toán
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

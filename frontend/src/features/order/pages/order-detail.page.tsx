'use client'
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks/redux';
import { RootState } from '@/lib/store';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { IconDropdown } from '@/components/icon-svg';
import { SelectPayment } from '@/features/categorys/payment/components/selected-payment';
import { SelectDelivery } from '@/features/delivery/components/select-delivery';
import { Input } from '@/components/ui/input';
import { OptionAdress } from '@/features/address/components/option-adress';
import { OptionPayment } from '@/features/categorys/payment/components/option-payment';

export default function OrderDetailPage() {
    const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
        (state: RootState) => state.carts
    );

    return (
        <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                        <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                                Shopping Cart
                            </h2>
                            <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                                {cart?.totalQuantities} Items
                            </h2>
                        </div>
                        <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                            <div className="col-span-12 md:col-span-7">
                                <p className="font-normal text-lg leading-8 text-gray-400">
                                    Product Details
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-5">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-3">
                                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                                            Quantity
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                                            Total
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            cart?.items.map((product, index) => {
                                return (
                                    <div key={index} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                        <div className="w-full md:max-w-[126px]">
                                            <img
                                                src={product.image}
                                                alt="perfume bottle image"
                                                className="mx-auto rounded-xl object-cover"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                            <div className="md:col-span-2">
                                                <div className="flex flex-col max-[500px]:items-center gap-3">
                                                    <h6 className="font-semibold text-base leading-7 text-black">
                                                        {product.product_name}
                                                    </h6>
                                                    <h6 className="font-normal text-base leading-7 text-gray-500 line-clamp-2">
                                                        {product.description}
                                                    </h6>
                                                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                                                        ${product.price}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                                <div className="flex items-center h-full">
                                                    <button className="group rounded-l-xl px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                        <IconPlus />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        value={product.quantity}
                                                        className="border-y border-gray-200 outline-none py-[6px] text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 text-center bg-transparent"
                                                    />
                                                    <button className="group rounded-r-xl px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                        <IconMinus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                                <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                                                    ${product.price * product.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="flex items-center justify-end mt-8">
                            <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                                Add Coupon Code
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
                            Order Summary
                        </h2>
                        <div className="mt-8">
                            <div className="flex items-center justify-between pb-6">
                                <p className="font-normal text-lg leading-8 text-black">3 Items</p>
                                <p className="font-medium text-lg leading-8 text-black">$480.00</p>
                            </div>
                            <form>
                                <div className='flex flex-col gap-1 mt-2'>
                                    <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                                        Address
                                    </label>
                                    <OptionAdress />
                                </div>
                                <div className='flex flex-col gap-1 mt-2'>
                                    <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                                        Payment method
                                    </label>
                                    <OptionPayment />
                                </div>
                                <label className="flex items-center mt-1 mb-1.5 text-gray-600 text-sm font-medium">
                                    Shipping
                                </label>
                                <div className="flex pb-6">
                                    <div className="relative w-full">
                                        <SelectDelivery />
                                    </div>
                                </div>
                                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                                    Promo Code
                                </label>
                                <div className="flex pb-4 w-full">
                                    <div className="relative w-full ">
                                        <Input type="code" placeholder="Code" />
                                    </div>
                                </div>
                                <div className="flex items-center border-b border-gray-200">
                                    <button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                                        Apply
                                    </button>
                                </div>
                                <div className="flex items-center justify-between py-8">
                                    <p className="font-medium text-xl leading-8 text-black">
                                        {cart?.totalQuantities} Items
                                    </p>
                                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                                        ${adjustedTotalPrice}
                                    </p>
                                </div>
                                <Link href="/">
                                    <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                                        Checkout
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useModalCart } from '../../categorys/components/modal-cart-provider'
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks/redux';
import { RootState } from '@/lib/store';

export default function ShoppingCarts() {
    const { modalCart, setModalCart } = useModalCart();
    const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
        (state: RootState) => state.carts
    );

    return (
        <Dialog open={modalCart} onClose={setModalCart} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                        >
                            <div className="relative flex h-full flex-col overflow-y-scroll bg-white shadow-xl z-[999] inset-0 ">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => setModalCart(false)}
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="size-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {
                                                    cart?.items.map((product, index) => {
                                                        return (
                                                            <li key={product.id} className="flex py-6">
                                                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img alt={product.product_name} src={product.image} className="size-full object-cover" />
                                                            </div>
    
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={'#'}>{product.product_name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {product.quantity}</p>
    
                                                                    <div className="flex">
                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${totalPrice}</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Total</p>
                                        <p>${adjustedTotalPrice}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <Link
                                            href="/order/xxx"
                                            onClick={() => setModalCart(false)}
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

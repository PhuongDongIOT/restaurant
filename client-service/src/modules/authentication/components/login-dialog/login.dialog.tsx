'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useModalUser } from "../modal-user-provider";
import { Fragment } from "react";
import { UserLoginForm } from '../user-login-form';

type LoginDialogProps = {}
export default function LoginDialog() {
    const { modalUser, setModalUser, setSignupUser } = useModalUser();

    return (
        <div className='relative z-99'>
            <Transition appear show={modalUser} as={Fragment}>
                <Dialog className="relative z-99" as="div" onClose={setModalUser}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-60"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-60"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-99 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white m-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >

                                    </Dialog.Title>
                                    <UserLoginForm onChangeCustomer={setModalUser} onActionBefore={setSignupUser} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
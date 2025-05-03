'use client'
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const NavBarFixed = dynamic(() => import('./_components/navbar-fixed'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const DialogDemo = dynamic(() => import('../../modules/categorys/components/dialog-demo'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const ModalCartProvider = dynamic(() => import('../../modules/categorys/components/modal-cart-provider'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const ModalProvider = dynamic(() => import('../../modules/categorys/components/modal-provider'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const ShoppingCarts = dynamic(() => import('../../modules/cart/components/shopping-carts'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const SelectedProductProvider = dynamic(() => import('../../modules/products/contexts/selected-product.context'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const ModalUserProvider = dynamic(() => import('../../modules/authentication/components/modal-user-provider'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const LoginDialog = dynamic(() => import('../../modules/authentication/components/login-dialog/login.dialog'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const SignupDialog = dynamic(() => import('../../modules/authentication/components/signnup.dialog'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
})
const FooterSection = dynamic(() => import('./_components/footer-section'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});
const CategoryChipList = dynamic(() => import('../../components/molecules/category-chip-list'), {
    ssr: false,
    loading: () => <Skeleton className='w-screen h-[75vh]' />,
});

type ProviderProps = {
    children: React.ReactNode;
}
export default async function Provider({
    children
}: ProviderProps) {
    return (
        <>
            <ModalCartProvider>
                <ModalUserProvider>
                    <ModalProvider>
                        <SelectedProductProvider>
                            {children}
                            <DialogDemo />
                        </SelectedProductProvider>
                    </ModalProvider>
                    <ShoppingCarts />
                    <NavBarFixed />
                    <LoginDialog />
                    <SignupDialog />
                </ModalUserProvider>
            </ModalCartProvider>
            
            <CategoryChipList items={['Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào']} />
            <FooterSection />
        </>
    );
}

import dynamic from 'next/dynamic';
import { NavBarFixed } from '@/app/(lobby)/_components/navbar-fixed';
import { NavigationMenuMain } from '@/components/layout/navigation-menu-main';
import { DialogDemo } from '@/modules/categorys/components/dialog-demo';
import { ModalCartProvider } from '@/modules/categorys/components/modal-cart-provider';
import { ModalProvider } from '@/modules/categorys/components/modal-provider';
import ShoppingCarts from '@/modules/cart/components/shopping-carts';
import { FooterSection } from './_components/footer-section';
import { SelectedProductProvider } from '@/modules/products/contexts/selected-product.context';
import { ModalUserProvider } from '@/modules/authentication/components/modal-user-provider';
import { LoginDialog } from '@/modules/authentication/components/login-dialog/login.dialog';
import { SignupDialog } from '@/modules/authentication/components/signnup.dialog';

const CategoryChipList = dynamic(() => import('../../components/molecules/category-chip-list'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <main>
            <header className='bg-white relative z-[999] w-full'>
                <NavigationMenuMain />
            </header>
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
            <section className='mx-auto max-w-6xl py-4'>
                <CategoryChipList items={['Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào']} />
            </section>
            <FooterSection />
        </main>
    );
}

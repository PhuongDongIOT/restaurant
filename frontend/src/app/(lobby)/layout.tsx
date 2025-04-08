import { NavBarFixed } from '@/app/(lobby)/_components/navbar-fixed';
import { NavigationMenuMain } from '@/components/layout/navigation-menu-main';
import { DialogDemo } from '@/features/categorys/components/dialog-demo';
import { ModalCartProvider } from '@/features/categorys/components/modal-cart-provider';
import { ModalProvider } from '@/features/categorys/components/modal-provider';
import ShoppingCarts from '@/features/cart/components/shopping-carts';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { FooterSection } from './_components/footer-section';
import { SelectedProductProvider } from '@/features/products/contexts/selected-product.context';

export const metadata: Metadata = {
    title: 'Next Shadcn Dashboard Starter',
    description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    // Persisting the sidebar state in the cookie.
    const cookieStore = await cookies();
    return (
        <main>
            <header className='bg-white relative z-[999] px-4 py-2 w-full'>
                <NavigationMenuMain />
            </header>
            <ModalCartProvider>
                <>
                    <ModalProvider>
                        <SelectedProductProvider>
                            {children}
                            <DialogDemo />
                        </SelectedProductProvider>
                    </ModalProvider>
                    <NavBarFixed />
                    <ShoppingCarts />
                </>
            </ModalCartProvider>
            <footer className='relative z-[9]'>
                <FooterSection />
            </footer>
        </main>
    );
}

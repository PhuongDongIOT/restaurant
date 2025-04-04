import { NavBarFixed } from '@/app/(lobby)/_components/navbar-fixed';
import { NavigationMenuMain } from '@/components/layout/navigation-menu-main';
import { DialogDemo } from '@/features/categorys/components/dialog-demo';
import { ModalCartProvider } from '@/features/categorys/components/modal-cart-provider';
import { ModalProvider } from '@/features/categorys/components/modal-provider';
import ShoppingCarts from '@/features/categorys/components/shopping-carts';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { FooterSection } from './_components/footer-section';

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
            <header className='px-4 py-2 w-full'>
                <NavigationMenuMain />
            </header>
            <ModalCartProvider>
                <>
                    <ModalProvider>
                        {children}
                        <DialogDemo />
                    </ModalProvider>
                    <ShoppingCarts />
                    <NavBarFixed />
                </>
            </ModalCartProvider>
            <footer>
                <FooterSection />
            </footer>
        </main>
    );
}

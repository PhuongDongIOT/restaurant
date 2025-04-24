import { NavBarFixed } from '@/app/(lobby)/_components/navbar-fixed';
import { NavigationMenuMain } from '@/components/layout/navigation-menu-main';
import { DialogDemo } from '@/modules/categorys/components/dialog-demo';
import { ModalCartProvider } from '@/modules/categorys/components/modal-cart-provider';
import { ModalProvider } from '@/modules/categorys/components/modal-provider';
import ShoppingCarts from '@/modules/cart/components/shopping-carts';
import type { Metadata } from 'next';
// import { cookies } from 'next/headers';
import { FooterSection } from './_components/footer-section';
import { SelectedProductProvider } from '@/modules/products/contexts/selected-product.context';

export const metadata: Metadata = {
    title: 'Bánh Cuốn Hoàng Vũ | Ngon Chuẩn Vị Nhà Làm',
    description: 'Khám phá hương vị bánh cuốn truyền thống tại Bánh Cuốn Hoàng Vũ – mỏng mịn, nóng hổi, chuẩn vị quê nhà.'
};
export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    // Persisting the sidebar state in the cookie.
    // const cookieStore = await cookies();
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

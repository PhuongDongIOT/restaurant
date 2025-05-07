import ModalCartProvider from '@/modules/categorys/components/modal-cart-provider';
import ModalUserProvider from '@/modules/authentication/components/modal-user-provider';
import ModalProvider from '@/modules/categorys/components/modal-provider';
import SelectedProductProvider from '@/modules/products/contexts/selected-product.context';
import DialogDemo from '@/modules/categorys/components/dialog-demo';
import ShoppingCarts from '@/modules/cart/components/shopping-carts';
import NavBarFixed from './_components/navbar-fixed';
import LoginDialog from '@/modules/authentication/components/login-dialog/login.dialog';
import SignupDialog from '@/modules/authentication/components/signnup.dialog';
import CategoryChipList from '@/components/molecules/category-chip-list';
import FooterSection from './_components/footer-section';

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
            {/* <CategoryChipList items={['Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào', 'Phở', 'Cơm Tấm', 'Bún Bò', 'Gà Rán', 'Mì Xào']} />
            <FooterSection /> */}   
        </>
    );
}

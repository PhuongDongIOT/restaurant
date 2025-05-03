import { NavigationMenuMain } from '@/components/layout/navigation-menu-main';
import Provider from './_provider';

export default async function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <header className='bg-white relative z-[999] w-full'>
                <NavigationMenuMain />
            </header>
            <Provider>
                {children}
            </Provider>
        </main>
    );
}

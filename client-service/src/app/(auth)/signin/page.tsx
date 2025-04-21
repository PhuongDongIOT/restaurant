import { Metadata } from 'next';
import SignInPage from '@/modules/authentication/signin-page';

export const metadata: Metadata = {
    title: 'Authentication | Sign In',
    description: 'Sign In page for authentication.'
};

export default async function Page() {
    return <SignInPage />;
}

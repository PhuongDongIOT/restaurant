import { Metadata } from 'next';
import FaqPage from '@/modules/faq/faq-page';
import FaqDemo from '../_components/faq-demo';

export const metadata: Metadata = {
    title: 'Authentication | Sign In',
    description: 'Sign In page for authentication.'
};

export default async function Page() {
    return (
        <FaqDemo  />
    )
}
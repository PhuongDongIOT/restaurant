import { Metadata } from 'next';
import { Gallery } from './_components/gallery';
import { Hero } from './_components/hero';
import { Category } from './_components/category';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Gallery />
      <Category />
    </>
  );
}

import { auth } from '@/lib/auths/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Viewport } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
// import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Head from 'next/head';
// import { cookies } from 'next/headers';
// import { cn } from '@/lib/utils';
// import { fontVariables } from '@/lib/font';
import './globals.css';
import './theme.css';
import ProvidersRedux from './providers';
import SeoHead from '@/components/molecules/seo-head';
import GoogleAnalytic from '@/modules/seo-manager/components/google-analytic';
import GoogleTag from '@/modules/seo-manager/components/google-tag';

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
};

// const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // const cookieStore = await cookies();
  // const activeThemeValue = cookieStore.get('active_theme')?.value;

  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <SeoHead />
        <GoogleAnalytic />
        <GoogleTag />
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.11.1/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <body>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers
            session={session}
          // activeThemeValue={activeThemeValue as string}
          >
            <Toaster />
            <ProvidersRedux>
              {children}
            </ProvidersRedux>
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}

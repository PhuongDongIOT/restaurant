import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import KBar from '@/components/molecules/kbar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import RequireAuth from '@/lib/hooks/require-auth';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

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
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          {children}
          <RequireAuth />
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}


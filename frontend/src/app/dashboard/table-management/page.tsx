import { SearchParams } from 'nuqs/server';
import TableManagementPage from '@/features/table-management/table-management-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: pageProps) {
  return <TableManagementPage />;
}

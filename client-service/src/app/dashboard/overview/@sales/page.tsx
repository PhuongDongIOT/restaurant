import { delay } from '@/constants/mock-api';
import { RecentSales } from '@/modules/overview/components/recent-sales';

export default async function Sales() {
  await delay(3000);
  return <RecentSales />;
}

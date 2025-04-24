import OrderDetailPage from '@/modules/order/pages/order-detail.page';

export const metadata = {
  title: 'Đơn hàng',
  description: 'Quản lý và theo dõi các đơn hàng một cách dễ dàng và hiệu quả.'
};
export default async function Page() {

  return <OrderDetailPage />;
}

import OrderPage from '@/modules/order/pages/order.page';
import { IOrderItem } from '@/lib/schemas/order.schema';
import { orderService } from '@/lib/services/order.service';

export const metadata = {
  title: 'Dashboard : Product'
};

export default async function Page() {

  const {data: order} = await orderService.filters();
  const listOrder: IOrderItem[] = order.Pending ?? [];
  return <OrderPage orders={listOrder}/>;
}

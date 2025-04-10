import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IOrder, IOrderType } from '../schemas/order.schema';

export const orderService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<IOrderType>>('admin/orders', options);
    },
};

export const orderUserService = {
    details: (id: string) => {
        return Api.get<IResponseSchema<IOrder>>(`users/profile/orders/${id}`);
    },
};

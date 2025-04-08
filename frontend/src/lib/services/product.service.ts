import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
// import { IInsertProduct } from '../schemas/product.schema';

export const productService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<any>>('admin/inventories', options);
    },
    details: (id: string) => {
        const options: IApiOptions = {
            queryParams: {
                id
            }
        }
        return Api.get<IResponseSchema<any>>('admin/inventories/details', options);
    },
    create: (body: FormData, options?: IApiOptions) => {
        return Api.post<IResponseSchema<any>>('admin/inventories', body);
    },
};

export const productUserService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<any>>('users/home/products', options);
    },
    details: (id: string) => {
        const options: IApiOptions = {
            queryParams: {
                id
            }
        }
        return Api.get<IResponseSchema<any>>('users/home/products/details', options);
    },
};

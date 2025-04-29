import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IUpdateCart } from '../schemas/cart.schema';
// import { IInsertProduct } from '../schemas/product.schema';

export const cartService = {
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
    addToCart: (body: any, options?: IApiOptions) => {
        body = JSON.stringify(body);

        return Api.post<IResponseSchema<any>>('users/home/add-to-cart', body, options);
    },
    removeItem:  (body: IUpdateCart, options?: IApiOptions) => {
        options = {
            queryParams: {
                ...body
            }
        }
        return Api.delete<IResponseSchema<any>>('users/cart/remove', options);
    },
    updateQuantityPlus: (body: IUpdateCart, options?: IApiOptions) => {
        options = {
            queryParams: {
                ...body
            }
        }
        return Api.put<IResponseSchema<any>>('users/cart/updateQuantity/plus', {}, options);
    },
    updateQuantityMinus: (body: IUpdateCart, options?: IApiOptions) => {
        options = {
            queryParams: {
                ...body
            }
        }
        return Api.put<IResponseSchema<any>>('users/cart/updateQuantity/minus', {}, options);
    },
};

export const cartUserService = {
    details: (id: number, options?: IApiOptions) => {
        console.log(id);
        
        options = {
            queryParams: {
                id: id
            }
        }
        return Api.get<IResponseSchema<any>>('users/cart', options);
    },
};

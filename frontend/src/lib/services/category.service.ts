import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { ICategory } from '../schemas/category.schema';

export const categoryService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<ICategory[]>>('admin/category', options);
    },
    create: (body: any, options?: IApiOptions) => {
        options = {
            headers: {
                "Content-Type": "application/json"
            }, ...options
        }
        body = JSON.stringify(body);
        return Api.post<IResponseSchema<any>>('admin/category', body, options);
    },
};

export const categoryUserService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<ICategory[]>>('users/category', options);
    },
};

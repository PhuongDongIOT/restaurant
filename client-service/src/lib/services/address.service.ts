import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IAddress } from '../schemas/address.schema';

export const addressService = {
    filters: (id: string, options?: IApiOptions) => {
        options = {
            queryParams: {
                id
            }
        }
        return Api.get<IResponseSchema<IAddress[]>>('users/profile/address', options);
    },
    create: (body: any, id :number, options?: IApiOptions) => {
        options = {
            queryParams: {
                id
            }
        }
        body = JSON.stringify(body);
        return Api.post<IResponseSchema<null>>('users/profile/address/add', body, options);
    },
};

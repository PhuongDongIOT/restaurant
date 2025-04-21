import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IUser } from '../schemas/user.schema';

export const userService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<IUser[]>>('admin/users', options);
    },
    details: (id: string) => {
        const options: IApiOptions = {
            queryParams: {
                id
            }
        }
        return Api.get<IResponseSchema<IUser>>('admin/users/details', options);
    },
};

export const userUserService = {
    details: (id: string) => {
        const options: IApiOptions = {
            queryParams: {
                id
            }
        }
        return Api.get<IResponseSchema<any>>('admin/users/details', options);
    },
};

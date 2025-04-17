import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IAuth } from '../schemas/auth.schema';

const authService = {
    signin: (body: any, options?: IApiOptions) => {
        options = {
            headers: {
                "Content-Type": "application/json"
            }, ...options
        }
        body = JSON.stringify(body);
        return Api.post<IResponseSchema<IAuth>>('admin/adminlogin', body, options);
    },
    refreshToken: (accessToken: string, refreshToken: string) => {
        return null;
    },
};

export const authUserService = {
    login: (body: any, options?: IApiOptions) => {
        return Api.post<IResponseSchema<IAuth>>('users/login', body, options);
    },
    quickLogin: (body: any, options?: IApiOptions) => {
        return Api.post<IResponseSchema<IAuth>>('users/quickLogin', body, options);
    },
};

export default authService;

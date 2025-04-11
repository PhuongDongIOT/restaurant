import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IAuth } from '../schemas/auth.schema';

const authService = {
    login: (bodyLogin: any, options?: IApiOptions) => {
        return Api.post<IResponseSchema<any>>('/api/auth/login', { ...bodyLogin }, options);
    },
    refreshToken: (accessToken: string, refreshToken: string) => {
        return Api.post<IResponseSchema<any>>(
            '/api/v1/auths/token/refresh',
            { accessToken, refreshToken },
            {
                replaceHeaders: {
                    'Content-Type': 'application/json',
                },
            },
        );
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

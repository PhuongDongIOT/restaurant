import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';

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
    createSocketToken: () => {
        return Api.post<IResponseSchema<any>>('/api/v1/auths/token/socket');
    },
    updatePassword: (params: any, options?: IApiOptions) => {
        return Api.patch<IResponseSchema<any>>('/api/v1/auths/password', params, options);
    },
    forgotPassword: (email: string, options?: IApiOptions) => {
        return Api.post<IResponseSchema<any>>('/api/v1/auths/forgot-password', { email }, options);
    },
    validateForgotKey: (params: any, options?: IApiOptions) => {
        return Api.post<IResponseSchema<any>>('/api/v1/auths/validate-forgot-key', params, options);
    },
    resetPassword: (params: any, options?: IApiOptions) => {
        return Api.post<IResponseSchema<any>>('/api/v1/auths/reset-password', params, options);
    },
};

export default authService;

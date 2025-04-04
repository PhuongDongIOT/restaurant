import { Api } from '@/lib/cores/api';
import { ApiOptions } from '@/types/api.type';

const authService = {
    login: (bodyLogin: any, options?: ApiOptions) => {
        return Api.post<any>('/api/auth/login', { ...bodyLogin }, options);
    },
    refreshToken: (accessToken: string, refreshToken: string) => {
        return Api.post<any>(
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
        return Api.post<any>('/api/v1/auths/token/socket');
    },
    updatePassword: (params: any, options?: ApiOptions) => {
        return Api.patch<any>('/api/v1/auths/password', params, options);
    },
    forgotPassword: (email: string, options?: ApiOptions) => {
        return Api.post<any>('/api/v1/auths/forgot-password', { email }, options);
    },
    validateForgotKey: (params: any, options?: ApiOptions) => {
        return Api.post<any>('/api/v1/auths/validate-forgot-key', params, options);
    },
    resetPassword: (params: any, options?: ApiOptions) => {
        return Api.post<any>('/api/v1/auths/reset-password', params, options);
    },
};

export default authService;

import { ApiBlog } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IBlog, IBlogResponse } from '../schemas/blog.schema';

export const blogService = {
    filters: (options?: IApiOptions) => {
        return ApiBlog.get<IResponseSchema<{
                    posts: IBlogResponse[];
                    totalPost: number;
        }>>('api/v1/posts', options);
    },
    create: (body: any, options?: IApiOptions) => {
        return ApiBlog.post<IResponseSchema<IBlogResponse>>('api/v1/posts', body);
    },
};

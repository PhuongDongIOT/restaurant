import { ApiBlog } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { ICategoryBlog } from '../schemas/category-blog.schema';

export const categoryBlogService = {
    filters: (options?: IApiOptions) => {
        return ApiBlog.get<IResponseSchema<ICategoryBlog[]>>('api/v1/categories', options);
    },
    create: (body: any, options?: IApiOptions) => {
        options = {
            headers: {
                "Content-Type": "application/json"
            }, ...options
        }
        body = JSON.stringify(body);
        return ApiBlog.post<IResponseSchema<ICategoryBlog>>('api/v1/categories', body, options);
    },
};

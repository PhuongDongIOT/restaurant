import { Api } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { ICategoryBanner } from '../schemas/category.schema';

export const bannerService = {
    filters: (options?: IApiOptions) => {
        return Api.get<IResponseSchema<ICategoryBanner[]>>('users/banners', options);
    },
};

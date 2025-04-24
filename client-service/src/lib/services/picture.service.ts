import { ApiPicture } from '@/lib/cores/api';
import { IApiOptions } from '../schemas/api.schema';
import { IResponseSchema } from '../schemas/response.schema';
import { IPicture } from '../schemas/picture.schema';

export const pictureService = {
    upload: (body: any, options?: IApiOptions) => {
        return ApiPicture.post<IResponseSchema<IPicture>>('', body);
    },
};
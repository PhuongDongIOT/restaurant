import { getOrFetchData } from "../cores/cache-helper";
import { IApiOptions } from "../schemas/api.schema";
import { blogService } from "../services/blog.service";

export async function fetchAndCacheProducts(kv: any, option?: IApiOptions) {
  return await getOrFetchData('blogs', [] as any, async () => {
    const data = await blogService.filters(option);
    return data;
  });
}

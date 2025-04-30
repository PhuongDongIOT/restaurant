import { getKVData } from "../cores/get-kv-data";
import { ICategoryBanner } from "../schemas/category.schema";

export async function fetchAndCacheBanners(kv: any, bannerService: any) {
  const bannersFromKV = await getKVData<ICategoryBanner[]>('banners', [], kv);

  if (bannersFromKV.length === 0) {
    const { data } = await bannerService.filters({
      queryParams: { page: 1 },
  });  
    await kv.set('banners', JSON.stringify(data));
    return data;
  }
  return bannersFromKV;
}
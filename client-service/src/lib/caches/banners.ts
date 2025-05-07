import { getOrFetchData } from "../cores/cache-helper";
import { bannerService } from "../services/banner.service";

export async function fetchAndCacheBanners(kv: any, page: number = 1) {
  return await getOrFetchData('banners', [], async () => {
    const data = await bannerService.filters({
      queryParams: { page },
    });
    return data;
  });
}
import { getOrFetchData } from "../cores/cache-helper";
import { productUserService } from "../services/product.service";

export async function fetchAndCacheProducts(kv: any, page: number = 1) {
  return await getOrFetchData('products', [], async () => {
    const data = await productUserService.filters({
      queryParams: { page: 1 },
    });
    return data;
  }, kv);
}
import { getOrFetchData } from "../cores/cache-helper";
import { productUserService } from "../services/product.service";

export async function fetchAndCacheProducts(kv: any, page: number = 1) {
  return await getOrFetchData('products', [], async () => {
    const data = await productUserService.filters({
      queryParams: { page },
    });
    return data;
  }, kv);
}

export async function fetchAndCacheProductDetail(kv: any, id: string) {
  return await getOrFetchData(`products-${id}`, [], async () => {
    const data = await productUserService.details(id);
    return data;
  }, kv);
}
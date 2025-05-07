import { getOrFetchData } from "../cores/cache-helper";
import { categoryUserService } from "../services/category.service";

export async function fetchAndCacheCategories(page: number = 1) {
    return await getOrFetchData('categories', [], async () => {
        const data = await categoryUserService.filters({
            queryParams: { page },
        });
        return data;
    });
}

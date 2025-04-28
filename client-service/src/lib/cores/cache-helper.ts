import { IResponseSchema } from "../schemas/response.schema";

export async function getOrFetchData<T>(
    key: string,
    fallbackData: T,
    fetchFunction: () => Promise<IResponseSchema<T>>,
    kv: any
): Promise<T> {

    const cachedData = await kv.get(key);
    if (cachedData) {
        return JSON.parse(JSON.stringify(cachedData) as string);
    } else {

        const { data } = await fetchFunction();
        await kv.set(key, JSON.stringify(data));
        return data;
    }
}

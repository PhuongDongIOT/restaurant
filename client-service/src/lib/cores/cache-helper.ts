import { IResponseSchema } from "../schemas/response.schema";
import redis from "./redis";

export async function getOrFetchData<T>(
    key: string,
    fallbackData: T,
    fetchFunction: () => Promise<IResponseSchema<T>>,
): Promise<T> {

    const cached = await redis.get(key);    
    if (cached) {
        return JSON.parse(cached);
    } else {
        const { data } = await fetchFunction();        
        await redis.set(key, JSON.stringify(data), 'EX', parseInt(process.env.REDIS_CACHE_TIME ?? "3600") ?? 3600);
        return data;
    }
}

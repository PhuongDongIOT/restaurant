import redis from "./redis";

// Helper function to get and parse data from KV
export async function getKVData<T>(key: string, fallbackData: T, kv: any): Promise<T> {
    const dataRaw = await redis.get(key);;
    if (dataRaw) {
        return JSON.parse(JSON.stringify(dataRaw) as string); // Parse once only
    } else {
        await redis.set(key, JSON.stringify(fallbackData), 'EX', parseInt(process.env.REDIS_CACHE_TIME ?? "") ?? 3600);
        return fallbackData;
    }
}

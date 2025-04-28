// Helper function to get and parse data from KV
export async function getKVData<T>(key: string, fallbackData: T, kv: any): Promise<T> {
    const dataRaw = await kv.get(key);
    if (dataRaw) {
        return JSON.parse(JSON.stringify(dataRaw) as string); // Parse once only
    } else {
        await kv.set(key, JSON.stringify(fallbackData)); // Cache the fallback data
        return fallbackData;
    }
}

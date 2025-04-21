// utils/LocalStorageService.ts

class LocalStorageService {
    private prefix: string;

    constructor(prefix = "app_") {
        this.prefix = prefix;
    }

    private getKey(key: string): string {
        return `${this.prefix}${key}`;
    }

    set<T>(key: string, value: T): void {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(this.getKey(key), serialized);
        } catch (error) {
            console.error("Error saving to localStorage", error);
        }
    }

    get<T>(key: string, isParse: boolean = false): T | null {
        try {
            const item = localStorage.getItem(this.getKey(key));
            return item ? (isParse ? JSON.parse(item) : item) as T  : null;
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return null;
        }
    }

    remove(key: string): void {
        localStorage.removeItem(this.getKey(key));
    }

    clear(): void {
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
}

const storage = new LocalStorageService();
export default storage;

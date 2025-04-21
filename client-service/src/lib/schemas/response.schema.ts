// Type inference from schema
export type IResponseSchema<T> = {
    status_code: number;
    message: string;
    data: T;
    error: string;
};

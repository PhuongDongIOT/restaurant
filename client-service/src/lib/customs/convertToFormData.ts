/**
 * Convert a plain object to FormData.
 * This supports basic strings, numbers, booleans, and File/Blob objects.
 * @param values - An object where keys are strings and values are primitives or File/Blob.
 * @returns FormData object.
 */
export function convertToFormData(values: Record<string, any>): FormData {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
        const value = values[key];
        formData.append(key, value);
    });

    return formData;
}

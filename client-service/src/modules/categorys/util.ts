type FilterOption = {
    label: string;
    value: string;
    image?: string;
};

export function mapToFilterCategoryOptions(data: { category: string; category_image: string; id: number; }[]): FilterOption[] {
    return data.map(item => ({
        label: item.category,
        value: `${item.id}`,
        image: item.category_image,
    }));
}
export const getCategoryNamesById = (ArrayWithId: any, ArrayWithCategories: any) => {
    return ArrayWithCategories.filter((item: any) => ArrayWithId.some((id: any) => id === item.id));
};
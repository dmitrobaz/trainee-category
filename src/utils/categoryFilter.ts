export const categoryFilter = (initObj: [{ id: number, name: string }], filter: [number]) => {
    return initObj.filter((item: any) => !filter.some((it: number) => item.id === it));
}
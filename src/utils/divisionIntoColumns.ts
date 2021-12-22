export const divisionIntoColumns = (arr: any[]) => {
    const columnsize = Math.ceil(arr.length / 2)
    let result = []
    for (let i = 0; i < Math.ceil(arr.length / columnsize); i++) {
        result[i] = arr.slice((i * columnsize), (i * columnsize) + columnsize);
    }
    return result
}
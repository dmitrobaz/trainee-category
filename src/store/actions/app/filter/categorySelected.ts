import { filter } from "../../../types"


export const categorySelected = (payload: number) => ({
    type: filter.CATEGORY_SELECTED,
    payload
})

import { filter } from "../../../types"


export const categoryUnselected = (payload: number) => ({
    type: filter.CATEGORY_UNSELECTED,
    payload
})

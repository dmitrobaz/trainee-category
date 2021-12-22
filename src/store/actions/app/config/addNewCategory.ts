import { config } from "../../../types"

export const addNewCategory = (payload: string) => ({
    type: config.ADD_NEW_CATEGORY,
    payload
})

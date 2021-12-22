import { config } from "../../../types"

export const removeCategory = (payload: number) => ({
    type: config.REMOVE_CATEGORY,
    payload
})

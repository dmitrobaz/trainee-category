import { states } from "../../../types"


export const toggleSaveCategory = (payload: boolean) => ({
    type: states.TOGGLE_SAVE_CATEGORY,
    payload
})

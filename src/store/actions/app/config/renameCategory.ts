import { config } from "../../../types"

export const renameCategory = (payload: { id: number, name: string }) => ({
    type: config.RENAME_CATEGORY,
    payload
})
